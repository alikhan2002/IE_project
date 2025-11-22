import { ArrowLeft } from "lucide-react";
import { RecipeHeader } from "./RecipeHeader";
import { IngredientsSection } from "./IngredientsSection";
import { StepsSection } from "./StepsSection";

interface BeshbarmakPageProps {
  onNavigateBack: () => void;
}

export function BeshbarmakPage({ onNavigateBack }: BeshbarmakPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Back Button */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-amber-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <button
            onClick={onNavigateBack}
            className="flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      <RecipeHeader />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <IngredientsSection />
        <StepsSection />
      </div>
      
      {/* Kazakh decorative pattern footer */}
      <div className="border-t border-amber-200 mt-16 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-amber-800/60">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1 max-w-xs"></div>
            <svg className="w-8 h-8 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L9 9L2 12L9 15L12 22L15 15L22 12L15 9L12 2Z" />
            </svg>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1 max-w-xs"></div>
          </div>
          <p className="text-sm">Traditional Kazakh Cuisine</p>
        </div>
      </div>
    </div>
  );
}
