import { Card, CardContent } from "@/components/ui/card"

interface ContentDisplayProps {
  title: string
  content: string
  date: string
}

export default function ContentDisplay({ title, content, date }: ContentDisplayProps) {
  return (
    <Card className="mb-6 sm:mb-8 bg-background-secondary dark:bg-gray-800">
      <CardContent className="pt-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-primary dark:text-gray-100">{title}</h2>
        <p className="text-sm text-secondary dark:text-gray-400 mb-4">{date}</p>
        <div className="prose dark:prose-invert prose-sm sm:prose-base max-w-none">
          {content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

