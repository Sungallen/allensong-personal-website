import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import GithubIcon from "../components/Icon/GithubIcon";
import LinkedInIcon from "../components/Icon/LinkedInIcon";
import StackOverflowIcon from "../components/Icon/StackOverflowIcon";
import TwitterIcon from "../components/Icon/TwitterIcon";
import aiTestimonialImage from "../images/generativeai.png";
import aiImageOne from "../images/generativeai-1.png";
import aiImageTwo from "../images/generativeai-2.png";
import heroImageMediaLab from "../images/media-lab.jpg";
import porfolioImageBlueprint from "../images/portfolio/portfolio-blueprint.jpg";
import porfolioImageCoralTrack from "../images/portfolio/portfolio-coral-track.jpg";
import porfolioImageGenerativeAi from "../images/portfolio/portfolio-generative-ai.jpg";
import porfolioImageKharkiv from "../images/portfolio/portfolio-kharkiv.jpg";
import porfolioImageMeetingRoom from "../images/portfolio/portfolio-meeting-room.jpg";
import porfolioImageOpenHCI from "../images/portfolio/portfolio-openhci.jpg";
import porfolioImagePbl from "../images/portfolio/portfolio-pbl.jpg";
import porfolioImageTaipeiGisWeb from "../images/portfolio/portfolio-taipei-gis-web.jpg";
import porfolioImageTaiwanIsland from "../images/portfolio/portfolio-taiwan-island.jpg";
import profilepicBlackWhite from "../images/profile-black-white.jpg";
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from "./dataDef";

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Allen Yu-Lun Song",
  description: "Johnson Tseng's personal website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: "hero",
  About: "about",
  Contact: "contact",
  Portfolio: "portfolio",
  Resume: "resume",
  Skills: "skills",
  Stats: "stats",
  Testimonials: "testimonials",
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImageMediaLab,
  name: `I'm Johnson Tseng.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am Allen Yu-Lun Song (宋宇倫), a college student from Taipei. I am now
        interesting in{" "}
        <strong className="text-stone-100">
          Large Language Models, especially for application on City{" "}
        </strong>
        , currently working as a researcher in{" "}
        <strong className="text-stone-100">
          City Science Lab @ Taipei Tech
        </strong>
      </p>
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I often use <strong className="text-stone-100">johnsonafool</strong> as
        my account user name or ID, inspired by the quote of Steve Jobs{" "}
        <strong className="text-stone-100">Stay hungry. Stay foolish. </strong>
        Remind me stay curious, thinking differently, and maintaining a
        childlike sense of wonder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my leisure, you can catch me embark upon{" "}
        <strong className="text-stone-100">Outdoor Activities</strong>,
        immersing on{" "}
        <strong className="text-stone-100">Postmodernist Literature</strong>.
      </p> */}
    </>
  ),
  actions: [
    // {
    //   // TODO: add update resume
    //   href: "/assets/resume.pdf",
    //   text: "Resume",
    //   primary: true,
    //   Icon: ArrowDownTrayIcon,
    // },
    // {
    //   href: `mailto:johnsonafool@gmail.com`,
    //   text: "Contact",
    //   primary: false,
    // },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepicBlackWhite,
  // description: `I am a senior year student currently working in MIT Media Lab Lab @ Taipei,
  // My previous programming experience including  C, C#, Python, TypeScript, SQL, Git, Docker, React.js, GraphQL,
  // Tensorflow, FastAPI, Unity`,
  description: `I am currently working as a researcher at City Science Lab @ Taipei Tech(CSL) where my role revolves around 
  leveraging technology to revolutionize smart cities. 
  At CSL, I conduct comprehensive surveys, engage in extensive research, and spearhead initiatives aimed at enhancing 
  the seamless integration of cutting-edge technologies in urban development`,
  aboutItems: [
    {
      label: "Study",
      text: "National Taipei University of Technology",
      Icon: AcademicCapIcon,
    },
    {
      label: "Work",
      text: "City Science Lab (CSL) @ Taipei",
      Icon: BuildingOffice2Icon,
    },

    // { label: "Age", text: "21", Icon: CalendarIcon },
    { label: "Location", text: "Taipei, Taiwan", Icon: MapIcon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: "Spoken languages",
    skills: [
      {
        name: "English",
        level: 10,
      },
      {
        name: "French",
        level: 4,
      },
      {
        name: "Spanish",
        level: 3,
      },
    ],
  },
  {
    name: "Frontend development",
    skills: [
      {
        name: "React",
        level: 9,
      },
      {
        name: "Typescript",
        level: 7,
      },
      {
        name: "GraphQL",
        level: 6,
      },
    ],
  },
  {
    name: "Backend development",
    skills: [
      {
        name: "Node.js",
        level: 8,
      },
      {
        name: "Rust",
        level: 5,
      },
      {
        name: "Golang",
        level: 4,
      },
    ],
  },
  {
    name: "Mobile development",
    skills: [
      {
        name: "React Native",
        level: 9,
      },
      {
        name: "Flutter",
        level: 4,
      },
      {
        name: "Swift",
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: "CSL x TUIC Smart Taipei",
    description: `Explore Taipei's urban intelligence through stunning 
    visualizations. Collaborating for a smarter city experience. 
    Discover the unseen stories of Taipei`,
    url: "",
    image: porfolioImageTaipeiGisWeb,
    tech: "React.js, Redux-Saga, Socket IO, Django",
    link: [
      {
        text: "Slides",
        href: "https://docs.google.com/presentation/d/1H7_tLEYGnq9QImoCqG1hEHPcaFKUCPPrFXwjJ0VIuz0/edit?usp=sharing",
      },
      {
        text: "React.js Made Slides Demo",
        href: "https://taipei-basin-dashboard.vercel.app/",
      },
      {
        text: "Facebook Post",
        href: "https://www.facebook.com/photo/?fbid=773092807946615&set=pcb.773092944613268",
      },
    ],
  },
  {
    title: "Taipei Blueprint",
    description: `Advocate citizens to shape their city. Comment on blueprint, 
    share thoughts on Taipei's areas, and influence policy decisions. 
    A data-driven platform connecting citizens and decision-makers.`,
    url: "",
    image: porfolioImageBlueprint,
    tech: "React.js, React Query, Tailwind CSS",
    link: [
      {
        text: "Blueprint Demo",
        href: "https://taipei-blueprint.vercel.app/",
      },
    ],
  },
  {
    title: "Planning Better Future: Kharkiv",
    description: `Harness citizen voices for post-war reconstruction. 
    Empowering urban planners with an open-source participatory tool. 
    Rebuilding Ukraine together through collective wisdom 
    and sustainable interventions.
    `,
    url: "",
    image: porfolioImageKharkiv,
    tech: "React.js, Redux-Saga, Babylon.js, Colyseus, Django, MySQL",
    link: [
      {
        text: "Slides",
        href: "https://docs.google.com/presentation/d/1aE0SKLxjxAxnWkV3sbdbFs1VPCc4kx5RsHqHEcTutiY/edit?usp=sharing",
      },
      {
        text: "Issue Discussion in City Science Summit 2022",
        href: "https://www.youtube.com/watch?v=q2A-BApijoc&list=PLdxKi6kbAWz4A5EB4V9P84vUFUSYpJR8w",
      },
    ],
  },
  {
    title: "CityGPT",
    description: `Step into a world where imagination meets reality. 
    Our cutting-edge AI model generates stunning cityscapes, 
    bringing vision to life. From familiar streets to extraordinary realms, 
    unleash artistic expression and shape the cities of tomorrow`,
    url: "",
    image: porfolioImageGenerativeAi,
    tech: "React.js, Redux-Saga, Pytorch, FastAPI, Docker, PostgreSQL",
  },
  {
    title: "Edge Device Detection Tracking",
    description:
      "Tensorflow Lite and OpenCV to detect and track object, used in HITCON PEACE 2022",
    url: "https://ntut-club-animation.vercel.app",
    image: porfolioImageCoralTrack,
    tech: "Tensorflow Lite, OpenCV, Deep Sort, YoloV5, Coral Dev Board",
    link: [
      {
        text: "HITCON PEACE 2022 News",
        href: "https://www.inside.com.tw/article/28677-taiwan-hitcon-peace-2022",
      },
    ],
  },
  {
    title: "OpenHCI Campus Recycle Game",
    description: `A fun-filled mission to tackle waste misclassification. 
    Earn points, learn proper waste sorting, and champion environmental 
    knowledge on campus`,
    url: "",
    image: porfolioImageOpenHCI,
    tech: "Unity, React.js, Arduino",
    link: [
      {
        text: "Youtube Video",
        href: "https://youtu.be/LCSyyrT7GcY",
      },
      {
        text: "Facebook Post",
        href: "https://www.facebook.com/openhci/photos/pb.100057624692945.-2207520000./5433225003405588/?type=3",
      },
    ],
  },
  {
    title: "Self Moving Car",
    description: `Representing school in the PBL competition, 
    unite with Japanese and Taiwanese college students. Combining Arduino, 
    C programming, and mechanical design, create 
    self-propelled car.`,
    url: "",
    image: porfolioImagePbl,
    tech: "Arduino, C, Mechanical Design",
    link: [
      {
        text: "Post",
        href: "https://johnsonafool.netlify.app/posts/pbl/",
      },
    ],
  },
  // {
  //   title: "Programming Club Meeting App",
  //   description: `Powered by Next.js 13, join our programming club's
  //   immersive 3D web meeting room. Experience the future of discussions,
  //   where in future will be Discord integration and an OpenAI-powered
  //   chatbot elevate knowledge sharing. Develop with Turbo Repo,
  //   `,
  //   url: "",
  //   image: porfolioImageMeetingRoom,
  //   tech: "Next.js 13, Socket IO, Three.js, Tailwind CSS",
  //   link: [
  //     {
  //       text: "App Demo",
  //       href: "https://meeting-app-frontend.vercel.app/",
  //     },
  //   ],
  // },
  {
    title: "CityScope Taiwan Island Project",
    description: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
    ever since the 1500s, when an unknown printer took a galley of type and 
    scrambled it to make a type specimen book.`,
    url: "https://taipei-basin-dashboard.vercel.app/",
    image: porfolioImageTaiwanIsland,
    tech: "React.js, Redux-Saga, Deck.gl, Styled Components, Unity",
    link: [
      {
        text: "Web Demo",
        href: "https://taiwan-island.vercel.app",
      },
      {
        text: "AR Intro Slides",
        href: "https://docs.google.com/presentation/d/18nl0ENlWXwZ3LwnVICH8LZecLICLH2ctupBdkbQFFeM/edit?usp=sharing",
      },
      {
        text: "Interaction Intro Slides",
        href: "https://docs.google.com/presentation/d/17-SVKXf4SjtUyVLddIxUeNF-m7E2J2EDng32DRM8wCY/edit?usp=sharing",
      },
    ],
  },
  // {
  //   title: "netflix web and native",
  //   description: "",
  //   url: "https://timbaker.me",
  //   image: porfolioImage9,
  // },
  // {
  //   title: "j55",
  //   description: "",
  //   url: "https://timbaker.me",
  //   image: porfolioImage9,
  // },
  // {
  //   title: "design institute",
  //   description: "",
  //   url: "https://timbaker.me",
  //   image: porfolioImage9,
  // },
  // {
  //   title: "degital pet",
  //   description: "",
  //   url: "https://timbaker.me",
  //   image: porfolioImage9,
  // },
  // {
  //   title: "vue club animate",
  //   description: "",
  //   url: "https://timbaker.me",
  //   image: porfolioImage9,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: "June 2023",
    location: "National Taipei University of Technology",
    title: "Bachelor of Science in Electronic and Computer Engineering",
    content: (
      <div className="flex flex-col gap-4">
        {/* <p>
          During my time at university, I have acquired a several skill includes
          understanding in programming languages like TypeScript, Python, and
          C++ and C#. By making course homework or collaborating with peers in
          projects.
        </p>
        <p>
          In school, I enrolled some courses, like Algorithm, Digital Signal
          Processing, Image Processing and Compression, Machine Learning,
          Database Design, Web Development, Computer Network, Operating System,
          help me to build a solid foundation in computer science and utilize
          the knowledge when I am programming.
        </p>
        <p>
          My involvement also includes active participation in the several
          clubs, engagement in various extracurricular activities and
          competitions, which broadened my skill set, and strengthened my
          ability to collaborate, communicate effectively, and thrive in diverse
          environments.
        </p> */}
      </div>
    ),
  },
];
export const awards: TimelineItem[] = [
  {
    date: "2023 Sep",
    location:
      "Organziers: City Science Lab @ Taipei Tech, Foxconn; Co-organizer: MIT Media Lab",
    title: "First Prize in 2023 Science and AI Hackathon - AI on Wheels",
    content: (
      <div className="flex flex-col gap-4">
        {/* <p>
          As a college researcher selected by National Science and Technology
          Council, I conducted a biomedical engineering project which is to
          integrate physiological monitoring functions(heart rate, blood
          pressure and body temperature, etc.) to a mouse in order to analyze
          users' health conditions.
        </p>
        <p>
          I actively contributed to design Digital Signal Algorithms like
          Intrinsic Mode Function (IMF), Infinite Impulse Filter (IIR), and
          Moving Average Filter (MAF) Algorithms to remove Photoplethysmography
          (PPG) artifact noise.
        </p>
        <p>
          Besides, I trained a Deep Neural Network to predict body temperature
          through skin, ambient temperature and humidity
        </p>
        <p>
          Skills: Deep Learning and Machine Learning, Digital Signal Processing,
          Algorithms
        </p> */}
      </div>
    ),
  },
  {
    date: "2022 June",
    location: "National Taipei University of Technology",
    title: "First Prize in College Project Competition",
    content: (
      <div className="flex flex-col gap-4">
        {/* <p>
          Working with a innovative projects including CityGPT, Agent-Based
          Modeling with LLMs, dedicating on laveraging large language models
          with real-time urban data.
        </p>
        <p>
          My research includes large language models, data science(urban data).
          I have developed the system that can overcomes the challenge of
          spatial urban data query and analysis, and vectorize urban data in
          real-time.
        </p>
        <p>
          Skills: Large Language Models, Natural Language Processing, Data
          Science and Engineering
        </p> */}
      </div>
    ),
  },
  {
    date: "June 2022 - Feb 2023",
    location: "National Science and Technology Council",
    title: "Selected as a College Researcher",
    content: (
      <div className="flex flex-col gap-4">
        {/* <p>
          Working with a insightful project in City Science, CityScope,
          dedicating to leveraging data to solve complex problems in modern
          cities. The CityScope project aimed to analyze vast amounts of urban
          data, ranging from transportation patterns to energy consumption, in
          order to gain insights into city dynamics and develop innovative
          solutions.
        </p>
        <p>
          My work include data analysis, data engineering, machine learning,
          deep learning and visualization tools to uncover meaningful patterns
          and trends. This allowed myself to gain insights into the functioning
          of the city, detect inefficiencies, and propose data-driven solutions
          for urban planning and development. Working here not only exposed me
          to cutting-edge research methodologies but also fostered a culture of
          collaboration and innovation.
        </p>
        <p>
          Skills: Problem Solving, Collaboration, Interdisciplinary Research,
          Data Engineering, Data Science, Predictive Modeling, Edge Computing
          Programming, Web Development
        </p> */}
      </div>
    ),
  },
];
export const experience: TimelineItem[] = [
  {
    date: "July 2023 - Present",
    location: "City Science @ Taipei Tech",
    title: "Researcher",
    content: (
      <div className="flex flex-col gap-4">
        <p>
          Working with a innovative projects including CityGPT, Agent-Based
          Modeling with LLMs, dedicating on laveraging large language models
          with real-time urban data.
        </p>
        <p>
          My research includes large language models, data science(urban data).
          I have developed the system that can overcomes the challenge of
          spatial urban data query and analysis, and vectorize urban data in
          real-time.
        </p>
        <p>
          Skills: Large Language Models, Natural Language Processing, Data
          Science and Engineering
        </p>
      </div>
    ),
  },
  {
    date: "March 2022 - June 2023",
    location: "City Science @ Taipei Tech",
    title: "Undergraduate Research Opportunity Program",
    content: (
      <div className="flex flex-col gap-4">
        <p>
          Working with a insightful project in City Science, CityScope,
          dedicating to leveraging data to solve complex problems in modern
          cities. The CityScope project aimed to analyze vast amounts of urban
          data, ranging from transportation patterns to energy consumption, in
          order to gain insights into city dynamics and develop innovative
          solutions.
        </p>
        <p>
          My work include data analysis, data engineering, machine learning,
          deep learning and visualization tools to uncover meaningful patterns
          and trends. This allowed myself to gain insights into the functioning
          of the city, detect inefficiencies, and propose data-driven solutions
          for urban planning and development. Working here not only exposed me
          to cutting-edge research methodologies but also fostered a culture of
          collaboration and innovation.
        </p>
        <p>
          Skills: Problem Solving, Collaboration, Interdisciplinary Research,
          Data Engineering, Data Science, Predictive Modeling, Edge Computing
          Programming, Web Development
        </p>
      </div>
    ),
  },
  {
    date: "June 2022 - Feb 2023",
    location: "National Science and Technology Council",
    title: "College Researcher",
    content: (
      <div className="flex flex-col gap-4">
        <p>
          As a college researcher selected by National Science and Technology
          Council, I conducted a biomedical engineering project which is to
          integrate physiological monitoring functions(heart rate, blood
          pressure and body temperature, etc.) to a mouse in order to analyze
          users' health conditions.
        </p>
        <p>
          I actively contributed to design Digital Signal Algorithms like
          Intrinsic Mode Function (IMF), Infinite Impulse Filter (IIR), and
          Moving Average Filter (MAF) Algorithms to remove Photoplethysmography
          (PPG) artifact noise.
        </p>
        <p>
          Besides, I trained a Deep Neural Network to predict body temperature
          through skin, ambient temperature and humidity
        </p>
        <p>
          Skills: Deep Learning and Machine Learning, Digital Signal Processing,
          Algorithms
        </p>
      </div>
    ),
  },
];

export const skill: TimelineItem[] = [
  {
    date: "",
    location: "Mandarin, English",
    title: "Language",
    content: (
      <div className="flex flex-col gap-4">
        <p>
          {/* English: TOEIC: 925, TOEFL: 91, International volunteer, English
          tutor, School international affair department volunteering */}
        </p>
        {/* <p>
          Understanding in Mandarin, English, and basic Japanese give me chance
          to actively participate in diverse international volunteer programs
          and serve as an English tutor. These experiences have not only honed
          my language skills but also instilled a deep appreciation for
          cross-cultural communication. Additionally, I had the privilege of
          contributing to my school's international affairs department as a
          dedicated volunteer, where I played an instrumental role in organizing
          and coordinating impactful international events and initiatives.
        </p>
        <p>
          Moreover, my proficiency in basic Japanese allows me to navigate
          everyday situations and effectively communicate in a multicultural
          setting, showcasing my adaptability and eagerness to embrace new
          languages and cultures.
        </p>
        <p>
          The combination of my multilingual abilities and my diverse
          experiences has provided me with a unique perspective and a strong
          aptitude for connecting with individuals from diverse backgrounds. I
          am confident that my linguistic versatility, coupled with my passion
          for fostering intercultural understanding, will contribute to the
          success of [company/organization name]. I am committed to continuously
          expanding my linguistic horizons and making meaningful contributions
          to further enhance communication and collaboration in diverse
          environments.
        </p> */}
      </div>
    ),
  },
  {
    date: "",
    location: `C, Python, Matlab, Javascript, Typescript, C++, Java, PHP`,
    title: "Computer Language",
    content: (
      <div className="flex flex-col gap-4">
        {/* <p>
          For me backend development is like a vivid book about what I learned
          from courses. In networking, I have to consider IP addressing, TCP/IP,
          UDP, DNS, and HTTP, according to need.
        </p>
        <p>
          It has strong connection with operating systems, like async, process
          management, threading, memory management, file systems, and . To make
          the server scalable, they are all important.
        </p>
        <p>
          Some of my friends like to joke around backend is really easy, since
          stuff we done on course only about CRUD, and my experience in CSL give
          me chance to design real system and consider more beyond that.
        </p>
        <p>
          Recently I have extend my backend knowledge to learn MLOps and DevOps,
          as working on deploy model on API and collect data continuously with
          distributed task scheduler such Airflow.
        </p> */}
      </div>
    ),
  },
  {
    date: "",
    location: ``,
    // , Babylon.js, Three.js, WebGL, WebGPU
    title: "Software Development",
    content: (
      <div className="flex flex-col gap-2">
        <p>
          <span className="h-16 w-16">&#9679;</span>Full-Stack Web Development:
          React, Django, FastAPI, Flask, SocketIO, HTML, CSS
        </p>
        <p>
          <span className="h-16 w-16">&#9679;</span>Artifical
          Intelligence:LLaMA-2, Langchain, OpenAI, Transfomers
        </p>
        <p>
          <span className="h-16 w-16">&#9679;</span>Machine and Deep
          Learning:Tensorflow, Pytorch, Transformers, scikit-learn
        </p>
        <p>
          <span className="h-16 w-16">&#9679;</span>Data Visualization: Mapbox,
          DeckGL, QGIS, Open Street Map
        </p>
        <p>
          <span className="h-16 w-16">&#9679;</span>Database: MySQL, PostgreSQL,
          MongoDB, Pinecone (Vector Database), Neo4j
        </p>
        {/* <p>
          In CityScope project, there are many visualizations relating to urban,
          We usually doing the stack with React.js, Redux-Saga, DeckGL, and
          Mapboxgl to integrate with backend and database.
        </p> */}
      </div>
    ),
  },
  // {
  //   date: "",
  //   location: "Postgres, MySQL, MongoDB, Redis, Neo4j, Prisma",
  //   title: "Database Design & Management",
  //   content: (
  //     <div className="flex flex-col gap-4">
  //       <p></p>
  //       <p></p>
  //       <p></p>
  //     </div>
  //   ),
  // },
  // {
  //   date: "",
  //   location: "Tensorflow, Scikit-Learn, Airflow, Kafka, Spark, Hadoop, Pandas",
  //   title: "Data Engineering & Data Science",
  //   content: (
  //     <div className="flex flex-col gap-4">
  //       <p>""""</p>
  //     </div>
  //   ),
  // },
  // {
  //   date: "",
  //   location:
  //     "Linux (Ubuntu), GCP, Git Flow, Github CI / CD, Docker, Nginx, Terraform",
  //   title: "DevOps",
  //   content: (
  //     <div className="flex flex-col gap-4">
  //       <p>""""</p>
  //     </div>
  //   ),
  // },
  // {
  //   date: "",
  //   location: "Babylon.js, Three.js, Unity",
  //   title: "Three Dimension Modeling & Rendering",
  //   content: (
  //     <div className="flex flex-col gap-4">
  //       <p>
  //         I also try 3D rendering before, and there are some difference between
  //         WebGL and Unity Engine, I more prefer to use Three.js for the the
  //         convenience of integrating with React.js.
  //       </p>
  //     </div>
  //   ),
  // },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: aiTestimonialImage,
  // TODO: change aiImageTwo to real generate image
  imageSrcCollection: [aiTestimonialImage, aiImageOne, aiImageTwo],
  testimonials: [
    {
      name: "",
      text: `A photograph of a busy street in a downtown area, 
      with buildings and traffic in the background, 
      during the golden hour with warm, orange lighting, 
      and shot with a tilt-shift lens using a 24mm lens. (臺北市敦化南路一段)`,
      image: "",
    },
    {
      name: "",
      text: `A sketch of a modern building street view captured at dusk with 
      a warm orange light, showcasing the busy street with pedestrians 
      and vehicles passing by, in the bustling city of Tokyo, 
      Japan. (忠孝復興 SOGO)`,
      image: "",
    },
    {
      name: "",
      text: `A photograph of a bustling street in modern-night Japan. 
      The vibrant cityscape stretches out before you, illuminated by a 
      colorful array of neon lights. The air is filled with a mix of 
      excitement and serenity as people go about their evening 
      activities. (民權東路二段)`,
      image: "",
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: "Get in touch.",
  description:
    "Here is a good spot for a message to your readers to let them know how best to reach out to you.",
  items: [
    {
      type: ContactType.Email,
      text: "johnsonafool@gmail.com",
      href: "mailto:johnson@gmail.com",
    },
    {
      type: ContactType.Location,
      text: "Taipei, Taiwan",
      href: "https://www.google.ca/maps/place/%E5%8F%B0%E5%8C%97%E5%B8%82/@25.0854061,121.5615012,11z",
    },
    {
      type: ContactType.Github,
      text: "johnsonafool",
      href: "https://github.com/johnsonafool",
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {
    label: "Github",
    Icon: GithubIcon,
    href: "https://github.com/johnsonafool",
  },
  {
    label: "Stack Overflow",
    Icon: StackOverflowIcon,
    href: "https://stackoverflow.com/users/19559608/johnson",
  },
  {
    label: "LinkedIn",
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/hungyuan/",
  },
  {
    label: "Twitter",
    Icon: TwitterIcon,
    href: "https://twitter.com/johnsonafooll",
  },
];
