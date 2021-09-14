// Assets
import TotallyTennisLanding from '../assets/graphics/TT.png'
import TennisLanding from '../assets/graphics/Tennisnyc.png'
import PortfolioLanding from '../assets/images/MTenn.JPG'
import CoCareLanding from '../assets/graphics/Cocare.png'
import PowerPupsLanding from '../assets/graphics/PowerPups.jpg'
import TasteBuddsLanding from '../assets/graphics/Tastebudds.png'
import AllieLanding from '../assets/graphics/Alliek.png'
import GlassTopLanding from '../assets/graphics/Glasstop.png'
import ConvertedCamperLanding from '../assets/graphics/Converted.png'
import OctagoLanding from '../assets/graphics/octago.png'



const Websites = [
  {
    id: 12,
    featured: true,
    case_study: false,

    name: 'Artemie Amari',
    date: 'Sep 2021',
    meta: 'React',
    tagline: 'A portfolio website for Artemie Amari following years or practice. Built using React and many React libraries.',

    cs_intro: null,
    cs_description: null,
    cs_conclusion: null,
    cs_img_1: null,
    cs_caption_1: null,
    cs_img_2: null,
    cs_caption_2: null,

    category: 'Front End', // Concept, Front End, Full Stack
    progress: 'Live', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: `${PortfolioLanding}`,
    url_to_demo: '',
    url_to_github: 'https://github.com/yaroAmaro219/Portfolio',

    markdown: true,
    
  },
  {
    id: 11,
    featured: true,
    case_study: false,

    name: "Allison Keel",
    date: 'Aug 2021',
    meta: 'React',
    tagline: 'Developed a portfolio website for actress Allison Keel.',

    cs_intro: null,
    cs_description: null,
    cs_conclusion: null,
    cs_img_1: null,
    cs_img_2: null,

    category: 'Front End', // Concept, Front End, Full Stack
    progress: 'MVP', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: `${AllieLanding}`,
    url_to_demo: 'https://www.allisonkeel.com/',
    url_to_github: 'https://github.com/yaroAmaro219/Keel',
  },
  {
    id: 10,
    featured: true,
    case_study: false,

    name: "Taste Budds",
    date: 'Aug 2021',
    meta: 'React',
    tagline: 'Developed a website for meet up group Taste Budds.',

    cs_intro: null,
    cs_description: null,
    cs_conclusion: null,
    cs_img_1: null,
    cs_img_2: null,

    category: 'Front End', // Concept, Front End, Full Stack
    progress: 'MVP', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: `${TasteBuddsLanding}`,
    url_to_demo: 'https://infallible-shirley-2cb575.netlify.app/',
    url_to_github: 'https://github.com/yaroAmaro219/tastebudds-front',
  },
  {
    id: 9,
    featured: true,
    case_study: false,

    name: "Totally Tennis",
    date: 'Sep 2020',
    meta: 'Wix & Sawyer',
    tagline: 'Started a childrens tennis program in the NYC area.',

    cs_intro: null,
    cs_description: null,
    cs_conclusion: null,
    cs_img_1: null,
    cs_img_2: null,

    category: 'Full Stack', // Concept, Front End, Full Stack
    progress: 'MVP', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: `${TotallyTennisLanding}`,
    url_to_demo: 'https://www.totallytennis.io/',
  },
  {
    id: 8,
    featured: true,
    case_study: false,

    name: "Tennis Coaches of NYC",
    date: 'Aug 2020',
    meta: 'Ruby on Rails & React',
    tagline: 'The pre-conception to Totally Tennis.',

    cs_intro: null,
    cs_description: null,
    cs_conclusion: null,
    cs_img_1: null,
    cs_img_2: null,

    category: 'Full Stack', // Concept, Front End, Full Stack
    progress: 'MVP', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: `${TennisLanding}`,
    url_to_demo: 'https://www.tenniscoachesofnyc.com/',
    url_to_github: 'https://github.com/yaroAmaro219/Tennis-Camp',

  },
  {
    id: 7,
    featured: true,
    case_study: false,

    name: "GlassTop",
    date: 'Aug 2020',
    meta: 'React',
    tagline: 'An online web development company.',

    cs_intro: null,
    cs_description: null,
    cs_conclusion: null,
    cs_img_1: null,
    cs_img_2: null,

    category: 'Front End', // Concept, Front End, Full Stack
    progress: 'MVP', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: `${GlassTopLanding}`,
    url_to_demo: 'https://www.glasstop.io/',
    url_to_github: 'https://github.com/yaroAmaro219/GlassTop',
  },
  {
    id: 6,
    featured: true,
    case_study: false,

    name: "Converted Camper",
    date: 'August 2020',
    meta: 'Ruby on Rails & React',
    tagline: 'Developed a website intended for sales of converted campers.',

    cs_intro: null,
    cs_description: null,
    cs_conclusion: null,
    cs_img_1: null,
    cs_img_2: null,

    category: 'Front End', // Concept, Front End, Full Stack
    progress: 'MVP', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: `${ConvertedCamperLanding}`,
    url_to_demo: 'https://www.convertedcamper.io/',
    url_to_github: 'https://github.com/yaroAmaro219/ConvertedCamper-frontend',
  },
  {
    id: 5,
    featured: true,
    case_study: false,

    name: "CoCare Community",
    date: 'May 2020',
    meta: 'Ruby on Rails & React',
    tagline: 'Participated in hackathon hosted by General Assembly.',

    cs_intro: null,
    cs_description: null,
    cs_conclusion: null,
    cs_img_1: null,
    cs_img_2: null,

    category: 'Full Stack', // Concept, Front End, Full Stack
    progress: 'MVP', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: `${CoCareLanding}`,
    url_to_demo: 'http://www.cocarecommunity.com/',
    url_to_github: 'https://github.com/yaroAmaro219/Corona-Care',
  },
  {
    id: 4,
    featured: true,
    case_study: false,

    name: "OctaGo",
    date: 'July 2020',
    meta: 'Hackathon',
    tagline: 'Participated in hackathon hosted by Octagon and General Assembly.',

    cs_intro: null,
    cs_description: null,
    cs_conclusion: null,
    cs_img_1: null,
    cs_img_2: null,

    category: 'Full Stack', // Concept, Front End, Full Stack
    progress: 'MVP', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: `${OctagoLanding}`,
    url_to_github: 'https://github.com/yaroAmaro219/OctaGo',
  },
  {
    id: 3,
    featured: true,
    case_study: false,

    name: "Power Pups",
    date: 'June 2020',
    meta: 'Ruby on Rails & React',
    tagline: 'Participated in hackathon hosted by Data Dog and General Assembly.',

    cs_intro: null,
    cs_description: null,
    cs_conclusion: null,
    cs_img_1: null,
    cs_img_2: null,

    category: 'Full Stack', // Concept, Front End, Full Stack
    progress: 'MVP', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: `${PowerPupsLanding}`,
    url_to_demo: 'http://powerpups.surge.sh/',
    url_to_github: 'https://github.com/yaroAmaro219/Powerpups',
  },
]

export {
  Websites
}