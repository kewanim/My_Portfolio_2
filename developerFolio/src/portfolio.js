/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kewani Mulugeta",
  title: "Hi all, I'm Kewani",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kewanim",
  linkedin: "https://www.linkedin.com/in/kewani-mulugeta-11a091179/",
  gmail: "kewanim40@gmail.com",
  facebook: "https://www.facebook.com/kewani1",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Evangadi Networks",
      logo: require("./assets/images/evangadiLogo.png"),
      subHeader: "Full Stack Web App Development (React, Node.js, MySQL, Git)",
      duration: "May 2024 - December 2024",
      desc: "Completed hands-on training in full-stack development, building responsive web applications using modern frameworks and databases.",
      descBullets: [
        "Gained expertise in React, Node.js, Express, and MySQL",
        "Implemented Git workflows and Agile methodologies",
        "Built and deployed full-stack projects for real-world use cases"
      ]
    },
    {
      schoolName: "Eastern Gateway Community College",
      logo: require("./assets/images/GatorLogo_4Color.png"), // Replace 'stanfordLogo.png' with the correct EGCC logo
      subHeader: "A.S. in Information Technology (GPA: 3.6/4.0)",
      duration: "September 2022 - May 2024",
      desc: "Acquired hands-on experience in IT infrastructure, networking, and system administration.",
      descBullets: [
        "Configured and managed high-performance networks using TCP/IP and firewalls",
        "Developed expertise in troubleshooting hardware and software issues",
        "Gained knowledge in IT security and database management"
      ]
    },
    {
      schoolName: "Year Up National Capital Region",
      logo: require("./assets/images/YearUp.png"),
      subHeader: "Information Technology Training Program",
      duration: "September 2017 - July 2018",
      desc: "Completed a rigorous technical and career development program focused on IT support, software testing, and business communication.",
      descBullets: [
        "Earned credits through the American Council on Education (ACE)",
        "Took college-level coursework in software development and advanced Excel",
        "Completed a 6-month corporate internship focused on IT systems"
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section


const workExperiences = {
  display: true, // Set to true to show Work Experiences Section
  experience: [
    {
      role: "Full Stack Web Apps Intern",
      company: "Evangadi Networks",
      companylogo: require("./assets/images/evangadiLogo.png"), // Replace with actual logo file
      date: "May 2024 – December 2024",
      desc: "Completed hands-on training in full-stack web application development, focusing on modern frameworks and databases.",
      descBullets: [
        "Built responsive and dynamic web applications using React.js, Node.js, and MySQL.",
        "Implemented Agile methodologies and Git workflows for project collaboration.",
        "Deployed fully functional applications and performed debugging using DevTools and Postman."
      ]
    },
    {
      role: "Software Engineer (Full-Time)",
      company: "Fannie Mae",
      companylogo: require("./assets/images/fannieMaeLogo2.png"), // Replace with actual logo file
      date: "January 2019 – April 2024",
      desc: "Developed and maintained software solutions, managed SDLC documentation, and migrated systems to AWS Cloud.",
      descBullets: [
        "Tracked project progress using Jira and Confluence, ensuring on-time delivery.",
        "Performed manual testing using Toad and SVN to expedite defect identification.",
        "Collaborated with developers to resolve UAT and BOT issues for sprint delivery.",
        "Migrated systems to AWS Cloud, optimizing deployments and improving performance."
      ]
    },
    {
      role: "Intern Software Engineer",
      company: "Fannie Mae",
      companylogo: require("./assets/images/fannieMaeLogo2.png"), // Replace with actual logo file
      date: "June 2018 – December 2018",
      desc: "Supported software engineering tasks, including testing, debugging, and documentation.",
      descBullets: [
        "Assisted in managing SDLC workflows and maintaining documentation.",
        "Tested software components and provided bug fixes to improve functionality.",
        "Collaborated with senior engineers to deliver incremental updates to existing systems."
      ]
    },
    {
      role: "Software Development Program Trainee",
      company: "Year Up National Capital Region",
      companylogo: require("./assets/images/YearUp.png"), // Replace with actual logo file
      date: "September 2017 – July 2018",
      desc: "Completed an intensive training program focused on IT support, software development, and professional skills.",
      descBullets: [
        "Earned credits through the American Council on Education (ACE) with a focus on software testing and business communication.",
        "Took college-level coursework in programming, advanced Excel, and IT systems.",
        "Participated in a 6-month corporate internship to apply learned skills in real-world scenarios."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};


// Big Projects Section

const bigProjects = {
  title: "Big Projects",
  subtitle: "Notable projects showcasing Full Stack Web Development skills",
  projects: [
    {
      image: require("./assets/images/evangadiLogo.png"), // Replace with actual logo
      projectName: "Evangadi Forum",
      projectDesc: "A full-stack forum application with authentication, JWT security, and database integration.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://evangadi-forum.vercel.app" // Replace with your project URL
        },
        {
          name: "GitHub",
          url: "https://github.com/kewanim/evangadi-forum" // Replace with GitHub repo URL
        }
      ]
    },
    {
      image: require("./assets/images/amazonLogo2.png"), // Replace with actual logo
      projectName: "Amazon Clone",
      projectDesc: "An e-commerce clone featuring payments, user authentication, and Firebase integration.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://amazon-clone-front-end-2024.netlify.app/" // Replace with your project URL
        },
        {
          name: "GitHub",
          url: "https://github.com/kewanim/Amazon-Clone-Front-End-2024 https://github.com/kewanim/Amazon-Clone-Back-End-2024 " // Replace with GitHub repo URL
        }
      ]
    },
    {
      image: require("./assets/images/appleLogo.png"), 
      projectName: "Apple Website Clone",
      projectDesc: "A pixel-perfect static clone of Apple's website using HTML, CSS, and JavaScript.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://apple-clone.vercel.app" // Replace with your project URL
        },
        {
          name: "GitHub",
          url: "https://github.com/kewanim/apple-clone" // Replace with GitHub repo URL
        }
      ]
    },
    {
      image: require("./assets/images/netflixLogo.png"), // Replace with actual logo
      projectName: "Netflix Clone",
      projectDesc: "A video streaming platform built with React, Firebase, and TMDB API.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://kewanim.github.io/Netflix-Clone-2024/" 
        },
        {
          name: "GitHub",
          url: "https://github.com/kewanim/Netflix-Clone-2024"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

// Achievement Section

const achievementSection = {
  title: "Certifications 🏆",
  subtitle:
    "Recognitions and Certifications that demonstrate my expertise and skills in Microsoft Office tools and more.",

  achievementsCards: [
    {
      title: "Microsoft Office Specialist - Excel 2016",
      subtitle:
        "Certified as a Microsoft Office Specialist in Excel 2016, demonstrating expertise in data management and analysis.",
      image: require("./assets/images/ExcelLogo.png"),
      imageAlt: "Microsoft Logo",
      footerLink: [
        {
          name: "Certification ID: 6-2C6-V6SNPD",
          url: "https://www.microsoft.com/en-us/learning/certification-overview.aspx"
        }
      ]
    },
    {
      title: "Microsoft Office Specialist - Word 2016",
      subtitle:
        "Certified as a Microsoft Office Specialist in Word 2016, showcasing skills in document creation and editing.",
      image: require("./assets/images/WordLogo.png"),
      imageAlt: "./assets/images/MicrosoftLogo.png",
      footerLink: [
        {
          name: "Certification ID: 6-2C6-V99FJ2",
          url: "https://www.microsoft.com/en-us/learning/certification-overview.aspx"
        }
      ]
    },
    {
      title: "Microsoft Office Specialist - PowerPoint 2016",
      subtitle:
        "Certified as a Microsoft Office Specialist in PowerPoint 2016, specializing in creating impactful presentations.",
      image: require("./assets/images/PowerPointLogo.png"),
      imageAlt: "Microsoft Logo",
      footerLink: [
        {
          name: "Certification Details",
          url: "https://www.microsoft.com/en-us/learning/certification-overview.aspx"
        }
      ]
    },
    {
      title: "Microsoft Office Specialist - Outlook 2016",
      subtitle:
        "Certified as a Microsoft Office Specialist in Outlook 2016, demonstrating expertise in managing emails and calendars.",
      image: require("./assets/images/OutlookLogo.png"),
      imageAlt: "Microsoft Logo",
      footerLink: [
        {
          name: "Certification Details",
          url: "https://www.microsoft.com/en-us/learning/certification-overview.aspx"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
    title: "Achievements",
    subtitle: "Recognitions and Accomplishments",
    achievementsCards: [
      {
        title: "Year Up Program Completion",
        subtitle: "Completed the prestigious Year Up IT Training Program, gaining technical and professional skills.",
        image: require("./assets/images/YearUp.png"), // Update the path to the YearUp logo
        footerLink: [
          {
            name: "Learn More",
            url: "https://www.yearup.org/"
          }
        ]
      },
      {
        title: "Top Performer Award",
        subtitle: "Recognized for outstanding performance and leadership during the Year Up program.",
        image: require("./assets/images/AwardLogo.png"), // Update the path to the award image
        footerLink: [
          {
            name: "View Details",
            url: "CERTIFICATE_URL_HERE"
          }
        ]
      },
      {
        title: "Leadership Excellence",
        subtitle: "Awarded for exemplary leadership and mentoring new interns.",
        image: require("./assets/images/LeadershipLogo.png"), // Update the path to your logo
        footerLink: [
          {
            name: "View Details",
            url: "CERTIFICATE_URL_HERE"
          }
        ]
      },
      {
        title: "Perfect Attendance",
        subtitle: "Maintained a perfect attendance record during the Year Up program.",
        image: require("./assets/images/AttendanceLogo.png"), // Update the path to your logo
        footerLink: [
          {
            name: "View Details",
            url: "CERTIFICATE_URL_HERE"
          }
        ]
      },
      {
        title: "Team Collaboration Award",
        subtitle: "Recognized for exceptional teamwork and project delivery.",
        image: require("./assets/images/TeamworkLogo.png"), // Update the path to your logo
        footerLink: [
          {
            name: "View Details",
            url: "CERTIFICATE_URL_HERE"
          }
        ]
      }
    ],
    display: true // Set false to hide this section, defaults to true
  };

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
