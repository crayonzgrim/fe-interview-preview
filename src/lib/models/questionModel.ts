import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  authorImg: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

export const questionModel =
  mongoose.models.question || mongoose.model('question', schema)
