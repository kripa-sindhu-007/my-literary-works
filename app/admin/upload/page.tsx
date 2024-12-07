'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '../../components/layout'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminUpload() {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [text, setText] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true'
    if (!isLoggedIn) {
      router.push('/admin/login')
    }
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('')

    const response = await fetch('/api/upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, category, text, date: new Date().toISOString() }),
    })

    const data = await response.json()

    if (data.success) {
      setMessage('Content uploaded successfully!')
      setTitle('')
      setCategory('')
      setText('')
    } else {
      setMessage('Error uploading content')
    }
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto mt-8">
        <Card className="bg-background-secondary">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-primary">Upload New Content</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-primary dark:text-gray-300">
                  Title
                </label>
                <Input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-primary dark:text-gray-300">
                  Category
                </label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="poetry">Poetry</SelectItem>
                    <SelectItem value="short_story">Short Story</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="text" className="block text-sm font-medium text-primary dark:text-gray-300">
                  Content
                </label>
                <Textarea
                  id="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                  rows={10}
                />
              </div>
              {message && <p className="text-green-500 text-sm">{message}</p>}
              <Button type="submit" className="w-full">
                Upload
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

