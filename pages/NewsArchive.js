import Link from 'next/link';
import React from 'react'

import styles from '../styles/NewsArchive.module.css'
function NewsArchive() {
  return (
    <>
        <div className={styles.mainContainer}> 
            <h1 className={styles.title1}>Archive</h1>
            <hr />
            <h4 className={styles.labelBtn2}>Weather</h4>
            <div className={styles.container2}>
                <div className={styles.box1}>
                    <img src='/images/img4.jpg'  className={styles.img2}/>
                    <label className={styles.label2}>Black Ice in Montreal</label>
                    <p>Take caution on Montreal roads...</p>
                    <Link href={''} className={styles.link1}>View →</Link>
                </div>
                <div className={styles.box1}>
                    <img src='/images/img6.jpg'  className={styles.img2}/>
                    <label className={styles.label2}>Black Ice in Montreal</label>
                    <p>Take caution on Montreal roads...</p>
                    <Link href={''} className={styles.link1}>View →</Link>
                </div>
                <div className={styles.box1}>
                    <div className={styles.searchBar}>
                        <input className={styles.input1} type='text' />
                        <i>🔍</i>
                    </div>
                    <h4 className={styles.label3}>Period</h4>
                    <label>Filter By Year</label>
                    <br />
                    <select className={styles.select1}>
                        <option>2023</option>
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                    </select>

                    <h4 className={styles.label3}>Category</h4>
                    <label>Select Category</label>
                    <br />
                    <select className={styles.select1}>
                        <option>Weather</option>
                        <option>Weather</option>
                        <option>Weather</option>
                        <option>Weather</option>
                    </select>
                    <h4 className={styles.heading}>Reads</h4>
                    <select className={styles.select1}>
                        <option>0-400</option>
                        <option>0-500</option>
                        <option>0-600</option>
                        <option>0-800</option>
                    </select>
                </div>

            </div>

            <h4 className={styles.labelBtn2}>Accidents</h4>
            <div className={styles.container3}>
                <div className={styles.box1}>
                    <img src='/images/img5.jpg'  className={styles.img2}/>
                    <label className={styles.label2}>Black Ice in Montreal</label>
                    <p>Take caution on Montreal roads...</p>
                    <Link href={''} className={styles.link1}>View →</Link>
                </div>
                <div className={styles.box1}>
                    <img src='/images/img3.jpg'  className={styles.img2}/>
                    <label className={styles.label2}>Black Ice in Montreal</label>
                    <p>Take caution on Montreal roads...</p>
                    <Link href={''} className={styles.link1}>View →</Link>
                </div>
                <div className={styles.box1}>
                    <img src='/images/img4.jpg'  className={styles.img2}/>
                    <label className={styles.label2}>Black Ice in Montreal</label>
                    <p>Take caution on Montreal roads...</p>
                    <Link href={''} className={styles.link1}>View →</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default NewsArchive;