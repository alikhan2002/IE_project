import React, { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Star, ChefHat, Clock, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type Step = {
  number: number;
  title: string;
  description: string;
  image: string;
};

const maqlubaSteps: Step[] = [
  {
    number: 1,
    title: "Soak the Rice",
    description:
      "Wash the short-grain rice several times until the water runs clear. Soak it in warm salted water for 20 minutes, then drain.",
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=1080&q=80",
  },
  {
    number: 2,
    title: "Prepare the Vegetables",
    description:
      "Slice eggplants (and potatoes optionally). Salt lightly, then fry or roast until golden.",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1080&q=80",
  },
  {
    number: 3,
    title: "Brown the Chicken",
    description:
      "Cut chicken into 4–6 pieces. Sear in oil until golden. Add chopped onion and cook until soft.",
    image: "https://images.unsplash.com/photo-1600692219868-3bb016f0b4d5?auto=format&fit=crop&w=1080&q=80",
  },
  {
    number: 4,
    title: "Season with Spices",
    description:
      "Add mixed spices, turmeric, cinnamon, pepper, and salt. Stir for 1–2 minutes.",
    image: "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?auto=format&fit=crop&w=1080&q=80",
  },
  {
    number: 5,
    title: "Layer Tomatoes and Vegetables",
    description:
      "Remove chicken. Line pot bottom with tomato slices, then eggplants and potatoes.",
    image: "https://images.unsplash.com/photo-1531207610401-1cbmj21a?auto=format&fit=crop&w=1080&q=80",
  },
  {
    number: 6,
    title: "Add Chicken and Rice",
    description:
      "Place chicken over vegetables. Spread soaked rice evenly on top.",
    image: "https://images.unsplash.com/photo-1625945955175-1d979976e10b?auto=format&fit=crop&w=1080&q=80",
  },
  {
    number: 7,
    title: "Add Water & Cook",
    description:
      "Pour hot salt water until it covers rice by 1–2 cm. Simmer for 30–40 minutes.",
    image: "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=1080&q=80",
  },
  {
    number: 8,
    title: "Flip and Serve",
    description:
      "Let rest 10–15 minutes. Flip onto a large tray. Serve hot.",
    image: "https://images.unsplash.com/photo-1604908176997-125188c25eab?auto=format&fit=crop&w=1080&q=80",
  },
];

export function MaqlubaPage({ onNavigateBack }: { onNavigateBack: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const totalSteps = 1 + maqlubaSteps.length + 1;
  const isIngredients = currentStep === 0;
  const isFinish = currentStep === totalSteps - 1;
  const step = maqlubaSteps[currentStep - 1];

  const handleNext = () => currentStep < totalSteps - 1 && setCurrentStep(currentStep + 1);
  const handlePrev = () => currentStep > 0 && setCurrentStep(currentStep - 1);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-stone-50 via-white to-amber-50/30">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-amber-100/50">
        <div className="max-w-5xl mx-auto px-8 py-5">
          <button
            onClick={() => (currentStep === 0 ? onNavigateBack() : handlePrev())}
            className="flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors mb-3"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Recipes</span>
          </button>

          <div className="flex items-center justify-between">
            <h1 className="text-amber-900">Maqluba</h1>
            <span className="text-gray-500">
              {isIngredients ? "Ingredients" : isFinish ? "Finish" : `Step ${currentStep} of ${totalSteps - 2}`}
            </span>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-8 py-10">
          {/* INGREDIENTS PAGE */}
          {isIngredients && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-amber-800 mb-4">Ingredients</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• 2 cups short-grain rice (soaked 20 min)</li>
                <li>• 1 whole chicken, cut into 4–6 pieces</li>
                <li>• 2 eggplants (fried or roasted)</li>
                <li>• 1–2 potatoes, sliced and fried</li>
                <li>• 1 chopped onion</li>
                <li>• Tomato slices for pot bottom</li>
                <li>• 1 tsp mixed spices</li>
                <li>• 1 tsp turmeric</li>
                <li>• ½ tsp cinnamon</li>
                <li>• ½ tsp black pepper</li>
                <li>• Salt to taste</li>
                <li>• Hot water</li>
              </ul>
            </div>
          )}

          {/* COOKING STEPS */}
          {!isIngredients && !isFinish && (
            <div>
              <h2 className="text-xl font-semibold text-amber-800 mb-4">
                Step {step.number}: {step.title}
              </h2>

              <div className="w-full h-64 rounded-xl overflow-hidden mb-4 shadow">
                <ImageWithFallback src={step.image} alt={step.title} className="object-cover w-full h-full" />
              </div>

              <p className="text-gray-700 leading-relaxed">{step.description}</p>
            </div>
          )}

          {/* FINISH PAGE */}
          {isFinish && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-amber-800">Your Maqluba Is Ready!</h2>

              <div className="w-full h-64 rounded-xl overflow-hidden shadow">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1604908176997-125188c25eab?auto=format&fit=crop&w=1080&q=80"
                  alt="Finished Maqluba"
                  className="object-cover w-full h-full"
                />
              </div>

              <p className="text-gray-700">
                Flip the pot carefully onto a large tray. Enjoy warm with your family or friends.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer navigation */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-amber-100/50 py-4 px-8">
        <div className="max-w-5xl mx-auto flex justify-between">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="px-4 py-2 rounded-lg bg-amber-100 text-amber-800 disabled:opacity-30"
          >
            <ChevronLeft className="inline w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentStep === totalSteps - 1}
            className="px-4 py-2 rounded-lg bg-amber-600 text-white"
          >
            <ChevronRight className="inline w-5 h-5" />
          </button>
        </div>
      </footer>
    </div>
  );
}
