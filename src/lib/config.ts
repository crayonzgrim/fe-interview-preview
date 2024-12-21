import mongoose from 'mongoose'

export const connectDB = async () => {
  const uri = `mongodb+srv://frontend-interview:BNw0xB2HWyE9mmZA@cluster0.b01lb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

  await mongoose.connect(uri)

  console.log('Connected to MongoDB')
}
