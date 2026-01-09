function handleFormSub(event){
    event.preventDefault();
    console.log("Form was submitted");
    
}

export default function Form(){
    return(
        <form action="" onSubmit={handleFormSub}>
            <input type="text" placeholder="Write something" />
            <button  >submit</button>
        </form>
    )
}