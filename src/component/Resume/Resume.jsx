import React from 'react'
import { Link } from 'react-router'
import resume from "../../assets/image/MST SHIMA KHATUN_page-0001.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
const Resume = () => {
  return (
     <section className="min-h-screen flex items-center justify-center bg-[#14121A] pt-20 px-4 pb-20">
  <div className="w-full max-w-7xl flex flex-col items-center space-y-8 pt-16">
    {/* Single Download Button */}
    <a
      href="https://drive.google.com/file/d/1_iuOA6g4Udwjr-UFRT68mQMD9_l-msgg/view?usp=drive_link"
      
      className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold px-6 py-3 rounded-lg transition"
    >
    <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>  Download Resume
    </a>

    {/* Resume Viewer */}
    <div className="w-full flex justify-center border-fuchsia-500 rounded-xl overflow-hidden shadow-lg">
       <img
    src={resume}
    type="application/pdf"
    width="80%"
    className="rounded-xl"
  />
    </div>
       <a
      href="https://drive.google.com/file/d/1_iuOA6g4Udwjr-UFRT68mQMD9_l-msgg/view?usp=drive_link"
      
      className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold px-6 py-3 rounded-lg transition"
    >
    <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>  Download Resume
    </a>
  </div>
</section>
  )
}

export default Resume
