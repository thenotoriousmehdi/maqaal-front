import React, { useState , useEffect , useRef } from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaRegFilePdf } from "react-icons/fa";

const ArticleDetails = () => {

   const elementRef = useRef(null);
  const [position, setPosition] = useState(0);

//to detect the end of the article so we can fix showw less button 
  useEffect(() => {
    function handleResize() {
    
      const y = elementRef.current.offsetTop;
      setPosition( y );
    }

    handleResize(); // initial call to get position of the element on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [elementRef]);


  const [afterposition, setAfterposition]= useState(false); // use it to not make the button static after the article section 
  const [InitHeight, setInitHeight] = useState(33) ;
  const [moreposition, setMoreposition] = useState(0);  //to save the position of voir plus button   
  const [show, setShow] = useState(false); //indicates that we clicked on the show more button 

  const handleShowmore =()=>{
    setMoreposition( window.scrollY );
    setInitHeight(InitHeight*2)
    setShow(true) 
    setAfterposition(false)
    
  }

  const handleShowless =()=>{
   setInitHeight(33)
  setShow(false)
  setAfterposition(false)

 
}

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < moreposition) {
        handleShowless()
        setAfterposition(false)
      } 
      else if (window.scrollY > position){
        setAfterposition(true)

      }else{setAfterposition(false)}
    } );

    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY < moreposition) {
          handleShowless()
          setAfterposition(false)
        } 
        else if (window.scrollY > position){
          setAfterposition(true)
  
        }else{setAfterposition(false)}
      } );
    }
    
  }, []);

 


  return (
    
    < div className=' bg-bgr'>
    <button class="  border border-primary hover:text-white my-10 rounded-tl-3xl rounded-b-3xl lg:ml-40 ml-12  p-3  hover:bg-slate-700 text-white font-bold   transform transition-transform duration-200 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-75">
    <AiOutlineArrowLeft  className='text-primary md:w-8 md:h-8  h-5 w-5 hover:text-white'/>
    </button>

   <h1 className='font-title font-black text-primary text-4xl sm:text-5xl md:text-6xl  my-9 mx-6 sm:mx-20  xl:mx-44'> Python comme langage scientifique</h1>

    <div className='mx-6 sm:mx-20  xl:mx-44  mb-20 flex md:flex-row flex-col justify-between items-start '>
        <div className='flex  my-2 font-body font-semibold  text-2xl sm:text-3xl text-primary flex-col items-start'>
              <span className=' '>Varoquaux Gaël</span>
              <span className=''>GNU/Linux Magazine HS n°Numéro 40</span>
        </div>

        <button className=' my-6  md:my-0 sm:w-[566px] h-[116px] px-4 md:px-10 justify-between  mr-2 flex items-center bg-rosee rounded-xl transform transition-transform duration-200 ease-in-out hover:scale-105 '> 
         <span > <FaRegFilePdf className='text-white  w-10  h-10' /></span>
         <span className=' font-title text-white text-xl mx-7 md:mx-0 sm:text-4xl font-extrabold '>Télécharger le pdf </span>
         </button>
    </div>
   
    <div className='mx-6 sm:mx-20 xl:mx-44 flex  my-6 flex-col md:flex-row items-start gap-2 text-primary'>
        <div className='md:w-1/2'>
            
                      <h4 className='font-title mb-10 text-3xl font-extrabold'>Résume</h4>
                      <p className=' font-body mb-14  text-2xl  font-medium '>
                        De nos jours, l'informatique et la simulation 
                        numérique prennent une place de plus en plus 
                        importante dans la recherche scientifique, ainsi 
                        que le développement technologique. L'ENIAC, 
                        le premier ordinateur conçu, avait pour but le 
                        calcul scientifique, puisqu'il était utilisé pour 
                        calculer des trajectoires d'artillerie. En effet, un 
                        ordinateur permet d'automatiser bien des tâches,
                        dont les tâches de calcul, et d'explorer 
                        systématiquement les problèmes scientifiques
                     </p>

                     <h4 className='font-title mb-10 text-3xl font-extrabold'>Mot clés </h4>
                     <p className=' font-body  text-2xl  font-medium '>
                     Python, cs, computer science, webdev,ml, ai, backend, dev, langage
                     </p>
             
        </div>
        <div className='md:w-1/2'>
                   <h4 className='font-title mb-10 text-3xl font-extrabold'>Introduction</h4>
                   <p className=' font-body mb-14  text-2xl     font-medium'>
                    De façon générale, un problème de recherche et 
                    développement se présente comme un modèle 
                    que l'on veut étudier et comprendre. Le modèle 
                    peut aussi bien être un modèle théorique qu'un 
                    système modèle fait d'expériences ou une 
                    maquette. Pour développer son intuition, l'idéal 
                    est de pouvoir interagir le plus possible avec le 
                    modèle. Ainsi, depuis l'antiquité, les mathématici
                    ens utilisent des dessins et des calculs pour form
                    uler leurs hypothèses, mais la généralisation des 
                    ordinateurs, il y a vingt ans, a conduit à l'apparition 
                    des mathématiques dites « expérimentales », 
                    s'appuyant sur l'utilisation systématique de 
                    l'informatique. Dans l'industrie, par exemple, lors 
                    de la conception d'un nouveau produit, la simulation 
                    numérique permet de tester systématiquement ,
                   </p>
                      
       
        </div>
    </div>

    <div className='  text-center'>
   
        <p className={InitHeight=== 33? 'mx-6  sh sm:mx-20 xl:mx-44 font-body  text-2xl text-primary   font-medium max-h-[33rem]  overflow-hidden  ':  'mx-6 sm:mx-20 xl:mx-44 font-body  text-2xl text-primary   font-medium   '  }  >
            de nombreuses solutions géométriques ou des matériaux différents de manière relativement pratique, 
            plutôt que de construire de nombreuses maquettes à grand coût. L'informatique scientifique a pour 
            but premier de faciliter cette exploration du problème. Ses outils, que le scientifique doit apprendre et 
            maîtriser, ne sont que des barrières pour l'utilisateur entre son problème et lui-même. Par ailleurs, 
            dans le domaine de la recherche, il est inévitable que les problèmes soient souvent mal posés, et 
            changent en permanence au fur et à mesure que l'on progresse. C'est pourquoi, il faut que les soluti
            ons utilisées soient aussi souples et agiles que possible.de nombreuses solutions géométriques ou des matériaux différents de manière relativement pratique, 
            plutôt que de construire de nombreuses maquettes à grand coût. L'informatique scientifique a pour 
            but premier de faciliter cette exploration du problème. Ses outils, que le scientifique doit apprendre et 
            maîtriser, ne sont que des barrières pour l'utilisateur entre son problème et lui-même. Par ailleurs, 
            dans le domaine de la recherche, il est inévitable que les problèmes soient souvent mal posés, et 
            changent en permanence au fur et à mesure que l'on progresse. C'est pourquoi, il faut que les soluti
            ons utilisées soient aussi souples et agiles que possible.
            de nombreuses solutions géométriques ou des matériaux différents de manière relativement pratique, 
            plutôt que de construire de nombreuses maquettes à grand coût. L'informatique scientifique a pour 
            but premier de faciliter cette exploration du problème. Ses outils, que le scientifique doit apprendre et 
            maîtriser, ne sont que des barrières pour l'utilisateur entre son problème et lui-même. Par ailleurs, 
            dans le domaine de la recherche, il est inévitable que les problèmes soient souvent mal posés, et 
            changent en permanence au fur et à mesure que l'on progresse. C'est pourquoi, il faut que les soluti
            ons utilisées soient aussi souples et agiles que possible.de nombreuses solutions géométriques ou des matériaux différents de manière relativement pratique, 
            plutôt que de construire de nombreuses maquettes à grand coût. L'informatique scientifique a pour 
            but premier de faciliter cette exploration du problème. Ses outils, que le scientifique doit apprendre et 
            maîtriser, ne sont que des barrières pour l'utilisateur entre son problème et lui-même. Par ailleurs, 
            dans le domaine de la recherche, il est inévitable que les problèmes soient souvent mal posés, et 
            changent en permanence au fur et à mesure que l'on progresse. C'est pourquoi, il faut que les soluti
            ons utilisées soient aussi souples et agiles que possible.
            de nombreuses solutions géométriques ou des matériaux différents de manière relativement pratique, 
            plutôt que de construire de nombreuses maquettes à grand coût. L'informatique scientifique a pour 
            but premier de faciliter cette exploration du problème. Ses outils, que le scientifique doit apprendre et 
            maîtriser, ne sont que des barrières pour l'utilisateur entre son problème et lui-même. Par ailleurs, 
            dans le domaine de la recherche, il est inévitable que les problèmes soient souvent mal posés, et 
            changent en permanence au fur et à mesure que l'on progresse. C'est pourquoi, il faut que les soluti
            ons utilisées soient aussi souples et agiles que possible.de nombreuses solutions géométriques ou des matériaux différents de manière relativement pratique, 
            plutôt que de construire de nombreuses maquettes à grand coût. L'informatique scientifique a pour 
            but premier de faciliter cette exploration du problème. Ses outils, que le scientifique doit apprendre et 
            maîtriser, ne sont que des barrières pour l'utilisateur entre son problème et lui-même. Par ailleurs, 
            dans le domaine de la recherche, il est inévitable que les problèmes soient souvent mal posés, et 
            changent en permanence au fur et à mesure que l'on progresse. C'est pourquoi, il faut que les soluti
            ons utilisées soient aussi souples et agiles que possible.
            de nombreuses solutions géométriques ou des matériaux différents de manière relativement pratique, 
            plutôt que de construire de nombreuses maquettes à grand coût. L'informatique scientifique a pour 
            but premier de faciliter cette exploration du problème. Ses outils, que le scientifique doit apprendre et 
            maîtriser, ne sont que des barrières pour l'utilisateur entre son problème et lui-même. Par ailleurs, 
            dans le domaine de la recherche, il est inévitable que les problèmes soient souvent mal posés, et 
            changent en permanence au fur et à mesure que l'on progresse. C'est pourquoi, il faut que les soluti
            ons utilisées soient aussi souples et agiles que possible.de nombreuses solutions géométriques ou des matériaux différents de manière relativement pratique, 
            plutôt que de construire de nombreuses maquettes à grand coût. L'informatique scientifique a pour 
            but premier de faciliter cette exploration du problème. Ses outils, que le scientifique doit apprendre et 
            maîtriser, ne sont que des barrières pour l'utilisateur entre son problème et lui-même. Par ailleurs, 
            dans le domaine de la recherche, il est inévitable que les problèmes soient souvent mal posés, et 
            changent en permanence au fur et à mesure que l'on progresse. C'est pourquoi, il faut que les soluti
            ons utilisées soient aussi souples et agiles que possible.
        </p>

        <button ref={elementRef} className='h-5 w-full text-center'>-</button>
      {InitHeight ===33 ?
      <> 
      <div className='  inset-x-0 bottom-0 h-11 -top-10 relative bg-gradient-to-t from-gray-300 to-transparent    black  mx-6 sm:mx-20 xl:mx-44'>
         </div> 
         <button  onClick={handleShowmore} className='font-title   relative -top-5   transform transition-transform duration-200 ease-in-out 
         hover:scale-110       text-center text-2xl text-rosee font-bold hover:opacity-75  '>Voir plus </button>
      </>  : 
      show && (  <button  onClick={handleShowless} className= {afterposition ?'    mb-16  transform translate-y-4 font-title  hover:scale-110  text-center text-2xl text-rosee font-bold hover:opacity-75  ' :
      '   fixed bottom-0 left-1/2  -ml-10 mb-16  transform translate-y-4 font-title hover:scale-110  text-center text-2xl text-rosee font-bold hover:opacity-75  '} 
       >Voir moins </button>
       )
       }
        </div>     
        
      
</div>

  )
}

export default ArticleDetails