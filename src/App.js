import React, { useState,useEffect, useRef } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';
import avatarImage from './assets/avatar.png';
import avatarImageNight from './assets/avatar-night.png';

import DownloadIcon from './assets/Download.svg';
import AboutIcon from './assets/About.svg';
import WorksIcon from './assets/Portfolio.svg';
import MuteIcon from './assets/Mute.svg';
import SoundIcon from './assets/Speaker.svg';
import Night from './assets/Night.svg';
import Day from './assets/Day.svg';

import speakbrightGif from './assets/speakbright.gif';
import bizexpense from './assets/bizexpense.gif';
import rymind from './assets/rymind.mp4';
import breathewrite from './assets/breathewrite.gif';


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
      techstack: `
        <img src="https://img.shields.io/badge/Dart-%230175C2.svg?style=flat&logo=dart&logoColor=white" alt="Dart" />
        <img src="https://img.shields.io/badge/Flutter-%2302569B.svg?style=flat&logo=Flutter&logoColor=white" alt="Flutter" />
        <img src="https://img.shields.io/badge/Firebase-%23039BE5.svg?style=flat&logo=firebase" alt="Firebase" />
        <img src="https://img.shields.io/badge/FastAPI-005571?style=flat&logo=fastapi" alt="FastAPI" />
        <img src="https://img.shields.io/badge/React-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB" alt="React" />
        <img src="https://img.shields.io/badge/Python-3670A0?style=flat&logo=python&logoColor=ffdd54" alt="Python" />
        <img src="https://img.shields.io/badge/Git-%23F05033.svg?style=flat&logo=git&logoColor=white" alt="Git" />
      `,
      description: 'SpeakBright is an Augmentative and Alternative Communication (AAC) app designed to support children with Autism Spectrum Disorder (ASD) and speech impairments. It addresses the limitations of traditional tools like PECS and existing AAC apps by integrating personalized images, Text-to-Speech (TTS), emotion-inclusive communication, and real-time progress tracking.<br/><br/> I contributed to the UI/UX design, the Learn Module, and implemented automatic phase progression based on each child’s proficiency. I also developed the Adaptive Card Recommendation system using Temporal PrefixSpan, a sequential pattern mining algorithm enhanced with time-awareness, to deliver personalized, time-sensitive suggestions based on user behavior.',
      gif: speakbrightGif,
    },
    {
      title: 'BizExpense',
      techstack: `
        <img src="https://img.shields.io/badge/C%23-%23239120.svg?style=flat&logo=c-sharp&logoColor=white" alt="C#" />
        <img src="https://img.shields.io/badge/.NET-5C2D91?style=flat&logo=.net&logoColor=white" alt=".NET" />
        <img src="https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=flat&logo=microsoft%20sql%20server&logoColor=white" alt="MSSql" />
        <img src="https://img.shields.io/badge/Ngrok-372e66.svg?style=flat" alt="badge" />
        <img src="https://img.shields.io/badge/NLP/LLM-316d8c.svg?style=flat" alt="badge" />
        <img src="https://img.shields.io/badge/Razor -b37d32.svg?style=flat" alt="badge" />
        <img src="https://img.shields.io/badge/TCP Tunneling-983e59.svg?style=flat" alt="badge" />

      `,
      description: 'Collaborated with a team of 5 to develop an expense tracking web application for Alliance Software Inc. Built a detailed reporting dashboard with category-based filtering and dynamic chart visualization. I integrated an AI-powered chatbot that communicates with a local Microsoft SQL Server via TCP tunneling, enabling real-time expense queries. This innovative integration set our project apart from other web apps and led to our recognition for outstanding performance throughout the training program.',
      gif: bizexpense,
    },
    {
      title: 'RyMind',
      techstack: `
        <img src="https://img.shields.io/badge/Python-3670A0?style=flat&logo=python&logoColor=ffdd54" alt="Python" />
        <img src="https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=flat&logo=PyTorch&logoColor=white" alt="PyTorch" />
        <img src="https://img.shields.io/badge/Numpy-%23013243.svg?style=flat&logo=numpy&logoColor=white" alt="NumPy" />
        <img src="https://img.shields.io/badge/OpenCV-%23white.svg?style=flat&logo=opencv&logoColor=white" alt="OpenCV" />
        <img src="https://img.shields.io/badge/Threading-398475.svg?style=flat" alt="badge" />
        <img src="https://img.shields.io/badge/FaceRecognition-6e6dca.svg?style=flat" alt="badge" />
        <img src="https://img.shields.io/badge/SpeechRecognition -b37d32.svg?style=flat" alt="badge" />
        <img src="https://img.shields.io/badge/NLP-316d8c.svg?style=flat" alt="badge" />
        <img src="https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=flat&logo=TensorFlow&logoColor=white" alt="TensorFlow" />
      `,
      description: 'RyMind is an AI-powered assistive system designed to support individuals with dementia by helping them recognize loved ones and engage in meaningful conversations. I developed a real-time face recognition module using face_recognition and OpenCV, and built a speech-enabled chatbot powered by a custom intent classification model trained in PyTorch. The system applies natural language processing (NLP) using NLTK and custom utilities, with tokenization, stemming, and Bag-of-Words for intent detection. It supports real-time interaction through speech-to-text and text-to-speech, and intelligently triggers face recognition in response to context-aware queries. This project combines computer vision, machine learning, and natural language.',
      video: rymind,
    },
    {
      title: 'BreatheWrite',
      techstack: `
        <img src="https://img.shields.io/badge/Python-3670A0?style=flat&logo=python&logoColor=ffdd54" alt="Python" />
        <img src="https://img.shields.io/badge/django-%23092E20.svg?style=flat&logo=django&logoColor=white" alt="Django" />
        <img src="https://img.shields.io/badge/Dart-%230175C2.svg?style=flat&logo=dart&logoColor=white" alt="Dart" />
        <img src="https://img.shields.io/badge/Flutter-%2302569B.svg?style=flat&logo=Flutter&logoColor=white" alt="Flutter" />
        <img src="https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=flat&logo=TensorFlow&logoColor=white" alt="TensorFlow" />
        <img src="https://img.shields.io/badge/Keras-%23D00000.svg?style=flat&logo=Keras&logoColor=white" alt="Keras" />
        <img src="https://img.shields.io/badge/Emotion Analysis -b37d32.svg?style=flat" alt="badge" />
        <img src="https://img.shields.io/badge/NLP-316d8c.svg?style=flat" alt="badge" />
      `,
      description: 'A journaling app that performs emotion analysis on user journal entries to provide mental health insights during therapy sessions. I implemented the emotion classification model using TensorFlow and Keras, applying NLP techniques to detect emotional states from text. The project includes a Flutter frontend and a Django backend, enabling a seamless, cross-platform user experience.',
      gif: breathewrite,
    },
  ];

  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);

  const goToNextWork = () => {
    setCurrentWorkIndex((prevIndex) => (prevIndex + 1) % works.length);
  };
  
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = new Audio(`${process.env.PUBLIC_URL}/bgmusic.mp3`);
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
          <img src={theme === "dark" ? avatarImageNight : avatarImage} alt="avatar" className="avatar" />
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
              <div
                className="work-techstack"
                dangerouslySetInnerHTML={{ __html: works[currentWorkIndex].techstack }}
              />
              <p className='desc' dangerouslySetInnerHTML={{ __html: works[currentWorkIndex].description }} />

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
