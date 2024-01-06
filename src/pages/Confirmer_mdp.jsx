import React , { useState}from 'react'
import pic2 from '../assets/pic2.png'
import pic from '../assets/pic1.jpg'
import { Link } from 'react-router-dom';
function Confirmer_mdp() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmedPassword, setErrorConfirmedPassword] = useState('');
  

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
 const HandleSignInconf = async (event) => {
    event.preventDefault();
    console.log(password);
    console.log(confirmPassword);

    if (!password) {
      setErrorPassword('Veuillez saisir votre mot de passe ');
    } else {
      setErrorPassword('');
      if (!confirmPassword) {
        setErrorConfirmedPassword('Veuillez confirmer votre mot de passe ');
      } else {
        setErrorConfirmedPassword('');
        if (password !== confirmPassword) {
          setErrorMessage('Les mots de passe ne correspondent pas ');
          
        } else {
          setErrorMessage('');
        }
    
      }
    }
    
   
  };
  
  return (
    <div className="w-full  flex items-start ">
    <div className="w-1/2 h-screen flex items-center justify-center">
      <img src={pic} alt=''  className="h-full w-full object-cover"/>
     </div>
    <div  className="flexbox flex-col w-1/2 h-screen flex items-center justify-center  ">
    <div className=" h-12 w-full items-center bg-customBlue opacity-5 p-2 shadow-2xl rounded-full filter blur-md  "></div>
     <div className="flex flex-col w-[726px] h-[901px] items-center justify-evenly  bg-white  shadow-2xl  rounded-2xl ">
     <img
      src={pic2}
      alt="Logo" 
      className='w-15 h-9 mt-10 mb-8 px-0 py-0  bg-transparent '
     ></img>
     < div className='flex flex-col items-center justify-between gap-4 py-4'>
     <div className="w-[277px] h-[29px] text-center text-slate-700 text-3xl font-extrabold font-['Raleway']">Créer un compte </div>
     <div className="w-[449px] h-[61px] text-center text-black text-[15px] font-medium font-['Raleway']">Créez un compte en remplissant le formulaire  avec vos informations personnelles<br/></div>
     </div>
     <div className='flex flex-col mt-2 gap-2  justify-evenly items-center'>
     <input
     type ="password"
     placeholder='  Mot de passe '
     value={password}
        onChange={handlePasswordChange}
     className='w-[528px] h-20  my-4 text-[20px] text-black  bg-slate-200  rounded-[10px] '
     />
    
     <input
     type ="password"
     placeholder=' Confirmer votre mot de passe  '
     value={confirmPassword}
        onChange={handleConfirmPasswordChange}
    className='w-[528px] h-20 text-black text-[20px]   bg-slate-200 rounded-[10px] '
     />
     </div>
    
    

     <div className='mb-9'>
     <Link to={"/SignIn/Verification/Confirmation"} >
      <button onClick={HandleSignInconf}
       className="bg-customBlue w-[264px] h-[65px] text-white  font-normal   rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
      Confirmer
     </button>
     
     </Link>
     </div>
     {errorPassword && <p className="text-red-500">{errorPassword}</p>}
     {errorConfirmedPassword && <p className="text-red-500">{errorConfirmedPassword}</p>}
     {errorMessage && <p className="text-red-500">{errorMessage}</p>}
       
     <div className='flex flex-col mb-8  justify-evenly  gap-4'>
     <div className="w-[397px] h-[0px] opacity-40 border border-slate-700"></div>
    <div className='flex  w-full  justify-between '>
    <div className="text-black text-opacity-40 text-[15px] font-['SF Pro']">Vous avez déjà un compte ?</div>
    <Link to={"/LogIn"}>
    <button
                className="text-slate-700  text-[15px] font-['SF Pro']  text-[15px] "
              >
       Se connecter
              </button>
     </Link>
    </div>
     </div>
     </div>
     <div className="h-12 w-full items-center bg-customRed opacity-10 p-4 shadow-2xl rounded-full filter blur-md  "></div>
    </div>
    
  
     </div>  
  )
}

export default Confirmer_mdp
