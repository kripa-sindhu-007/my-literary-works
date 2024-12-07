'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import Layout from '../components/layout'
import ContentDisplay from '../components/content-display'

const initialStories = [
  {
    title: "The Forgotten Library",
    content: `In a dusty corner of the city, there stood a library that time had forgotten. Its windows were clouded with age, and its door creaked with the weight of countless stories within. 

Sarah, a curious teenager, stumbled upon it one rainy afternoon. As she pushed open the heavy oak door, the musty scent of old books enveloped her. Shelves towered to the ceiling, their contents a mystery waiting to be unraveled.

As she ran her fingers along the spines of the books, one seemed to call out to her. It was a small, leather-bound volume with no title. Sarah opened it, and as she read the first line, the world around her began to shift...`,
    date: "August 10, 2023",
    likes: 0
  },
  {
    title: "The Quantum Barista",
    content: `Jake had always been an ordinary barista, until the day he wasn't. It started with a strange customer who ordered a "quantum latte with entangled foam." Jake laughed it off, but as he prepared the drink, something extraordinary happened.

The coffee began to exist in multiple states simultaneously. Hot and cold, bitter and sweet, liquid and solid. Jake blinked, wondering if the lack of sleep was finally getting to him.

But then the customer took a sip, and reality itself seemed to ripple...`,
    date: "September 5, 2023",
    likes: 0
  }
]

export default function Stories() {
  const [stories, setStories] = useState(initialStories)

  const handleLike = (index: number) => {
    const newStories = [...stories]
    newStories[index].likes += 1
    setStories(newStories)
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 sm:mb-8 text-primary dark:text-gray-100">
          Short Stories
        </h1>
        <p className="text-center text-secondary dark:text-gray-400 mb-8 sm:mb-12">
          Dive into worlds of imagination with these short tales.
        </p>
        {stories.map((story, index) => (
          <div key={index} className="mb-8">
            <ContentDisplay {...story} />
            <div className="flex justify-between items-center mt-2">
              <button
                onClick={() => handleLike(index)}
                className="text-sm text-primary dark:text-gray-200 hover:text-secondary dark:hover:text-gray-400 transition-colors"
              >
                <Heart
                  className={`h-5 w-5 ${story.likes > 0 ? 'text-red-500' : 'text-gray-500'}`}
                  fill={story.likes > 0 ? 'currentColor' : 'none'}
                />
                <span className="ml-1">{story.likes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

