import Song from './assets/Song.png';
import web_design from './assets/web_design.png';
import builtrackr from './assets/builtrackr.png';
import health_care from './assets/health_care.png';
import Earthling from './assets/Earthling.png';
import Camera_blue from './assets/camera_blue.png';
import akuru_mithura from './assets/akuru_mithura.png';
import minimal from './assets/minimal.jpeg';
import game from './assets/game.png';
import one from './assets/one.jpeg';
import two from './assets/two.jpeg';
import three from './assets/three.jpeg';
import four from './assets/four.jpeg';
import five from './assets/five.jpeg';



import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaJava, FaPython, FaFigma } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiTypescript, SiCanva, SiTailwindcss, SiNextdotjs, SiGodotengine, SiUnity } from "react-icons/si";


export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Services',
    path: 'services',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Works',
    path: 'work',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const services = [
  {
    id: 1,
    name: 'Quality Assurance',
    title: 'Test Automation & QA',
    description:
      'Professional QA engineering with expertise in test automation, CI/CD integration, and quality strategy. Ensuring robust software delivery through comprehensive testing.',
  },
  {
    id: 2,
    name: 'Web Development',
    title: 'Full-Stack Development',
    description:
      'Building responsive web applications with React, Next.js, and Node.js. Strong foundation in both frontend and backend development with modern frameworks.',
  },
  {
    id: 3,
    name: 'Mobile Development',
    title: 'iOS & Android Apps',
    description:
      'Developing cross-platform mobile applications with focus on user experience, performance optimization, and accessibility across platforms.',
  },
  {
    id: 4,
    name: 'Game Development',
    title: 'Interactive Experiences',
    description:
      'Creating immersive games and interactive media using Unity and Godot. Passionate about game mechanics, player engagement, and interactive storytelling.',
  },
  {
    id: 5,
    name: 'UI/UX Design',
    title: 'Interactive Design',
    description:
      'Designing intuitive interfaces with Figma and Canva. Creating engaging visual experiences with focus on usability and aesthetic excellence.',
  },
];

export const skills = [
  {
    id: 1,
    name: 'Test Automation & QA Engineering',
    percentage: 92,
    description:
      'Experienced in automated testing with Cypress, Playwright, and UiPath. Building reliable test suites, CI/CD integration, and comprehensive quality strategies.',
  },

  {
    id: 2,
    name: 'Game Development & Interactive Media',
    percentage: 85,
    description:
      'Creating immersive experiences with Unity and Godot. Strong foundation in game mechanics, physics, and interactive storytelling for engaging gameplay.',
  },

  {
    id: 3,
    name: 'Web Development (React & Node.js)',
    percentage: 88,
    description:
      'Building modern, responsive web applications with React, Next.js, and TypeScript. Full-stack development with focus on performance and user experience.',
  },

  {
    id: 4,
    name: 'Mobile Application Development',
    percentage: 80,
    description:
      'Developing cross-platform mobile apps for iOS and Android with emphasis on accessibility, performance optimization, and intuitive user interfaces.',
  },

  {
    id: 5,
    name: 'UI/UX Design & Visual Design',
    percentage: 83,
    description:
      'Designing user-centered interfaces with Figma and Canva. Experience in wireframing, prototyping, design systems, and creating engaging visual experiences.',
  },

  {
    id: 6,
    name: 'Software Engineering Principles',
    percentage: 87,
    description:
      'Strong foundation from SE degree: design patterns, algorithms, system architecture, and scalable software development best practices.',
  },
];

export const projects = [
  {
    id: 1,
    img: Camera_blue,
    category: 'UI/UX Design',
    title: 'A Quiet Space for Memories',
    description:
      'A background design created for a personal memory-keeping website.',
    fullDescription:
      ' This background was designed as part of a **personal memory-keeping website**, created to store moments, thoughts, and experiences in a calm, private digital space. The visual style focuses on softness and balance, using subtle colors and minimal elements to avoid distraction and let memories remain the focus.The design reflects the idea that memories don’t need to be loud to be meaningful ,they need space, clarity, and emotion. This project helped me explore how **visual design can support storytelling and emotional connection, even in simple interfaces.',
    technologies: ['Canva'],
    githubLink: '',
    figmaLink: '',
  },
  {
    id: 2,
    img: builtrackr,
    category: 'Development',
    title: 'Builtrackr',
    description:
      'A web platform designed and developed to simplify construction site management. Focused on improving workflow, and task tracking.',
    fullDescription:
      'Bulitrackr was created to address the everyday challenges faced on construction sites, where fragmented communication and manual tracking often lead to delays and errors. The platform was designed and developed as a comprehensive web solution to streamline workflow management, task tracking, and team collaboration in a single system.By focusing on clarity, usability, and real-world site requirements, the project explores how thoughtful digital design and modern web technologies can improve efficiency and coordination for construction managers and their teams.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express','React Native'],
    githubLink: '',
    figmaLink: 'https://www.figma.com/design/CymN8rJMw44jgFIE13ktkG/BuilTrackr?node-id=240-783&m=dev&t=IpZmejsDHfoIy0su-1',
  },
  {
    id: 3,
    img: Earthling,
    category: 'UI/UX Design',
    title: 'Earthling',
    description:
      'A UI/UX project created for the RevolUX design competition, focused on crafting an engaging and user-friendly experience',
    fullDescription:
      'A UI/UX project created for the RevolUX design competition, focused on crafting an engaging and user-friendly experience. The project emphasizes sustainable living and environmental awareness through thoughtful interaction design and compelling visual storytelling.',
    technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
    githubLink: '',
    figmaLink: '',
  },

  {
    id: 4,
    img: health_care,
    category: 'UI/UX Design',
    title: 'Stay Fit',
    description:
      'Designed login and landing pages for a health care app, focusing on clarity, ease of use, and a calm user experience',
    fullDescription:
      'Designed comprehensive login and landing pages for a health care application, focusing on clarity, ease of use, and a calm user experience. The design prioritizes accessibility and user comfort, creating an inviting interface for health-conscious users.',
    technologies: ['Figma', 'UI/UX Design', 'Mobile Design'],
    githubLink: '',
    figmaLink: '',
  },
  {
    id: 5,
    img: game,
    category: 'Development',
    title: 'Legendary-Octo-Run',
    description:
      'A simple platform game designed and developed as part of a Game Development module. Focused on game mechanics and level design.',
    fullDescription:
      'A simple platform game designed and developed as part of a Game Development module. The project focuses on core game mechanics, level design, and player engagement. Features include dynamic obstacles, collectibles, and progressive difficulty to create an enjoyable gaming experience.',
    technologies: ['Unity', 'C#', 'Game Design'],
    githubLink: '',
    figmaLink: '',
  },
  {
    id: 6,
    img: Song,
    category: 'UI/UX Design',
    title: 'Music Gallery',
    description:
      'A minimal interface design for a music streaming app, inspired by Spotify',
    fullDescription:
      'A minimal interface design for a music streaming application, inspired by Spotify. The design emphasizes clean aesthetics, intuitive navigation, and seamless music discovery. Features include playlist management, artist profiles, and a modern player interface.',
    technologies: ['Figma', 'UI/UX Design', 'Interface Design'],
    githubLink: '',
    figmaLink: '',
  },
  {
    id: 7,
    img: akuru_mithura,
    category: 'R & D',
    title: 'Akuru Mithura',
    description:
      'A research-based project developing an educational app for dyslexic learners, incorporating gamification and personalized learning',
    fullDescription:
      'A research-based project developing an educational mobile application for dyslexic learners. The app incorporates gamification elements and personalized learning paths to make education more accessible and engaging. Features adaptive difficulty, progress tracking, and interactive exercises designed specifically for dyslexic students.',
    technologies: ['React Native', 'Firebase', 'Educational Design', 'Gamification'],
    githubLink: '',
    figmaLink: '',
  },
  {
    id: 8,
    img: web_design,
    category: 'UI/UX Design',
    title: 'Web Design',
    description:
      'A personal web app for organizing and preserving memories, designed to provide a calm, distraction-free space.',
    fullDescription:
      'A personal web application for organizing and preserving memories, designed to provide a calm, distraction-free digital space. The interface focuses on simplicity and emotional connection, allowing users to curate their memories with ease and mindfulness.',
    technologies: ['Figma', 'UI/UX Design', 'Web Design'],
    githubLink: '',
    figmaLink: '',
  },
  {
    id: 9,
    img: minimal,
    category: 'Photography',
    title: 'Untitled, 2025',
    description:
      'A collection of photos captured on phone focusing on composition, light, and visual storytelling.',
    fullDescription:
      'A curated set of six photographs exploring low-light environments and muted tones, focusing on composition, atmosphere, and visual storytelling. The series captures quiet moments across urban spaces, natural environments, and small forms of life, emphasizing mood and stillness',
    technologies: ['Photography', 'Mobile Photography', 'Visual Arts'],
    githubLink: '',
    figmaLink: '',
    additionalImages: [one, two, three, minimal,four,five],
  },
];



export const additionalSkills = [
  { id: 1, name: 'React', icon: <FaReact /> },
  { id: 2, name: 'Node.js', icon: <FaNodeJs /> },
  { id: 3, name: 'MongoDB', icon: <SiMongodb /> },
  { id: 4, name: 'TypeScript', icon: <SiTypescript /> },
  { id: 5, name: 'Git', icon: <FaGitAlt /> },
  { id: 6, name: 'Next.js', icon: <SiNextdotjs /> },
  { id: 7, name: 'Tailwind', icon: <SiTailwindcss /> },
  { id: 8, name: 'Canva', icon: <SiCanva /> },
  { id: 9, name: 'PostgreSQL', icon: <SiPostgresql /> },
  { id: 10, name: 'Godot', icon: <SiGodotengine /> },
  { id: 11, name: 'Docker', icon: <FaDocker /> },
  { id: 12, name: 'Java', icon: <FaJava /> },
  { id: 14, name: 'Python', icon: <FaPython /> },
  { id: 15, name: 'Figma', icon: <FaFigma /> },
  { id: 16, name: 'Unity', icon: <SiUnity /> },
];
