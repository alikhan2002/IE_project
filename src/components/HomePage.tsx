import { ChefHat, TrendingUp } from "lucide-react";
import { CuisineCard } from "./CuisineCard";
import { PopularRecipes } from "./PopularRecipes";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomePageProps {
  onNavigateToCuisine: (cuisine: "kazakh" | "palestinian") => void;
}

export function HomePage({ onNavigateToCuisine }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-amber-50/30">
      {/* Simple Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-amber-100/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-5">
          <h1 className="text-amber-900 text-center">World Recipes</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1 max-w-xs"></div>
              <svg className="w-12 h-12 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L9 9L2 12L9 15L12 22L15 15L22 12L15 9L12 2Z" />
              </svg>
              <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1 max-w-xs"></div>
            </div>
            
            <h2 className="text-amber-900 mb-6">Choose a Cuisine</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover authentic recipes from rich culinary traditions around the world. 
              Each dish tells a story of culture, heritage, and time-honored cooking techniques.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto mb-20">
            <div className="aspect-[21/9] relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1568722499526-3ae705b3a11f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwdGFibGUlMjB0b3AlMjBkb3dufGVufDF8fHx8MTc2MzgxODAyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="World cuisine"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Cuisine Selection Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <CuisineCard
              title="Kazakh Cuisine"
              description="Traditional dishes from the steppes"
              images={[
                "https://i.ibb.co/Dfpx6mzb/images.png",
                "https://images.unsplash.com/photo-1743179536094-a942babce15c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXpha2glMjBmb29kJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzYzODE2OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                "https://images.unsplash.com/photo-1763026337559-f1c5e980c539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGJyZWFkJTIwcGFzdHJ5fGVufDF8fHx8MTc2MzgxNjk2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              ]}
              pattern="kazakh"
              onClick={() => onNavigateToCuisine("kazakh")}
            />
            
            <CuisineCard
              title="Palestinian Cuisine"
              description="Rich flavors from the Levant"
              images={[
                "https://images.unsplash.com/photo-1727041423608-c15f1a145cc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwcmljZSUyMGRpc2h8ZW58MXx8fHwxNzYzODE2OTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                "https://images.unsplash.com/photo-1708782340357-b7b38d653979?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmFmZWglMjBkZXNzZXJ0fGVufDF8fHx8MTc2MzgxNjk2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                "https://images.unsplash.com/photo-1573470571028-a0ca7a723959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwbWVhdCUyMGRpc2h8ZW58MXx8fHwxNzYzODE2OTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              ]}
              pattern="palestinian"
              onClick={() => onNavigateToCuisine("palestinian")}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-200 mt-32 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-8 text-center text-amber-800/60">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1 max-w-md"></div>
            <svg className="w-10 h-10 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L9 9L2 12L9 15L12 22L15 15L22 12L15 9L12 2Z" />
            </svg>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1 max-w-md"></div>
          </div>
          <p>Authentic Recipes from Around the World</p>
        </div>
      </footer>
    </div>
  );
}