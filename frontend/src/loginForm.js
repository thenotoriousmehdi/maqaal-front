import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const LoginForm = () => {
    const history = useHistory(); // ??? a voir plus tard
    const [formData, setFormData] = useState({
        username: '',
        password: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    function SubmitEvent(e){

        e.preventDefault();
     
        fetch("http://localhost:8000/login",{
            method:"POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body:JSON.stringify(formData),
        } )
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{

            if(data.access_token){
                localStorage.setItem('accessToken', data.access_token);
                console.log("token is set to local storage");
            }else{
                console.log("invalid crendentials");
            }

        })
        .catch((e)=>{
            console.log("something went wrong error: "+e);
        })

        history.push('/articles'); // ??? a voir plus tard
    }
    
    return ( 
        <div className="holder w-100   flex justify-center items-center h-screen ">
            <form className="border-4 p-10 rounded flex flex-col gap-3 w-2/6 h-2/4">
            <p>email adresse</p>
            <input type="text" name="username" className='border' onChange={handleChange} />
            <p>password</p>
            <input type="password" name="password" className='border' onChange={handleChange}/>
            <div className="submitButton pr-7 pl-7 pt-1 pb-1 rounded-xl text-white hover:scale-105 cursor-pointer bg-red-600 w-fit" onClick={SubmitEvent}>SUBMIT</div>
        </form>
        </div>

     );
}
 
export default LoginForm;