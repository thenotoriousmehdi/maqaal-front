import { useState } from 'react';
import React  from 'react'
import Artclimg from '../assets/artclimg.png'
import { FaRegBookmark , FaBookmark } from 'react-icons/fa';

const articleCard = ({article}) => {



    const [isWishlisted, setIsWishlisted] = useState(false);
   
    const toggleWishlist = () => {
       setIsWishlisted(!isWishlisted);
    };


  return (
    <div className=' h-[560px]  z-0  m-4  w-[410px]  transform transition-transform duration-200 ease-in-out hover:scale-105 font-body text-primary  shadow-md shadow-slate-400  text-2xl rounded-tl-3xl rounded-b-3xl flex flex-col items-start    bg-primary bg-opacity-7'>

       <div className=' h-80'> <img src={Artclimg} alt="articl image"  className='  mb-2   w-full '/>    </div>

        <span className=' px-6 py-3 font-semibold  '> {article.name} </span>
        <p className='px-6 ' >{article.title}</p>

        <FaRegBookmark   className={`productCard__wishlist  absolute bottom-7 right-6 ${ isWishlisted ? ' hidden' : ''}`    }  onClick={toggleWishlist}/>
        <FaBookmark   className={`productCard__wishlist  absolute bottom-7 right-6  ${ isWishlisted ? '  text-rosee' : 'hidden'}`    }  onClick={toggleWishlist}/>

      
        </div>
  )
}

export default articleCard