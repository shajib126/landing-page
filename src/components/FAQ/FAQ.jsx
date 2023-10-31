import { useState } from 'react'
import './FAQ.css'
import {motion} from 'framer-motion'

const faqs = [
    {
        question:'What services does Z-Soft offer?',
        answere:"Z-Soft specializes in custom software development, web development, mobile app development, software testing, UI/UX design, and more. We provide end-to-end solutions tailored to meet your unique business needs."
    },
    {
        question:'How does the software development process work?',
        answere:"Our software development process typically involves project discovery and planning, design and prototyping, development and testing, deployment, and ongoing support and maintenance. We follow agile methodologies to ensure flexibility and client involvement throughout the project."
    },
    {
        question:'Can you build software for my specific industry or niche?',
        answere:"Yes, we have experience working across various industries, including healthcare, finance, e-commerce, education, and more. We can customize our solutions to align with the unique requirements of your industry."
    },
    {
        question:' How long does it take to complete a software project?',
        answere:"The project timeline can vary depending on the complexity and scope of the project. We provide project estimates during the initial consultation, and our team works diligently to meet project deadlines."
    },
    {
        question:' What is your approach to data security?',
        answere:"Data security is a top priority for us. We implement industry-standard security measures, including encryption, access controls, and regular security assessments to protect your data and ensure compliance with regulations."
    }
]
const FAQ = () => {
    const [isOpen,setIsOpen] = useState(null)
    const handleClick = (i)=>{
       if(i === isOpen){
        setIsOpen(null)
       }else{
        setIsOpen(i)
       }
    }
  return (
    <motion.div initial={{opacity:0,x:-200,}} animate={{x:0}} whileInView={{opacity:1,x:0}} transition={{duration:0.5,delay:1}} id='faq' className='faq'>
        <div className="faq-title">
        <iframe frameBorder="0" src="https://lottie.host/?file=f0ec2791-8806-4795-9302-8a4a82ee082c/V9a2eARF0e.json"></iframe>
            <h1>Frequently Ask Questions (FAQ)</h1>
        </div>
        <div className="faq-details">
            {
                faqs.map((faq,i)=>(
                    <div onClick={()=>handleClick(i)} key={i} className='faq-card'>
                        <h4 ><span>{i+1} . </span>{faq.question}<span> {isOpen === i ? <i className="fa-solid fa-minus"></i> :<i className="fa-solid fa-plus"></i>} </span></h4>
                        {isOpen === i && <p>{faq.answere}</p>}
                        
                    </div>
                ))
            }
        </div>
    </motion.div>
  )
}

export default FAQ