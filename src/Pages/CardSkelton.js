
export default function  CardSkelton({quntite, classname}){

  const items = new Array(quntite).fill(0);
const nav = `vadpdp`
  return <div className={`flex items-center justify-start gap-8 flex-wrap ${classname}`}>
    {
      items.map(item =><div className="flex items-center space-x-4 animate-pulse">
      <div className="w-[320px] h-[475px] rounded shadow-lg min-w-80 bg-gray-100">
        <div className='w-11/12 mt-3 rounded-md mx-auto bg-gray-200 h-[200px]'></div>
        <div className='flex flex-col gap-3 items-center justify-center mt-28'>
          <div className='w-[50px] h-3 rounded-lg bg-gray-200'></div>
          <div className='w-[150px] h-3 rounded-lg bg-gray-200'></div>
          <div className='w-[150px] h-3 rounded-lg bg-gray-200'></div>
        </div>
      </div>
    </div> 
    )}
  </div>
};
