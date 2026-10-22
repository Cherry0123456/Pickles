import React from 'react';
import { Sparkles, SlidersHorizontal, Info } from 'lucide-react';

interface Props {
  onOpenSettings: () => void;
  instagramHandle: string;
}

export const SampleNoticeBanner: React.FC<Props> = ({ onOpenSettings, instagramHandle }) => {
  return (
    <div className="bg-[#142E20] text-[#FAF7F2] text-xs border-b border-[#25523D]/50 py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#D49B24] text-[#142E20] font-bold text-[10px]">
            i
          </span>
          <span className="font-medium text-[#F4EFE6]/90">
            Concept Website Demo for <span className="text-[#D49B24] font-semibold">@{instagramHandle}</span>
          </span>
          <span className="hidden md:inline text-white/40">|</span>
          <span className="hidden md:inline text-[#FAF7F2]/75">
            Sample catalogue & photography for preview purposes. All details configurable.
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSettings}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold bg-[#25523D] hover:bg-[#316B50] text-[#FAF7F2] rounded transition-colors"
            title="Configure business phone number and details for live testing"
          >
            <SlidersHorizontal className="w-3 h-3 text-[#D49B24]" />
            <span>Customize Demo Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};
