import Link from "next/link";
import { Button, Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import Footer from "../Components/Footer"
import styles from '../styles/Login.module.css'
 export default function Log() {
    return(
        <>
            <div className={styles.mainBox}>
                <div  className={styles.container}>
                        <h1 className={styles.title}>Sign In</h1>
                        <div className={styles.link1Box}>
                        <i class="fa-brands fa-google"></i>
                            <Link href={''} className={styles.link1}>Sign in with google</Link>
                        </div>
                        <div className={styles.horizontal} >
                            <hr className={styles.hori1}/>
                            <Link href={''}>Sign in with your email</Link>
                            <hr className={styles.hori2}/>
                        </div>
                        <Form className="">
                            <FormGroup className={styles.group}>
                                <FormLabel className={styles.label}>Email Address</FormLabel>
                                <br />
                                <FormControl className={styles.input1} type="email"/>
                            </FormGroup>
                            <FormGroup className={styles.group}>
                                <FormLabel className={styles.label}>Password</FormLabel>
                                <br />
                                <FormControl className={styles.input2}type="password"/>
                            </FormGroup>
                            <div className={styles.group2}>
                                <FormControl type="checkbox" className={styles.check} />
                                <FormLabel className={styles.label2}>keep me signed in</FormLabel>
                                <Link href={"#"} className={styles.link2}>forgot password?</Link>
                            </div>
                            <Button type="submit" className={styles.loginBtn}>Sign In</Button>
                            <div className={styles.group3}>
                                <p>Dont have an account? </p>
                                <Link href={''} className={styles.link3}>Register</Link>
                            </div>
                        </Form>
                </div>
                <div>
                    <img className={styles.img1} src="/images/bg1.png" alt="image 1" />
                </div>
            </div>
            <Footer />
        </>
    )
 }