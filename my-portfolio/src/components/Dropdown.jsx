import React, {useState} from "react";

const Dropdown = ({ onToggle, darkMode }) => {
  const handleResumeClick = () => {
    const resumeLink =
      "https://drive.google.com/file/d/1YdBosHeUvtQZd6mQQgR2ZbsVCdE47SpR/view?usp=sharing";
    window.location.href = resumeLink;
  };

  const [dropDownOpen ,  setDropDownOpen] = useState(true);

  const  handleToggle = () => {
    setDropDownOpen((prev) =>  !prev);
  }
  if (!dropDownOpen) {
    return null; // Do not render the dropdown if it is closed
  }



  return (
    <div
      className={`fixed inset-0 z-50 transition-colors duration-100 ${
        darkMode ? 'dark' : 'light'
      }`}
    >
      <div className="flex flex-col items-center text-center gap-7 mt-10 w-full h-screen ">
        <svg
          stroke="currentColor"
          fill="currentColor"
          viewBox="0 0 1024 1024"
          height="1.5em"
          width="1.5em"
          aria-label="close-button"
          onClick={handleToggle}
         
        
        >
          <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
        </svg>
        <a href="#projects" className="hover:underline ">
          Projects
        </a>
        <a href="#about" className="hover:underline">
          About
        </a>
        <a
          href="https://medium.com/@kwameagyabeng63"
          className="hover:underline"
        >
          Blog
        </a>
        <button
          className="text-white bg-black border border-gray-500 rounded-md  px-3 py-2"
          onClick={handleResumeClick}
        >
          Resume
        </button>
        <svg
          stroke="currentColor"
          fill="currentColor"
          viewBox="0 0 30 30"
          height="1.8em"
          width="1.8em"
          className="cursor-pointer"
          onClick={onToggle}
          aria-label="toogle-theme"
        >
          <path d="M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M14.8,24.51h0.19c1.37,0,2.67-0.27,3.91-0.8s2.31-1.25,3.21-2.15s1.61-1.97,2.15-3.21s0.8-2.54,0.8-3.91c0-1.36-0.27-2.66-0.8-3.9s-1.25-2.31-2.15-3.21s-1.97-1.61-3.21-2.15s-2.54-0.8-3.91-0.8H14.8V24.51z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Dropdown;
