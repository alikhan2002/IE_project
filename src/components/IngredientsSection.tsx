import { ImageWithFallback } from "./figma/ImageWithFallback";

const ingredients = [
  { category: "For the Broth", items: [
    { amount: "1.5 kg", name: "beef (bone-in for best flavor)" },
    { amount: "3 pcs", name: "onions" },
    { amount: "1 pc", name: "carrot" },
    { amount: "3-4 L", name: "water" },
    { amount: "to taste", name: "salt" },
    { amount: "to taste", name: "black pepper" },
  ]},
  { category: "For the Dough", items: [
    { amount: "500 g", name: "flour" },
    { amount: "1 pc", name: "egg" },
    { amount: "1 tsp", name: "salt" },
    { amount: "200 ml", name: "water" },
  ]},
  { category: "For Serving", items: [
    { amount: "1 bunch", name: "green onion (chopped)" },
  ]},
];

export function IngredientsSection() {
  return (
    <section className="mt-12">
      <h2 className="text-amber-900 mb-6">Ingredients</h2>
      
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Ingredients Image */}
        <div className="order-2 lg:order-1">
          <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-amber-100">
            <ImageWithFallback
                src="https://images.unsplash.com/photo-1574797668796-3c321fee0d01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwaW5ncmVkaWVudHMlMjBmbGF0JTIwbGF5fGVufDF8fHx8MTc2MzIxMTEyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Beshbarmak ingredients flat lay"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Ingredients List */}
        <div className="order-1 lg:order-2 space-y-6">
          {ingredients.map((category, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-amber-100">
              <h3 className="text-amber-800 mb-4">{category.category}</h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <svg className="w-2 h-2 text-amber-500 mt-2 flex-shrink-0" viewBox="0 0 8 8" fill="currentColor">
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
      </div>
    </section>
  );
}
