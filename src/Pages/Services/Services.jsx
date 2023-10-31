import "./Services.css";
import {motion} from 'framer-motion'
const services = [
    {
        title:"Custom Software Development",
        description:" Creating tailored software solutions to address specific business needs, including web applications, mobile apps, and desktop applications."
    },
    {
        title:"Web Development: ",
        description:"Designing, developing, and maintaining websites and web applications, often involving front-end and back-end development."
    },
    {
        title:"Mobile App Development: ",
        description:"Building applications for various platforms, such as iOS and Android, for smartphones and tablets."
    },
    {
        title:"Software Testing and Quality Assurance ",
        description:"Ensuring the reliability and performance of software through testing, quality control, and bug fixing."
    },
    {
        title:"UI/UX Design ",
        description:"Designing user interfaces and experiences that are intuitive, visually appealing, and user-friendly."
    },
    {
        title:"UCloud Computing Services",
        description:"Implementing, managing, and optimizing cloud-based solutions, such as AWS, Azure, or Google Cloud."
    },
    {
        title:"Database Development and Management",
        description:"Creating and managing databases to store and access data efficiently and securely."
    },
    {
        title:"IT Consulting",
        description:"Providing expert advice on technology strategies, infrastructure, and software selection to help businesses achieve their goals."
    },
    {
        title:"Cybersecurity Services",
        description:"Protecting software and systems from cyber threats through security assessments, penetration testing, and threat detection."
    }

]
const Services = () => {
  return (
    <motion.div id="services" initial={{opacity:0,x:-200,}} animate={{x:0}} whileInView={{opacity:1,x:0}} transition={{duration:0.5,delay:1}} className="services">
      <div className="service-title">
        <iframe
          frameBorder="0"
          src="https://lottie.host/?file=0a9edbff-77e4-4142-96f7-6060ba8f4e81/CMiIFHcwm2.json"
        ></iframe>
        <h2>Our Services</h2>
      </div>
      <div className="service-details">
            {services.map((service,i)=>(
                <motion.div whileHover={{scale:1.1,zIndex:2}} className="service-card" key={i}>
                    <h1><span>{i+1}.</span>{service.title}</h1>
                    <p>{service.description}</p>
                </motion.div>
            ))}
      </div>
    </motion.div>
  );
};

export default Services;
