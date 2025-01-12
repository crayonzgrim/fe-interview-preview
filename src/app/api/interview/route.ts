import { connectDB } from '@/lib/config'
import { interviewModel } from '@/lib/models/interviewModel'
import { writeFile } from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'

const loadDB = async () => {
  await connectDB()
}

loadDB()

// Post Answer
export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const timeStamp = Date.now()

  const image = formData.get('image')
  if (!image || !(image instanceof File)) {
    return NextResponse.json({ error: 'Invalid image file' }, { status: 400 })
  }

  const imageByteData = await image.arrayBuffer()
  const buffer = Buffer.from(imageByteData)
  const path = `./public/${timeStamp}_${image.name}.png`

  await writeFile(path, buffer)

  const imageUrl = `/${timeStamp}_${image.name}`

  const formattedData = {
    title: formData.get('title'),
    description: formData.get('description'),
    category: formData.get('category'),
    author: formData.get('author'),
    authorImg: `${formData.get('authorImg')}`,
    image: `${imageUrl}`,
    likes: 0,
    unlikes: 0,
    createdAt: Date.now(),
    updatedAt: Date.now()
  }

  // await questionModel.create(formattedData)
  await interviewModel.create(formattedData)
  console.log('SAVED!!! >> ', formattedData)

  return NextResponse.json({ success: true, message: 'Add Interview' })
}
