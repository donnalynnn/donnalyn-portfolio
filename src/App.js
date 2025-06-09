import React, { useState,useEffect, useRef } from 'react';
import './App.css';
import avatarImage from './assets/avatar.png';
import avatarImageNight from './assets/avatar-night.png';

import DownloadIcon from './assets/Download.svg';
import AboutIcon from './assets/About.svg';
import WorksIcon from './assets/Portfolio.svg';
import MuteIcon from './assets/Mute.svg';
import SoundIcon from './assets/Speaker.svg';
import Night from './assets/Night.svg';
import Day from './assets/Day.svg';
import music from './assets/bgmusic.mp3';


import speakbrightGif from './assets/speakbright.gif';
import bizexpense from './assets/bizexpense.gif';
import rymind from './assets/rymind.mp4';
import resumePDF from './assets/Resume.pdf';
import FireflyScene from "./FireflyScene.jsx";





function App() {
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme") || "light"
  );
  
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };
  useEffect(() => {
    const inject = document.createElement("script");
    inject.src = "https://cdn.botpress.cloud/webchat/v3.0/inject.js";
    inject.async = true;
  
    // const config = document.createElement("script");
    // config.src = "https://files.bpcontent.cloud/2025/06/08/03/20250608030950-K8MMB7A6.js";
    // config.async = true;

    inject.onload= () => {
      window.botpress.init({
        "botId": "bbc78094-99fe-49ac-af1e-771ab6b84504",
        "configuration": {
          "version": "v1",
          "composerPlaceholder": "",
          "botName": "Nyanko",
          "botAvatar": "https://files.bpcontent.cloud/2025/06/08/09/20250608093208-HIK3383I.jpeg",
          "botDescription": "Ask me anything about Donnalyn",
          "fabImage": "https://files.bpcontent.cloud/2025/06/09/05/20250609054426-QLOY3DMT.png",
          "website": {},
          "email": {
            "title": "donnalynreroma.dev@gmail.com",
            "link": "donnalynreroma.dev@gmail.com"
          },
          "phone": {},
          "termsOfService": {},
          "privacyPolicy": {},
          "color": "#73987a",
          "variant": "solid",
          "headerVariant": "glass",
          "themeMode": theme,
          "fontFamily": "inter",
          "radius": 4,
          "feedbackEnabled": false,
          "footer": "©2025 Donnalyn",
          "additionalStylesheetUrl": "https://files.bpcontent.cloud/2025/06/09/03/20250609035752-QQYO8PL0.css",
          "allowFileUpload": false,
          "storageLocation": "sessionStorage"
        },
        "clientId": "e7e6c907-1469-44e1-9357-eb7353bf2a7e"
      
    });
  };
  
    document.body.appendChild(inject);
  }, [theme]);

  const [activeTab, setActiveTab] = useState('about');
  const works = [
    {
      title: 'SpeakBright AAC App',
      // techstack: ![Dart](https://img.shields.io/badge/dart-%230175C2.svg?style=flat&logo=dart&logoColor=white)
      description: 'An AI-powered AAC mobile app for children with special needs.',
      gif: speakbrightGif,
    },
    {
      title: 'BizExpense',
      description: 'A web app that tracks and visualizes business expenses.',
      gif: bizexpense,
    },
    {
      title: 'RyMind',
      description: 'A personal portfolio built with React and pixel styling.',
      video: rymind,
    },
  ];

  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);

  const goToNextWork = () => {
    setCurrentWorkIndex((prevIndex) => (prevIndex + 1) % works.length);
  };
  
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = new Audio(music);
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    audio
    .play()
    .then(() => {
      setIsPlaying(true); 
    })
    .catch((error) => {
      console.warn("Autoplay was blocked by the browser:", error);
    });
  }, []);

  useEffect(() => {
  const handleFirstInteraction = () => {
    if (!audioRef.current) return;

    audioRef.current.play().then(() => {
      setIsPlaying(true);
    });

    window.removeEventListener("click", handleFirstInteraction);
  };

  window.addEventListener("click", handleFirstInteraction);
}, []);


  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="app"
      
    >
      
      <FireflyScene />
      <main style={{ position: "relative", zIndex: 10 }}>
      <div className="avatar-wrapper">
      <div className="main-container">
      <nav className="navbar">
        <button className="nav-button purple" onClick={() => setActiveTab('about')}>
          About Me
          <img src={AboutIcon} alt="About" width="20" height="20" />
        </button>

        <button className="nav-button blue" onClick={() => setActiveTab('works')}>
          My Works
          <img src={WorksIcon} alt="Works" width="20" height="20" />
        </button>

        <a href={resumePDF}  download="JessaDonnalynReroma_Resume.pdf" className="nav-button pink">
          Resume
          <img src={DownloadIcon} alt="Download" width="20" height="20" />
        </a>

        <button className="nav-button green circle" title="Toggle Music" onClick={toggleAudio}>
          <img src={isPlaying ? SoundIcon  : MuteIcon} alt="MuteToggle" width="20" height="20" />
        </button>

        <button className="nav-button yellow circle" title="Light/Dark Mode" onClick={toggleTheme}>
          <img src={theme === "dark" ? Night : Day} alt="MuteToggle" width="20" height="20" />
        </button>

      </nav>



        <div className="content-container">
          <img src={avatarImage} alt="avatar" className="avatar" />
          {activeTab === 'about' && (
    <>
          <h1>Donnalyn</h1>
          <p>Jessa Donnalyn Reroma</p>
          <p className="roles">
            <span className="green1">AI ENGINEER</span> | 
            <span className="pink1"> MOBILE DEV</span> | 
            <span className="blue1"> WEB DEV</span> | 
            <span className="purple1"> GRAPHIC ARTIST</span>
          </p>
          <p className="bio">
          Hey! I’m Donnalyn, a fresh Computer Science grad who genuinely thinks coding is fun (sometimes). 
          I’ve been diving into AI and mobile development because I love making tech that feels smart and useful. 
          I specialize in Mobile Development and Artificial Intelligence, but I've also dabbled in Web Dev and Graphic Design
          Whether it's building cool apps with Flutter or exploring how AI can make people’s lives easier, 
          I’m always curious, learning, and ready to create something awesome.
          </p>
        </>
      )}

      {activeTab === 'works' && (
        <>
          <div className="work-carousel">
            <div className="work-media">
              {works[currentWorkIndex].video ? (
                <video
                  src={works[currentWorkIndex].video}
                  controls
                  autoPlay
                  muted
                  className="work-video"
                />
              ) : works[currentWorkIndex].gif ? (
                <img
                  src={works[currentWorkIndex].gif}
                  alt={works[currentWorkIndex].title}
                  className="work-image"
                />
              ) : (
                <img
                  src={works[currentWorkIndex].image}
                  alt={works[currentWorkIndex].title}
                  className="work-image"
                />
              )}
            </div>

            <div className="work-details">
              <h2>{works[currentWorkIndex].title}</h2>
              <p>{works[currentWorkIndex].description}</p>
              <button onClick={goToNextWork} className="carousel-btn next-btn">
                Next ▶
              </button>
            </div>
          </div>
        </>
      )}

        </div>
      </div>
    </div>
    </main>
    </div>



  );

  
}

export default App;
