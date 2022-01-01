import React, { Component } from 'react';
import countapi from 'countapi-js';
import ShowVisiterCount from './showVisitersCount'

import "../../style/App.scss";

let isVisited = localStorage.getItem("visited");
let websiteTesting = 'neerajbhaibhai.com';
let websiteReal = 'neerajdhurandher.me';
let run = false;
//neerajbhaibhai.com testing server
// neerajdhurandher.me real server
// https://api.countapi.xyz/get/neerajbhaibhai.com/visit
// https://api.countapi.xyz/hit/neerajbhaibhai.com/visit

var visiterCount = 0;

const checkforvisiter = () => {

    console.log("visited render ");
    console.log("run " + run);
    console.log("is visited  " + isVisited);

    if (isVisited != "true" && run == false) {

        run = true;
        isVisited = "true"
        countapi.hit(websiteTesting, 'visit').then((result) => {

            if (result.status == 200) {
                run = true;
                isVisited = "true"
                visiterCount = result.value;
                localStorage.setItem("visited", "true");
                console.log("hit");


            }
            else {
                run = false;
                isVisited = "false"
                console.log("network error " + result.status);
            }

        });
    }

    else if (isVisited == "true" && run == false) {

        run = true;
        isVisited = "true"

        countapi.get(websiteTesting, 'visit').then((result) => {

            if (result.status == 200) {
                run = true;
                isVisited = "true"
                visiterCount = result.value;
                localStorage.setItem("visited", true);
                console.log("already  " + result.value);
            }
            else {
                run = false;
                isVisited = "false"
                console.log("network error " + result.status);
            }
        });

    }

};

const Visiter = () => {

    const state = {
        visiterCount: 100,
        run: false,
    }

    checkforvisiter();

    return (
        <>
            <ShowVisiterCount forShowvisiterCount={visiterCount} />

        </>

    );

};

export default Visiter;
