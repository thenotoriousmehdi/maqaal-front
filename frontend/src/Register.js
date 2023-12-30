const Register = () => {
    return ( 
        <div className="holder w-100 flex justify-center items-center h-screen ">
            <form className="border-4 p-10  rounded flex flex-col gap-3 w-2/6 h-2/4">
            <p>Fullname</p>
            <input type="text" name="email_adresse" className="border" />
            <p>email adresse</p>
            <input type="text" name="email_adresse" className="border" />
            <p>password</p>
            <input type="password" name="password" className="border" />
            <div className="submitButton pr-7 pl-7 pt-1 pb-1 rounded-xl text-white hover:scale-105 cursor-pointer bg-red-600 w-fit" >SUBMIT</div>
        </form>
        </div>
     );
}
 
export default Register;