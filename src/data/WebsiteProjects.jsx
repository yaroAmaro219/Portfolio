// Assets
import TotallyTennisLanding from '../assets/graphics/TT.png'
import PortfolioLanding from '../assets/images/MTenn.JPG'



const Websites = [
  {
    id: 12,
    featured: true,
    case_study: false,

    name: 'Artemie Amari',
    date: 'Sep 2021',
    meta: 'Portfolio',
    tagline: 'Developed a stunning portfolio website.',

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
    url_to_demo: '/woah',

    markdown: true,
    
  },
  {
    id: 11,
    featured: true,
    case_study: false,

    name: "Totally Tennis",
    date: 'August 2020',
    meta: 'CEO',
    tagline: 'Started a childrens tennis program in the NYC area.',

    cs_intro: null,
    cs_description: null,
    cs_conclusion: null,
    cs_img_1: null,
    cs_img_2: null,

    category: 'Full Stack', // Concept, Front End, Full Stack
    progress: 'MVP', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: `${TotallyTennisLanding}`,
    url_to_demo: 'www.totallytennis.io',
  },
]

export {
  Websites
}