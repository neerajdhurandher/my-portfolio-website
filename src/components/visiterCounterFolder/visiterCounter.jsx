import React, { useEffect, useState } from 'react';
import countapi from 'countapi-js';
import ShowVisiterCount from './showVisitersCount'

import "../../style/App.scss";

let websiteTesting = 'neerajbhaibhai.com';
let websiteReal = 'neerajdhurandher.me';
const key = 'visit';

//neerajbhaibhai.com testing server
// neerajdhurandher.me real server

// https://api.countapi.xyz/get/neerajbhaibhai.com/visit
// https://api.countapi.xyz/hit/neerajbhaibhai.com/visit

// In visit key is no outside modification is possible 
// But in visited key is outside modification is possible 


const Visiter = () => {

    const [visiterCount, SetVisiterCount] = useState(0);
    const [isVisited, SetIsVisited] = useState(localStorage.getItem(websiteReal));
    
    useEffect(() => {

        console.log("after isVisited " + isVisited );
        console.log("api call");


        if (isVisited == "true") {

            countapi.get(websiteTesting, key).then((result) => {

                if (result.status == 200) {
                    SetVisiterCount(result.value);
                    console.log("already  " + result.value);
                }
                else {
                    SetIsVisited("false");
                    SetVisiterCount(43);
                    console.log("network error " + result.status);
                }
            });

        }

        else if (isVisited == null) {

            countapi.hit(websiteTesting, key).then((result) => {

                if (result.status == 200) {
                    SetIsVisited("true");
                    SetVisiterCount(result.value);
                    localStorage.setItem(websiteReal, "true");
                    console.log("hit");


                }
                else {
                    SetIsVisited("false");
                    SetVisiterCount(43);
                    console.log("network error " + result.status);
                }

            });
        }

    }, []);



    return (
        <>
            <ShowVisiterCount forShowvisiterCount={visiterCount} />

        </>

    );

};

export default Visiter;

