import { ImageWithFallback } from "./figma/ImageWithFallback";

const ingredients = [
  {
    category: "Main Ingredients",
    items: [
      {
        amount: "2 cups",
        name: "short-grain rice (washed and soaked 20 min)",
      },
      {
        amount: "1 whole",
        name: "chicken, cut into 4–6 pieces",
      },
      {
        amount: "2 pcs",
        name: "eggplants, sliced and fried (or roasted)",
      },
      {
        amount: "1–2 pcs",
        name: "potatoes, sliced and fried (optional)",
      },
      {
        amount: "1 pc",
        name: "onion, chopped",
      },
      {
        amount: "2–3 pcs",
        name: "tomatoes, sliced (for the bottom of the pot)",
      },
    ],
  },
  {
    category: "Spices",
    items: [
      { amount: "1 tsp", name: "mixed spices" },
      { amount: "1 tsp", name: "turmeric" },
      { amount: "½ tsp", name: "cinnamon" },
      { amount: "½ tsp", name: "black pepper" },
      { amount: "to taste", name: "salt" },
    ],
  },
  {
    category: "For Cooking",
    items: [
      { amount: "as needed", name: "hot water for boiling and cooking" },
      { amount: "3 tbsp", name: "olive oil (for frying / browning)" },
    ],
  },
];

export function MaqlubaIngredientsSection() {
  return (
    <section className="mt-12">
      <h2 className="text-amber-900 mb-6">Ingredients</h2>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Ingredients list – стиль и размеры такие же, как у общего компонента */}
        <div className="order-1 lg:order-2 space-y-6">
          {ingredients.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-sm border border-amber-100"
            >
              <h3 className="text-amber-800 mb-4">{category.category}</h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-3"
                  >
                    <svg
                      className="w-2 h-2 text-amber-500 mt-2 flex-shrink-0"
                      viewBox="0 0 8 8"
                      fill="currentColor"
                    >
                      <circle cx="4" cy="4" r="4" />
                    </svg>
                    <span className="flex-1">
                      <span className="text-amber-700">{item.amount}</span>
                      {" — "}
                      <span className="text-gray-700">{item.name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Второй столбец оставляем под изображение / декор, как в общих компонентах.
            Если картинка не нужна – можно закомментировать весь блок. */}
        <div className="order-2 lg:order-1">
          <div className="rounded-2xl overflow-hidden shadow-md border border-amber-100">
            <ImageWithFallback
              src="https://i.ibb.co/QFcjj7MD/photo-2025-11-29-15-35-10.jpg"
              alt="Maqluba ingredients"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
