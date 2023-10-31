import "./Features.css";
import { motion } from "framer-motion";

const featueres = [
  {
    title: "Custom Software Solutions",
    image:"https://www.udaantechnologies.com/images/mobile-banner/m-custom-software-development-banner-icon.png",
    description:
      " We offer tailor-made software development to meet your unique business needs, ensuring that you get precisely what you require.",
  },
  {
    title: "Experienced Team",
    image:"https://cdn-icons-png.flaticon.com/512/4075/4075912.png",
    description:
      "Our team consists of skilled and experienced developers, designers, and engineers who stay up-to-date with the latest technologies and best practices",
  },
  {
    title: "Agile Development",
    image:"https://productfolio.com/wp-content/uploads/2019/07/agile-method.png",
    description:
      "We follow agile methodologies to deliver projects efficiently, with regular updates and opportunities for client feedback.",
  },
  {
    title: "Quality Assurance",
    image:"https://png.pngtree.com/png-clipart/20230102/original/pngtree-quality-control-approved-icon-png-image_8855326.png",
    description:
      "Rigorous testing and quality assurance processes guarantee that our software is reliable, secure, and error-free.",
  },
  {
    title: "User-Centric Design",
    image:"https://mobomo.s3.amazonaws.com/uploads/2017/01/UCD3.png",
    description:
      "Our UI/UX designers create intuitive and visually appealing interfaces to ensure an exceptional user experience.",
  },
  {
    title: "Scalability",
    image:"https://cdn-icons-png.flaticon.com/512/3024/3024206.png",
    description:
      "Our solutions are designed to grow with your business, accommodating increased demand and user loads.",
  },
  {
    title: "Mobile-First Approach",
    image:"https://www.techmagic.co/blog/content/images/2022/06/cover-Mobile-First-Design.png",
    description:
      "We develop responsive web applications and mobile apps, ensuring a seamless experience across various devices",
  },
  {
    title: "Cloud Integration",
    image:"https://cdn-icons-png.flaticon.com/512/297/297432.png",
    description:
      "We provide expertise in integrating and managing cloud services, offering flexibility, scalability, and cost-efficiency.",
  },
  {
    title: "Security Measures",
    image:"https://cdn-icons-png.flaticon.com/512/4984/4984982.png",
    description:
      "We prioritize security with robust encryption, regular updates, and monitoring to protect your data and user information.",
  },
  {
    title: "Maintenance and Support",
    image:"https://static.vecteezy.com/system/resources/previews/009/350/475/original/technical-support-maintenance-png.png",
    description:
      "We offer ongoing support and maintenance services to keep your software running smoothly and updated.",
  },
];

const Features = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ x: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      id="features"
      className="features"
    >
      <div className="features-title">
      <iframe frameBorder="0" src="https://lottie.host/?file=3efabcd6-f3f0-43bd-b0a5-e471d93be18b/aLYFYqBs2W.json"></iframe>
        <h1>Features</h1>
      </div>
      <div className="feature-details-container">
        <div className="feature-details">
            {
                featueres.map((feature,i)=>(
                    <div key={i} className="feature-card">
                        <div>
                          <img src={feature.image} alt="" />
                        <h4><span>{i+1}</span> . {feature.title}</h4>

                        </div>
                        <p>{feature.description}</p>
                        
                        
                    </div>
                ))
            }
        </div>
      </div>
    </motion.div>
  );
};

export default Features;
