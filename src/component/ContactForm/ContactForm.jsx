import Button from "../Button/Button";
import {MdMessage} from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm=()=>{

  const [name,setname]= useState("name");
  const [email,setEmail]=useState("udayjamgade@gmail.com");
  const [ text,setText]= useState("hello I am Uday")

  const onSubmit=(e)=>{
    e.preventDefault();

    setname(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
  };

    return(
  <section className="container">
    <div className="contact-form">
    <div className=" btn-contaner">
    <Button  text= " VIA SUPPORT CHAT " icon={<MdMessage fontSize="24px" />}> </Button>
    <Button text =" VIA CALL"  icon={<IoCall   fontSize="24px"/>  } ></Button>
    </div>
      
    <Button outline={true} text="VIA EMAIL FROM" icon={<HiMail/>}></Button>

    <form  onSubmit={onSubmit}>
        <div  className="control">
          <label htmlFor="name">Name</label>
          <input type=" text" name="name" />
        </div>

        <div  className="control">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" />
        </div>

        <div  className="control">
          <label htmlFor="name">Text</label>
          <textarea name="text" id=""></textarea>
        </div>

             <div  style={{ 
              color: "white",
              display:"flex",
              justifyContent:"end",
             }}>
               <Button   text="Submit" > </Button>
              
              </div>  


              <div  style={{fontWeight: " 800" , fontSize: "24px"}}>{name+" "+email+ " " + text}</div>
             
              

          
    </form>

    </div>

    <div className=" image">    
    
        
    </div>

  </section>      
    );

}

export default ContactForm;