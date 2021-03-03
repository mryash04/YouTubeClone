import React from 'react';
import "./ChannelVideo.css";
import videoImage from "../Images/video-content-images.webp";

const ChannelVideo = (props) => {
    return (
        <div className="channel-video">
            <img src={props.Image} alt="videoImage" className="video-image" />
            <div className="video-info">
                <h4>{props.title}</h4>
                <p>{props.name} . <span className="video-subscribers"><span className="video-totalSubscribers">262k</span>subscribers</span> . 40k views . 3months ago</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default ChannelVideo;