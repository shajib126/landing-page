import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import './Testimonials.css'
import {motion} from 'framer-motion'
const testimonials = [
  {
    client: "John Smith",
    position: "CEO of XYZ Corporation",
    description:
      "Working with [Your Company Name] has been a game-changer for our organization. Their custom software solutions have transformed the way we do business. Our productivity has soared, and the user-friendly interfaces have been a hit with our team. I can't recommend them highly enough.",
    avatar:
      "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwbWFufGVufDB8fDB8fHww",
  },
  {
    client: "Sarah Davis",
    position: "CTO of ABC Tech",
    description:
      "We turned to [Your Company Name] for our mobile app development needs, and the results were outstanding. Their expertise in the field and attention to detail were evident in the final product. The app has received great feedback from our users.",
    avatar:
      "https://media.istockphoto.com/id/843545374/photo/young-businessman-suddenly-got-great-idea-at-work-desk.webp?b=1&s=170667a&w=0&k=20&c=ZcKT5DE8GPI3tcs3boaK-eE2VT-wHAbIjNVIllbj95k=",
  },
  {
    client: "Mark Johnson",
    position: "Director of Operations at GreenSolutions",
    description:
      "The software developed by [Your Company Name] has not only optimized our operations but also reduced our costs. The ongoing support has been fantastic, ensuring our software stays up and running without a hitch. We're extremely satisfied with their services.",
    avatar:
      "https://img.freepik.com/free-photo/analyst-working-office_1098-15882.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697846400&semt=ais",
  },

  {
    client: "Jessica Rogers",
    position: "Founder of StartSmart Inc",
    description:
      "When it comes to custom software, [Your Company Name] is the top choice. They took our vision and turned it into a reality. Their innovative solutions have set us apart in the market, and we've seen significant growth since partnering with them.",
    avatar:
      "https://img.freepik.com/free-photo/businessman-staring-through-window-close-up_1098-238.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698105600&semt=ais",
  },
  {
    client: "David Chen",
    position: "CFO of GrowthX Enterprises",
    description:
      "Our collaboration with [Your Company Name] for web development has been outstanding. Their commitment to delivering high-quality work within our tight timelines has been a game-changer for our marketing efforts. Our website now stands out and delivers a superb user experience.",
    avatar:
      "https://cdn.create.vista.com/api/media/small/45220833/stock-photo-calling",
  },
  {
    client: "Michael Brown",
    position: " Director of IT at GlobalLogistics",
    description:
      "The software solutions provided by [Your Company Name] have streamlined our logistics operations and enhanced our efficiency. Their scalable and cloud-integrated approach has been a significant asset as our business grows. We look forward to continuing our partnership",
    avatar:
      "https://img.freepik.com/free-photo/young-business-woman-working-laptop-office_1303-22814.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697846400&semt=ais",
  },
];

const Testimonials = () => {
  return (
    <motion.div initial={{opacity:0,x:-200,}} animate={{x:0}} whileInView={{opacity:1,x:0}} transition={{duration:0.5,delay:0.5}} id='testimonials' className='testimonials'>
        <div className="testimonial-title">
        <iframe frameBorder="0" src="https://lottie.host/?file=145a71d9-2b99-4031-93e8-82cfc5683c2c/mTU6cSS7O6.json"></iframe>
            <h1>Testimonials</h1>    
        </div>
      <Swiper
        loop={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        autoplay={true}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
      >
        {testimonials.map((testimonial, i) => (
          <SwiperSlide key={i}>
            <div className="testimonial-card">
              <div className="profile">
              <motion.img  animate={{scale:1.1}} transition={{duration:2,repeat:Infinity,repeatType:"reverse"}} src={testimonial.avatar} alt="" />
                <h4>{testimonial.client}</h4>
                
              </div>
              <p>" {testimonial.description} "</p>
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Testimonials;
