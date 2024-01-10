import React from "react";

import "./actionButton.scss";

import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Website from '@material-ui/icons/Language';

function ButtonType(props) {
    if (props.buttonType == "github")
        return <GitHubIcon className="button_icon" />;

    else if (props.buttonType == "website")
        return <Website className="button_icon" />;

    else if (props.buttonType == "video")
        return <YouTubeIcon className="button_icon" />;
}

const ActionButton = (props) => {

    const type = () => {

        if (props.type == "github" || props.type == "website") {
            return true;
        }
        else {
            return false;
        }
    }

    return (
        <div className="action-button-div" onClick={type() ? () => window.open(props.link, "_blank") : null}>
            <ButtonType buttonType={props.type} buttonLink={props.link} />
            <p className="action-button-title"> &nbsp; {props.name} &nbsp;</p>
        </div>
    );

}
export default ActionButton;