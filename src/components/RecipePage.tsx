import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Star, ChefHat, Clock, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { logUserAction } from "../services/logsApi";
import { logUserRating } from "../services/ratingApi";

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
      "Cut the rolled dough into rectangles or diamond shapes, about 5-7 cm in size.",
    image:
      "https://images.unsplash.com/photo-1701775696323-57c5e7640185?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXR0aW5nJTIwZG91Z2glMjBwaWVjZXN8ZW58MXx8fHwxNzYzMjExMTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    number: 8,
    title: "Remove the Beef",
    description:
      "After 2-2.5 hours of simmering, remove the cooked beef from the broth. Let it cool slightly, then separate into medium pieces.",
    image: "https://i.ibb.co/Q7r51RHc/Chat-GPT-Image-15-2025-19-19-57.png",
  },
  {
    number: 9,
    title: "Prepare Braised Onions",
    description:
      "Slice the remaining onions into half-rings. Pour hot broth over them, steep 10–15 minutes.",
    image: "https://i.ibb.co/nt5MTsr/wmremove-transformed.jpg",
  },
  {
    number: 10,
    title: "Prepare for Cooking Dough",
    description:
      "Remove onions from broth. Dilute broth with water. Bring to rapid boil, cook dough pieces in batches.",
    image: "https://i.ibb.co/PG7crDRH/wmremove-transformed-2.jpg",
  },
  {
    number: 11,
    title: "Remove with Skimmer",
    description:
      "Remove cooked dough pieces using a skimmer. Layer them on a large plate.",
    image: "https://i.ibb.co/1tXL2Lwy/wmremove-transformed-4.jpg",
  },
  {
    number: 12,
    title: "Top with Beef and Onions",
    description:
      "Place the beef pieces on top of the dough and add the braised onions.",
    image: "https://i.ibb.co/bgmg1gNV/27.jpg",
  },
  {
    number: 13,
    title: "Garnish and Serve",
    description:
      "Top with chopped green onions. Serve hot with broth in separate bowls.",
    image:
      "https://i.ibb.co/0y4BMrZ0/wmremove-transformed-6-49d3b5af-471c-4807-9e31-538201151beb.jpg",
  },
];

const maqlubaSteps = [
  {
    number: 1,
    title: "Boil the Chicken",
    description: "Sauté the onion in a little oil. Add the chicken pieces and brown them lightly. Add salt and spices. Cover with hot water and boil until fully cooked (about 30 minutes). Keep the chicken broth.",
    image: "https://i.ibb.co/P7hfcd5/photo-2025-11-29-17-08-09.jpg",
  },
  {
    number: 2,
    title: "Prepare the Vegetables",
    description: "Fry the eggplant slices (and potatoes if using). Prepare tomato slices for the bottom of the pot.",
    image: "https://i.ibb.co/3mL79QPn/photo-2025-11-29-17-08-16.jpg",
  },
  {
    number: 3,
    title: "Assemble the Maqluba",
    description: "In a clean pot: Place tomato slices on the bottom. Add the fried eggplants. Add potatoes (optional). Place the cooked chicken pieces on top. Add the rice evenly over everything.",
    image: "https://i.ibb.co/23KFNg6d/photo-2025-11-29-17-08-18.jpg",
  },
  {
    number: 4,
    title: "Add Broth and Cook",
    description: "Pour hot chicken broth until it covers the rice by about 1 cm. Cook on high heat until the rice absorbs most of the liquid. Lower the heat, cover, and cook for 20–25 minutes.",
    image: "https://i.ibb.co/M5j1vM5z/photo-2025-11-29-17-08-20.jpg",
  },
  {
    number: 5,
    title: "Rest and Flip",
    description: "Let it rest for 5 minutes. Place a large tray on top of the pot. Flip the pot quickly and lift it slowly to reveal the beautiful layered dish.",
    image: "https://i.ibb.co/Y4m8hKg5/photo-2025-11-29-17-08-22.jpg",
  },
  {
    number: 6,
    title: "Garnish and Serve",
    description: "Garnish with toasted pine nuts, almonds, and fresh parsley. Serve with yogurt or salad on the side.",
    image: "https://i.ibb.co/mPX3GC3/photo-2025-11-29-17-17-59.jpg",
  },
];
const plovSteps = [
  {
    number: 1,
    title: "Prepare Chicken and Onion",
    description: "Wash and dry chicken breast. Cut into small pieces. Peel and chop onion into small cubes.",
    image: "https://i.ibb.co/Pv2bP2p3/b3655309-1c2d-4159-99d5-0cd9232a9a86.webp",
  },
  {
    number: 2,
    title: "Heat Oil",
    description: "Pour vegetable oil into a kazan or deep pan. Oil layer should be at least 1 cm deep.",
    image: "https://i.ibb.co/XxVGwLBK/d145e100-f7c3-4709-b368-9b6b598eac38.webp",
  },
  {
    number: 3,
    title: "Cook Onion and Chicken",
    description: "Add onion and fry until golden. Add chicken pieces. Fry on high heat, turning pieces. Cover and cook on low heat for 15 minutes.",
    image: "https://i.ibb.co/1GJDVC95/fb0e0cbe-af6e-4782-8c22-7892ac0f46c6.webp",
  },
  {
    number: 4,
    title: "Prepare Carrots",
    description: "Wash, peel and cut carrots into thin strips. You can use Korean carrot grater.",
    image: "https://i.ibb.co/3y3HwFfB/77e79c76-8282-41d2-b5dd-36200b199730.webp",
  },
  {
    number: 5,
    title: "Add Carrots",
    description: "Add carrots to the kazan with chicken and onion. Spread in even layer. Cover and cook on low heat for 10 minutes.",
    image: "https://i.ibb.co/XkMw3SfX/524bea09-9cea-4a48-bc5d-2931e27ca6e5.webp",
  },
  {
    number: 6,
    title: "Wash Rice",
    description: "Put rice in deep bowl. Wash with water until water becomes clear. Drain rice in colander.",
    image: "https://i.ibb.co/dJMvz6M9/96308402-8efd-489a-aa73-04b611a750a5.webp",
  },
  {
    number: 7,
    title: "Add Spices and Garlic",
    description: "Mix rice with salt and all spices. Wash garlic heads, remove outer skin. Place garlic on carrot layer in kazan.",
    image: "https://i.ibb.co/vCqcBndp/a0f361fc-cf79-4ff5-9771-bcfd29460017.webp",
  },
  {
    number: 8,
    title: "Add Rice and Water",
    description: "Spread prepared rice over garlic. Pour hot water through skimmer. Water layer over rice should be at least 1 cm.",
    image: "https://i.ibb.co/dwYLLMdm/b24fa473-6984-41ff-b7be-090a840a98d1.webp",
  },
  {
    number: 9,
    title: "Cook Plov",
    description: "Cover kazan tightly with lid and towel. Cook on low heat for 30 minutes. Then mix carefully and cook 15 minutes more.",
    image: "https://i.ibb.co/BHZtRXBN/c3f7beba-78df-4b80-a50a-0326facf6e4f.webp",
  },
  {
    number: 10,
    title: "Let it Rest",
    description: "Turn off heat. Leave plov covered with lid and towel on hot stove for 15 minutes to rest. Then serve.",
    image: "https://i.ibb.co/gbsqmWVg/fbb38e90-7413-4c8d-b107-c13e204ecd9d.webp",
  },
];
const kuurdakSteps = [
  {
  number: 1,
  title: "Fry Chicken",
  description: "Cut the chicken into pieces and fry in hot oil until golden brown. Season with salt.",
  image: "https://i.postimg.cc/44Y2rj9Y/kuirdak-iz-kurici-119961.jpg",
},
{
  number: 2,
  title: "Add Onions",
  description: "Slice the onions into rings and add them to the pan. Cook until soft.",
  image: "https://i.postimg.cc/PfCVB0wP/kuirdak-iz-kurici-119962.jpg",
},
{
  number: 3,
  title: "Add Vegetables",
  description: "Cut the vegetables into cubes and add them to the pan with the chicken and onions.",
  image: "https://i.postimg.cc/nVXS6NDj/kuirdak-iz-kurici-119963.jpg",
},
{
  number: 4,
  title: "Add Pepper",
  description: "Add pepper and mix well.",
  image: "https://i.postimg.cc/PfCVB0wN/kuirdak-iz-kurici-119964.jpg",
},
{
  number: 5,
  title: "Add Broth and Cook",
  description: "Pour in the broth and let it simmer until the chicken is fully cooked.",
  image: "https://i.postimg.cc/ryDZv7ry/kuirdak-iz-kurici-119965.jpg",
},
{
  number: 6,
  title: "Serve",
  description: "Serve hot with rice. Enjoy your meal!",
  image: "https://i.postimg.cc/NMm9Xgnx/kuirdak-iz-kurici-119966.jpg",
},

];
const musakhanSteps = [
  {
    number: 1,
    title: "Prepare Chicken for Roasting",
    description: "Season the chicken and place it in a roasting pan. Keep the skin side up.",
    image: "https://i.postimg.cc/Jh9KmzJm/Uncooked_chicken_in_roaster_2048x1365.jpg",
  },
  {
    number: 2,
    title: "Roast Chicken",
    description: "Roast chicken in preheated oven at 170°С for 50-60 minutes. For extra brown color, place under broiler for 2-4 minutes.",
    image: "https://i.postimg.cc/KYKQdMKv/Chicken_baked_2048x1365.jpg",
  },
  {
    number: 3,
    title: "Chop Onions",
    description: "Chop red onions finely.",
    image: "https://i.postimg.cc/wBtFSmtj/Chopped_onions_2048x1383.jpg",
  },
  {
    number: 4,
    title: "Cook Onions with Sumac",
    description: "In a pot heat olive oil over medium-high heat. Add chopped onions. Cook until soft and caramelized, about 10-15 minutes. Season with salt, black pepper, and sumac.",
    image: "https://i.postimg.cc/Bv8NdK8S/Onions-and-sumac-2048x1529.jpg",
  },
  {
    number: 5,
    title: "Assemble Bread",
    description: "Take caramelized onions with a spoon and spread over flatbread. Place under broiler for 2-3 minutes.",
    image: "https://i.postimg.cc/6Q7zDv79/onions-over-bread-2048x1365.jpg",
  },
  {
    number: 6,
    title: "Assemble Musakhan",
    description: "Place a piece of chicken over the bread. Sprinkle with toasted pine nuts and almonds.",
    image: "https://i.postimg.cc/jjWvG7WT/Musakhan_close_up_photo_scaled.jpg",
  },
];
const knafehSteps = [
  {
    number: 1,
    title: "Break Kataifi Dough",
    description: "Break kataifi dough and place it in the food processor.",
    image: "https://i.postimg.cc/gj53yMDr/Dough_in_food_processor_1.jpg",
  },
  {
    number: 2,
    title: "Shred the Dough",
    description: "Shred the dough in food processor (see pro tips for shredding size).",
    image: "https://i.postimg.cc/qqY2cmLM/Dough_in_a_food_processor_2.jpg",
  },
  {
    number: 3,
    title: "Add Butter and Coloring",
    description: "Remove dough from food processor. Pour melted butter and coloring over it.",
    image: "https://i.postimg.cc/C5tbCvNM/Dough_mixed_with_butter_1.jpg",
  },
  {
    number: 4,
    title: "Mix Dough with Butter",
    description: "Use your hands to combine melted butter and coloring with dough. Mix until everything is well integrated.",
    image: "https://i.postimg.cc/d3XGRWBJ/Dough_mixed_with_butter_2.jpg",
  },
  {
    number: 5,
    title: "Prepare Bottom Layer",
    description: "Grease the pan. Spread most of the dough, leaving about ¼ for the top.",
    image: "https://i.postimg.cc/brM106Tp/Layering_dough.jpg",
  },
  {
    number: 6,
    title: "Add Cheese Layer",
    description: "Add shredded cheese on top. Press with hand or bottom of glass.",
    image: "https://i.postimg.cc/MH410sDw/Layering_cheese_over_dough.jpg",
  },
  {
    number: 7,
    title: "Add Top Layer and Bake",
    description: "Spread rest of dough on top. Press again. Bake at 180°C for 20-30 minutes.",
    image: "https://i.postimg.cc/MH410sDw/Layering_cheese_over_dough.jpg",
  },
    {
    number: 8,
    title: "Сare flip into another platter",
    description: "Once baked, with care flip into another (either the same size or a slightly bigger) platter, drizzle the knafeh with about ½ - ¾ of the warm sugar syrup, and sprinkle crushed pistachios on top. ",
    image: "https://i.postimg.cc/5yjwCcw0/Knafeh_close_photo_scaled.jpg",
  },
];

const recipeData = {
  beshbarmak: {
    name: "Beshbarmak",
    subtitle: "Beshbarmak with Beef",
    image: "https://i.ibb.co/Dfpx6mzb/images.png",
    difficulty: "Intermediate",
    time: "3 hours",
    servings: "1 person",
    ingredients: [
      "• <strong>Beef</strong> — 200 g",
      "• <strong>Onion</strong> — ½ piece",
      "• <strong>Carrot</strong> — ½ piece",
      "• <strong>Flour</strong> — 80 g",
      "• <strong>Egg</strong> — ½ egg",
      "• <strong>Salt</strong> — to taste",
      "• <strong>Black pepper</strong> — to taste",
      "• <strong>Green onion</strong> — pinch",
      "• <strong>Water</strong> — as needed"
    ],
    steps: beshbarmakSteps,
    finalImage: "https://images.unsplash.com/photo-1649373860956-0974e8583c27"
  },
  
  maqluba: {
    name: "Maqluba",
    subtitle: "Upside-Down Rice Dish",
    image: "https://i.ibb.co/QFcjj7MD/photo-2025-11-29-15-35-10.jpg",
    difficulty: "Intermediate",
    time: "2 hours",
    servings: "2 person",
    ingredients: [
      "• <strong>Short-grain rice</strong> — 150 g (washed and soaked 20 min)",
      "• <strong>Chicken</strong> — 200 g, cut into pieces",
      "• <strong>Eggplant</strong> — 1 small, sliced and fried",
      "• <strong>Potato</strong> — 1 medium, sliced and fried (optional)",
      "• <strong>Onion</strong> — ½ piece, chopped",
      "• <strong>Tomato</strong> — ½ piece, sliced",
      "• <strong>Mixed spices</strong> — ½ tsp",
      "• <strong>Turmeric</strong> — ½ tsp",
      "• <strong>Cinnamon</strong> — ¼ tsp",
      "• <strong>Black pepper</strong> — ¼ tsp",
      "• <strong>Salt</strong> — to taste",
      "• <strong>Hot water</strong> — as needed for cooking"
    ],
    steps: maqlubaSteps,
    finalImage: "https://i.ibb.co/QFcjj7MD/photo-2025-11-29-15-35-10.jpg"
  },
plov: {
  name: "Plov",
  subtitle: "Chicken Plov",
  image: "",
  difficulty: "Intermediate",
  time: "1 hour",
  servings: "2 person",
  ingredients: [
    "• <strong>Chicken breast</strong> — 165-170 g",
    "• <strong>Onion</strong> — 100 g (1 small onion)",
    "• <strong>Vegetable oil</strong> — 27 ml (2 tablespoons)",
    "• <strong>Carrot</strong> — 165-170 g (1 large or 1.5 medium)",
    "• <strong>Long grain rice</strong> — 165-170 g",
    "• <strong>Chili powder</strong> — ⅙ tsp (small pinch)",
    "• <strong>Paprika</strong> — ⅙ tsp",
    "• <strong>Cumin</strong> — ⅓ tsp",
    "• <strong>Barberries</strong> — 1 tsp",
    "• <strong>Turmeric</strong> — ⅓ tsp",
    "• <strong>Garlic</strong> — ⅔ head (better 1 small head)",
    "• <strong>Salt</strong> — to taste (usually ½ tsp)"
  ],
  steps: plovSteps,
  finalImage: "https://i.ibb.co/rXT5VZb/5c501298-3ee6-4ece-9307-3e2c8e666a3b.webp"
},
kuurdak: {
  name: "Chicken Kuyrdak",
  subtitle: "Simple Homemade Chicken Stew",
  image: "",
  difficulty: "Easy",
  time: "40 minutes",
  servings: "1 person",
  ingredients: [
    "• <strong>Chicken</strong> — 250 g",
    "• <strong>Onion</strong> — ½ medium",
    "• <strong>Tomato</strong> — ½ medium",
    "• <strong>Olive oil</strong> — 2 tablespoons",
    "• <strong>Bell pepper</strong> — ½ piece",
    "• <strong>Salt</strong> — ½ tsp",
    "• <strong>Black pepper</strong> — ¼ tsp",
    "• <strong>Broth or water</strong> — 200 ml"
  ],
  steps: kuurdakSteps,
  finalImage: "https://i.postimg.cc/NMm9Xgnx/kuirdak-iz-kurici-119966.jpg",
  finalDescription: "Serve hot with rice or fresh bread. A light and comforting chicken dish."
},

musakhan: {
  name: "Musakhan",
  subtitle: "Sumac Chicken with Flatbread",
  image: "",
  difficulty: "Intermediate",
  time: "1 hour",
  servings: "1 person",
  ingredients: [
    "• <strong>Chicken legs or whole chicken</strong> — 2 legs or ~300 g, cut into pieces",
    "• <strong>Red onions</strong> — 2 medium, thinly sliced",
    "• <strong>Sumac</strong> — 2 tablespoons",
    "• <strong>Extra virgin olive oil</strong> — 3 tablespoons",
    "• <strong>Flatbread (taboon or naan)</strong> — 1 large piece",
    "• <strong>Allspice</strong> — ½ teaspoon",
    "• <strong>Cinnamon</strong> — ¼ teaspoon",
    "• <strong>Black pepper</strong> — ¼ teaspoon",
    "• <strong>Sea salt</strong> — to taste",
    "• <strong>Lemon juice</strong> — 1 tablespoon",
    "• <strong>Pine nuts</strong> — 1 tablespoon",
    "• <strong>Almonds</strong> — 1 tablespoon, toasted"
  ],
  steps: musakhanSteps,
  finalImage: "https://i.postimg.cc/4ywzKfKP/Eating-Musakhan-with-hands-2048x1366.jpg",
  finalDescription: "Serve hot with flatbread, topped with onions, chicken, and toasted nuts. Traditionally eaten by hand."
},

knafeh: {
  name: "Knafeh",
  subtitle: "Cheese Dessert with Kataifi Dough",
  image: "",
  difficulty: "Intermediate",
  time: "45 minutes",
  servings: "1 person",
  ingredients: [
    "• <strong>Kataifi dough (shredded phyllo)</strong> — 80 g",
    "• <strong>Unsalted butter or ghee</strong> — 40 g, melted",
    "• <strong>White unsalted stretchy cheese</strong> — 100 g",
    "• <strong>Sugar</strong> — 50 g",
    "• <strong>Water</strong> — 40 ml",
    "• <strong>Lemon juice</strong> — 1 teaspoon",
    "• <strong>Rose water or orange blossom water</strong> — ½ teaspoon (optional)"
  ],
  steps: knafehSteps,
  finalImage: "https://i.postimg.cc/5yjwCcw0/Knafeh_close_photo_scaled.jpg",
  finalDescription: "Serve warm, drizzled with sweet sugar syrup. Crispy on the outside, stretchy and cheesy on the inside."
},


};

interface RecipePageProps {
  recipeId: string;
  userId: string | null;
  onNavigateBack: () => void;
}

export function RecipePage({ recipeId, userId, onNavigateBack }: RecipePageProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const recipe = recipeData[recipeId as keyof typeof recipeData] || recipeData.beshbarmak;
  const steps = recipe.steps;
  const totalSteps = 1 + steps.length + 1;

  const isIngredientsPage = currentStep === 0;
  const isServingPage = currentStep === totalSteps - 1;
  const isCookingStep = !isIngredientsPage && !isServingPage;

  const cookingStepIndex = currentStep - 1;
  const step = isCookingStep ? steps[cookingStepIndex] : null;

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      logUserAction({
        userId,
        recipeId,
        action: 'previous_step',
        stepIndex: currentStep - 1,
      });
    }
  };
  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      logUserAction({
        userId,
        recipeId,
        action: 'next_step',
        stepIndex: currentStep + 1,
      });
    }
  };
  // const handleBack = () => (currentStep === 0 ? onNavigateBack() : handlePrevious());
  const handleBack = () => {
    onNavigateBack();
    logUserAction({
      userId,
      recipeId,
      action: 'back_to_cuisine',
      stepIndex: currentStep,
    });
  };

  const handleSubmitFeedback = () => {
    alert("Thank you for your feedback!");
    logUserAction({
      userId,
      recipeId,
      action: 'feedback',
      stepIndex: currentStep,
    });
    logUserRating({
      userId,
      recipeId,
      feedback: feedback,
      rating: rating,
    });
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-stone-50 via-white to-amber-50/30">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-amber-100/50 flex-shrink-0">
        <div className="max-w-5xl mx-auto px-8 py-5">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors mb-3"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Recipes</span>
          </button>

          <div className="flex items-center justify-between">
            <h1 className="text-amber-900">{recipe.name}</h1>
            <span className="text-gray-500">
              {isIngredientsPage
                ? "Ingredients"
                : isServingPage
                ? "Finish"
                : `Step ${currentStep} of ${totalSteps - 2}`}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-8 py-8">

          {/* INGREDIENTS PAGE */}
          {isIngredientsPage && (
            <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-8 mb-8">

              {/* Icons + Info */}
              <div className="grid md:grid-cols-3 gap-6 mb-8 text-lg text-gray-800">

                {/* Difficulty */}
                <div className="flex items-center gap-3">
                  <ChefHat className="w-7 h-7 text-amber-700" />
                  <div>
                    <h3 className="text-amber-800 mb-1">Difficulty</h3>
                    <p className="font-semibold">{recipe.difficulty}</p>
                  </div>
                </div>

                {/* Cooking Time */}
                <div className="flex items-center gap-3">
                  <Clock className="w-7 h-7 text-amber-700" />
                  <div>
                    <h3 className="text-amber-800 mb-1">Cooking Time</h3>
                    <p className="font-semibold">{recipe.time}</p>
                  </div>
                </div>

                {/* Servings */}
                <div className="flex items-center gap-3">
                  <Users className="w-7 h-7 text-amber-700" />
                  <div>
                    <h3 className="text-amber-800 mb-1">Servings</h3>
                    <p className="font-semibold">{recipe.servings}</p>
                  </div>
                </div>
              </div>

              {/* INGREDIENTS LIST */}
              <div className="border-t border-amber-100 pt-8">
                <h2 className="text-amber-900 mb-6">Ingredients for 1 Person</h2>

                <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: ingredient }} />
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* COOKING STEPS */}
          {isCookingStep && (
            <>
              <div className="mb-6">
                <div className="inline-flex items-center gap-3 bg-amber-500 text-white px-6 py-3 rounded-full shadow-lg">
                  <span className="text-xl">Step {step!.number}</span>
                </div>
              </div>

             <div className="mb-8">
  <div className="aspect-[4/3] max-h-96 rounded-3xl overflow-hidden shadow-xl border border-amber-100">
    {step!.image ? (
      <ImageWithFallback
        src={step!.image}
        alt={`Step ${step!.number}: ${step!.title}`}
        className="w-full h-full object-contain bg-white"
      />
    ) : (
      <div className="w-full h-full bg-amber-100 flex items-center justify-center">
        <span className="text-amber-800 text-lg">Image coming soon</span>
      </div>
    )}
  </div>
</div>

              <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-8 mb-8">
                <h2 className="text-amber-900 mb-4">{step!.title}</h2>
                <p className="text-gray-700 text-lg">{step!.description}</p>
              </div>
            </>
          )}

          {/* FINAL PAGE */}
          {isServingPage && (
            <>
              <div className="mb-6">
                <div className="inline-flex items-center gap-3 bg-amber-500 text-white px-6 py-3 rounded-full shadow-lg">
                  <span className="text-xl">Serve & Enjoy</span>
                </div>
              </div>

              <div className="mb-8">
                <div className="aspect-[4/3] max-h-96 rounded-3xl overflow-hidden shadow-xl border border-amber-100">
                  <ImageWithFallback
                    src={recipe.finalImage}
                    alt={`Finished ${recipe.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

    <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-8 mb-8 text-lg text-gray-700">
      {recipeId === "maqluba" 
        ? "Serve hot with yogurt or fresh salad. The dramatic presentation makes this dish perfect for special occasions."
        : recipeId === "musakhan"
        ? "Serve hot as a complete meal. Traditionally eaten with hands, tearing bread to wrap chicken and onions."
        : recipeId === "knafeh"
        ? "Serve warm for best texture. A beloved dessert that's crispy on top and creamy inside."
        : recipeId === "plov"
        ? "Serve hot with fresh vegetables or salad. Perfect as a complete meal on its own."
        : recipeId === "kuurdak"
        ? "Serve hot with fresh bread. A hearty traditional dish perfect for any occasion."
        : "Serve with warm sorpa in a separate bowl. Traditionally eaten with hands."}
    </div>

              {/* RATING */}
              <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-8 mb-8">
                <h3 className="text-amber-900 mb-4">Rate This Recipe</h3>

                <div className="flex items-center gap-2 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="transition-all hover:scale-110"
                    >
                      <Star
                        className={`w-10 h-10 ${
                          star <= (hoveredRating || rating)
                            ? "fill-amber-500 text-amber-500"
                            : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Share your thoughts..."
                  className="w-full p-4 border rounded-xl border-amber-200 focus:ring-2 focus:ring-amber-500 resize-none text-gray-700"
                  rows={4}
                />

                <p className="text-center text-gray-600 mt-4">
                  We would be very grateful for your feedback!
                </p>

                <button
                  onClick={handleSubmitFeedback}
                  className="w-full mt-6 px-8 py-4 bg-amber-500 text-white rounded-2xl hover:bg-amber-600 transition shadow-md"
                >
                  Submit Feedback
                </button>
              </div>
            </>
          )}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-amber-200 flex-shrink-0 shadow-lg">
        <div className="max-w-5xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">

            {/* INGREDIENTS PAGE */}
            {isIngredientsPage && (
              <>
                <div></div>
                <button
                  onClick={handleNext}
                  className="flex items-center gap-3 px-8 py-4 bg-amber-500 text-white rounded-2xl hover:bg-amber-600 shadow-md transition"
                >
                  Next <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* FINAL PAGE */}
            {isServingPage && (
              <button
                onClick={handlePrevious}
                className="flex items-center gap-3 px-8 py-4 bg-amber-500 text-white rounded-2xl hover:bg-amber-600 shadow-md transition"
              >
                <ChevronLeft className="w-6 h-6" /> Previous
              </button>
            )}

            {/* COOKING STEPS */}
            {isCookingStep && (
              <>
                <button
                  onClick={handlePrevious}
                  className="flex items-center gap-3 px-8 py-4 bg-amber-500 text-white rounded-2xl hover:bg-amber-600 shadow-md transition"
                >
                  <ChevronLeft className="w-6 h-6" /> Previous
                </button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalSteps - 1 }).map((_, idx) => (
                    <div
                      key={idx}
                      className={`rounded-full ${
                        idx === currentStep
                          ? "w-10 h-3 bg-amber-500"
                          : "w-3 h-3 bg-amber-200"
                      }`}
                    ></div>
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="flex items-center gap-3 px-8 py-4 bg-amber-500 text-white rounded-2xl hover:bg-amber-600 shadow-md transition"
                >
                  Next <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}