import React, {useState} from "react";

const Formvalidation = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        pwd: "",
        cfPwd: ""
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    let {name, email, pwd, cfPwd} = user;

    function check(e) {
        setUser({...user, [e.target.name]:e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();

        if(!name || !email || !pwd || !cfPwd){
             setError("all fields are mandatory");
             setSuccess("");
        }
        else if(!name.includes(" ")) setError("first and last name both required");  //first and last name both mandatory.
        else if(!email.includes("@")) setError("fill correct eamil address");  //eamil verification.
        else if(pwd !== cfPwd) setError("password and confirm password are not matched");
        else {
            setSuccess("form submitted successfully");
            setError("");
            setUser({
                name: "",
                email: "",
                pwd: "",
                cfPwd: ""
            });  
        
        }
    }
     
    return (
        <div>
            <h1> Form Validation Using Use State Concept </h1> 

            {   
                error && <h3 style={{color: "red"}}> {error} </h3>
            }

            {   
                success && <h3 style={{color: "green"}}> {success} </h3>
            }

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Name" name="name" onChange={check} value={name}/>
                <input type="email" placeholder="Enter Email" name="email" onChange={check}value={email}/>
                <input type="password" placeholder="Enter Password" name="pwd" onChange={check} value={pwd}/>
                <input type="password" placeholder="Enter Confirm Password" name="cfPwd" onChange={check} value={cfPwd}/>
                <button> Submit </button>
            </form>


            
        </div>
    )

}

export default Formvalidation;