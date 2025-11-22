import { Clock, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Recipe {
  id: number;
  name: string;
  cuisine: string;
  time: string;
  servings: string;
  image: string;
}

const recipes: Recipe[] = [
  {
    id: 1,
    name: "Beshbarmak",
    cuisine: "Kazakh",
    time: "3 hours",
    servings: "6-8",
    image: "https://i.ibb.co/Dfpx6mzb/images.png"
  },
  {
    id: 2,
    name: "Maqluba",
    cuisine: "Palestinian",
    time: "1.5 hours",
    servings: "6",
    image: "https://images.unsplash.com/photo-1727041423608-c15f1a145cc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwcmljZSUyMGRpc2h8ZW58MXx8fHwxNzYzODE2OTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    name: "Kebab",
    cuisine: "Middle Eastern",
    time: "45 mins",
    servings: "4",
    image: "https://images.unsplash.com/photo-1626323109252-0adb3b46692b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZWJhYiUyMG1lYXQlMjBza2V3ZXJzfGVufDF8fHx8MTc2MzgxNjk2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    name: "Knafeh",
    cuisine: "Palestinian",
    time: "1 hour",
    servings: "8",
    image: "https://images.unsplash.com/photo-1708782340357-b7b38d653979?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmFmZWglMjBkZXNzZXJ0fGVufDF8fHx8MTc2MzgxNjk2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

interface PopularRecipesProps {
  onNavigateToBeshbarmak: () => void;
}

export function PopularRecipes({ onNavigateToBeshbarmak }: PopularRecipesProps) {
  return (
    <div className="overflow-x-auto pb-4 -mx-4 px-4">
      <div className="flex gap-4 min-w-max">
        {recipes.map((recipe) => (
          <button
            key={recipe.id}
            onClick={() => {
              if (recipe.id === 1) {
                onNavigateToBeshbarmak();
              }
            }}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-amber-100 hover:border-amber-300 w-72 flex-shrink-0"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <ImageWithFallback
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Cuisine Badge */}
              <div className="absolute top-3 left-3">
                <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs uppercase tracking-wide">
                  {recipe.cuisine}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 text-left">
              <h3 className="text-amber-900 mb-3 group-hover:text-amber-700 transition-colors">{recipe.name}</h3>
              
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{recipe.time}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  <span>{recipe.servings}</span>
                </div>
              </div>
            </div>

            {/* Hover accent */}
            <div className="h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        ))}
      </div>
    </div>
  );
}
