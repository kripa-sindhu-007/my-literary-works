"use client";
import { useState } from "react";
import { Heart } from "lucide-react";
import Layout from "../components/layout";
import ContentDisplay from "../components/content-display";

const initialPoems = [
  {
    title: "Whispers of the Wind",
    content: `In the gentle breeze, secrets unfold,
Carrying whispers of stories untold.
Leaves dance in the air, a silent ballet,
Nature's poetry on display.

Through meadows and forests, the wind does roam,
Bringing tales from lands unknown.
In its soft murmur, we find solace and grace,
A reminder of our small place.`,
    date: "June 15, 2023",
    likes: 0,
  },
  {
    title: "Urban Symphony",
    content: `Concrete jungle, steel and glass,
A cacophony of lives that pass.
Neon lights and blaring horns,
A city that never sleeps nor mourns.

In the chaos, beauty thrives,
A million stories, a million lives.
From dawn to dusk, dusk to dawn,
The urban symphony plays on.`,
    date: "July 2, 2023",
    likes: 0,
  },
];

export default function Page() {
  const [poems, setPoems] = useState(initialPoems);

  const handleLike = (index: number) => {
    const newPoems = [...poems];
    newPoems[index].likes += 1;
    setPoems(newPoems);
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 sm:mb-8 text-primary dark:text-gray-100">
          Poetry Collection
        </h1>
        <p className="text-center text-secondary dark:text-gray-400 mb-8 sm:mb-12">
          Explore the rhythms and rhymes of my poetic expressions.
        </p>
        {poems.map((poem, index) => (
          <div key={index} className="mb-8">
            <ContentDisplay {...poem} />
            <div className="flex justify-between items-center mt-2">
              <button
                onClick={() => handleLike(index)}
                className="text-sm text-primary dark:text-gray-200 hover:text-secondary dark:hover:text-gray-400 transition-colors"
              >
                <Heart
                  className={`h-5 w-5 ${poem.likes > 0 ? 'text-red-500' : 'text-gray-500'}`}
                  fill={poem.likes > 0 ? 'currentColor' : 'none'}
                />
                <span className="ml-1">{poem.likes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
