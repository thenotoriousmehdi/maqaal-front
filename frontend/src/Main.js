import { useEffect, useState } from 'react';

const Main = () => {

    const [message,setMessage]=useState("[Nothing for the moment ...]"); 

    useEffect(()=>{
        fetch("http://localhost:8000/")
        .then((response)=>{
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            return response.json();
        })
        .then((data)=>{    
               
            setMessage(data.message)
            return data
        })
        .catch((e)=>{
            console.log("got into trubble : "+e);
        })
    },[])

    return (
    <div className="main">
        <h1 className="font-bold text-4xl p-10">Hello from main</h1>
        <p className='p-10'>Got this from the server: {message}</p>
    </div> 
    );
}
 
export default Main;