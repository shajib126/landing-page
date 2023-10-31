import {motion} from 'framer-motion'
import  './Benefits.css'
const benefits = [
    {
        title:"Increased Efficiency",
        image:"https://img.freepik.com/free-vector/clock-increasing-chart-workflow-productivity-increase-work-performance-optimization-efficiency-indicator-rising-effectiveness-metrics-vector-isolated-concept-metaphor-illustration_335657-2718.jpg",
        description:"Our software solutions streamline your business processes, improving efficiency and productivity."
    },
    {
        title:"Customized Solutions",
        image:"https://cdn-icons-png.flaticon.com/512/3347/3347800.png",
        description:"You get software that is tailored to your specific needs, ensuring it aligns perfectly with your business goals."
    },
    {
        title:"Cost Savings",
        image:"https://cdn-icons-png.flaticon.com/512/6091/6091840.png",
        description:"With software designed to fit your needs, you avoid paying for unnecessary features or expensive licensing fees."
    },
    {
        title:"Competitive Advantage",
        image:"https://tradebrains.in/wp-content/uploads/2018/06/competitive-advantage-example-example.png",
        description:"Our innovative solutions can set you apart from your competitors, helping you stand out in the market."
    },
    {
        title:"Enhanced User Experience",
        image:"https://png.pngtree.com/png-vector/20220929/ourmid/pngtree-customer-feedback-with-people-giving-star-ratings-clients-choose-satisfaction-or-png-image_6226576.png",
        description:"Intuitive design and smooth functionality make your software a pleasure for both customers and employees to use."
    },
    {
        title:"Scalable Growth",
        image:"https://winalytics.com/wp-content/uploads/2020/11/ScalableGrowth-orange.png",
        description:"As your business expands, your software can grow with it, saving you from costly redevelopments."
    },
    {
        title:"Data Security",
        image:"https://cdn-icons-png.flaticon.com/512/2255/2255350.png",
        description:"Your sensitive data is safe with our robust security measures, giving you peace of mind."
    },
    {
        title:"24/7 Availability",
        image:"https://img.freepik.com/premium-vector/247-hours-timer-symbol-black-color-flat-style_824631-673.jpg",
        description:"With cloud integration, your software is accessible from anywhere at any time, promoting collaboration and remote work."
    },
    {
        title:"Reduced Downtime",
        image:"https://icon-library.com/images/downtime-icon/downtime-icon-21.jpg",
        description:"Regular maintenance and support keep your software running smoothly, minimizing disruptions."
    },
    {
        title:"Innovation and Future-Proofing",
        image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAByFBMVEX///////3///v///n///f//v////X///P//fv8/vz//f/9///9//z//f38/vn9/f///+/5//f4//wAAOKw3fDU3/b7//T3//hdvutjse7++v//+/f/+f9mwPb//+ra4/cAAOwAANfO4/cAqe0AnecArevc7vfy+PkAlejH7PdkyvXx8vK+1O4AY+iq0PLp9fZdr/MAgOvn7vZFTejK1fFXdulehusrAPbc9PGS5PTV9Pmc3u7h8uib2/OK2uwZwOyC0PB/xOm76Oqc0ux/vfd0vOSz3us1rfm93/M1xvFFvvXb7O0Ast4AwfYAu/oAoPMAlfE+m95vpupX1PDo/eyS0vlEsOmBx/x5s+K82ucqheNYzN5jxvFXm+mNsuYAcuicyPhNk+KGq+YAjPuWvOC41OYAUd9YoelFbcp4p/MAduRHj+as5um2w9uNwOppl+8AQeWbquKesPdspd64wO5Jcu8AM/NMW+dUgOdibthYa+7FzPIAZO6PsN98heqwu/ScoeePmeZ8i+oAPdnHwvGVju5nZu1nfPVUWOurqvY9NOTH1N5sjN27sexdevXb2/1IRNJWYcqZldNURPdZT/B7bfc+Ke5qXepdjwbSAAAchklEQVR4nO19jXvTRrq95p3RaEYjzVhyIoMNKCRgJziJieykWUq37faLNksLtLSQ2yQsC+EGdi8JTSDENF+EQFyy7F0g/Lu/kRPABOjv3vv01uY+Og84ku0YHc8773vOfAjDSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRL834FQXKj6EShXCVcZ4NRPJRc2auaV/VYQDjdx/ch2pOSanW3XT11bCN7MK/ut4NrcMetHUth2VjDMZf00IxCIZl7ZbwTT8xHy64eu4WACTIgcimFj4NkmX91vg+E//CFVPxA5OPZ+W4lILyZoHP/gg4yhDLPJl/c/BddJRQhXGPDHDz/66OsR6Snu5T7o+vijrj8Bx9ySnxz69LPuz8EB/G6GqspyZnMlwT95DBl/25P1bd/1u4YF/vyLlE43snToOMCJb6w4u76TFO2AKJHiAS196TPHP3zcNTguHC64iB/O4hy38l3A+cghcHI+jRm+eyxdoXBe409fFYJs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",
        description:"Staying up-to-date with the latest technologies ensures your software remains relevant and adaptive to industry changes."
    }
]

const Benefits = () => {
  return (
    <motion.div initial={{opacity:0,x:-200,}} animate={{x:0}} whileInView={{opacity:1,x:0}} transition={{duration:0.5,delay:1.2}} id='benefits' className='about'>
        <div className="benefit-title">
        <iframe frameBorder="0" src="https://lottie.host/?file=b855eb4f-f18b-46b0-b9c7-fe1b4fac141a/IfiZjD6zAt.json"></iframe>
            <h1>Benefits</h1>
        </div>
        <div className="benefits-details-container">
            <div className="benefits-details">
                {
                    benefits.map((benefit,i)=>(
                        <div className='benefit-card' key={i}>
                            <div className='benefit-head'>
                                <motion.img animate={{rotate:'360deg'}} transition={{duration:4,repeat:Infinity,repeatType:'loop'}} src={benefit.image} alt="" />
                                <h4>{benefit.title}</h4>
                            </div>
                            <p>{benefit.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </motion.div>
  )
}

export default Benefits