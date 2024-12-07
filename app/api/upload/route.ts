import { NextResponse } from 'next/server'

// In a real application, this would interact with a database
let content: any[] = []

export async function POST(request: Request) {
  const { title, category, text, date } = await request.json()

  const newContent = { id: Date.now(), title, category, text, date }
  content.push(newContent)

  return NextResponse.json({ success: true, content: newContent })
}

export async function GET() {
  return NextResponse.json({ content })
}

