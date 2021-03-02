import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import videoContentImage from "../Images/video-content-images.webp";
import {NavLink} from "react-router-dom";

const Home = (props) =>{

    return(
        <div className="home"> 
            <div className="video-container mt-5">
                <section className="video-content">
                <a href={props.link}><img src={props.Image} className="video-image ml-2" alt="video-image" /></a>
                    <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-2 col-md-6 col-12">
                                    <img src={props.Image} alt="video-channel-image" className="video-channel-image mt-1" />
                                </div>
                                <div className="col-lg-10 col-md-6 video-content-details">
                                    <a href={props.link} className="video-title">{props.title}</a>
                                    <a href={props.channelLink} className="video-channel-name">{props.name}</a>
                                    <div className="video-metadata">
                                        <span>410K views</span>
                                        .
                                        <span>2 week ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
            </div>
        </div>
    )
}

export default Home;