import { CategoryList } from '@/components/categories'

export default function Home() {
  return (
    <div className="flex h-[calc(100dvh-6rem)] w-full flex-col items-center">
      <h1>Home</h1>

      <CategoryList />
    </div>
  )
}
