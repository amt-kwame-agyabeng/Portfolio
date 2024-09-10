import React from "react";

const HomePage = ({onToggle}) => {
  const handleResumeClick = () => {
    const resumeLink =
      "https://drive.google.com/file/d/1YdBosHeUvtQZd6mQQgR2ZbsVCdE47SpR/view?usp=sharing";
    window.location.href = resumeLink;
  };

  const handleGitClick = () => {
    const GitLink = "https://github.com/amt-kwame-agyabeng";
    window.location.href = GitLink;
  };

  const handleLinkedinClick = () => {
    const linkedinLink =
      "https://www.linkedin.com/in/kwame-agyabeng-8603b3164/";
    window.location.href = linkedinLink;
  };

  const handleXClick = () => {
    const XLink = "https://x.com/___nanakwame";
    window.location.href = XLink;
  };

  return (
    <div>
      <nav className="flex justify-between items-center">
        <header className="text-5xl">🧑🏽‍💻</header>
        <div className="flex gap-10 items-center font-regular">
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
            className="text-white bg-black  rounded-lg px-3 py-2"
            onClick={handleResumeClick}
          >
            Resume
          </button>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 30 30"
            height="1.8em"
            width="1.8em"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
            onClick={onToggle}
            
          >
            <path
              d="M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M14.8,24.51h0.19
	c1.37,0,2.67-0.27,3.91-0.8s2.31-1.25,3.21-2.15s1.61-1.97,2.15-3.21s0.8-2.54,0.8-3.91c0-1.36-0.27-2.66-0.8-3.9
	s-1.25-2.31-2.15-3.21s-1.97-1.61-3.21-2.15s-2.54-0.8-3.91-0.8H14.8V24.51z"
            ></path>
          </svg>
        </div>
      </nav>
      <div className="flex items-center gap-2 mt-9">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 1024 1024"
          height="3em"
          width="2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path>
        </svg>
        <div className="flex flex-row items-center">
          <p className="font-extralight text-xl">Hello I'm</p>
          <span role="img" aria-label="victoryhand">
            ✌🏽
          </span>
        </div>
      </div>
      <p className="font-light text-7xl mt-3">KWAME</p>
      <p className="font-light text-7xl ">AGYABENG</p>
      <p className="font-light mt-7 mb-7">
        Frontend Developer {""} | {""} Cloud Practitioner Based in Ghana 🇬🇭
      </p>

      <button className="border-2 border-gray-900 px-4 py-1 rounded-lg  flex items-center gap-2  font-light">
        See More{" "}
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="2em"
          width="2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
        </svg>
      </button>

      <div className="flex gap-10 items-center mt-10">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 1024 1024"
          height="1.8em"
          width="1.8em"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleGitClick}
          style={{ cursor: "pointer" }}
        >
          <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
        </svg>

        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1.8em"
          width="1.8em"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleLinkedinClick}
          style={{ cursor: "pointer" }}
        >
          <path
            fill-rule="evenodd"
            d="M22.0367422,22 L17.8848745,22 L17.8848745,15.5036305 C17.8848745,13.9543347 17.85863,11.9615082 15.7275829,11.9615082 C13.5676669,11.9615082 13.237862,13.6498994 13.237862,15.3925291 L13.237862,22 L9.0903683,22 L9.0903683,8.64071385 L13.0707725,8.64071385 L13.0707725,10.4673257 L13.1276354,10.4673257 C13.6813927,9.41667396 15.0356049,8.3091593 17.0555507,8.3091593 C21.2599073,8.3091593 22.0367422,11.0753215 22.0367422,14.6734319 L22.0367422,22 Z M4.40923804,6.81585163 C3.07514653,6.81585163 2,5.73720584 2,4.40748841 C2,3.07864579 3.07514653,2 4.40923804,2 C5.73720584,2 6.81585163,3.07864579 6.81585163,4.40748841 C6.81585163,5.73720584 5.73720584,6.81585163 4.40923804,6.81585163 L4.40923804,6.81585163 Z M6.48604672,22 L2.32980492,22 L2.32980492,8.64071385 L6.48604672,8.64071385 L6.48604672,22 Z"
          ></path>
        </svg>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 1024 1024"
          height="1.8em"
          width="1.8em"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleXClick}
          style={{ cursor: "pointer" }}
        >
          <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
        </svg>
      </div>
      <div className="projects mt-20">
        <p className="font-medium text-2xl mb-5">Projects</p>
        <div className="flex flex-row w-full gap-10 mb-9">
          <div className="border-2 border-gray-900 p-2 rounded-lg flex-1  items-center justify-between  flex">
            <p className="cursor-default font-regular">
              {" "}
              Personal Portfolio website
            </p>
            <svg
              stroke="black"
              fill="none"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1.2em"
              width="1.2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              ></path>
            </svg>
          </div>

          <div className="border-2 border-gray-900 p-2 rounded-lg flex-1 items-center justify-between flex max-w-prose ">
            <p className="cursor-default font-regular">
              Currently Learning ~ AWS Restart Program
            </p>
            <svg
              stroke="black"
              fill="none"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1.2em"
              width="1.2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="skill">
        <p className="font-medium text-2xl">Skills</p>
      </div>
      <div className="contact">
        <p className="font-medium text-2xl">Contact</p>
        <p className="font-regular mt-5 mb-7">
          Get in touch or send me an email directly on kwameagyabeng63@gmail.com
        </p>
        <div className="flex flex-col gap-7">
          <div className="name border border-gray-300 p-3 rounded-lg w-1/2">
            <input
              className="focus:outline-none w-[100%] bg-transparent"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="email border border-gray-300 p-3 rounded-lg w-1/2 ">
            <input
              className="focus:outline-none w-[100%] bg-transparent"
              type="text"
              placeholder="Email"

            />
          </div>
          <div className="name border border-gray-300 p-3 rounded-lg w-1/2 h-40 ">
            <textarea
              className="w-full min-h-[100px] max-h-[200px] p-2  overflow-auto focus:outline-none resize-none bg-transparent"
              placeholder="Message"
            />
          </div>
          <div>
            <button className="text-white bg-black border rounded-lg p-2">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <footer>
        <p className="text-center font-regular">
          © 2024 Kwame Aboagye Agyabeng
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
