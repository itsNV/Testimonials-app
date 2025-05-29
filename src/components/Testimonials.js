import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from './Card';

function Testimonials(props) {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftHandler() {
        if (index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index-1)
        }
    }

    function rightHandler() {
        if (index + 1 >= reviews.length) {
            setIndex(0)
        }
        else {
            setIndex(index + 1);
        }
    }

    function surpriseHandler() {
       setIndex(Math.floor(Math.random() * reviews.length))
    }

    return (
        <div className='w-[90vw] sm:w-[85vw] md:w-[700px] bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col justify-center items-center
            mt-4 sm:mt-6 md:mt-10 pt-20 pb-6 px-6 sm:pt-24 sm:pb-8 sm:px-8 md:pt-28 md:pb-10 md:px-10 
            transition-all duration-700 hover:shadow-2xl rounded-xl sm:rounded-2xl border border-slate-700'>
            

            <div className='relative w-full'>
                <Card review={reviews[index]} />
            </div>
            
            <div className='flex text-2xl sm:text-3xl mt-6 sm:mt-8 md:mt-10 gap-4 sm:gap-6 text-blue-400 font-bold mx-auto'>
                <button 
                    onClick={leftHandler}
                    className='cursor-pointer hover:text-blue-500 transition-colors duration-300 
                        transform hover:scale-110 active:scale-95 bg-slate-800/50 p-3 sm:p-4 rounded-full'>
                    <FaChevronLeft className="w-5 h-5 sm:w-6 sm:h-6"/>
                </button>
                <button 
                    onClick={rightHandler}
                    className='cursor-pointer hover:text-blue-500 transition-colors duration-300 
                        transform hover:scale-110 active:scale-95 bg-slate-800/50 p-3 sm:p-4 rounded-full'>
                    <FaChevronRight className="w-5 h-5 sm:w-6 sm:h-6"/>
                </button>
            </div>

            <div className='mt-6 sm:mt-8'>
                <button
                    onClick={surpriseHandler}
                    className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 
                        transition-all duration-300 cursor-pointer px-6 sm:px-8 md:px-10 py-2 sm:py-3 rounded-full 
                        font-bold text-white text-base sm:text-lg transform hover:scale-105 active:scale-95 
                        shadow-lg hover:shadow-blue-500/25'>
                    Surprise Me
                </button>
            </div>
        </div>
    );
}

export default Testimonials;