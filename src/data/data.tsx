import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
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
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Bryan Jin.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      <strong className="text-stone-100">Senior Software Engineer</strong> with over 8 years of experience in
        software engineering & web development.
        I’m highly organized, self- motivated, and proficient with both frontend &
        backend technologies.
        I’m seeking to use my hard won technical and programming skills alongside
        proven project management to improve quality, cost and time metrics for web
        application development.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ` I am a Senior Software Engineer, enjoy collaborating within teams where I bring my
  creativity in problem solving, drive and efficiency to the table. I believe in being a
  self-starter, thinking critically and taking accountability for my work and
  responsibilities, while inspiring the same in people around me.`,
  aboutItems: [
    {label: 'Location', text: '6 VERDUN ROAD, Singapore', Icon: MapIcon},
    {label: 'Age', text: '33', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Singaporean', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    {label: 'Study', text: 'National University of Singapore', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Kickstarter', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Javascript',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 9,
      },
      {
        name: 'React/Next',
        level: 9,
      },
      {
        name: 'Vue/Nuxt',
        level: 8,
      },
      {
        name: 'GraphQL',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 9,
      },
      {
        name: 'PHP/Laravel',
        level: 8,
      },
      {
        name: 'Ruby on Rails',
        level: 7,
      },
      {
        name: 'Python',
        level: 7,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 8,
      },
      {
        name: 'Flutter',
        level: 7,
      },
      {
        name: 'Ionic',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Betting Game',
    description: 'Best crypto gambling with 5000+ Slots, Dice, Roulette, Blackjack & Sports Betting',
    url: 'https://betfury.io/',
    image: porfolioImage1,
  },
  {
    title: 'LeCrans',
    description: 'LeCrans is an Alpine haven of exceptionally refined warmth, restorative tranquillity and discerning care.',
    url: 'https://lecrans.com/le-crans',
    image: porfolioImage2,
  },
  {
    title: 'Tuscany Leather',
    description: `Original Tuscany's products are made of handcrafted leather, tanned in S. Croce sull'Arno, near Florence, the cradle of a great leather manufacturing tradition.`,
    url: 'https://www.tuscanyleather.it/en/',
    image: porfolioImage3,
  },
  {
    title: 'Vacation Rentals',
    description: 'Find The Best Value For Your Next Vacation! Book Direct With No Fees!',
    url: 'https://vacation.rentals/',
    image: porfolioImage4,
  },
  {
    title: 'Sangishop',
    description: 'New release of eco-friendly travel set and toothbrush from Apagard.',
    url: 'https://www.sangishop.jp/',
    image: porfolioImage5,
  },
  {
    title: 'Happy Wedding',
    description: 'Minnesota-based wedding photography with a focus on modern portraiture and timeless storytelling.',
    url: 'https://www.geneoh.com/',
    image: porfolioImage6,
  },
  {
    title: 'Premise Health',
    description: `World's leading healthcare provider focusing on clinical expertise, easy access to care, and a seemless and simple member experience`,
    url: 'https://www.premisehealth.com/',
    image: porfolioImage7,
  },
  {
    title: 'Newman Architecture',
    description: 'Delivering architectural design and services that focus on your individual needs, ideas, and objectives.',
    url: 'https://www.newmanarchitecture.com/',
    image: porfolioImage8,
  },
  {
    title: 'Kira Network',
    description: 'The first network that hosts, powers and secures DeFi applications with value of real assets at stake.',
    url: 'https://kira.network/',
    image: porfolioImage9,
  },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Sep 2011 – August 2015',
    location: 'Singapore',
    title: 'BACHELOR OF COMPUTER SCIENCE',
    content: <p>I've learned artificial intelligence, computer systems and networks, security, database systems, human computer interaction, vision and graphics, numerical analysis, programming languages, software engineering, bioinformatics and theory of computing.</p>,
  },
  // {
  //   date: 'March 2003',
  //   location: 'School of Business',
  //   title: 'What did you study 101',
  //   content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  // },
];

export const experience: TimelineItem[] = [
  {
    date: 'December 2021 – Present',
    location: 'Kickstarter',
    title: 'SENIOR SOFTWARE ENGINEER (MERN)',
    content: (
      <p>
        • Worked closely and collaboratively within a cross functional team of
        product managers, designers, engineers as well as stakeholders.<br />
        • Iteratively researched, experimented, and developed products and
        features to solve real problems for kickstarter creators and backers,
        helped drive the technical direction of the kickstarter platform and
        product.<br />
        • Refactored old ROR framework with legacy codes and built features with
        modern frameworks like React, Redux, Apollo, and Typescript, all
        backed by GraphQL API, Node.js, Express, MongoDB, AWS EC2.<br />
        • Mentored, coached and shared knowledge with other team members and
        across the engineering organization.
      </p>
    ),
  },
  {
    date: 'November 2019 – December2021',
    location: 'EnvyTheme',
    title: 'FULL STACK ENGINEER (LARAVEL | JAM Stack)',
    content: (
      <p>
        • Developed, tested and deployed high-quality code for EnvyTheme’s
        products including React, Next.js, Vue, Angular and Laravel templates <br />
        • Troubleshoot, debugged and optimized the code to improve performance
        and scalability, created and maintained technical documentation.<br />
        • Contributed to 400% increase in theme sales while simultaneously
        decreasing support requests thanks to bug free code and thorough
        documentation, resulting in a considerable increase in annual revenue.
      </p>
    ),
  },
  {
    date: 'December 2018 – October2019',
    location: 'Virtus Ventures LLC',
    title: 'SENIOR WEB AND MOBILE APP DEVELOPER | MERN STACK',
    content: (
      <p>
        • Designed, developed and deployed 5 full-stack web applications and
        mobile apps, generating revenue in excess of $2M annually.<br />
        • Worked directly with stakeholders in Virtus Ventures to stay on budget and
        time manage while meeting client needs.<br />
        • Acted as the main point of contact responsible for React, Next.js, Node.js,
        React Native and Flutter with various clients.<br />
        • Improved SEO on several existing MERN stack products by improving the
        page speed.<br />
        • Gained experience with GCM and AWS Amplify while implementing a Real
        time chat feature and database.
      </p>
    ),
  },
  {
    date: 'January 2018 – November 2018',
    location: 'Appalope LLC',
    title: 'SENIOR MOBILE APP DEVELOPER | IONIC',
    content: (
      <p>
        • Building user interfaces and designing the methodology, structure and
        architecture for the projects complex data visualization requirements.<br />
        • Creating Angular 5 and Ionic 3 Native builds for single model view solutions.<br />
        • Working with data modelling for variable Ecommerce products in the
        medical field.<br />
        • Implementing RESTful API services for creating, retrieving, updating, and
        deleting data in JSON.
      </p>
    ),
  },
  {
    date: 'January 2017 – December 2017',
    location: 'Appalope LLC',
    title: 'WEB DEVELOPER | MEAN STACK',
    content: (
      <p>
        • Led the end-to-end development process of multiple software applications and
        websites.<br />
        • Created Healthcare web applications to connect customers with the most
        trusted sources of generic and brand medicine suppliers in the world.<br />
        • Designed, implemented, documented, and successfully deployed
        warehouse integration code using Node.js, Angular, Express, MongoDB.<br />
        • Structured several affiliate systems which used a centralized database.
      </p>
    ),
  },
  {
    date: 'November 2015 – December 2016',
    location: 'Appalope LLC',
    title: 'FRONTEND DEVELOPER',
    content: (
      <p>
        • Translated 50+ PSD page designs into responsive, SEO-friendly web pages
        with high accessibility.<br />
        • Under the supervision of senior software engineer, participated in revamping
        the legacy COdeIgniter website into Laravel, ensuring all the features are
        correctly working.<br />
        • Optimized 10+ complex SQL queries, which decreased the page load time by
        40%.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'James Wilson',
      text: 'Great job. Everything done very quickly to our liking. Costs got a bit out of control on the hourly side before we noticed. That’s hourly jobs.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Pham Minh',
      text: 'Bryan is a highly competent MERN developer , which reflects his years of experience in the job. We were really pleased with his communication, fast work, and quality of the work Bryan produced. The quality of work is something our partners we feel are going to be really happy with and is going to create lots of value for our company! Great to work with Bryan.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Sabro Ken',
      text: 'Very fast job, completed in excellent time, great English language skills, and available at all hours of the day. The work was completed before the deadline precisely when we needed it and the Bryan was very helpful with questions and suggestions. I can highly recommend and would hire again.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'hereis.topdev@gmail.com',
      href: 'mailto:hereis.topdev@gmail.com',
    },
    {
      type: ContactType.Location,
      text: '6 VERDUN ROAD, Singapore',
      href: 'https://www.google.ca/maps/place/6+Verdun+Rd,+Singapore+207275/@1.3098121,103.8535677,17z/data=!3m1!4b1!4m6!3m5!1s0x31da19c7d11aceb9:0x5d63f6cad7aa9a26!8m2!3d1.3098067!4d103.8561426!16s%2Fg%2F11cs7f4rb4?entry=ttu',
    },
    {
      type: ContactType.LinkedIn,
      text: 'bryanjin',
      href: 'https://www.linkedin.com/in/bryan-jin-742781263/',
    },
    {
      type: ContactType.Github,
      text: 'mastercodercat',
      href: 'https://github.com/mastercodercat',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/mastercodercat'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/bryan-jin-742781263/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/bryanjin/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/bryanjin'},
];
