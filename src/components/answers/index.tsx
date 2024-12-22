export const AnswerList = () => {
  return (
    <div className="flex flex-col items-center justify-center border border-red-900">
      <div className="w-[80rem]">
        <h4>{TEMP.title}</h4>
        <p>{TEMP.content}</p>
      </div>
    </div>
  )
}

const TEMP = {
  id: 0,
  title: '리액트의 라이프 사이클에 대해서 설명하세요',
  image: '',
  content:
    'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellent ',
  like: 0,
  unlike: 0,
  createdDate: '2023-05-01',
  updatedDate: '2023-05-01'
}
