import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import Headroom from "react-headroom/src";
import Navbar from "../components/navbar";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export const ModifyModerateur = () => {
  const moderateur = {
    username: "kahinasd",
    nom: "SAADAOUI Kahina",
    email: "kk_saadaoui@esi.dz",
    motdepasse: "123456",
  };
  const [nom, setNom] = useState(moderateur.username);
  const [email, setEmail] = useState(moderateur.email);
  const [mdp, setMdp] = useState("");
  const [mdp1, setMdp1] = useState("");
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { id } = useParams();
  const fetchModerateur = async () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(
      `http://localhost:8000/moderateurs/${id}`,
      requestOptions
    );
    const donne = await response.json();
    console.log(donne);
    setEmail(donne.email);
    setNom(donne.username);
  };
  useEffect(() => {
    fetchModerateur();
    console.log();
  }, [id]);

  const handleSubmit = async () => {
    if (
      mdp !== mdp1 ||
      (mdp.length < 8 &&
        mdp1.length < 8 &&
        mdp.length !== 0 &&
        mdp1.length !== 0 &&
        !email.includes("@"))
    ) {
      setError(true);
    } else {
      try {
        const response = await fetch(
          `http://localhost:8000/moderateurs/${id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: nom,
              email: email,
              password: mdp,
            }),
          }
        );

        if (response.ok) {
          const updatedModerateur = await response.json();
          console.log("Moderator updated successfully:", updatedModerateur);
          setSubmitted(true);
          window.location.reload();
        } else {
          console.error("Failed to update moderator");
        }
      } catch (error) {
        console.error("Error updating moderator:", error);
      }
    }
  };
  const navigate = useNavigate();
  return (
    <>
      <Headroom>
        <Navbar />{" "}
      </Headroom>
      <div className="flex  xl:gap-14   gap-[10%]   items-center ">
        <button
          onClick={() => navigate(-1)}
          className="  border border-primary rounded-tl-3xl rounded-b-3xl lg:ml-28 ml-6  p-3  hover:bg-slate-700 text-white font-bold   transform transition-transform duration-200 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-75"
        >
          <AiOutlineArrowLeft className="text-primary md:w-8 md:h-8  h-5 w-5 hover:text-white" />
        </button>

        <h1 className="font-title  font-extrabold my-14 text-xl sm:text-3xl md:text-5xl text-primary ">
          {" "}
          Modifer modérateur , <span className=" text-rosee "> {nom}</span>
        </h1>
      </div>

      <div className=" flex flex-col items-center rounded-xl mb-6 p-4 mx-16">
        <div className="flex gap-4 justify-center items-center">
          <FaRegCircleUser className="h-10 w-10" />
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Modifier nom d'utilisateur.."
            className="border-2 my-4 border-primary p-4   placeholder:text-bold   placeholder:text-primary  font-body  text-primary   rounded-xl   h-20 w-[800px] focus:ring-2 focus:outline-none focus:ring-opacity-75"
          />
        </div>

        <div className="flex gap-4 justify-center items-center mb-4">
          <MdAlternateEmail className="h-10 w-10" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Modifier l email.."
            className="border-2 border-primary p-4 my-4  placeholder:text-bold   placeholder:text-primary  font-body  text-primary   rounded-xl   h-20 w-[800px] focus:ring-2 focus:outline-none focus:ring-opacity-75"
          />
        </div>
        <div className="flex gap-4 justify-center items-center">
          <MdDriveFileRenameOutline className="h-10 w-10" />
          <input
            type="password"
            value={mdp}
            onChange={(e) => setMdp(e.target.value)}
            placeholder="Modifier le mot de passe"
            className="border-2 my-4 border-primary p-4   placeholder:text-bold   placeholder:text-primary  font-body  text-primary   rounded-xl   h-20 w-[800px] focus:ring-2 focus:outline-none focus:ring-opacity-75"
          />
        </div>

        <div className="flex gap-4 justify-center items-center">
          <MdDriveFileRenameOutline className="h-10 w-10" />
          <input
            type="password"
            value={mdp1}
            onChange={(e) => setMdp1(e.target.value)}
            placeholder="Confirmer le mot de passe"
            className="border-2 my-4 border-primary p-4   placeholder:text-bold   placeholder:text-primary  font-body  text-primary   rounded-xl   h-20 w-[800px] focus:ring-2 focus:outline-none focus:ring-opacity-75"
          />
        </div>
        {error && (
          <span className=" text-red-700 font-body text-xl font-bold my-2">
            {" "}
            Erreur dans le mot de passe{" "}
          </span>
        )}

        <button
          onClick={handleSubmit}
          className=" font-bold  w-36 h-16  text-white my-3 rounded-xl font-body text-xl bg-primary "
        >
          {" "}
          {submitted ? "terminé !" : "terminer"}{" "}
        </button>
      </div>
    </>
  );
};