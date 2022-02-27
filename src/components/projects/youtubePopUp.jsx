import React from 'react';
import Popup from 'reactjs-popup';
import './youtubePopUp.scss';

import ActionButton from "./actionButton";


const YoutubePopUp = (props) => {

    return (
        <Popup modal nested
            trigger={
                <div>
                    <ActionButton type={"video"} name={"Watch video"} link={""} />
                </div>
            } position="center">{close => (
                <div className="modal">
                    <div className="popupmodal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        {/* <div className="popupheader"> Modal Title </div> */}
                        <div className="video-container">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/jNB5aa9Mcco" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="popupactions">
                            <button
                                className="button"
                                onClick={() => {
                                    console.log('modal closed ');
                                    close();
                                }}
                            >
                                close modal
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Popup>
    );
};

export default YoutubePopUp;