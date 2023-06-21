import { Image } from 'react-bootstrap'
import styles from '../styles/company.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function CompanyProfile(){
    return(
        <div className={styles.box}>
            <div className={styles.container1}>
                <div className={styles.firstbox}>
                    <h3 className={styles.welcome}>Welcome To</h3>
                    <h1 className={styles.title}>Canada Express Logistics</h1>
                    <p className={styles.info}>Our trucking company was founded in 2010 and has since 
                        established a reputation for providing reliable and efficient
                        transportation services across the United States. We are
                        committed to delivering our customers' cargo safely and 
                        on time while maintaining the highest standards of professionalism.
                    </p>
                    <div className={styles.btnContainer}>
                        <button className={styles.btn1}>Jobs</button>
                        <button className={styles.btn2}>Carrier Profile</button>
                    </div>
                </div>    
                    <div className={styles.ellipse}></div>
                    <div className={styles.rectangle}></div>
                    <div className={styles.socials}>
                        <img src='/images/whatsapp.png' className={styles.whatsApp}/>
                        <img src='/images/in.png'  className={styles.linkedIn}/>
                        <img src='/images/insta.png'  className={styles.instagram}/>
                        <img src='/images/fb.png'  className={styles.facebook}/>
                    </div>
            </div>
                    <div className={styles.aboutBox}>
                        <label className={styles.aboutLabel}>About Us</label>
                        <p className={styles.aboutInfo}>
                            Our company was founded by John Smith and Jane Doe, two experienced
                            professionals in the transportation industry. John has over 20 
                            years of experience in trucking, and Jane has a background in 
                            logistics and supply chain management. Together, they have built 
                            a company that is dedicated to providing the highest level of 
                            service to our customers. 
                        </p>
                    </div>
            <div className={styles.teambox}>
                    <h1 className={styles.teamLabel}>Meet Our Team</h1>
                    <p className={styles.teamInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua.
                    </p>
                    <div className={styles.teamBox1}>
                            <div className={styles.imgBox}>
                                <img src='/images/john doe.jpg'  className={styles.teamImg}/>
                                <h2 className={styles.teamName}>John Doe</h2>
                                <p>Manager</p>
                            </div>
                            <div className={styles.imgBox}>
                                <img src='/images/jane doe.jpg' alt='image' className={styles.teamImg}/>
                                <h2 className={styles.teamName}>Jane Doe</h2>
                                <p>Supervisor</p>
                            </div>
                            <div className={styles.imgBox}>
                                <img src='/images/john doe.jpg' alt='image' className={styles.teamImg}/>
                                <h2 className={styles.teamName}>John Doe</h2>
                                <p>Manager</p>
                            </div>
                            <div className={styles.imgBox}>
                                <img src='/images/jane doe.jpg' alt='image' className={styles.teamImg}/>
                                <h2 className={styles.teamName}>Jane Doe</h2>
                                <p>Supervisor</p>
                            </div>
                    </div>
                    <div className={styles.teamBox2}>
                            <div className={styles.imgBox1}>
                                <img src='/images/john doe.jpg'  className={styles.teamImg}/>
                            </div>
                            <div className={styles.imgBox1}>
                                <img src='/images/jane doe.jpg' alt='image' className={styles.teamImg}/>
                            </div>
                            <div className={styles.imgBox1}>
                                <img src='/images/john doe.jpg' alt='image' className={styles.teamImg}/>
                            </div>
                            <div className={styles.imgBox1}>
                                <img src='/images/jane doe.jpg' alt='image' className={styles.teamImg}/>
                            </div>
                    </div>
                    <div className={styles.serviceBox}> 
                    <label className={styles.serviceLabel}>Our Services</label>
                        <p className={styles.serviceInfo}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex 
                            ea commodo consequat. Duis aute irure dolor in cupidatat Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className={styles.contact}>
                        <p className={styles.label1}>Address</p>
                        <h1 className={styles.contactLabel}>CONTACT</h1>
                    </div>
                    <div className={styles.contactData}>
                        <div>
                            <p>Our Address</p>
                            <p>No 1 Airways, Montreal, Canada</p>
                        </div>
                        <div className={styles.horiBar}></div>
                        <div>
                            <p>Email Us</p>
                            <p>canadaexpress@gmail.com</p>
                        </div>
                        <div className={styles.horiBar}></div>
                        <div>
                            <p>LinkedIn@ Canada Express Logistics </p>
                            <p>Twitter@ Canada Express </p>
                            <p>Facebook@ Canada Express </p>
                        </div>
                    </div>
            </div>  
        </div>
    )
}