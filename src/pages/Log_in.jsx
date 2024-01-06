import React , { useState } from 'react'
import { Link } from 'react-router-dom';
import pic2 from '../assets/pic2.png'
import pic from '../assets/pic1.jpg'



const Log_in = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setErrorEmail('Veuillez saisir votre email');
    } 
    else {
      setErrorEmail('');
      if (!password) {
        setErrorPassword('Veuillez saisir  votre mot de passe ');
      } else {
        setErrorPassword('');
        if (!emailRegex.test(email)) {
          setError('Veillez saisir votre mail correctement');
        } else {
          setError('');
          // Envoyer le formulaire ou effectuer d'autres actions
        }
      }
    }

    
  }
  
  return (
    <div className="w-full min-h-screen flex items-start ">
    <div  className="flexbox flex-col w-1/2 h-screen flex items-center justify-center  ">
    <div className=" h-12 w-full items-center bg-customRed opacity-5 p-2 shadow-2xl rounded-full filter blur-md  "></div>
     <div className="flex flex-col w-[727px] h-[901px] items-center justify-evenly px-0 py-0  pt-0 pb-20 bg-white  shadow-2xl  rounded-2xl ">
     <img
      src={pic2}
      alt="Logo" 
      className='w-15 h-9 mt-2 mb-8 px-0 py-0  bg-transparent '
     ></img>
     < div className='flex flex-col items-center justify-between gap-4'>
     <div className="w-[186px] h-[29px] text-center text-slate-700 text-3xl  font-extrabold font-['Raleway']">Bienvenue</div>
     <div className="w-[449px] h-[61px] text-center text-black text-[15px] font-medium font-['Raleway']">Connecter vous à votre compte en remplissant le formulaire de connexion avec vos informations personnelles<br/></div> </div>
     <div className='flex flex-col mt-2 gap-2 justify-evenly items-center'>
     <input
     id='email'
     type ="email"
     value={email}
     onChange={handleEmailChange}
     placeholder='  Entrez votre email '
     className='w-[528px] h-20 my-4  text-black text-[18px]   bg-slate-200 rounded-[10px] '
     />
    
     <input
     id='password'
     type ="password"
     placeholder='  Mot de passe '
    
     value={password}
        onChange={handlePasswordChange}
    className='w-[528px] h-20  text-black text-[18px]   bg-slate-200 rounded-[10px] '
     />
    </div>
       {errorEmail && <p className="text-red-500">{errorEmail}</p>}
        {errorPassword&& <p className="text-red-500">{errorPassword}</p>}
        {error && <p className="text-red-500">{error}</p>}
       <div className='py-4'>
      <button onClick={handleSubmit}
      type="submit"
       className="bg-customBlue w-[528px] h-[65px] text-white  font-normal py-2 px-4 rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
      Se connecter 
     </button>
     </div>
     
     <div className='flex flex-col mt-2 gap-4 justify-normal items-center'>
     <div className="w-[397px] h-[0px] opacity-40 border border-slate-700"></div>
    <div className='flex  w-full  justify-between '>
    <div className="text-black text-opacity-40 pl-4 pb-0 text-[15px] font-['SF Pro']">Vous n'avez pas encore de compte? </div>
    <Link to={"/SignIn"}>
    <button className="text-customBlue  cursor-pointer  text-[15px] font-['SF Pro']"
              >
              S'inscrire
     </button>
     </Link>
    </div>
     </div>
     </div>
     <div className="h-12 w-full items-center bg-customBlue opacity-10 p-4 shadow-2xl rounded-full filter blur-md  "></div>
    </div>
    
     <div className="w-1/2 h-screen flex items-center justify-center">
      <img src={pic} alt=''  className="h-full w-full object-cover"/>
     </div>
    </div>  
    
    
  )
}

export default Log_in
