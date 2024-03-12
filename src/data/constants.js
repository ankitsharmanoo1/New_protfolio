import aeeron from '../images/Aeeron.jpg';
import Poornima from '../images/poornima.jpg';
import Subodh from '../images/subodh.jpg';
import GernateQuorts from '../images/gernatequorts.jpg';
import randomColor from '../images/randomColor.jpg';
import addToProduct from '../images/addToProduct.jpg'
import catList from '../images/cat.jpg';
import Meme from "../images/Meme.jpg";
import Linux from "../images/linux.png";
import Pairing from "../images/pairing.jpg";
import Unsplash from "../images/Unsplash.jpg"
import Backend from "../images/backendmongo.jpg"
import ShopingWeb from "../images/ecommerce.jpg"

export const Bio = {
  name: "Ankit Sharma",
  roles: [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Programmer",
  ],
  description:
  "I'm Ankit Sharma, and I'm excited to be a web developer. I learned web development at Aeeron Academy, where I gained the skills to create digital solutions. Now, I'm studying for a Master of Computer Applications at Poornima University to  explore computer science further. As a full-stack developer, my goal is to create great digital solutions that help people,  businesses, and organizations.",
  github: "https://github.com/rishavchanda",
  resume:
    "https://drive.google.com/file/d/1GHFN0HzoP_NZZGKLiUKL2j87CGWFUoIV/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/ankit-sharma-a5a606275/",
  gitHub: "https://github.com/ankitsharmanoo1",
  insta: "https://www.instagram.com/ankit_020201/?next=%2F",
  facebook: "https://www.facebook.com/profile.php?id=100013306382075",
}

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },
     
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "data:image/png;base64,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",
      },
     
     
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
   
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
    ],
  },
  
  
  {
    title: "Others",
    skills: [
      {
         name: "Linux",
         image: Linux,
      },
      {
        name: "Git",
        image:
          "https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      
      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: aeeron,
    role: "FullStack Web Developer ",
    company: "Aeeron Academy.",
    date: "jan 2023 - Dec 2023",
    desc: "I am a versatile developer with a year of experience at Aeron Academy, adept in both frontend and backend technologies. I specialize in crafting seamless user interfaces and robust server-side solutions. My passion for coding and problem-solving drives me to create efficient, user-friendly applications that meet the dynamic needs of the digital landscape",
    skills: [
      "JavaScript",
      "Node Js",
      "ReactJs",
      "MongoDB"
    ],
  },
];

export const education = [
  {
    id: 0,
    img: Subodh,
    school: "SS Jain Subodh Pg College , Jaipur Rajasthan",
    date: "jun 2019 - Aug 2022",
    desc: "I pursued a Bachelor of Computer Applications (BCA) at Subodh College from August 2019 to July 2022, acquiring a comprehensive understanding of computer science through rigorous academic curriculum and practical experiences..",
    degree: "Bachelor of Computer Application (BCA)",
  },
  {
    id: 1,
    img: Poornima,
    school: "Poorniam university, Jaipur Rajasthan",
    date: "Sep 2022 - Pursuing",
    desc: "Currently pursuing a Master of Computer Applications (MCA) at Poornima University since August 2022. Engaging in a dynamic curriculum, I am gaining advanced knowledge in computer science, honing my skills, and preparing for a successful career in the ever-evolving tech industry.",
    degree: "Master of Computer Application (MCA) ",
  },
  {
    id: 2,
    img: aeeron,
    school: "Aeeron Academy",
    date: "Apr 2022 - Dec 2022",
    desc: "I successfully completed the Full Stack Web Developer (MERN) course at Aeron Academy, mastering MongoDB, Express.js, React, and Node.js. This comprehensive program equipped me with the skills to build scalable and efficient web applications, leveraging the latest technologies in the MERN stack.",
    degree: "Full-Stack Web Developer (MERN)",
  },
];

export const projects = [
  {
    id: 9,
    title: "Bubble Game",
    date: "Aug 2022 - Aug 2022",
    description:
      "Using HTML, CSS, and JavaScript, craft a fun bubble-popping game! Create colorful visuals and smooth animations for an enjoyable experience. Challenge friends worldwide, earn power-ups, and climb leaderboards. With easy controls and lots of fun, your game will keep players entertained for hours!",
      image:
      "https://images.crazygames.com/smarty-bubbles/20230529072500/smarty-bubbles-cover?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
    tags: [
      "Html",
      "Css",
      "Java Script"
    ],
    category: "web app",
    github: "https://github.com/ankitsharmanoo1/jsProject7",
    webapp: "https://ankitsharmanoo1.github.io/jsProject7/",
  },
  {
    id: 0,
    title: "Tic Tac Toe",
    date: "Aug 2022 - Aug 2022",
    description:
      "Build your own Tic Tac Toe game using HTML, CSS, and JavaScript! Design a visually appealing interface with smooth animations. Implement intuitive controls and challenging AI opponents. Whether playing solo or with friends, enjoy hours of fun with this classic game brought to life through your creativity and coding skills.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWtkutDQL0sHepyxyyUMVTT_aOnedR3UuQew&usqp=CAU",
    tags: [ "Html", "Css", "Java Script"],
    category: "web app",
    github: "https://github.com/ankitsharmanoo1/jsProject8",
    webapp: "https://ankitsharmanoo1.github.io/jsProject8/",
  },
  {
    id: 1,
    title: "Digital Clock",
    date: "Oct 2022 - Oct 2022",
    description:
      "Craft a sleek digital clock with HTML, CSS, and JavaScript! Design a visually appealing interface with customizable styles. Implement dynamic time updates and smooth transitions. Whether for personal use or as a practical addition to websites, your digital clock showcases your coding expertise while providing practical functionality.",
      image:
      "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2017/09/Minimal-Digital-Clock.png?fit=497%2C372&ssl=1",
    tags: [
      "Html",
      "Css",
      "Java Script"
    ],
    category: "web app",
    github: "https://github.com/ankitsharmanoo1/jsProject6",
    webapp: "https://ankitsharmanoo1.github.io/jsProject6/",
  },

  {
    id: 3,
    title: "Ecommerce web site",
    date: "jan 2024 -  Working Progress",
    description:
    "Welcome to our clothing store, still in the making! Built with React JS, we offer jackets, hats, belts, and tees. Stay tuned as we add more styles and features to enhance your shopping experience.",
    image:ShopingWeb,
    tags: ["React"],
    category: "React",
    github: "https://github.com/ankitsharmanoo1/E-commerce",
    webapp: "https://e-commerce-2-fpi1.onrender.com/",
  },
  {
    id: 10,
    title: "Shoping Web",
    date: "Jun 2023 - Jul 2023",
    description:
    "The Mongoose Database Project in Node.js is a web-based application that utilizes the Mongoose library to interact with a MongoDB database. It allows users to perform CRUD (Create, Read, Update, Delete) operations on collections and manage data effectively."
    ,image:Backend,
    tags: ["Express js","Node js ","EJS", "My Sql"],
    category: "Backend",
    github: "https://github.com/ankitsharmanoo1/Mongo-DB",
    webapp: "https://mongo-db-axd0.onrender.com/",
  },
  {
    id: 4,
    title: "Counter",
    date: "Oct 2022 - Oct 2022",
    description:
    "Create a versatile counter with HTML, CSS, and JavaScript! Design a customizable interface to track various metrics. Implement intuitive controls for easy navigation. Whether tallying website visits or personal goals, your counter offers practical utility and showcases your coding skills in a user-friendly package for diverse applications.", 
    image:
    "https://miro.medium.com/v2/resize:fit:1358/1*ZPKviPYa721cojZ6uLXmiw.png", 
    tags: ["Html", "Css", "Java Scri"],
    category: "web app",
    github: "https://github.com/ankitsharmanoo1/jsProject5",
    webapp: "https://ankitsharmanoo1.github.io/jsProject5/",
  },
  {
    id: 5,
    title: "Generate Quote",
    date: "Oct 2022 - Oct 2022" ,
    description:
    "Craft a dynamic quote generator with HTML, CSS, and JavaScript! Design an engaging interface with responsive layout. Implement a database of inspiring quotes with random selection functionality. Whether for personal motivation or website enhancement, your generator offers a seamless user experience and showcases your coding prowess effortlessly.",
    image:
    GernateQuorts,

    tags: ["Html", "Css", "Java Script"],
    category: "web app",
    github: "https://github.com/ankitsharmanoo1/jsProject3",
    webapp: "https://ankitsharmanoo1.github.io/jsProject3/",
  },
  {
    id: 6,
    title: "Pass the Message",
    date: "Oct 2022",
    description:
    "Designed with simplicity in mind, my self-note website allows users to jot down personal messages effortlessly. Utilizing HTML, CSS, and JavaScript, users can create and retrieve their notes quickly and conveniently.",
    image:"https://shots.codepen.io/username/pen/dyGmBzg-800.jpg?version=1594286516",
    tags: ["Html", "Css", "Java Script"],
    category: "web app",
    github: "https://github.com/ankitsharmanoo1/JsProject-4",
    webapp: "https://ankitsharmanoo1.github.io/JsProject-4/",
  },
  {
    id: 7,
    title: "User Mangement System through (MySql)",
    date: "jun 2023 - jun 2023",
    description:
    "The SQL Database Project in Node.js is a web-based application that utilizes Node.js and an SQL database to create a robust and scalable database management system. It allows users to perform CRUD (Create, Read, Update, Delete) operations on SQL databases, providing a reliable solution for managing structured data.",
    image:Backend,
    tags: ["Express js","Node js", "EJS", "MySql", "Google Auth"],
    category: "Backend",
    github: "https://github.com/ankitsharmanoo1/NodeDEploy",
    webapp: "https://mongo-db-axd0.onrender.com/",
  },
  {
    id: 8,
    title: "Cat Lists",
    date: "Aug  2023 - Aug 2023",
    description:"I created a straightforward project using React.js to display a list of cats fetched from an API. Leveraging React's component-based architecture, I designed an intuitive user interface for browsing cat information. By integrating with an external API, users can access dynamic content, enhancing the project's interactivity and realism.",
    image:catList,
    tags: [ "React Js "],
    category: "React",
    github: "https://github.com/ankitsharmanoo1/Cats-List",
    webapp: "https://catapp-zebj.onrender.com/",
  },
  {
    id: 11,
    title: "Change the Color",
    date: "Oct 2022 - Oct 2022" ,
    description:
    "Transforming a website's color scheme can be achieved seamlessly with HTML, CSS, and JavaScript. By integrating these technologies, developers can create interactive features that allow users to customize the appearance of a webpage according to their preferences. Whether it's a simple color switcher or a dynamic theme changer, these tools empower designers to enhance user experience by offering personalized visual elements effortlessly.",
    image:
    randomColor,

    tags: ["Html", "Css", "Java Script"],
    category: "web app",
    github: "https://github.com/ankitsharmanoo1/JsProject-1",
    webapp: "https://ankitsharmanoo1.github.io/JsProject-1/"
  },
  {
    id: 12,
    title: "Add the Product",
    date: "Aug  2023 - Aug 2023",
    description:
    "Introducing our innovative React Product, designed to streamline your shopping experience. Easily add items to your virtual box, including their prices and purchase dates, all in one convenient interface. Simplify your shopping journey and stay organized with our user-friendly solution, perfect for both personal and professional use",
    image: addToProduct,
    tags: [ "React Js "],
    category: "React",
    github: "https://github.com/ankitsharmanoo1/React-Project",
    webapp: "https://addproduct-zi2x.onrender.com/",
  },
  {
    id: 9,
    title: "Meme Generate",
    date: "Nov 2023 - Nov 2023",
    description:
    "Introducing a meme generation web application built using HTML, CSS, and JavaScript, integrating seamlessly with meme APIs through the fetch method. Users can explore a diverse range of memes and create customized ones within the platform. While lacking download and share options, the focus remains on effortless meme creation and enjoymen",
      image:Meme,
    tags: [
      "Html",
      "Css",
      "Java Script"
    ],
    category: "web app",
    github: "https://github.com/ankitsharmanoo1/JS-MemeProject",
    webapp: "https://ankitsharmanoo1.github.io/JS-MemeProject/",
  },

  {
    id: 13,
    title: "Pairing-Game",
    date: "Dec 2022 - Dec 2022",
    description:
    "Dive into the colorful world of Fruit Pairing Game! Uncover matching fruit tiles in this HTML, CSS, and JavaScript-based memory challenge. With vibrant graphics it's fun for all ages. Track your scores and enjoy endless entertainment on any device. Start matching now!",
      image:Pairing,
    tags: [
      "Html",
      "Css",
      "Java Script"
    ],
    category: "web app",
    github: "https://github.com/ankitsharmanoo1/Pairing-Game",
    webapp: "https://ankitsharmanoo1.github.io/Pairing-Game/",
  },
  {
    id: 14,
    title: "Unsplash-api",
    date: "Dec 2022 - Dec 2022",
    description:
    "A project in React.js for API searching can be developed to allow users to search for different APIs and get the relevant results based on their search query. The project can be developed using various APIs like RapidAPI, ProgrammableWeb, or any other public API directory.",
      image:Unsplash,
    tags: [
      "Html",
      "Css",
      "Java Script"
    ],
    category: "web app",
    github: "https://github.com/ankitsharmanoo1/Unsplash-api",
    webapp: "https://ankitsharmanoo1.github.io/Unsplash-api/",
  },
];






// change the color => https://github.com/ankitsharmanoo1/JsProject-1


// node js = > 7,10,