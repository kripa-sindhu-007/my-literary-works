import Layout from '../components/layout'
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-900 dark:text-gray-100">About the Author</h1>
        <Card className="mb-6 sm:mb-8 bg-gray-50 dark:bg-gray-800">
          <CardContent className="pt-6">
            <p className="text-gray-900 dark:text-gray-400 mb-4">
              Hello, I'm Kripa Sindhu, a passionate writer with a love for weaving words into tapestries of emotion and imagination. 
              I've been writing poetry and short stories for over a decade, drawing inspiration from the world around me and the 
              depths of human experience.
            </p>
            <p className="text-gray-900 dark:text-gray-400 mb-4">
              My work often explores themes of nature, urban life, and the subtle nuances of human relationships. I believe in the 
              power of words to transport, transform, and touch hearts.
            </p>
            <p className="text-gray-900 dark:text-gray-400 mb-4">
              When I'm not writing, you can find me wandering through bookstores, sipping coffee in quaint cafes, or taking long 
              walks in the park, always with a notebook in hand, ready to capture the next spark of inspiration.
            </p>
            <p className="text-gray-900 dark:text-gray-400">
              Thank you for visiting my literary corner. I hope my words resonate with you and perhaps inspire your own creative journey.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

