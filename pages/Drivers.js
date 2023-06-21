import React from 'react'
import styles from '../styles/Drivers.module.css'
import Link from 'next/link'
import Footer from "../Components/Footer"
import {Image,}from '@chakra-ui/react'
function Drivers() {
  return (
    <><div className={styles.mainDiv}>
          <div className={styles.titleBox}>
              <Link href={''} className={styles.back}>‹</Link>
              <label className={styles.title}>Drivers</label>
          </div>
          <hr className={styles.hori} />
          {/* search container */}
          <div>
              <div className={styles.searchBar}>
                  <div className={styles.Item1}>
                      <select className={styles.select}>
                          <option className={styles.select}>Location</option>
                          <option>Location</option>
                          <option>Location</option>
                          <option>Location</option>
                      </select>
                  </div>
                  <div className={styles.Item2}>
                      <input type='text' placeholder='Keyword' className={styles.input} />
                  </div>
                  <div className={styles.Item3}>
                      <input type='checkBox' className={styles.checkBox} />
                      Verified
                  </div>
              </div>
              <div className={styles.driverBox}>
                  <img src={'/images/john doe.jpg'} className={styles.driverImg} />
                  <div className={styles.driverName}>
                      <p className={styles.name}>Mark Cuban</p>
                      <div className={styles.verifiedBox}>
                          <i className={styles.check}>✔️</i>
                          <p>Verified</p>
                      </div>
                  </div>
                  <i className={styles.carIcon}>
                  <Image src="/images/driver.png" />
                  </i>
                  <div className={styles.ratingBox}>
                      <p>Montreal, Canada</p>
                      <p>🔯🔯🔯🔯🔯🔯🔯</p>
                  </div>
              </div>
              <div className={styles.driverBox}>
                  <img src={'/images/john doe.jpg'} className={styles.driverImg} />
                  <div className={styles.driverName}>
                      <p className={styles.name}>Webster Barbados</p>
                      <div className={styles.verifiedBox}>
                          <i className={styles.check}>✔️</i>
                          <p>Verified</p>
                      </div>
                  </div>
                  <i className={styles.carIcon}>
                  <Image src="/images/driver.png" />
                  </i>
                  <div className={styles.ratingBox}>
                      <p>Montreal, Canada</p>
                      <p>🔯🔯🔯🔯🔯🔯🔯</p>
                  </div>
              </div>
              <div className={styles.driverBox}>
                  <img src={'/images/john doe.jpg'} className={styles.driverImg} />
                  <div className={styles.driverName}>
                      <p className={styles.name}>Mark Cuban</p>
                      <div className={styles.verifiedBox}>
                          <i className={styles.check}>✔️</i>
                          <p>Verified</p>
                      </div>
                  </div>
                  <i className={styles.carIcon}>
                  <Image src="/images/driver.png" />
                  </i>
                  <div className={styles.ratingBox}>
                      <p>Montreal, Canada</p>
                      <p>🔯🔯🔯🔯🔯🔯🔯</p>
                  </div>
              </div>
              <div className={styles.driverBox}>
                  <img src={'/images/john doe.jpg'} className={styles.driverImg} />
                  <div className={styles.driverName}>
                      <p className={styles.name}>Webster Barbados</p>
                      <div className={styles.verifiedBox}>
                          <i className={styles.check}>✔️</i>
                          <p>Verified</p>
                      </div>
                  </div>
                  <i className={styles.carIcon}>
                  <Image src="/images/driver.png" />
                  </i>
                  <div className={styles.ratingBox}>
                      <p>Montreal, Canada</p>
                      <p>🔯🔯🔯🔯🔯🔯🔯</p>
                  </div>
              </div>
              <div className={styles.driverBox}>
                  <img src={'/images/john doe.jpg'} className={styles.driverImg} />
                  <div className={styles.driverName}>
                      <p className={styles.name}>Mark Cuban</p>
                      <div className={styles.verifiedBox}>
                          <i className={styles.check}>✔️</i>
                          <p>Verified</p>
                      </div>
                  </div>
                  <i className={styles.carIcon}>
                  <Image src="/images/driver.png" />
                  </i>
                  <div className={styles.ratingBox}>
                      <p>Montreal, Canada</p>
                      <p>🔯🔯🔯🔯🔯🔯🔯</p>
                  </div>
              </div>
              <div className={styles.driverBox}>
                  <img src={'/images/john doe.jpg'} className={styles.driverImg} />
                  <div className={styles.driverName}>
                      <p className={styles.name}>Mark Cuban</p>
                      <div className={styles.verifiedBox}>
                          <i className={styles.check}>✔️</i>
                          <p>Verified</p>
                      </div>
                  </div>
                  <i className={styles.carIcon}>
                  <Image src="/images/driver.png" />
                  </i>
                  <div className={styles.ratingBox}>
                      <p>Montreal, Canada</p>
                      <p>🔯🔯🔯🔯🔯🔯🔯</p>
                  </div>
              </div>
          </div>
          <div className={styles.driversFooter}>
              <Link href={''} className={styles.active}>1</Link>
              <Link href={''}>2</Link>
              <Link href={''} className={styles.next}>Next</Link>
          </div>
      </div><Footer /></>
  )
}

export default Drivers