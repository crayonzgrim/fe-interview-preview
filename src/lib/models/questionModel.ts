import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  contents: [
    {
      title: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      likes: {
        type: Number,
        required: true
      },
      unlikes: {
        type: Number,
        required: true
      },
      createdAt: {
        type: Date,
        required: true
      },
      updatedAt: {
        type: Date,
        required: true
      }
    }
  ]
})

export const questionModel =
  mongoose.models.question || mongoose.model('question', schema)
