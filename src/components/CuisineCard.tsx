import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CuisineCardProps {
  title: string;
  description: string;
  images: string[];
  pattern: "kazakh" | "palestinian";
  onClick: () => void;
}

export function CuisineCard({ title, description, images, pattern, onClick }: CuisineCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-amber-100/50 hover:border-amber-300"
    >
      {/* Image Grid */}
      <div className="relative h-96">
        <div className="grid grid-cols-2 gap-3 p-3 h-full">
          {/* Main large image */}
          <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
            <ImageWithFallback
              src={images[0]}
              alt={`${title} main dish`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Two smaller images */}
          {images.slice(1, 3).map((image, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden">
              <ImageWithFallback
                src={image}
                alt={`${title} dish ${idx + 2}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

        {/* Decorative Pattern Overlay */}
        <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
          {pattern === "kazakh" ? (
            <svg className="w-20 h-20 text-amber-600" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="5" />
              <circle cx="50" cy="20" r="3" />
              <circle cx="50" cy="80" r="3" />
              <circle cx="20" cy="50" r="3" />
              <circle cx="80" cy="50" r="3" />
              <path d="M 50 5 L 50 20 M 50 80 L 50 95 M 5 50 L 20 50 M 80 50 L 95 50" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          ) : (
            <svg className="w-20 h-20 text-amber-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M 20 20 L 80 20 L 80 80 L 20 80 Z" />
              <path d="M 35 35 L 65 35 L 65 65 L 35 65 Z" />
              <path d="M 20 50 L 35 50 M 65 50 L 80 50 M 50 20 L 50 35 M 50 65 L 50 80" />
              <circle cx="50" cy="50" r="8" fill="currentColor" />
            </svg>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 text-left">
        <h3 className="text-amber-900 mb-3 group-hover:text-amber-700 transition-colors">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="flex items-center gap-2 text-amber-600 group-hover:gap-4 transition-all">
          <span>Explore recipes</span>
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>

      {/* Subtle border accent */}
      <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </button>
  );
}