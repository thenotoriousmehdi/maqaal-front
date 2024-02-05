import React, { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg"; // Import CgProfile
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Headroom from "react-headroom";
import Logo from "../assets/Frame68007.png";
import { CiCirclePlus } from "react-icons/ci";

import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Navbar from "../components/navbar";
export const Admin = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [moderatorIdToDelete, setModeratorIdToDelete] = useState(null);

  
  const [FileUploadState,SetFileUploadState] = useState('Choisisez un fichier a uploader')
  const [fileName, setFileName] = useState('');
   

  useEffect(() => {
    console.log("Updated: " + fileName);
    // You can perform additional logic based on the updated fileName here
  }, [fileName]);

  const handleFileChange = (event) => {
    const fileInput = event.target;
    if (fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      setFileName(selectedFile.name);
      console.log(selectedFile.name);
    } else {
      setFileName('');
    }
  };

  
  async function SubmitEvent(e){
    e.preventDefault();

  console.log('File Name:', fileName);
   
  const response = await fetch("http://127.0.0.1:8000/article/doExist", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: fileName }),
    });

  const responseData = await response.json();
  console.log(responseData);

  var upload=false
  if(responseData.info){
    console.log("Already exists")
  }else{
    console.log("New file")
    upload=true
  }
  
  const fileInput = document.querySelector('input[type="file"]');
   
  
  const options2 = {
    method: 'GET',
     headers: {
  'Content-Type': 'text/plain', // Set the content type to text/plain
  },
    };

  
  if(upload){
    SetFileUploadState("Un nouveau fichier uploadé")
    setTimeout(()=>{
      SetFileUploadState("Choisisez un fichier a uploader")
    },2000)
    //Upload File
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
   
    const options = {
      method: 'POST',
      body: formData,
    };


    var response1 = await (await fetch('http://127.0.0.1:8000/article/upload',options)).json()
    console.log(response1);

    console.log(response1.file_path);
    var fileNamehex = response1.file_path.split("/").pop() 
    console.log(fileNamehex);
  
    //extract The upladed file
    var response2 =await fetch(`http://127.0.0.1:8000/article/extract/${fileNamehex}`,options2); 
    console.log("hihi"+ response2);



    //Index the files
    var response3 = await fetch("http://127.0.0.1:8000/article/index",options2)  
   }else{
     
    SetFileUploadState("Le fichier déja existant ")
    setTimeout(()=>{
      SetFileUploadState("Choisisez un fichier a uploader")
    },2000)
   }  
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen2 = (moderateurId) => {
    setModeratorIdToDelete(moderateurId);
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleDeleted = async () => {
    console.log("ID du modérateur à supprimer :", moderatorIdToDelete);

    if (!moderatorIdToDelete) {
      console.log("ID du modérateur à supprimer non défini");
      return;
    }

    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(
      `http://127.0.0.1:8000/moderateurs/${moderatorIdToDelete}`,
      requestOptions
    );

    if (!response.ok) {
      console.log("La réponse n'est pas OK");
    } else {
      setModeratorIdToDelete(null);
      setOpen2(false);
      window.location.reload();
    }
  };

  const handleClose = () => {
    console.log("email", email);
    console.log("password", password);
    if (email === "" && password === "") {
      setOpen(false);
    } else {
      if (
        password.length < 4 &&
        (email.length !== 0 || password.length !== 0)
      ) {
        setMdperror(true);
      } else setMdperror(false);
      if (email !== "" && password != "" && !Mdperror) {
        setOpen(false);
        setMdperror(false);
        setEmail("");
        setPassword("");
      }
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [Mdperror, setMdperror] = useState(false);
  const [errorEmail1, setErrorEmail1] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

const [moderateurs, setModerateurs] = useState(null);
 /* const moderateurs = [
    { id: 1, nom: "SAADAOUI", prenom: "Kahina HOUDA" },
    { id: 2, nom: "BEDJOUDI", prenom: "Wassim" },
    { id: 3, nom: "YALA", prenom: "RIAD" },
  ];*/

  const fetchModerateurs = async () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(
      "http://127.0.0.1:8000/moderateurs",
      requestOptions
    );
    const donne = await response.json();
    setModerateurs(donne);
  };

  useEffect(() => {
    fetchModerateurs();
  }, []);

  const ajouterModerateur = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name) {
      setErrorEmail1("Veuillez saisir le nom");
    } else {
      setErrorEmail1("");
      if (!email) {
        setErrorEmail1("Veuillez saisir l'email");
      } else {
        setErrorEmail1("");
        if (!emailRegex.test(email)) {
          setErrorEmail1("Veillez saisir l'email correctement");
        } else {
          if (!password) {
            setErrorEmail1("Veuillez saisir votre mot de passe ");
          } else {
            if (password.length < 8) {
              setErrorEmail1(
                "Le mot de passe doit contenir au moins 8 caractères."
              );
            } else {
              setErrorEmail1("");
              const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  email: email,
                  password: password,
                  username: name,
                  role: "moderateur",
                  dateNaissance: "",
                  gender: "",
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
                //navigate("/Adminpage");
                window.location.reload();
              }
            }
          }
        }
      }
    }
  };

  return (
    <>
     <Headroom>
        <Navbar />{" "}
      </Headroom>
      <h1 className=" text-3xl sm:text-4xl font-title my-6 font-extrabold mx-5 sm:mx-12 xl:mx-32 text-primary ">
        Bonjour , <span className=" text-rosee">Admin</span>{" "}
      </h1>
      {/* FILE UPLOAD */}
      <div className=' mx-5 my-12 sm:mx-12 xl:mx-32 text-white bg-primary rounded-xl   p-10 lg:p-32 text-center font-body text-xl xl:text-4xl font-bold'>
          <div className="titeUpload text-6xl mb-10 ">file upload </div> 
           

        <form className='p-4 flex flex-col ' method="POST" action="http://127.0.0.1:8000/article/upload" encType='multipart/form-data'>
          <input onChange={handleFileChange} className='m-auto     align-item ' type="file" name='fileUpload'  />
 
          <button className='text-rosee  round-3 hover:bg-sky-700 w-32 p-2 m-auto mt-5' onClick={SubmitEvent} type='submit'>submit</button>
        </form>
        <div className="stateContainer border ">
           <p className='   w-fit m-auto p-10  '>State : {FileUploadState}</p>
        </div>
        

      </div>

      {/* moderateurs list */}
      <Accordion.Root
        className=" mx-5 sm:mx-12 xl:mx-32 mb-56 lg:mb-20  my-20   flex flex-col items-center  "
        type="single"
        defaultValue="item-1"
        collapsible
      >
        <Accordion.Item className="AccordionItem w-full " value={1}>
          <AccordionTrigger className=" bg-primary w-full  p-10  lg:p-16   h-36 lg:h-48  rounded-xl font-body text-2xl xl:text-4xl font-bold  text-white ">
            Gerer les modérateurs
          </AccordionTrigger>
          <AccordionContent className="   w-full  pl-5 text-xl font-body  text-primary font-semibold  ">
            <div className="flex flex-col  bg-beige rounded-xl my-10 gap-6 ">
              {moderateurs &&
                moderateurs.map((moderateur) => (
                  <div
                    key={moderateur.id}
                    className="flex  justify-center  md:justify-between flex-wrap h-36 items-center border border-primary rounded-xl"
                  >
                    <div className="flex items-center justify-evenly gap-3 md:gap-10 mx-3 md:ml-10">
                      <CgProfile className="text-primary w-4 h-4 sm:h-7 sm:w-7" />
                      <h4 className="text-primary font-body text-xl xl:text-3xl  font-semibold">
                        {" "}
                        {moderateur.username}
                      </h4>
                    </div>

                    <div className="flex items-center justify-evenly gap-10 mr-10">
                      <Link to={`/Adminpage/Moderateur/${moderateur.id}`}>
                        <button className="text-center text-primary font-body text-xl sm:text-2xl xl:text-4xl font-semibold">
                          Modifier
                        </button>
                      </Link>
                      <button
                        onClick={() => handleClickOpen2(moderateur.id)}
                        className="text-center text-red-700 font-body text-xl sm:text-2xl xl:text-4xl font-semibold"
                      >
                        Supprimer
                      </button>

                      <Dialog
                        open={open2}
                        onClose={handleClose2}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          {
                            "Etes-vous sûr(e) de vouloir supprimer ce modérateur ?"
                          }
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            La suppression d'un modérateur est une action
                            irréversible et peut avoir un impact sur la gestion
                            de notre communauté.
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose2}>Annuler</Button>
                          <Button onClick={handleDeleted} autoFocus>
                            Supprimer
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                  </div>
                ))}
            </div>

            <div>
              <Button
                onClick={handleClickOpen}
                className="rounded-4xl relative   left-[75%] md:left-[90%] "
              >
                <CiCirclePlus className="text-primary h-16 w-16  " />
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                  <div className="flex   flex-col justify-cenetr sm:m-10 items-center ">
                    <img
                      src={Logo}
                      alt="logo"
                      className="w-10 h-8 sm:w-14 sm:h-12"
                    />
                    <h4 className="font-title my-4 text-3xl sm:text-4xl text-primary font-extrabold ">
                      Bienvenue
                    </h4>
                    <p className="mb-6 font-title text-lg text-center sm:text-xl text-primary ">
                      Entrez les infos d'un modérateur pour l'ajouter
                    </p>
                  </div>
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="text"
                    label="Entrez le nom complet"
                    type="name"
                    fullWidth
                    variant="standard"
                    value={name}
                    onChange={handleNameChange}
                  />
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="email"
                    label="Entrez l'email"
                    type="email"
                    fullWidth
                    variant="standard"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="password"
                    label="Mot de passe"
                    type="password"
                    fullWidth
                    variant="standard"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  {errorEmail1 && <p className="text-red-500">{errorEmail1}</p>}
                  {Mdperror ? (
                    <span className="p-2 text-base text-red-800">
                      Votre mot de passe est court
                    </span>
                  ) : (
                    ""
                  )}
                  {/* <DialogContentText>
                          To subscribe to this website, please enter your email address here. We
                          will send updates occasionally.
                          </DialogContentText>
                           */}
                </DialogContent>
                <DialogActions>
                  <button
                    //onClick={handleClose}
                    onClick={ajouterModerateur}
                    className="font-title   hover:opacity-80 text-center text-xl text-white m-4  w-full rounded-xl h-14
                   transform transition-transform duration-200 ease-in-out hover:scale-95     focus:ring-2 focus:ring-blue-700"
                    style={{ backgroundColor: "#2E4165" }}
                  >
                    {" "}
                    {Mdperror ? "Reessayer" : "Ajouter"}
                  </button>
                </DialogActions>
              </Dialog>
            </div>
          </AccordionContent>
        </Accordion.Item>
      </Accordion.Root>

      {/* Ajouter moderateur button */}
    </>
  );
};
const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className=" flex">
      <Accordion.Trigger
        className={classNames(
          "flex  items-center justify-between  px-4 AccordionTrigger",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon
          className="AccordionChevron"
          aria-hidden
          style={{ width: 50, height: 50 }}
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);
