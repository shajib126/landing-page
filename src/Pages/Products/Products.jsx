import './Product.css'
import {motion} from 'framer-motion'
const products= [
    {
        name:"E-commerce Website",
        description:" Develop a fully functional e-commerce website featuring product listings, shopping cart functionality, secure payment processing, and user account management.",
        image:"https://plus.unsplash.com/premium_photo-1683288295841-782fa47e4770?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name:"Mobile App",
        description:" Create a mobile app prototype for iOS and Android, demonstrating your ability to design and build user-friendly applications. It could be a task management app, social networking app, or any other relevant concept",
        image:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name:"Content Management System (CMS)",
        description:" Build a CMS that allows users to create, edit, and manage content on a website. Showcase the flexibility and ease of use of the system.",
        image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name:"Customer Relationship Management (CRM) Software",
        description:"Develop a demo CRM system with contact management, lead tracking, and communication features to highlight your expertise in managing customer data.",
        image:"https://www.cxtoday.com/wp-content/uploads/2022/01/CRM-101-Customer-Relationship-Management.jpeg"
    },
    {
        name:"Inventory Management System",
        description:"Showcase your skills in building efficient inventory management software for businesses, featuring inventory tracking, ordering, and reporting",
        image:"https://neilpatel.com/wp-content/uploads/2021/09/zoho-inventory-interface-best-inventory-management-software.png"
    }
]
const Products = () => {
  return (
    <motion.div initial={{opacity:0,x:-200,}} animate={{x:0}} whileInView={{opacity:1,x:0}} transition={{duration:0.5,delay:0.5}} id='product' className='products'>
        <div className="product-title">
            <h1>Our Products</h1>
            <span className='border'><hr /></span>
        </div>
        <div className="product-details">
           {
            products.map((product,i)=>(
                <motion.div whileHover={{boxShadow:"0",zIndex:4}} transition={{type:"tween",damping:3,stiffness:250,duration:0.5}} key={i} className='product-card'>
                    <img src={product.image} alt="" />
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                </motion.div>
            ))
           }
        </div>
    </motion.div>
  )
}

export default Products