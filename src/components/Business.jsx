
import styles,{layout} from "../style"
import  Button  from './Button';
import { business } from "../assets";



const Business = () => {
  return (
    <section id="features" className={layout.section}>
       <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You are at the right place. <br className="sm:block hidden"/>
       
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        By choosing us as your expert trading partner we will provide you with efficient marketing and distribution solutions for your products and/or services.
        </p>
        <Button styles="mt-10"/>
       </div>
       <div>
        <img src={business} className="w-[600px] h-[400px] object-cover object-center rounded-full" alt="" />
       </div>
       
    </section>
  )
}

export default Business