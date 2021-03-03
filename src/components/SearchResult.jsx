import React from "react";
import TuneIcon from '@material-ui/icons/Tune';
import "./SearchFilter.css";
import ChannelInfo from "./ChannelInfo";
import ChannelVideo from "./ChannelVideo";
import channelImageOne from "../Images/video-content-images.webp";
import loginForm from "../Images/loginForm.jpg";
import reactMenu from "../Images/reactMenu.jpg";
import reactHooks from "../Images/reactHooks.jpg";

const SearchResult = () =>{
    return(
        <div className="search-result">
            <div className="search-filter">
                <TuneIcon className="tune-icon" />
                <p>FILTER</p>
            </div>
            <hr />
            <ChannelInfo />
            <hr />
            <ChannelVideo Image = {channelImageOne}
            title = "Node.JS"
            name = "Thapa Techniacl"
            description = "Welcome, to node js tutorial for beginners in Hindi in 2020. " />
            <ChannelVideo Image = {loginForm}
            title = "Login Form"
            name = "Thapa Technical"
            description = "Welcome, How to create a responsive animated login form using Only HTML and CSS in Hindi." />
            <ChannelVideo Image = {reactMenu}
            title = "React Menu"
            name = "Thapa Technical"
            description = "Welcome, how to create a react menu in Hindi. React js navbar in Hindi in 2020 using React Router Dom. " />
            <ChannelVideo Image = {reactHooks}
            title = "React Hooks"
            name = "Thapa Technical"
            description = "Welcome, what is Hooks in React JS in Hindi? We will see the useState hook in react js in Hindi. " />
        </div>
    )
}

export default SearchResult;