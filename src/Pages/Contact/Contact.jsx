import './Contact.css'
import {motion} from 'framer-motion'

const icons = [
  "fa-brands fa-facebook",
"fa-brands fa-x-twitter",
    "fa-brands fa-linkedin",
    "fa-brands fa-youtube",
    "fa-brands fa-instagram",
    "fa-brands fa-tiktok",
    "fa-brands fa-slack"
]
const Contact = () => {
  return (
    <motion.div initial={{opacity:0,x:-200,}} animate={{x:0}} whileInView={{opacity:1,x:0}} transition={{duration:1,delay:1}} id='contact' className='contact'>
        <div className='contact-mail'>
            <h1>Send Us email</h1>
            <hr />
            <div className="mail-container">
            <input type="text" placeholder='Type..' />
            <motion.button whileHover={{scale:1.1}} transition={{type:'spring',damping:5,stiffness:250,duration:0.5}}>Send</motion.button>
            </div>
        </div>
        <div className='social'>
            <h4>Social Connection</h4>
            <div className='social-links'>
                {icons.map((icon,i)=>(
                    <motion.i animate={{rotate:'5deg'}} transition={{duration:1,repeat:Infinity,repeatType:'reverse'}} key={i} className={icon}></motion.i>
                ))}
            </div>
        </div>
    </motion.div>
  )
}

export default Contact