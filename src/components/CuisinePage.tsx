import { ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Recipe {
  id: string;
  name: string;
  image: string;
}

interface CuisinePageProps {
  cuisine: "kazakh" | "palestinian";
  onNavigateBack: () => void;
  onSelectRecipe: (recipeId: string) => void;
}

const kazakhRecipes: Recipe[] = [
  {
    id: "beshbarmak",
    name: "Beshbarmak",
    image: "https://i.ibb.co/Dfpx6mzb/images.png"
  },
  {
    id: "kuyrdak",
    name: "Kuyrdak",
    image: "https://images.unsplash.com/photo-1737171329207-ab95a6e5f586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrdXlyZGFrJTIwa2F6YWtoJTIwbWVhdHxlbnwxfHx8fDE3NjM4MTkxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "bauyrsak",
    name: "Bauyrsak",
    image: "https://images.unsplash.com/photo-1738717201678-412395e65b36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXVyc2FrJTIwZnJpZWQlMjBkb3VnaHxlbnwxfHx8fDE3NjM4MTkxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const palestinianRecipes: Recipe[] = [
  {
    id: "maqluba",
    name: "Maqluba",
    image: "https://images.unsplash.com/photo-1727041423608-c15f1a145cc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwcmljZSUyMGRpc2h8ZW58MXx8fHwxNzYzODE2OTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "musakhan",
    name: "Musakhan",
    image: "https://images.unsplash.com/photo-1756137949459-8aad8455d040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNha2hhbiUyMGNoaWNrZW4lMjBicmVhZHxlbnwxfHx8fDE3NjM4MTkxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "knafeh",
    name: "Knafeh",
    image: "https://images.unsplash.com/photo-1708782340357-b7b38d653979?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmFmZWglMjBkZXNzZXJ0fGVufDF8fHx8MTc2MzgxNjk2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function CuisinePage({ cuisine, onNavigateBack, onSelectRecipe }: CuisinePageProps) {
  const recipes = cuisine === "kazakh" ? kazakhRecipes : palestinianRecipes;
  const title = cuisine === "kazakh" ? "Kazakh Recipes" : "Palestinian Recipes";
  const pattern = cuisine;

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-amber-50/30">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-amber-100/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-5">
          <button
            onClick={onNavigateBack}
            className="flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
          <h1 className="text-amber-900">{title}</h1>
        </div>
      </header>

      {/* Recipe Grid */}
      <main className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex items-center justify-center gap-6 mb-16">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1 max-w-xs"></div>
          {pattern === "kazakh" ? (
            <svg className="w-12 h-12 text-amber-400" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="5" />
              <circle cx="50" cy="20" r="3" />
              <circle cx="50" cy="80" r="3" />
              <circle cx="20" cy="50" r="3" />
              <circle cx="80" cy="50" r="3" />
              <path d="M 50 5 L 50 20 M 50 80 L 50 95 M 5 50 L 20 50 M 80 50 L 95 50" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          ) : (
            <svg className="w-12 h-12 text-amber-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M 20 20 L 80 20 L 80 80 L 20 80 Z" />
              <path d="M 35 35 L 65 35 L 65 65 L 35 65 Z" />
              <path d="M 20 50 L 35 50 M 65 50 L 80 50 M 50 20 L 50 35 M 50 65 L 50 80" />
              <circle cx="50" cy="50" r="8" fill="currentColor" />
            </svg>
          )}
          <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1 max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <button
              key={recipe.id}
              onClick={() => onSelectRecipe(recipe.id)}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-amber-100/50 hover:border-amber-300"
            >
              <div className="aspect-square relative overflow-hidden">
                <ImageWithFallback
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-amber-900 group-hover:text-amber-700 transition-colors">{recipe.name}</h3>
              </div>
              <div className="h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
