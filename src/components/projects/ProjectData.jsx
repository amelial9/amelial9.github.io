import datathon2025 from '../../assets/projects/datathon2025.svg';
import voxtune from '../../assets/projects/voxtune.svg';
import worthywave from '../../assets/projects/worthywave.svg';
import info330 from '../../assets/projects/info330.svg';
import mbti from '../../assets/projects/mbti.svg';
import tempad from '../../assets/projects/tempad.svg';
import roomio from '../../assets/projects/roomio.svg';
import crossly from '../../assets/projects/crossly.svg';
import petswipe from '../../assets/projects/petswipe.svg';

export const developmentProjects = [
    {
      title: "Crossly",
      description: "Developed an interactive full-stack web application built with React and Node.js that generates custom crossword puzzles from user-inputted vocabulary terms and definitions.",
      image: crossly,
      tech: ['React', 'Node.js', 'MongoDB', 'Azure Authentication'],
      github: "https://github.com/info441-sp25/INFO441-Group5-25SP"
    },
    {
      title: "Healthcare Cost Prediction Model - Datathon 2025",
      description: "Developed machine learning models to predict hospital inpatient mean costs using healthcare data. 🥈 Second place in Machine Learning and 🥉 third place in Data Visualization",
      image: datathon2025,
      tech: ['Python', 'Machine Learning', 'Data Visualization'],
      github: "https://github.com/Marc0Guo/NY-Hospital-Analysis",
      presentation: "https://www.canva.com/design/DAGlxQG7m3g/9873kRtrmPSsXDKxACnhmg/edit"
    },
    {
      title: "VoxTune",
      description: "Developed VoxTune, an interactive vocal warmup web application that allows users to upload, organize, and practice vocal exercises.",
      image: voxtune,
      tech: ['React', 'Vite', 'Firebase', 'Web Development'],
      github: "https://github.com/amelial9/VoxTune"
    },
    {
      title: "PetSwipe",
      description: "Built an iOS mobile app using Swift and UIKit that helps users discover and match with adoptable pets through a swipe-based interface.",
      image: petswipe,
      tech: ['Swift', 'UIKit', 'Firebase', 'iOS Development'],
      github: "https://github.com/wena04/petswipe"
    },
    {
      title: "Global Inequality Insights Database",
      description: "Global Inequality Insights database is a project utilizing SQL and Azure Data Studio to uncover relationships between socio-economic factors and environmental impacts.",
      image: info330,
      tech: ['SQL', 'Azure Database', 'Database Design'],
      presentation: "https://www.canva.com/design/DAGGWkbMels/81Yor2AAzQsNoCKKK6piFA/view?utm_content=DAGGWkbMels&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7995c14894"
    },
    {
      title: "MBTI Recommender",
      description: "Developed the Shiny web application MBTI Recommender to predict music preference for different MBTI personality types; utilized R to conduct comprehensive data analysis of Spotify playlist data.",
      image: mbti,
      tech: ['R', 'Shiny', 'Data Visualization'],
      github: "https://github.com/Mayogoose/info201mbti",
      link: "https://ameli.shinyapps.io/MBTIRecommender/"
    }
];

export const prototypeProjects = [
    {
      title: "WorthyWave",
      description: "Designed the application WorthyWave that help users overcome the imposter syndrome they may face in academic and career settings.",
      image: worthywave,
      link: "https://www.figma.com/proto/dfcCURCTgOwgu8GhGpVg5e/Prototype?node-id=0-1&p=f&viewport=305%2C14%2C0.12&t=49K8XOBMNuuYVynY-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
      presentation: "https://www.canva.com/design/DAGhTEfEj0k/YQDKR-zZMzqYL8LdFVvdOw/view?utm_content=DAGhTEfEj0k&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he381205aa3"
    },
    {
      title: "Room.io - WINFO Hackathon 2025",
      description: "Designed the application Room.io that enhances shared living by simplifying communication and managing chores for roomates.",
      image: roomio,
      link: "https://www.figma.com/proto/pxdgGyPidtwJt02gE6AlmY/Room.io?page-id=0%3A1&node-id=2-7&viewport=-1158%2C-29%2C0.79&t=2gSrBBkpBHyYpcWl-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A7",
      presentation: "https://www.figma.com/deck/mJWbmwb01GYAzLrPWBtXLZ/Room.io?node-id=1-310&t=pnmFPYHvKwT7frWs-1"
    },
    {
      title: "Tempad 2.0 - DubsTech Protothon 2024",
      description: "Designed TEMPAD 2.0, a time travel application inspired by the TV series Loki in DubsTech's two-day protothon. Designed user interfaces based on time travel theme.",
      image: tempad,
      link: "https://www.figma.com/proto/LwjP9jGd7bmgFA2xF9OAOr/TEMPAD-2.0?node-id=59-106&t=oSMGhQG6OhaQq6dN-1&starting-point-node-id=59%3A106",
      presentation: "https://www.figma.com/proto/LwjP9jGd7bmgFA2xF9OAOr/TEMPAD-2.0?node-id=34-1356&t=oSMGhQG6OhaQq6dN-1"
    }
  ];