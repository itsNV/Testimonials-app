import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Card({review}) {
    return (
        <div className='flex flex-col relative transform transition-all duration-500 hover:scale-105 w-full max-w-2xl px-4 sm:px-6 md:px-8 pt-8'>
            <div className='absolute left-6 -top-16 sm:left-12 md:left-16 lg:left-56'>
                <img 
                    className="aspect-square rounded-full w-[120px] h-[120px] md:w-[140px] md:h-[140px] z-[25] object-cover border-4 border-white shadow-lg transition-transform duration-300 hover:scale-110"
                    src={review.image}
                    alt={review.name}
                />
                <div className='w-[120px] h-[120px] md:w-[140px] md:h-[140px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-full absolute
                    top-[-6px] left-[10px] z-[-10] animate-pulse'></div>
            </div>

            <div className='text-center mt-16 md:mt-20'>
                <p className='tracking-wider font-bold text-xl md:text-2xl capitalize text-white mb-1'>{review.name}</p>
                <p className='text-blue-300 uppercase text-xs md:text-sm font-medium tracking-wider'>{review.job}</p>
            </div>

            <div className='text-blue-400 mx-auto mt-4 md:mt-5 transform transition-all duration-300 hover:scale-125'>
                <FaQuoteLeft className="w-5 h-5 md:w-6 md:h-6"/>
            </div>

            <div className='text-center mt-3 md:mt-4 text-gray-300 font-light leading-relaxed px-2 md:px-4 text-sm md:text-base'>
                {review.text}
            </div>

            <div className='text-blue-400 mx-auto mt-4 md:mt-5 transform transition-all duration-300 hover:scale-125'>
                <FaQuoteRight className="w-5 h-5 md:w-6 md:h-6"/>
            </div>
        </div>
    );
}

export default Card;