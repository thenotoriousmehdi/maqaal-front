import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import pic2 from "../assets/pic2.png";
import pic from "../assets/pic1.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Confirmer_mdp = () => {
  const location = useLocation();
  if (!location || !location.state) {
    // Handle the case where location or location.state is not available
    return <p>Oops</p>;
  }

  const { name, email, dateNaissance, sexe } = location.state;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmedPassword, setErrorConfirmedPassword] = useState("");
  const [errorPasswordLength, setPasswordLength] = useState("");

  const [, setToken] = useContext(UserContext);
  const navigate = useNavigate();

  const submitRegistration = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        username: name,
        role: "user",
        dateNaissance: dateNaissance,
        gender: sexe,
      }),
    };

    const response = await fetch(
      "http://127.0.0.1:8000/signup",
      requestOptions
    );
    const data = await response.json();

    if (!response.ok) {
      console.log("the reponse not ok");
    } else {
      setToken(data.access_token);
      navigate("/SignIn/Verification/Confirmation");
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  const HandleSignInconf = async (event) => {
    event.preventDefault();

    if (!password) {
      setErrorPassword("Veuillez saisir votre mot de passe ");
    } else {
      setErrorPassword("");
      if (!confirmPassword) {
        setErrorConfirmedPassword("Veuillez confirmer votre mot de passe ");
      } else {
        setErrorConfirmedPassword("");
        if (password !== confirmPassword) {
          setErrorMessage("Les mots de passe ne correspondent pas ");
        } else {
          if (password.length < 8) {
            setPasswordLength(
              "Le mot de passe doit contenir au moins 8 caractères."
            );
          } else {
            setErrorMessage("");
            submitRegistration();
          }
        }
      }
    }
  };

  return (
    <div className="w-full min-h-screen flex items-start ">
      <div className="w-0 xl:w-1/2  h-screen flex items-center justify-center">
        <img src={pic} alt="" className="h-full  w-full object-cover" />
      </div>
      <div className=" w-full xl:w-1/2 flexbox flex-col   h-screen  flex items-center justify-center  ">
        <div className="hidden xl:block h-12 w-full items-center bg-primary opacity-5 p-2 shadow-2xl rounded-full filter blur-md  "></div>
        <div className="flex flex-col w-full xl:w-[640px] xl:h-[901px] h-full items-center justify-evenly bg-white  md:shadow-2xl  rounded-2xl ">
          <img
            src={pic2}
            alt="Logo"
            className="w-15 h-9  px-0 py-0  bg-transparent "
          ></img>
          <div className="flex flex-col items-center justify-evenly gap-5">
            <div className="xl:w-[277px] w-full h-[29px] text-center text-slate-700 text-3xl font-extrabold font-['Raleway']">
              Créer un compte{" "}
            </div>
            <div className="xl:w-[449px] w-full h-[61px]  text-center text-black xl:text-[15px] text-[14px] font-medium font-['Raleway']">
              Créez un compte en remplissant le formulaire avec vos informations
              personnelles
              <br />
            </div>
          </div>
          <div className="flex flex-col flex-wrap sm:w-[530px] w-full gap-2 justify-evenly items-center">
            <input
              type="password"
              placeholder="  Mot de passe "
              value={password}
              onChange={handlePasswordChange}
              className="sm:w-[510px] w-5/6 h-20 bg-slate-200 rounded-[10px] text-center text-xl"
            />

            <input
              type="password"
              placeholder=" Confirmer votre mot de passe  "
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="sm:w-[510px] w-5/6 h-20 bg-slate-200 rounded-[10px] text-center text-xl"
            />
          </div>

          <div className="flex flex-col flex-wrap sm:w-[530px] w-full gap-2 justify-evenly items-center">
            <Link to={"/SignIn/Verification/Confirmation"}>
              <button
                onClick={HandleSignInconf}
                className="bg-primary sm:w-[528px] w-2/3 h-[65px] text-white font-normal rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]"
              >
                Confirmer
              </button>
            </Link>
          </div>
          {errorPasswordLength && (
            <p className="text-red-500">{errorPasswordLength}</p>
          )}
          {errorPassword && <p className="text-red-500">{errorPassword}</p>}
          {errorConfirmedPassword && (
            <p className="text-red-500">{errorConfirmedPassword}</p>
          )}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <div className="flex flex-col sm:w-[397px] items-center w-full justify-evenly mb-8  ">
            <div className="sm:w-[397px] w-2/3 h-[0px] opacity-40 border border-slate-700 mb-2"></div>
            <div className="flex sm:w-[397px] w-2/3 justify-between ">
              <div className="text-black text-opacity-40 text-[15px] font-['SF Pro']">
                Vous avez déjà un compte ?
              </div>
              <Link to={"/LogIn"}>
                <button className="text-slate-700  text-[15px] font-['SF Pro']  text-[15px] ">
                  Se connecter
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden xl:block h-12 w-full items-center bg-rosee opacity-10 p-4 shadow-2xl rounded-full filter blur-md  "></div>
      </div>
    </div>
  );
};

export default Confirmer_mdp;
