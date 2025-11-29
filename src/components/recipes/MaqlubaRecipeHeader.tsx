import { Clock, Users, ChefHat } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function MaqlubaRecipeHeader() {
  return (
    <div className="relative rounded-[32px] overflow-hidden shadow-xl">
      {/* Чистое изображение без затемнения сверху */}
      <div className="h-[60vh] min-h-[400px] max-h-[1000px]">
        <ImageWithFallback
          src="https://i.ibb.co/QFcjj7MD/photo-2025-11-29-15-35-10.jpg"
          alt="Maqluba - Traditional Palestinian Dish"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Контент на отдельной плашке внизу, фото не блюрится */}
      <div className="absolute inset-x-0 bottom-0 px-8 pb-8 pt-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex">
            <div className="bg-amber-500 text-white px-4 py-1.5 rounded-full mb-4">
              <p className="text-sm uppercase tracking-wide">
                Traditional Palestinian
              </p>
            </div>
          </div>

          <div className="bg-black/65 text-white rounded-3xl px-6 py-5 backdrop-blur-0">
            <h1 className="mb-1 text-2xl md:text-3xl font-semibold">
              Maqluba
            </h1>
            <h2 className="mb-4 text-base md:text-lg text-white/90">
              Upside-Down Rice Dish
            </h2>

            <div className="flex flex-wrap gap-6 text-sm md:text-base mb-4 text-white/90">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>2 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>6 servings</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="w-5 h-5" />
                <span>Intermediate</span>
              </div>
            </div>

            <p className="text-sm md:text-base text-white/90 leading-relaxed">
              A classic Palestinian dish meaning "upside-down" - layers of rice, vegetables, 
              and tender chicken dramatically flipped for an impressive presentation that 
              reveals beautiful patterned layers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}