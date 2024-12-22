import { connectDB } from '@/lib/config'
import { questionModel } from '@/lib/models/questionModel'
import { NextRequest, NextResponse } from 'next/server'

const loadDB = async () => {
  await connectDB()
}

loadDB()

// GET ALL Categories
export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id')

  if (id) {
    const questions = await questionModel.findById(id)
    return NextResponse.json(questions)
  } else {
    const questions = await questionModel.find({})
    return NextResponse.json({ questions })
  }
}
