import React, {useState} from "react";
import YouTubeImage from "../Images/you tube images.png";
import MailYashImage from "../Images/mail-yash.jpg";
import {NavLink} from "react-router-dom";
import Data from "./Data";
import {useHistory} from "react-router-dom";

const Header = () =>{

    const[data, setData] = useState(Data);

    console.log(data);

    const history = useHistory();

    const[searchItem, setSearchItem] = useState("");

    const searchResult = () =>{
        history.push("/search");
    }

    const handleChange = (event) =>{
        console.log(event.target.value);
        const test = data.filter((data) => {
            console.log(data.name);
            return (data.title).toString().toLowerCase().includes(event.target.value.toString().toLowerCase())
          })
  
            // uncomment line below and teams is logged as I want
  
            console.log(test);

            history.push("/");
  
            setData(test);
            setSearchItem(event.target.value);
    }

    return(
        <div className="header-container">
                            <header className="header">
        <div className="header-section-content">
            <NavLink to="/"><img src={YouTubeImage} alt="you-tube-logo" className="header-image-logo" /></NavLink>
        </div>
        <form className="search-bar">
            <input type="search" placeholder="search" aria-hidden className="input-search-bar" onChange={handleChange} value={searchItem} />
            <button className="search-btn" onClick={searchResult}><i className="fa fa-search"></i></button>
        </form>
        <div className="menu-icons">
            <NavLink to="/"><i className="fa fa-youtube-play text-dark"></i></NavLink>
            <NavLink to="/"><i className="fa fa-square text-dark"></i></NavLink>
            <NavLink to="/"><i className="fa fa-bell text-dark"></i></NavLink>
            <NavLink to="/"><img src={MailYashImage} alt="mail-logo-icon" className="mail-logo-image" /></NavLink>
        </div>
    </header>
        </div>
    )
}

export default Header;