import { useState } from "react"

export default function Form(){
    let [formData, setFormData] = useState({
        fullName : "",
        username : "",
        password : "",

    })
    // let [fullName, setFullName] = useState("");
    // let [username, setUsername] = useState("");
    // let handleNameChange = (event) => {
    //     // console.log(event.target.value); 
    //     setFullName(event.target.value);
    // }
    
    // let handleUsername = (event) => { 
    //     setUsername(event.target.value);
    // }

    let handleInputChange = (event) => {
        // let fieldName = event.target.name;
        // let newValue = event.target.value;

        setFormData((currData) => {
            // currData[fieldName] = newValue;
            // return {...currData};
            // another way to write
            return {...currData, [event.target.name] : event.target.value};
        });
        
        
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        
        setFormData({
            fullName : "",
            username : "",
            password : "",
        });
    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full name : </label>
            <input type="text" placeholder="Enter Full Name"  value={formData.fullName} onChange={handleInputChange} id="fullName" name="fullName" />

            <br />
            <br />
            <label htmlFor="userName">User Name : </label>
            <input type="text" placeholder="Enter Full Name"  value={formData.username}  onChange={handleInputChange} id="userName"  name="username"/>
            <br /> 
            <br />
            <label htmlFor="password">Password : </label>
            <input type="password" placeholder="Enter Password"  value={formData.password}  onChange={handleInputChange} id="password"  name="password"/>
            <br /> 
            <button>Submit</button>
        </form>
    )
}