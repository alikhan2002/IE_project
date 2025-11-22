import { ImageWithFallback } from "./figma/ImageWithFallback";

const steps = [
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
      "Slice the remaining 2 onions into half-rings. Place in a bowl and pour hot broth over them. Let steep for 10-15 minutes. \nStrain the broth and season generously with salt and black pepper to taste. Return to heat.",
    image: "https://i.ibb.co/nt5MTsr/wmremove-transformed.jpg",
  },
  {
    number: 10,
    title: "Prepare for Cooking Dough",
    description:
      "Using a skimmer, remove the onions from the broth and transfer them into a bowl.\nAdd 1-2 cups of water to the broth to dilute it slightly, ensuring there's enough liquid to cook all the dough pieces. Bring the broth to a rapid boil. Add the dough pieces in batches, cooking for about 2 minutes until they float.",
    image:
      "https://i.ibb.co/PG7crDRH/wmremove-transformed-2.jpg",
  },

  {
    number: 12,
    title: "Remove with Skimmer",
    description:
      "Use a slotted spoon or skimmer to remove the cooked dough pieces. Place them on a large serving plate. Continue cooking dough in batches. Layer the cooked dough on the plate, building up the base.",
    image:
      "https://i.ibb.co/1tXL2Lwy/wmremove-transformed-4.jpg",
  },

  {
    number: 15,
    title: "Top with Beef and Onions",
    description:
      "Arrange the beef pieces on top of the dough. Add the braised onions (drained) over the beef.",
    image: "https://i.ibb.co/bgmg1gNV/27.jpg",
  },
  {
    number: 16,
    title: "Garnish and Serve",
    description:
      "Sprinkle generously with fresh chopped green onions. Serve hot with the broth in separate bowls on the side. Enjoy with your hands - the traditional way!",
    image:
      "https://i.ibb.co/0y4BMrZ0/wmremove-transformed-6-49d3b5af-471c-4807-9e31-538201151beb.jpg",
  },
];

export function StepsSection() {
  return (
    <section className="mt-16">
      <h2 className="text-amber-900 mb-8">
        Step-by-Step Instructions
      </h2>

      <div className="space-y-8">
        {steps.map((step, idx) => (
          <div
            key={step.number}
            className="bg-white rounded-2xl overflow-hidden shadow-md border border-amber-100 hover:shadow-lg transition-shadow"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div
                className={`${idx % 2 === 0 ? "lg:order-1" : "lg:order-2"} relative`}
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

              {/* Content */}
              <div
                className={`${idx % 2 === 0 ? "lg:order-2" : "lg:order-1"} p-8 flex flex-col justify-center`}
              >
                <h3 className="text-amber-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cooking Tips */}
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
            <span>
              The broth should be rich and flavorful - don't
              rush the simmering process.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-500 mt-1">•</span>
            <span>
              The thinner you roll the dough, the more authentic
              and delicate the dish will be.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-500 mt-1">•</span>
            <span>
              Traditionally eaten with hands (hence "five
              fingers"), but utensils are perfectly acceptable!
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-500 mt-1">•</span>
            <span>
              Leftover broth can be saved for soups or reheating
              the dish the next day.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}