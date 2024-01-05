import React from 'react'
import pic from '../assests/pic1.jpg'
import pic2 from '../assests/pic2.png'
import pic3 from '../assests/sticker.png'

const Compte_validé  = () => {
  
  return (
    
     <div className="w-full min-h-screen flex items-start ">
    <div  className="flexbox flex-col w-1/2 h-screen flex items-center justify-center  ">
    <div className=" h-12 w-full items-center bg-customBlue opacity-5 p-2 shadow-2xl rounded-full filter blur-md  "></div>
    <div className="flex flex-col w-[726px] h-[901px] items-center justify-evenly  bg-white  shadow-2xl  rounded-2xl ">
     <img
      src={pic2}
      alt="Logo" 
      className='w-15 h-9 mt-2 mb-8  bg-transparent '
     ></img>
    
      <img
      src={pic3}
      alt="Logo" 
      className='w-[141.99px] h-[142.34px] bg-slate-700 rounded-full bg-transparent'
     ></img>
      < div className='flex flex-col items-center  mb-8 gap-8'>
     <div class="text-center text-slate-700 text-5xl font-bold font-['Raleway']">Félicitations!</div>
     <div class="w-[869.14px] text-center text-slate-700 text-3xl font-medium font-['Raleway'] leading-[45px]">Félicitations, vous avez terminer la <br/>création de votre compte avec succès. </div>
     </div>
     <button
      className="bg-customBlue w-[528px] h-[65px] font-['SF Pro'] text-white font-normal py-2 px-4 rounded-tl-full rounded-bl-full rounded-tr-none rounded-br-full
       "
    >
    Vers l'acceuil

    </button>
     </div>
     <div className="h-12 w-full items-center bg-customRed opacity-10 p-4 shadow-2xl rounded-full filter blur-md  "></div>
    </div>
    
    <div className="w-1/2 h-screen flex items-center justify-center">
      <img src={pic} alt='' className="h-full w-full object-cover"/>
     </div>
     </div>

  )
} ;

export default Compte_validé
