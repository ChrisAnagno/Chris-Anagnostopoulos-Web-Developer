import { meta, shopify, OnlyNet, tesla, Ravenna , Esepia , EPOGR , SirinaTV ,Diamesolavisi ,Masterplushr ,HRplus} from "../assets/images";
import {
    car,
    contact,
    css,
    docker,
    drupalicon,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    linux,
    mui,
    php,
    pricewise,
    react,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    BBC,
    cPanel,
    RestApiService,
    Riven,
    Masterplushr,
    HRplus,
    Wordpress,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
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
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
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
        imageUrl: drupalicon,
        name: "Drupal",
        type: "CMS",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Backend",
    },
    {
        imageUrl: linux,
        name: "Linux",
        type: "OS",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "DevOps",
    },
     {
        imageUrl: cPanel,
        name: "cPanel",
        type: "Hosting",
    },
    {
        imageUrl: RestApiService,
        name: "Rest API Service",
        type: "Backend",
    },
    {
        imageUrl: Wordpress,
        name: "Wordpress",
        type: "CMS",
    },
];

export const experiences = [
    {
        title: "ERP/Eshop Administrator",
        company_name: "Ravenna",
        icon: Ravenna,
        iconBg: "#accbe1",
        date: "July 2023 - July 2024",
        points: [
            "Managing inventory, order fulfillment, and logistics operations with precision and efficiency.",
            "Utilizing Entersoft ERP, WMS systems, and scanner technologies for streamlined warehouse management.",
            "Ensuring inventory accuracy and on-time delivery through optimized processes.",
            "Demonstrating a strong track record of improving warehouse efficiency and operational performance."
        ],
    },
    {
        title: "Full-Stack Developer",
        company_name: "OnlyNet",
        icon: OnlyNet,
        iconBg: "#accbe1",
        date: "July 2024 - June 2025",
        points: [
            "Developing and maintaining web applications using Drupal-CMS and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
       {
        title: "Junior Back-End Developer",
        company_name: "E-sepia web innovations",
        icon: Esepia,
        iconBg: "#accbe1",
        date: "June 2025 - December 2026",
        points: [
            "Assisting in the development and maintenance of server-side logic, databases, and APIs using PHP and Drupal-CMS.",
            "Collaborating with front-end developers to integrate user-facing elements with server-side logic.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Troubleshooting and debugging applications to ensure optimal performance and user experience.",
            "Assisting in the deployment and monitoring of applications in production environments.",
        ],
    },
    {
        title: "Junior Web Developer",
        company_name: "MasterPlusHR web innovations",
        icon: Masterplushr,
        iconBg: "#accbe1",
        date: "Jan 2026 - still working here",
        points: [
            "Assisting in the development and maintenance of web applications using Wordpress-CMS and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
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
        link: 'https://github.com/Xristospro21',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/christos-anagnostopoulos-948492255/',
    }
];

export const projects = [
    {
        iconUrl: EPOGR, // Add icon path
        theme: 'btn-back-blue-white', // EPO.GR color: blue and white
        name: 'EPO.GR',
        description: 'Contributed in this project with (E-sepia) in back-end development using Drupal CMS to redesign the official website of the Hellenic Football Federation (EPO). Focused on enhancing user experience, performance, and accessibility for football fans across Greece.',
        link: 'https://www.epo.gr/el', // Link to current live site
      },
       {
        iconUrl: Diamesolavisi, // Add icon path
        theme: 'btn-back-blue', 
        name: 'Diamesolavisi.gr',
        description: 'Contributed with (E-sepia) to backend development using Drupal CMS for the real estate platform Diamesolavisi 2.0, focusing on enhancing property listings, user experience, and site performance.(still in development)',
        link: 'https://www.diamesolavisi.gr', // Link to current live site
      },
      {
        iconUrl: SirinaTV, // Add icon path
        theme: 'btn-back-yellow', // SirinaTV color: yellow
        name: 'SirinaTV',
        description: 'Contributed with (E-sepia) to the development of a connection via Centrobill API for new payment methods and subscriptions management for adult content platform SirinaTV using Drupal CMS.',
        link: 'https://www.sirina.tv', // Link to current live site
      },
      {
        iconUrl: Masterplushr, // Add icon path
        theme: 'btn-back-green-silver', // MasterplusHR
        name: 'MasterplusHR',
        description: 'Contributed to the development of MasterplusHR, a platform focused on recruitment and human resources management solutions for businesses.',
        link: 'https://masterplushr.eu/newsite/', // Link to project or video
      },
      {
        iconUrl: HRplus, // Add icon path
        theme: 'btn-back-black-white', // BBC Clone theme: black and white
        name: 'HRplus',
        description: 'Contributed to the development of HRplus, a platform focused on human resources management and employee engagement solutions.',
        link: 'https://hrplus.gr', // Link to preview or repo
      },

];