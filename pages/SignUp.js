import Link from "next/link";
import { Button, Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

import styles from '../styles/Sign Up.module.css'
 const SignUp =()=> {
    return(
        <>
            <div className={styles.mainBox}>
                <div className={styles.container1}>
                    <h1 className={styles.title1}>Join Us!</h1>
                    <div className={styles.link1Box}>
                    <i class="fa-brands fa-google"></i>
                        <Link href={''} className={styles.link1}>Sign in with google</Link>
                    </div>
                    <div className={styles.horizontal}>
                        <hr className={styles.hori1}/> Or 
                        <hr className={styles.hori2}/>
                    </div>
                    <Form className={styles.form}>
            
                        <FormGroup className={styles.group}>
                            <FormLabel className={styles.label}>Driver Name</FormLabel>
                            <br />
                             <FormControl className={styles.input1} type="name"/>
                        </FormGroup>
                        <FormGroup className={styles.group}>
                            <FormLabel className={styles.label}>Occupation</FormLabel>
                            <br />
                            <select className={styles.select1}>
                                <option>Forklift operator</option>
                                <option>Machine operator</option>
                                <option>Catapiller Operator</option>
                            </select>
                        </FormGroup>
                        <FormGroup className={styles.group}>
                            <FormLabel className={styles.label}>Reason for Acount Creation</FormLabel>
                            <br />
                            <FormControl className={styles.input2} type="textarea" placeholder="Enter your reason here."/>
                        </FormGroup>
                        {/* <div>
                            <FormControl type="checkbox" />
                            <FormLabel className={styles.label}>keep me signed in</FormLabel>
                            <Link  href={"#"} className={styles.link2}>forgot password?</Link>
                        </div> */}
                        <Button type="submit" className={styles.submitBtn}>Submit</Button>
                    </Form>
                </div>
                <div>
                    <img className={styles.img1} src="/images/bg1.png" alt="image 1" />
                </div>
            </div>
        </>
    )
 }
 export default SignUp;