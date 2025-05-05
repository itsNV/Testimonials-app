import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";
function Card({review}) {

    console.log(review.text);
    return (
        <div className='flex flex-col md:relative'>
            <div className='absolute lg:top-[-7rem] top-[5rem] z-[10] mx-auto'>
        <img 
        className="aspect-square rounded-full lg:w-[140px] lg:h-[140px] z-[25] w-[5rem]"
        src={review.image}/>
        <div className='lg:w-[140px] lg:h-[140px] w-[5rem] h-[5rem] bg-violet-500 rounded-full absolute
         lg:top-[-6px] z-[-10] lg:left-[10px] top-[-5px] left-[10px]'></div>
      </div>

      <div className='text-center mt-7'>
        <p className='tracking-wider font-bold text-2xl capitalize text-white'>{review.name}</p>
        <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
      </div>

      <div className='text-violet-400 mx-auto mt-5'>
        <FaQuoteLeft/>
      </div>

      <div className='text-center mt-4 text-slate-500'>
        {review.text}
      </div>

      <div  className='text-violet-400 mx-auto mt-5'>
        <FaQuoteRight/>
      </div>

        </div>
    );
}

export default Card;