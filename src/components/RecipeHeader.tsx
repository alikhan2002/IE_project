import { Clock, Users, ChefHat } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function RecipeHeader() {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="relative h-[60vh] min-h-[400px] max-h-[1000px] overflow-hidden">
        <ImageWithFallback
          src="https://i.ibb.co/Dfpx6mzb/images.png"
          alt="Beshbarmak - Traditional Kazakh Dish"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Kazakh decorative element */}
        <div className="absolute top-8 right-8 opacity-20">
          <svg
            className="w-24 h-24 text-amber-300"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <circle cx="50" cy="50" r="5" />
            <circle cx="50" cy="20" r="3" />
            <circle cx="50" cy="80" r="3" />
            <circle cx="20" cy="50" r="3" />
            <circle cx="80" cy="50" r="3" />
            <circle cx="35" cy="35" r="2" />
            <circle cx="65" cy="35" r="2" />
            <circle cx="35" cy="65" r="2" />
            <circle cx="65" cy="65" r="2" />
            <path
              d="M 50 5 L 50 20 M 50 80 L 50 95 M 5 50 L 20 50 M 80 50 L 95 50"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-amber-500 text-white px-4 py-1.5 rounded-full mb-4">
            <p className="text-sm uppercase tracking-wide">
              Traditional Kazakh
            </p>
          </div>
          <h1 className="text-white mb-4">Beshbarmak</h1>
          <h2 className="text-white/90 mb-6">
            Beshbarmak with Beef
          </h2>
          <p className="text-white/80 max-w-2xl mb-8">
            A quintessential Kazakh dish meaning "five fingers"
            - tender boiled beef served atop thin handmade
            noodles with aromatic onions braised in rich broth.
          </p>

          {/* Recipe Info */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-white/90">
              <Clock className="w-5 h-5" />
              <span>3 hours</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Users className="w-5 h-5" />
              <span>6-8 servings</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <ChefHat className="w-5 h-5" />
              <span>Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}