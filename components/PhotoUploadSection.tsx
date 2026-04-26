import React, { useRef, useState } from 'react';
import { Camera, X, RotateCw, AlertCircle, Star } from 'lucide-react';
import { PhotoAttachment } from '../types';

interface PhotoUploadSectionProps {
  photos: PhotoAttachment[];
  onAddPhoto: (files: File[]) => void;
  onRemovePhoto: (id: string) => void;
  onRetryPhoto: (id: string) => void;
  onReorderPhotos: (photos: PhotoAttachment[]) => void;
}

const PhotoUploadSection: React.FC<PhotoUploadSectionProps> = ({
  photos,
  onAddPhoto,
  onRemovePhoto,
  onRetryPhoto,
  onReorderPhotos
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onAddPhoto(Array.from(e.target.files));
      e.target.value = '';
    }
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    // Delay state update so the drag ghost is the full opacity element
    setTimeout(() => {
        setDraggedIndex(index);
    }, 0);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', index.toString()); // Firefox requires data
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault(); // Necessary to allow dropping
    if (draggedIndex === null || draggedIndex === index) return;

    const newPhotos = [...photos];
    const draggedItem = newPhotos[draggedIndex];
    
    // Remove dragged item
    newPhotos.splice(draggedIndex, 1);
    // Insert at new position
    newPhotos.splice(index, 0, draggedItem);
    
    onReorderPhotos(newPhotos);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm mb-4">
      <div className="flex justify-between items-end mb-4">
        <h3 className="text-gray-900 font-bold text-lg">Add Photos</h3>
        <span className="text-xs text-gray-400 font-medium">
          {photos.length} selected • Drag to reorder
        </span>
      </div>
      
      <div className="flex gap-3 overflow-x-auto pb-4 pt-2 px-1 no-scrollbar items-center snap-x snap-mandatory">
        {/* Main Upload Button */}
        <button
          onClick={() => fileInputRef.current?.click()}
          className="snap-start flex-shrink-0 w-24 h-24 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center hover:bg-orange-50 hover:border-brand-orange hover:text-brand-orange transition-all group active:scale-95"
        >
          <div className="bg-white p-2.5 rounded-full shadow-sm mb-1 group-hover:scale-110 group-hover:shadow-md transition-all">
             <Camera className="w-5 h-5 text-gray-400 group-hover:text-brand-orange" />
          </div>
          <span className="text-[10px] font-bold text-gray-400 group-hover:text-brand-orange uppercase tracking-wide">Add Photo</span>
        </button>

        {/* Photo Previews */}
        {photos.map((photo, index) => {
           const isDragged = draggedIndex === index;
           const isCover = index === 0;

           return (
            <div 
              key={photo.id}
              draggable={photo.status !== 'uploading'}
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragEnd={handleDragEnd}
              className={`snap-start relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden transition-all duration-300 ease-out
                ${isDragged 
                  ? 'scale-105 shadow-xl z-10 ring-2 ring-brand-orange opacity-50' 
                  : photo.status === 'error' 
                    ? 'border border-red-500' 
                    : 'border border-gray-200 hover:border-brand-orange hover:shadow-md'
                }
                ${!isDragged && photo.status !== 'uploading' ? 'cursor-grab active:cursor-grabbing' : ''}
              `}
            >
              {/* Image Layer */}
              <img 
                src={photo.url} 
                alt="Upload" 
                className="w-full h-full object-cover pointer-events-none" 
              />
              
              {/* Cover Photo Badge */}
              {isCover && !isDragged && photo.status === 'complete' && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-[2px] py-1 flex items-center justify-center gap-1">
                  <Star className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
                  <span className="text-[9px] text-white font-bold uppercase tracking-wider">Cover</span>
                </div>
              )}

              {/* Controls Overlay */}
              {!isDragged && (
                <>
                  <button
                    onClick={() => onRemovePhoto(photo.id)}
                    className="absolute top-1 right-1 bg-white/90 hover:bg-white text-gray-500 hover:text-red-500 rounded-full p-1 z-20 shadow-sm transition-colors backdrop-blur-sm active:scale-90"
                    title={photo.status === 'uploading' ? 'Cancel Upload' : 'Remove Photo'}
                  >
                    <X className="w-3 h-3" />
                  </button>

                  {/* Uploading State with Progress Bar */}
                  {photo.status === 'uploading' && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 z-10 px-3 backdrop-blur-[1px]">
                      <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden mb-2">
                          <div 
                            className="h-full bg-brand-orange transition-all duration-300 ease-out"
                            style={{ width: `${photo.progress}%` }}
                          />
                      </div>
                      <span className="text-[10px] text-white font-bold tracking-wide">{Math.round(photo.progress)}%</span>
                    </div>
                  )}

                   {/* Error State */}
                   {photo.status === 'error' && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/95 z-10 text-red-500">
                       <AlertCircle className="w-6 h-6 mb-1" />
                       <button 
                         onClick={() => onRetryPhoto(photo.id)}
                         className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide bg-red-100 text-red-600 px-2 py-1 rounded-full hover:bg-red-200 transition-colors"
                       >
                         Retry <RotateCw className="w-3 h-3" />
                       </button>
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}

        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          multiple
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default PhotoUploadSection;