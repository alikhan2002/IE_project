import { ImageWithFallback } from "./figma/ImageWithFallback";

const steps = [
  {
    number: 1,
    title: "Prepare Chicken",
    description:
      "Season the chicken pieces with salt, black pepper, and the spice mix. Brown them in a large pot with olive oil until lightly golden.",
    image:
      "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=1000&q=80",
  },
  {
    number: 2,
    title: "Fry Vegetables",
    description:
      "Slice the eggplants and potatoes, then fry until golden brown (or roast with a little oil). Set aside on paper towels to drain excess oil.",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1000&q=80",
  },
  {
    number: 3,
    title: "Layer the Pot",
    description:
      "Place tomato slices at the bottom of a clean pot. Add a layer of chicken, then fried vegetables, and finally the soaked, drained rice on top.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=80",
  },
  {
    number: 4,
    title: "Add Water and Cook",
    description:
      "Pour hot chicken broth or water until it covers the rice by about 1–2 cm. Bring to a gentle boil, then cover and cook on low heat for 30–40 minutes until the rice is tender.",
    image:
      "https://images.unsplash.com/photo-1585032224-8c33764fe7a0?auto=format&fit=crop&w=1000&q=80",
  },
  {
    number: 5,
    title: "Rest, Flip, and Serve",
    description:
      "Let the pot rest off the heat for 10 minutes. Place a large plate over the pot, carefully flip it upside down, and lift the pot to reveal the maqluba. Garnish with toasted nuts and parsley.",
    image: "https://i.ibb.co/QFcjj7MD/photo-2025-11-29-15-35-10.jpg",
  },
];

export function MaqlubaStepsSection() {
  return (
    <section className="mt-16">
      <h2 className="text-amber-900 mb-8">Step-by-Step Instructions</h2>

      <div className="space-y-8">
        {steps.map((step, idx) => (
          <div
            key={step.number}
            className="bg-white rounded-2xl overflow-hidden shadow-md border border-amber-100 hover:shadow-lg transition-shadow"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div
                className={`${
                  idx % 2 === 0 ? "lg:order-1" : "lg:order-2"
                } relative`}
              >
                <div className="absolute top-4 left-4 bg-amber-500 text-white w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-lg">
                  <span>{step.number}</span>
                </div>
                <ImageWithFallback
                  src={step.image}
                  alt={`Step ${step.number}: ${step.title}`}
                  className="w-full aspect-video object-cover"
                />
              </div>

              {/* Text */}
              <div
                className={`${
                  idx % 2 === 0 ? "lg:order-2" : "lg:order-1"
                } p-8 flex flex-col justify-center`}
              >
                <h3 className="text-amber-900 mb-3">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pro Tips – в том же стиле, что у общего компонента */}
      <div className="mt-12 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6">
        <h3 className="text-amber-900 mb-4 flex items-center gap-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Pro Tips
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-amber-500 mt-1">•</span>
            <span>Soak the rice for at least 20 minutes for fluffier results.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-500 mt-1">•</span>
            <span>
              Let the pot rest before flipping so the layers hold together nicely.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-500 mt-1">•</span>
            <span>Use a wide, flat serving plate for the dramatic flip.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-500 mt-1">•</span>
            <span>Serve with yogurt or a fresh salad on the side.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
