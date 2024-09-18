import { highSchool, secondary, clg, university } from "../assets/images";
import {
    contact,
    css,
    freelance,
    git,
    github,
    gsap,
    html,
    bootstrap,
    javascript,
    linkedin,
    motion,
    react,
    redux,
    sass,
    tailwindcss,
    typescript,
    admin,
    editor,
    restaurant,
    jest
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: motion,
        name: "Framer Motion",
        type: "Animation",
    },
    {
        imageUrl: gsap,
        name: "GSAP",
        type: "Animation",
    },
    {
        imageUrl: bootstrap,
        name: "BootStrap",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: jest,
        name: "Jest",
        type: "Testing",
    }

];

// export const education = [
//     {
//         title: "High School",
//         company_name: "Government High School, Nasrullaganj",
//         icon: highSchool,
//         iconBg: "#accbe1",
//         date: "July 2016 - April 2017",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "React Native Developer",
//         company_name: "Shubham Convent H.S. School",
//         icon: secondary,
//         iconBg: "#fbc3bc",
//         date: "July 2018 - April 2019",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "BSc in Computer Science",
//         company_name: "Devi Ahilya Vishwavidyalaya",
//         icon: clg,
//         iconBg: "#b7e4c7",
//         date: "April 2019 - May 2022",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "Master of Computer Application",
//         company_name: "Lakshmi Narain College of Technology",
//         icon: university,
//         iconBg: "#a2d2ff",
//         date: "September 2022 - June 2014",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
// ];

export const education = [
    {
        title: "High School",
        company_name: "Government High School, Nasrullaganj",
        icon: highSchool,
        iconBg: "#accbe1",
        date: "July 2016 - April 2017",
        points: [
            "Achieved 86.5% with distinction in every subject, including a score above 90 in Science and Mathematics.",
            "Demonstrated strong academic skills and consistently excelled in coursework.",
            "Received recognition for academic excellence and high performance throughout the academic year.",
        ],
    },
    {
        title: "Higher Secondary School (12th Grade)",
        company_name: "Shubham Convent H.S. School",
        icon: secondary,
        iconBg: "#fbc3bc",
        date: "July 2018 - April 2019",
        points: [
            "Selected PCM (Physics, Chemistry, Mathematics) branch and passed with 82.8%, securing first rank in class.",
            "Awarded Medhavi Scholarship for three years of college education due to outstanding performance.",
            "Recognized as the Best Student of the Year for academic achievements and overall contribution to the school.",
            "Achieved distinction in every subject, showcasing strong grasp of the chosen academic disciplines.",
        ],
    },
    {
        title: "Bachelor of Science (BSc) in Computer Science",
        company_name: "Devi Ahilya Vishwavidyalaya",
        icon: clg,
        iconBg: "#b7e4c7",
        date: "April 2019 - May 2022",
        points: [
            "Completed BSc with approximately 70%, focusing on C programming language and related coursework.",
            "Participated in a code competition, leading our team to win a prize from the college for innovative solutions.",
            "Gained practical experience through coursework and projects, enhancing problem-solving and coding skills.",
        ],
    },
    {
        title: "Master of Computer Application (MCA)",
        company_name: "Lakshmi Narain College of Technology",
        icon: university,
        iconBg: "#a2d2ff",
        date: "September 2022 - June 2024",
        points: [
            "Completed MCA with a CGPA of 7.96, with a notable achievement of 9.0 SGPA in the final year.",
            "Contributed significantly as a frontend developer in three minor projects and one major project during the course.",
            "Achieved an A+ grade for the major project, demonstrating advanced skills and effective collaboration in development.",
            "Gained comprehensive experience in web development, including hands-on projects and academic contributions.",
        ],
    },
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Bhumika60',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/bhumika-vishwas/',
    }
];

export const projects = [
    {
        iconUrl: admin,
        theme: 'btn-back-red',
        name: 'Admin Dashboard',
        description: 'Built with React and Syncfusion, this dashboard offers 4 core apps—Kanban, Calendar, Color Picker, and Editor. It also includes 7 dynamic charts and 3 main pages for user control, providing a comprehensive solution for managing and visualizing data.',
        link: 'https://bhumika60.github.io/admin-dashboard/',
    },
    {
        iconUrl: editor,
        theme: 'btn-back-green',
        name: 'TextUtils',
        description: 'TextUtils is a React-based text manipulation tool offering features like Convert Case, AI Voice Reading, Email Extraction, Text Preview, Live Stats, Find and Replace, Copy to Clipboard, and Dark/Light Mode. Users can also browse text files for a more seamless experience.',
        link: 'https://bhumika60.github.io/TextUtils/',
    },
    {
        iconUrl: restaurant,
        theme: 'btn-back-blue',
        name: 'Restaurant Website',
        description: 'This website features a sleek UI designed for restaurants. It includes a Home Section, About Section, embedded Video Section, Gallery showcasing restaurant ambiance and dishes, and a Newsletter to engage visitors, creating a professional online presence.',
        link: 'https://bhumika60.github.io/Restaurant-react-website/',
    }, 
    {
        iconUrl: freelance,
        theme: 'btn-back-black',
        name: 'Freelance Website UI',
        description: 'Developed as an assignment using HTML, CSS, JavaScript, and jQuery, this fully responsive freelance website features interactive elements like a slider, project section, and contact form via Getform.io. The animated home page enhances the user experience.',
        link: 'https://bhumika60.github.io/freelance-project/',
    },
];
