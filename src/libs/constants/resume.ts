import SOCIAL from './social'

import { Experience, Projects } from 'megnav'

export const HEADLINE = {
  name: 'NavinKumarMNK'
}

export const LINKS: typeof SOCIAL = [
  ...SOCIAL.filter((s) => s.title !== 'Telegram'),
  {
    href: 'https://megnav.me',
    title: 'Website'
  },
  {
    href: 'https://megnav.me/post',
    title: 'Post'
  }
]

export const SKILLS = [
  `Frameworks: PyTorch, Tensorflow, AWS, MLFlow, Ray, Tauri`,
  `Languages: Python, TypeScript, C++, Rust, Node.js, MongoDB, MySQL, Tailwind CSS`,
  `AI & ML Expertise: Computer Vision, NLP, Generative Models, LightGBM, SVM`,
  `Soft Skills: Strong leadership and Real World Problem Solving, passionate and hardworking attitude.`
]


export const EXPERIENCE: Experience[] = [
  {
    companyName: 'Omega Plus Technologies, CA',
    role: 'Deep Learning Engineer Remote Intern',
    period: {
      start: 'Dec 2022',
      end: 'Feb 2023' 
    },
    lists: [
      `Built a Real-time Face Detection and Recognition System for crowd surveillance using yolov7, Kalman
      Filter, ESPCNv2 GAN and containerized with Nvidia-Docker.`,
      `Optimized for real-time inference with TensorRT and deployed as an API service in the cloud.`
    ]
  }
]

export const PROJECTS: Projects[] = [
  {
    projectName: 'AI Malware System',
    lists: [
      `Developed a cross-platform antivirus app with an AI-powered backend for malware detection and analysis
      on Azure.`,
      `Pretrained CoAtNet on 1.5 Million Malware Image Dataset achieving benchmark, LightGBM, and LSTM
      models for feature analysis and developed the frontend with TypeScript and Rust.`,
      `Created a Web App, Node.js as backend deployed on AWS Cloud.`,
      `Set up an ETL pipeline Azure Databricks and Visualized Insights on PowerBI.`
    ]
  },
  {
    projectName: 'Crime Anomaly & Activity Detection',
    lists: [
      `Deployed a WebSocket API endpoint for camera communication and anomaly detection using video sequence
      analysis`,
      `Pretrained EfficientNetv2M, SwinTransformer, and CoATNet as AutoEncoders on the UCF-Crime
      Dataset. Classified anomalies using One Class SVM and increased accuracy with an LSTM Decoder model.`,
      `Implemented a Face Recognition Mechanism to detect the faces of victims and attackers.`
    ]
  },
  {
    projectName: 'Parallel & Distributed System Workspace',
    lists: [
      `No Code Lab Setup and Model Training Environment Documented for reproducibility.`,
      `As the head of the Distributed System team, developed a solution to parallelize the processing of General
      Circulation Model and Deep Learning Model training and inference by distributing the workload across GPUs
      in a Ray cluster.`
    ]
  }
]

type Education = Array<{
  school: string
  period: { start: string; end: string }
  paragraphs: string[]
  list?: {
    title: string
    listItem: string[]
  }
}>

export const EDUCATION: Education = [
  {
    school: 'B.Tech Computer Science and Engeneering specialization in Artificial Intelligence and Machine Learning',
    period: {
      start: 'Sept, 2020',
      end: 'May, 2024'
    },
    paragraphs: ['Vellore Insitute of Technology, Chennai', 'Cum.GPA : 8.8',
    'Relavant Coursework : ', 'Machine Learning, Deep Learning, Data Structures & Algorithms, Operating System, Business Intelligence, Malware & Security Intelligence, Computer Networks, Database Management, Applied Linear Algebra, Statistics, Engineering Calculus & Software Engineering']  
  },
  {
    school: '12th Grade CBSE',
    period: {
      start: 'June, 2018',
      end: 'July, 2020'
    },
    paragraphs: ['JEE Mains - 98.92%ile ', 'Board (MPC) - 95%']
  }
]

export const SUMMARY = [
  `I'm passionate about using Artificial Intelligence to solve Complex Real-World Problems . By leveraging the latest advancements in Deep Learning, I strive to create innovative solutions that have a positive impact on society. I invite you to have a glimpse of my journey as an AI Enthusiast and my expertise in various domains.`,
  `I have worked in fields like Computer Vision, Natural Language Processing, Generative Models, Modelling Tabular & Time Series Data . I have worked on diverse projects that have helped me hone my skills and gain a deeper understanding of the field.`
]

export const LANGUAGES = [
  {
    title: 'Tamil',
    level: 'Native, Fluent'
  },
  {
    title: 'English',
    level: 'Working proficiency'
  }
]
