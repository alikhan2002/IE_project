import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const beshbarmakSteps = [
  {
    number: 1,
    title: "Prepare the Broth",
    description:
      "Place the beef, one onion (whole), and carrot in a large pot. Fill with cold water (3-4 liters) to cover the meat completely.",
    image:
      "https://images.unsplash.com/photo-1733700469173-15d46efc2c09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVmJTIwbWVhdCUyMHBvdCUyMHdhdGVyfGVufDF8fHx8MTc2MzIxMTEyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    number: 2,
    title: "Skim the Foam",
    description:
      "Bring to a boil over medium-high heat. As the broth starts to boil, skim off the foam that rises to the surface with a spoon.",
    image: "https://i.ibb.co/C3dtYdzH/2.jpg",
  },
  {
    number: 3,
    title: "Knead the Dough",
    description:
      "In a large bowl, mix flour, egg, salt, and water. Knead into a firm, elastic dough (about 8-10 minutes of kneading).",
    image:
      "https://images.unsplash.com/flagged/photo-1561668038-2742fcef75d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmVhZGluZyUyMGRvdWdoJTIwaGFuZHN8ZW58MXx8fHwxNzYzMjExMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    number: 4,
    title: "Rest the Dough",
    description:
      "Wrap the dough in plastic wrap or cover with a damp cloth. Let it rest at room temperature for 30 minutes.",
    image:
      "https://images.unsplash.com/photo-1562663648-008ed8b13f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb3VnaCUyMHdyYXBwZWQlMjBraXRjaGVufGVufDF8fHx8MTc2MzIxMTEzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    number: 5,
    title: "Divide the Dough",
    description:
      "After resting, divide the dough into 3 equal parts for easier rolling.",
    image:
      "https://images.unsplash.com/photo-1738717201678-412395e65b36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb3VnaCUyMHBvcnRpb25zJTIwZGl2aWRlZHxlbnwxfHx8fDE3NjMyMTExMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    number: 6,
    title: "Roll Thin Sheets",
    description:
      "Roll out each portion into very thin sheets (about 1-1.5 mm thick). Dust with flour as needed to prevent sticking.",
    image:
      "https://images.unsplash.com/photo-1738717201744-9faf699eea3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xsaW5nJTIwZG91Z2glMjB0aGlufGVufDF8fHx8MTc2MzIxMTEzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    number: 7,
    title: "Cut into Pieces",
    description:
      "Cut the rolled dough into rectangles or diamond shapes, about 5-7 cm in size. Let them dry slightly while the broth finishes cooking.",
    image:
      "https://images.unsplash.com/photo-1701775696323-57c5e7640185?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXR0aW5nJTIwZG91Z2glMjBwaWVjZXN8ZW58MXx8fHwxNzYzMjExMTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    number: 8,
    title: "Remove the Beef",
    description:
      "After 2-2.5 hours of simmering, remove the cooked beef from the broth. Let it cool slightly, then separate into medium-sized pieces.",
    image:
      "https://i.ibb.co/Q7r51RHc/Chat-GPT-Image-15-2025-19-19-57.png",
  },
  {
    number: 9,
    title: "Prepare Braised Onions",
    description:
      "Slice the remaining 2 onions into half-rings. Place in a bowl and pour hot broth over them. Let steep for 10-15 minutes. Strain the broth and season generously with salt and black pepper to taste. Return to heat.",
    image: "https://i.ibb.co/nt5MTsr/wmremove-transformed.jpg",
  },
  {
    number: 10,
    title: "Prepare for Cooking Dough",
    description:
      "Using a skimmer, remove the onions from the broth and transfer them into a bowl. Add 1-2 cups of water to the broth to dilute it slightly, ensuring there's enough liquid to cook all the dough pieces. Bring the broth to a rapid boil. Add the dough pieces in batches, cooking for about 2 minutes until they float.",
    image:
      "https://i.ibb.co/PG7crDRH/wmremove-transformed-2.jpg",
  },
  {
    number: 11,
    title: "Remove with Skimmer",
    description:
      "Use a slotted spoon or skimmer to remove the cooked dough pieces. Place them on a large serving plate. Continue cooking dough in batches. Layer the cooked dough on the plate, building up the base.",
    image:
      "https://i.ibb.co/1tXL2Lwy/wmremove-transformed-4.jpg",
  },
  {
    number: 12,
    title: "Top with Beef and Onions",
    description:
      "Arrange the beef pieces on top of the dough. Add the braised onions (drained) over the beef.",
    image: "https://i.ibb.co/bgmg1gNV/27.jpg",
  },
  {
    number: 13,
    title: "Garnish and Serve",
    description:
      "Sprinkle generously with fresh chopped green onions. Serve hot with the broth in separate bowls on the side. Enjoy with your hands - the traditional way!",
    image:
      "https://i.ibb.co/0y4BMrZ0/wmremove-transformed-6-49d3b5af-471c-4807-9e31-538201151beb.jpg",
  },
];

interface RecipePageProps {
  recipeId: string;
  onNavigateBack: () => void;
}

export function RecipePage({ recipeId, onNavigateBack }: RecipePageProps) {
  const [currentStep, setCurrentStep] = useState(0);

  // For now, only Beshbarmak is implemented
  const steps = beshbarmakSteps;
  const totalSteps = steps.length + 1; // +1 for the final serving page
  const recipeName = "Beshbarmak";
  const isServingPage = currentStep === steps.length;
  const step = !isServingPage ? steps[currentStep] : null;

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-stone-50 via-white to-amber-50/30">
      {/* Fixed Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-amber-100/50 flex-shrink-0">
        <div className="max-w-5xl mx-auto px-8 py-5">
          <button
            onClick={onNavigateBack}
            className="flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors mb-3"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Recipes</span>
          </button>
          <div className="flex items-center justify-between">
            <h1 className="text-amber-900">{recipeName}</h1>
            <span className="text-gray-500">
              Step {currentStep + 1} of {totalSteps}
            </span>
          </div>
        </div>
      </header>

      {/* Scrollable Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-8 py-8">
          {!isServingPage ? (
            <>
              {/* Step Number Badge */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-3 bg-amber-500 text-white px-6 py-3 rounded-full shadow-lg">
                  <span className="text-xl">Step {step.number}</span>
                </div>
              </div>

              {/* Step Image - Medium Size */}
              <div className="mb-8">
                <div className="aspect-[4/3] max-h-96 rounded-3xl overflow-hidden shadow-xl border border-amber-100">
                  <ImageWithFallback
                    src={step.image}
                    alt={`Step ${step.number}: ${step.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Scrollable Step Content */}
              <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-8 mb-8">
                <h2 className="text-amber-900 mb-4">{step.title}</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Serving & Tradition Page */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-3 bg-amber-500 text-white px-6 py-3 rounded-full shadow-lg">
                  <span className="text-xl">Serve & Enjoy</span>
                </div>
              </div>

              {/* Final Dish Image */}
              <div className="mb-8">
                <div className="aspect-[4/3] max-h-96 rounded-3xl overflow-hidden shadow-xl border border-amber-100">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1649373860956-0974e8583c27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXNoYmFybWFrJTIwZmluaXNoZWQlMjBwbGF0ZXxlbnwxfHx8fDE3NjM4MTk3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Finished Beshbarmak dish"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Tradition Content */}
              <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-8 mb-8">
                <h2 className="text-amber-900 mb-6">Enjoy Your Meal!</h2>
                
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Бешбармак (Beshbarmak) traditionally is eaten with hands - the name literally means "five fingers" in Kazakh.
                  </p>
                  <p>
                    This dish is usually shared from a common platter, bringing family and friends together around the table.
                  </p>
                  <p>
                    Serve the hot broth (сорпа) in separate bowls on the side for sipping between bites.
                  </p>
                </div>

                {/* Kazakh Decoration */}
                <div className="flex items-center justify-center gap-6 mt-8 pt-8 border-t border-amber-100">
                  <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1 max-w-xs"></div>
                  <svg className="w-16 h-16 text-amber-400/30" viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="50" r="5" />
                    <circle cx="50" cy="20" r="3" />
                    <circle cx="50" cy="80" r="3" />
                    <circle cx="20" cy="50" r="3" />
                    <circle cx="80" cy="50" r="3" />
                    <path d="M 50 5 L 50 20 M 50 80 L 50 95 M 5 50 L 20 50 M 80 50 L 95 50" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                  <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1 max-w-xs"></div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Fixed Navigation Footer */}
      <footer className="bg-white border-t border-amber-200 flex-shrink-0 shadow-lg">
        <div className="max-w-5xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between gap-4">
            {!isServingPage ? (
              <>
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className={`flex items-center gap-3 px-8 py-4 rounded-2xl transition-all duration-300 ${
                    currentStep === 0
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-amber-500 text-white hover:bg-amber-600 shadow-md hover:shadow-lg"
                  }`}
                >
                  <ChevronLeft className="w-6 h-6" />
                  <span className="text-lg">Previous</span>
                </button>

                {/* Progress Dots */}
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalSteps }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentStep(idx)}
                      className={`transition-all duration-300 rounded-full ${
                        idx === currentStep
                          ? "w-10 h-3 bg-amber-500"
                          : "w-3 h-3 bg-amber-200 hover:bg-amber-300"
                      }`}
                      aria-label={`Go to step ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-amber-500 text-white hover:bg-amber-600 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-lg">Next</span>
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            ) : (
              <button
                onClick={onNavigateBack}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-amber-500 text-white hover:bg-amber-600 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <ArrowLeft className="w-6 h-6" />
                <span className="text-lg">Back to Recipes</span>
              </button>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}