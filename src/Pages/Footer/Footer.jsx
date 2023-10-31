import "./Footer.css";
const icons = [
  "fa-brands fa-facebook",
  "fa-brands fa-x-twitter",
  "fa-brands fa-linkedin",
  "fa-brands fa-youtube",
  "fa-brands fa-instagram",
  "fa-brands fa-tiktok",
  "fa-brands fa-slack",
];
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-nav">
        <a href="#home">Home</a>
        <a href="#about">About Z-Soft</a>
        <a href="#services">Our Services</a>
        <a href="#features">Features</a>
        <a href="#benefits">Benefits</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#get-started">Get Started</a>
        <a href="#product">Our Products</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact Us</a>
      </div>
      <div className="footer-social">
        {icons.map((icon, i) => (
          <i key={i} className={icon}></i>
        ))}
      </div>
      <div className="phone-and-support">
        <iframe
          frameBorder="0"
          src="https://lottie.host/?file=41b3bdcf-5a63-4f10-8576-20bdfba734da/ijNzgh7bTs.json"
        ></iframe>
    
        <p>
          <i className="fa-solid fa-phone-volume"></i> +8801xxxxxxxx
        </p>
        <p><i className="fa-solid fa-envelope"></i> support@example.com</p>
      </div>
    </div>
  );
};

export default Footer;
