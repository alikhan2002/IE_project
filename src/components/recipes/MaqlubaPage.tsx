import { ArrowLeft } from "lucide-react";
import { RecipeHeader } from "./RecipeHeader";
import { IngredientsSection } from "./IngredientsSection";
import { StepsSection } from "./StepsSection";

interface MaqlubaPageProps {
  onNavigateBack: () => void;
}

const maqlubaIngredients = [
  { amount: "500g", name: "Chicken or lamb, cut into pieces" },
  { amount: "2 cups", name: "Long-grain rice, rinsed" },
  { amount: "1 large", name: "Eggplant, sliced" },
  { amount: "2", name: "Potatoes, sliced" },
  { amount: "1", name: "Onion, chopped" },
  { amount: "2", name: "Tomatoes, sliced" },
  { amount: "4 cups", name: "Chicken or vegetable broth" },
  { amount: "2 tsp", name: "Allspice" },
  { amount: "1 tsp", name: "Turmeric" },
  { amount: "Salt and pepper", name: "to taste" },
  { amount: "Vegetable oil", name: "for frying" },
  { amount: "Toasted nuts and parsley", name: "for garnish" },
];

const maqlubaSteps = [
    {
        title: "Prepare Vegetables",
        description: "Fry the sliced eggplant and potatoes in vegetable oil until golden brown. Set aside on paper towels to drain excess oil."
    },
    {
        title: "Cook the Meat",
        description: "In a large pot, brown the chicken or lamb pieces with the chopped onion. Season with allspice, turmeric, salt, and pepper."
    },
    {
        title: "Layer the Ingredients",
        description: "In the same pot, layer the sliced tomatoes at the bottom, followed by the cooked meat, fried eggplant, and potatoes. Finally, add the rinsed rice on top, spreading it evenly."
    },
    {
        title: "Cook the Maqluba",
        description: "Gently pour the broth over the rice. Bring to a boil, then reduce the heat to low, cover, and simmer for about 25-30 minutes, or until the rice is cooked and has absorbed the liquid."
    },
    {
        title: "Rest and Serve",
        description: "Remove from heat and let it rest for 10 minutes. Place a large serving platter on top of the pot and carefully flip it upside down. Garnish with toasted nuts and fresh parsley before serving."
    }
];

export function MaqlubaPage({ onNavigateBack }: MaqlubaPageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <header className="flex items-center justify-between p-4 bg-white shadow-sm">
        <button onClick={onNavigateBack} className="p-2 rounded-full hover:bg-gray-100">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold">Traditional Palestinian Cuisine</h1>
        <div className="w-10"></div>
      </header>
      <main className="flex-grow">
        <RecipeHeader
          title="Maqluba"
          description="A classic Palestinian dish of meat, rice, and fried vegetables, cooked in a pot and flipped upside down when served."
          imageUrl="https://i.ibb.co/QFcjj7MD/photo-2025-11-29-15-35-10.jpg"
          difficulty="Intermediate"
          cookingTime="2 hours"
          servings="6 persons"
        />
        <div className="p-4 md:p-6">
          <IngredientsSection ingredients={maqlubaIngredients} />
          <StepsSection steps={maqlubaSteps} />
        </div>
      </main>
    </div>
  );
}
