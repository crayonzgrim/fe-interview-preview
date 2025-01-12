import { AnswerList } from '@/components/answers'

export default function AnswerPage() {
  return (
    <div style={{ border: '2px dashed red' }}>
      <h3>AnswerPage</h3>

      <div className="mt-10">
        <AnswerList />
      </div>
    </div>
  )
}
