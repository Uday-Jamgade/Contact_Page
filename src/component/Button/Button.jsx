

const Button=(props)=>{
return(

      <button className={props.outline ? "outline-btn": "btn"}>
       {props.icon} {props.text} 
      </button>
      

);

};

export default Button;