import styles from '../styles/jobs.module.css'
import Footer from "../Components/Footer"
export default function Jobs() {

    return(
        <><div className={styles.mainDiv}>
            <div>
                <div className={styles.firstBg}>
                    <h1 className={styles.text}>Find A <span className={styles.span}>Job</span> Today</h1>
                    <p className={styles.textSmall}>
                        Hand-picked opportunties to work from, remotely,
                        freelance, full-time, part-time, contract and intenships.
                    </p>
                    <div className={''}>
                        <button className={styles.btn}>Jobs</button>
                        <button className={styles.btn}>Carrier Profile</button>
                    </div>
                    <div className={styles.searchBox}>
                        <input type="text" className={styles.searchInput} placeholder='Search here' />
                        <button className={styles.searchBtn}>Search</button>
                    </div>
                </div>
                <div>
                    <p className={styles.heading2}>Popular Categories</p>
                    <div className={styles.flexBox}>
                        <div className={styles.flexItem}>
                            <div className={styles.iconDiv}>🔯</div>
                            <p className={styles.flexText}>Driving</p>
                        </div>
                        <div className={styles.flexItem}>
                            <div className={styles.iconDiv}>🔯</div>
                            <p className={styles.flexText}>Technology</p>
                        </div>
                        <div className={styles.flexItem}>
                            <div className={styles.iconDiv}>🔯</div>
                            <p className={styles.flexText}>Agriculture</p>
                        </div>
                        <div className={styles.flexItem}>
                            <div className={styles.iconDiv}>🔯</div>
                            <p className={styles.flexText}>Science</p>
                        </div>
                        <div className={styles.flexItem}>
                            <div className={styles.iconDiv}>🔯</div>
                            <p className={styles.flexText}>Law</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={''}>
                <div className={styles.listingsDiv}>
                    <p className={styles.heading2}>Active Listings</p>
                    <div className={styles.listingsItem}>
                        <div className={styles.Jbg}>
                            <p className={styles.JText}>J</p>
                        </div>
                        <div className={styles.item1}>
                            <p className={styles.smallText}>Express Logisticds Company Limited </p>
                            <p className={styles.bigText}>experienced trucker driver (3 Year Exp.)</p>
                            <div className={styles.item2}>
                                <p>📌</p>
                                <p>Montreal, Canada </p>
                                <p>💠</p>
                                <p>Full Time</p>
                                <p>CAD 15 000</p>
                            </div>
                        </div>
                        <button className={styles.viewJobBtn}>View Details</button>
                    </div>
                    <div className={styles.listingsItem}>
                        <div className={styles.Jbg}>
                            <p className={styles.JText}>J</p>
                        </div>
                        <div className={styles.item1}>
                            <p className={styles.smallText}>Express Logisticds Company Limited </p>
                            <p className={styles.bigText}>experienced trucker driver (3 Year Exp.)</p>
                            <div className={styles.item2}>
                                <p>📌</p>
                                <p>Montreal, Canada </p>
                                <p>💠</p>
                                <p>Full Time</p>
                                <p>CAD 15 000</p>
                            </div>
                        </div>
                        <button className={styles.viewJobBtn}>View Details</button>
                    </div>
                    <div className={styles.listingsItem}>
                        <div className={styles.Jbg}>
                            <p className={styles.JText}>J</p>
                        </div>
                        <div className={styles.item1}>
                            <p className={styles.smallText}>Express Logisticds Company Limited </p>
                            <p className={styles.bigText}>experienced trucker driver (3 Year Exp.)</p>
                            <div className={styles.item2}>
                                <p>📌</p>
                                <p>Montreal, Canada </p>
                                <p>💠</p>
                                <p>Full Time</p>
                                <p>CAD 15 000</p>
                            </div>
                        </div>
                        <button className={styles.viewJobBtn}>View Details</button>
                    </div>
                    <div className={styles.listingsItem}>
                        <div className={styles.Jbg}>
                            <p className={styles.JText}>J</p>
                        </div>
                        <div className={styles.item1}>
                            <p className={styles.smallText}>Express Logisticds Company Limited </p>
                            <p className={styles.bigText}>experienced trucker driver (3 Year Exp.)</p>
                            <div className={styles.item2}>
                                <p>📌</p>
                                <p>Montreal, Canada </p>
                                <p>💠</p>
                                <p>Full Time</p>
                                <p>CAD 15 000</p>
                            </div>
                        </div>
                        <button className={styles.viewJobBtn}>View Details</button>
                    </div>
                    <div className={styles.listingsItem}>
                        <div className={styles.Jbg}>
                            <p className={styles.JText}>J</p>
                        </div>
                        <div className={styles.item1}>
                            <p className={styles.smallText}>Express Logisticds Company Limited </p>
                            <p className={styles.bigText}>experienced trucker driver (3 Year Exp.)</p>
                            <div className={styles.item2}>
                                <p>📌</p>
                                <p>Montreal, Canada </p>
                                <p>💠</p>
                                <p>Full Time</p>
                                <p>CAD 15 000</p>
                            </div>
                        </div>
                        <button className={styles.viewJobBtn}>View Details</button>
                    </div>
                </div>
            </div>
        </div><Footer /></>
    )
}