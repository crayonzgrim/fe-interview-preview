interface QuestionListProps {
  _id: string
  category: string
  title: string
  description: string
  contents: {
    title: string
    image: string
    likes: number
    unlikes: number
    createdAt: string
    updatedAt: string
  }[]
}

export default function QuestionList({}: QuestionListProps) {
  return <div>QuestionList</div>
}
