import React from 'react';
import ChannelLogo from "../Images/channelLogo.png";
import "./ChannelInfo.css";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

const ChannelInfo = () => {
    return (
        <div className="channel-info">
            <img src={ChannelLogo} alt="image" className="channel-image" />
            <div className="channel-text">
                <h4>Thapa Technical {<VerifiedUserIcon />}</h4>
                <p>264K subscribers . 1,068 videos</p>
                <p>Desription of the channel</p>
            </div>
        </div>
    )
}

export default ChannelInfo;