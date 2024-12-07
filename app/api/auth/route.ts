import { NextResponse } from 'next/server'

// In a real application, use a secure method to store and compare credentials
const ADMIN_USERNAME = 'admin'
const ADMIN_PASSWORD = 'password123'

export async function POST(request: Request) {
  const { username, password } = await request.json()

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    return NextResponse.json({ success: true })
  } else {
    return NextResponse.json({ success: false }, { status: 401 })
  }
}

