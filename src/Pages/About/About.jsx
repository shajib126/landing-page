import './About.css'
import {motion} from 'framer-motion'

const abouts = [
    {
        title:'Expertise',
        description:"With a team of highly skilled developers, designers, and technology enthusiasts, we have the expertise to turn your ideas into reality. Our technical prowess combined with a passion for innovation sets us apart.",
        icon:"fa-solid fa-gears"
    },
    {
        title:'Customization',
        description:"We understand that one size doesn't fit all. That's why we take a tailored approach to every project. Our solutions are designed to align perfectly with your unique requirements and goals",
        icon:"fa-solid fa-pencil"
    },
    {
        title:'Quality',
        description:"We are dedicated to delivering software of the highest quality. Our rigorous testing and quality assurance processes ensure that our solutions are reliable, secure, and user-friendly.",
        icon:"fa-solid fa-cubes-stacked"
    },
    {
        title:'Client-Centric Approach',
        description:"Your satisfaction is our top priority. We work closely with our clients, maintaining open lines of communication and providing ongoing support to ensure your project's success.",
        icon:"fa-solid fa-hand-pointer"
    },
    {
        title:'Innovation',
        description:"We are always at the forefront of technology trends and industry best practices. Our commitment to innovation means you'll receive the latest and most effective solutions.",
        icon:"fa-regular fa-lightbulb"
    },
]
const About = () => {
  return (
    <motion.div initial={{opacity:0,x:-200,}} animate={{x:0}} whileInView={{opacity:1,x:0}} transition={{duration:0.5,delay:0.5}} id='about' className='about'>
        <div className="about-title">
         <iframe frameBorder="0" src="https://lottie.host/?file=2f59f7b9-6947-456e-a91f-1ded31ad97e4/SRU4XbU1w1.json"></iframe>
        <h1>About Z-SOFT</h1>
        </div>
        <div className='about-details-container'>
        <div className='about-details'>
                {
                    abouts.map((about,i)=>(
                        <div key={i}>
                            <h4><i className={about.icon}></i> {about.title}</h4>
                            <p>{about.description}</p>
                        </div>
                    ))
                }
           
        </div>
        <motion.img animate={{scale:1.0,rotate:'2deg'}} transition={{duration:2,repeatType:'reverse', repeat:Infinity}} src="https://indexiz.com/wp-content/uploads/2023/07/Hire-Dedicated-Development-Team.png" alt="" />
        </div>
    </motion.div>
  )
}

export default About