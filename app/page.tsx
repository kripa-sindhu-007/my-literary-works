import Layout from './components/layout'
import ContentDisplay from './components/content-display'

// This would typically come from a database or CMS
const latestPoem = {
  title: "Urban Symphony",
  content: `Concrete jungle, steel and glass,
A cacophony of lives that pass.
Neon lights and blaring horns,
A city that never sleeps nor mourns.

In the chaos, beauty thrives,
A million stories, a million lives.
From dawn to dusk, dusk to dawn,
The urban symphony plays on.`,
  date: "July 2, 2023"
}

const latestStory = {
  title: "The Quantum Barista",
  content: `Jake had always been an ordinary barista, until the day he wasn't. It started with a strange customer who ordered a "quantum latte with entangled foam." Jake laughed it off, but as he prepared the drink, something extraordinary happened.

The coffee began to exist in multiple states simultaneously. Hot and cold, bitter and sweet, liquid and solid. Jake blinked, wondering if the lack of sleep was finally getting to him.

But then the customer took a sip, and reality itself seemed to ripple...`,
  date: "September 5, 2023"
}

export default function Home() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-primary dark:text-gray-100">Welcome to My Literary Corner</h1>
        <p className="text-center text-secondary dark:text-gray-400 mb-8 sm:mb-12">
          Explore a world of emotions and imagination through my poetry and short stories.
        </p>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-primary dark:text-gray-200">Latest Works</h2>
        <div className="space-y-8">
          <section>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-secondary dark:text-gray-300">Latest Poem</h3>
            <ContentDisplay {...latestPoem} />
          </section>
          <section>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-secondary dark:text-gray-300">Latest Short Story</h3>
            <ContentDisplay {...latestStory} />
          </section>
        </div>
      </div>
    </Layout>
  )
}

