import React from "react";
import "./resume-button.scss";

import DownloadIcon from '@mui/icons-material/ArrowDownwardRounded';

import resume from "../../../assets/about/neeraj_dhurandher_resume.pdf";

const ResumeDownloadButton = () =>(
      <div>
        <div className="resume_down_btn text-center flex-center">
          <a href={resume} download="Neeraj Dhurandher Resume">
            Resume
          </a>
          <DownloadIcon className="download_icon"/>
        </div>
      </div>
);

export default ResumeDownloadButton ;