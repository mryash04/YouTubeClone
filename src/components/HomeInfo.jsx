import React from "react";
import Home from "./Home";
import videoContentImage from "../Images/video-content-images.webp";
import imageThree from "../Images/image3.webp";
import imageOne from "../Images/image1.webp";
import imageSeven from "../Images/images7.jpg";
import imageTwo from "../Images/image2.webp";
import imageFour from "../Images/image4.jpg";
import imageFive from "../Images/images5.jpg";
import imageSix from "../Images/images6.jpg";

const HomeInfo = () =>{
    return(
    <div className="home-container">
        <div className="home-info">
        <Home Image = {videoContentImage}
        title = "Node.JS"
        name = "Thapa Technical"
        link = "https://www.youtube.com/watch?v=IIpiLZGTWuo&list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8"
        channelLink = "https://www.youtube.com/results?search_query=thapa+technical"/>
        <Home Image = {imageThree}
        title = "Diwali Pe Diwala"
        name = "BB Ki Vines" 
        link = "https://www.youtube.com/watch?v=9sgzsesyCew"
        channelLink = "https://www.youtube.com/results?search_query=bb+ki+vines"/>
        <Home Image = {imageOne} 
        title = "Motivational Video"
        name = "Sandeep Maheswari"
        link = "https://www.youtube.com/watch?v=2UtwSI7lgkQ"
        channelLink = "https://www.youtube.com/results?search_query=sandeep+maheswari"/>
        <Home Image = {imageSeven}
        title = "DIL KAHIN KA"
        name = "Dino James"
        link = "https://www.youtube.com/watch?v=xrpQEeeV8zo"
        channelLink = "https://www.youtube.com/results?search_query=dino+james"/>
        </div>
        <div className="home-info">
        <Home Image = {imageTwo}
        title = "Password Authentication"
        name = "Traversy Media"
        link = "https://www.youtube.com/watch?v=6FOq4cUdH8k"
        channelLink = "https://www.youtube.com/results?search_query=traversy+media"/>
        <Home Image={imageFour}
        title = "Aye Bhai Zara Dekhke" 
        name = "T-series"
        link = "https://www.youtube.com/watch?v=C_dI4mXlxNg"
        channelLink = "https://www.youtube.com/results?search_query=t+series"/>
        <Home Image = {imageFive} 
        title = "Profitable Programmer" 
        name = "Clever Programmer"
        link = "https://www.youtube.com/watch?v=Qqx_wzMmFeA"
        channelLink = "https://www.youtube.com/results?search_query=clever+programmmer"/>
        <Home Image = {imageSix}
        title = "Amazon Clone"
        name = "Clever Programmer"
        link = "https://www.youtube.com/watch?v=1_IYL9ZMR_Y&t=15796s"
        channelLink = "https://www.youtube.com/results?search_query=clever+programmer"/>
        </div>
    </div>
    )
}

export default HomeInfo;