export interface Tag {
  id: string;
  label: string;
}

export type ReviewCategory = 'Shopping' | 'Delivery';

export interface PhotoAttachment {
  id: string;
  url: string;
  status: 'uploading' | 'complete' | 'error';
  progress: number; // 0 to 100
}

export interface ReviewState {
  rating: number;
  category: ReviewCategory;
  selectedNegativeTags: string[];
  selectedPositiveTags: string[];
  reviewText: string;
  photos: PhotoAttachment[];
}