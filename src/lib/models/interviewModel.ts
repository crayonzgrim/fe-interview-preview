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
  authorImg: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  unlikes: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
})

export const interviewModel =
  mongoose.models.interview || mongoose.model('interview', schema)
