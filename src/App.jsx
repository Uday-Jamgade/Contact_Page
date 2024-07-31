

import './App.css'
import {MdMessage} from "react-icons/md"
import Navigation from "./component/Navigation";
import Header from "./component/contactHeader/Header";
import Button from './component/Button/Button';
import ContactForm from './component/ContactForm/ContactForm';


function App(){

  return (
    <div>

    <Navigation></Navigation>
    <Header></Header>
    <ContactForm></ContactForm>

    
    </div>
  );
};

export default App
