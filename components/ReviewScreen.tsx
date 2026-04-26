import React, { useState } from 'react';
import { ChevronLeft, Edit2 } from 'lucide-react';
import { Tag, ReviewState, PhotoAttachment } from '../types';
import TagSection from './TagSection';
import RatingCard from './RatingCard';
import PhotoUploadSection from './PhotoUploadSection';
import { generateReviewText } from '../services/geminiService';

// Mock Data
const NEGATIVE_TAGS: Tag[] = [
  { id: 'n1', label: 'Neat packging' },
  { id: 'n2', label: 'Average portion size' },
  { id: 'n3', label: 'Poor packaging' },
  { id: 'n4', label: 'Packaging was not tamper proof' },
];

const POSITIVE_TAGS: Tag[] = [
  { id: 'p1', label: 'Contactless delivery' },
  { id: 'p2', label: 'Economical price' },
  { id: 'p3', label: 'Good Quality' },
  { id: 'p4', label: 'Tamper proof packaging' },
  { id: 'p5', label: 'Wonderful presentation' },
  { id: 'p6', label: 'Fair prices' },
];

interface ReviewScreenProps {
  onBack?: () => void;
}

const ReviewScreen: React.FC<ReviewScreenProps> = ({ onBack }) => {
  const [reviewState, setReviewState] = useState<ReviewState>({
    rating: 5,
    category: 'Shopping',
    selectedNegativeTags: ['n2'], // Pre-selecting for visual match with mock
    selectedPositiveTags: ['p2'], // Pre-selecting for visual match with mock
    reviewText: '',
    photos: []
  });

  const [isGenerating, setIsGenerating] = useState(false);

  const handleToggleNegativeTag = (id: string) => {
    setReviewState(prev => {
      const isSelected = prev.selectedNegativeTags.includes(id);
      return {
        ...prev,
        selectedNegativeTags: isSelected
          ? prev.selectedNegativeTags.filter(t => t !== id)
          : [...prev.selectedNegativeTags, id]
      };
    });
  };

  const handleTogglePositiveTag = (id: string) => {
    setReviewState(prev => {
      const isSelected = prev.selectedPositiveTags.includes(id);
      return {
        ...prev,
        selectedPositiveTags: isSelected
          ? prev.selectedPositiveTags.filter(t => t !== id)
          : [...prev.selectedPositiveTags, id]
      };
    });
  };

  const simulateUploadProgress = (photoId: string, shouldFailChance = 0.25) => {
    let progress = 0;
    const interval = setInterval(() => {
      // Random increment between 5 and 15
      progress += Math.random() * 10 + 5;
      
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        setReviewState(prev => {
           const exists = prev.photos.find(p => p.id === photoId);
           if (!exists) return prev; // Was cancelled

           const shouldFail = Math.random() < shouldFailChance;
           return {
             ...prev,
             photos: prev.photos.map(p => 
               p.id === photoId 
                 ? { ...p, progress: 100, status: shouldFail ? 'error' : 'complete' } 
                 : p
             )
           };
        });
      } else {
        setReviewState(prev => {
          const exists = prev.photos.find(p => p.id === photoId);
          if (!exists) {
            clearInterval(interval);
            return prev;
          }
          return {
            ...prev,
            photos: prev.photos.map(p => p.id === photoId ? { ...p, progress } : p)
          };
        });
      }
    }, 200);
  };

  const handleAddPhotos = (files: File[]) => {
    if (files.length === 0) return;
    const newAttachments = files.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      url: URL.createObjectURL(file),
      status: 'uploading' as const,
      progress: 0
    }));
    
    setReviewState(prev => ({
      ...prev,
      photos: [...prev.photos, ...newAttachments]
    }));
    
    // Start simulation for each new photo
    newAttachments.forEach(attachment => {
      simulateUploadProgress(attachment.id, 0.25);
    });
  };

  const handleRemovePhoto = (id: string) => {
    setReviewState(prev => ({
      ...prev,
      photos: prev.photos.filter(p => p.id !== id)
    }));
  };

  const handleRetryPhoto = (id: string) => {
    setReviewState(prev => ({
      ...prev,
      photos: prev.photos.map(p => p.id === id ? { ...p, status: 'uploading', progress: 0 } : p)
    }));

    // Reliable retry (0% fail chance)
    simulateUploadProgress(id, 0);
  };

  const handleReorderPhotos = (newPhotos: PhotoAttachment[]) => {
    setReviewState(prev => ({ ...prev, photos: newPhotos }));
  };

  const handleGenerateAIReview = async () => {
    setIsGenerating(true);
    try {
      const posLabels = POSITIVE_TAGS.filter(t => reviewState.selectedPositiveTags.includes(t.id)).map(t => t.label);
      const negLabels = NEGATIVE_TAGS.filter(t => reviewState.selectedNegativeTags.includes(t.id)).map(t => t.label);
      
      const generatedText = await generateReviewText(
        reviewState.rating,
        reviewState.category,
        posLabels,
        negLabels
      );
      
      setReviewState(prev => ({ ...prev, reviewText: generatedText }));
    } catch (error) {
      console.error(error);
      // Fallback text if API fails
      setReviewState(prev => ({ ...prev, reviewText: "This was a great experience! The delivery was fast and the quality was excellent." }));
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-5 bg-white sticky top-0 z-40 shadow-sm">
        <button onClick={onBack} className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-gray-200">
          <ChevronLeft className="w-5 h-5 text-gray-600" strokeWidth={2.5} />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Add Review</h1>
        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50">
          <Edit2 className="w-5 h-5 text-orange-500" strokeWidth={2} />
        </button>
      </header>

      {/* Main Content */}
      <main className="px-5 py-6 space-y-6">
        {/* Rating Card */}
        <RatingCard
          rating={reviewState.rating}
          category={reviewState.category}
          onRatingChange={(r) => setReviewState(prev => ({ ...prev, rating: r }))}
          onCategoryChange={(c) => setReviewState(prev => ({ ...prev, category: c }))}
        />

        {/* Negative Tags */}
        <TagSection
          title="What was not upto the Mark?"
          emoji="sad"
          tags={NEGATIVE_TAGS}
          selectedTagIds={reviewState.selectedNegativeTags}
          onToggleTag={handleToggleNegativeTag}
        />

        {/* Positive Tags */}
        <TagSection
          title="What did you like?"
          emoji="happy"
          tags={POSITIVE_TAGS}
          selectedTagIds={reviewState.selectedPositiveTags}
          onToggleTag={handleTogglePositiveTag}
        />

        {/* Add Photos */}
        <PhotoUploadSection 
          photos={reviewState.photos}
          onAddPhoto={handleAddPhotos}
          onRemovePhoto={handleRemovePhoto}
          onRetryPhoto={handleRetryPhoto}
          onReorderPhotos={handleReorderPhotos}
        />

        {/* Review Text Area */}
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="text-gray-900 font-bold text-lg mb-4">Write a review</h3>
          <textarea
            className="w-full h-32 p-4 bg-gray-50 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#3B82F6] resize-none border-none"
            placeholder="Your review will help people make better choices."
            value={reviewState.reviewText}
            onChange={(e) => setReviewState(prev => ({ ...prev, reviewText: e.target.value }))}
          />
           <div className="flex justify-end mt-2">
            <button 
                onClick={handleGenerateAIReview}
                disabled={isGenerating}
                className="text-xs text-[#3B82F6] font-medium hover:underline flex items-center gap-1"
            >
                {isGenerating ? 'Generating...' : 'Auto-fill with AI'}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button 
          className="w-full bg-[#F97316] hover:bg-orange-600 text-white font-semibold py-4 rounded-xl shadow-lg shadow-orange-100 transition-all active:scale-[0.98] text-base"
          onClick={() => alert(`Submitted ${reviewState.category} Review!`)}
        >
          Submit {reviewState.category} Review
        </button>
      </main>
    </div>
  );
};

export default ReviewScreen;