
import React, { useState, useMemo } from 'react';
import { Tag } from '../types';
import { Search, Plus, Frown, Smile, Check } from 'lucide-react';

interface TagSectionProps {
  title: string;
  emoji: 'happy' | 'sad';
  tags: Tag[];
  selectedTagIds: string[];
  onToggleTag: (id: string) => void;
  searchPlaceholder?: string;
}

const TagSection: React.FC<TagSectionProps> = ({
  title,
  emoji,
  tags,
  selectedTagIds,
  onToggleTag,
  searchPlaceholder = "Search tag or select from below"
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTags = useMemo(() => {
    return tags.filter(tag => 
      tag.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [tags, searchQuery]);

  // Helper to highlight matching text
  const renderLabel = (label: string) => {
    if (!searchQuery) return label;
    // Escape regex special characters
    const escapedQuery = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    const parts = label.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <span key={index} className="bg-yellow-200 text-gray-900 font-extrabold px-0.5 rounded-[2px]">{part}</span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm mb-4 transition-all duration-300 ease-in-out">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-gray-900 font-bold text-lg">{title}</h3>
        {emoji === 'sad' ? (
          <Frown className="w-6 h-6 text-orange-400 stroke-[1.5]" />
        ) : (
          <Smile className="w-6 h-6 text-orange-400 stroke-[1.5]" />
        )}
      </div>

      <div className="relative mb-4 group">
        <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${searchQuery ? 'text-orange-500' : 'text-gray-400'}`} />
        <input
          type="text"
          placeholder={searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-gray-50 border border-gray-100 text-sm py-3 pl-10 pr-4 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:bg-white focus:border-orange-200 transition-all duration-300"
        />
      </div>

      <div className="flex flex-wrap gap-2.5 min-h-[40px]">
        {filteredTags.map((tag) => {
          const isSelected = selectedTagIds.includes(tag.id);
          return (
            <button
              key={tag.id}
              onClick={() => onToggleTag(tag.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 border ${
                isSelected
                  ? 'bg-[#F97316] border-[#F97316] text-white shadow-md shadow-orange-100 transform scale-105'
                  : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              {isSelected && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
              <span>{renderLabel(tag.label)}</span>
            </button>
          );
        })}
        {filteredTags.length === 0 && searchQuery && (
          <button 
            onClick={() => console.log('New tag added:', searchQuery)}
            className="flex items-center gap-1 px-4 py-2.5 rounded-full text-xs font-medium bg-gray-50 text-gray-400 border border-dashed border-gray-300 hover:bg-gray-100 transition-colors"
          >
            <Plus className="w-3 h-3" /> Add "{searchQuery}"
          </button>
        )}
      </div>
    </div>
  );
};

export default TagSection;
