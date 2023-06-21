import Link from 'next/link';
import React from 'react'
import styles from '../styles/AddJobListing.module.css'
import Footer from "../Components/Footer"
function AddJobListing() {
  return (
    <><div>
          <div className={styles.navBar}>
              <Link href={''}>Back</Link>
              <label>Add Job Listing</label>
              <Link href={''}>View My Listings</Link>
          </div>
          <div className={styles.box}>
              <div className={styles.box1}>
                  <div>
                      <h3>Company Name</h3>
                      <input type='text' placeholder='Name' className={styles.input1} />
                  </div>
                  <div>
                      <h3>Company Website</h3>
                      <input type='text' placeholder='Website Link' className={styles.input1} />
                  </div>
              </div>
              <div>
                  <h3>Job title</h3>
                  <input type='text' placeholder='Title' className={styles.input1} />
              </div>
              <div className={styles.box2}>
                  <div>
                      <h3>Job Category</h3>
                      <select className={styles.select}>
                          <option>Technology</option>
                          <option>Technology</option>
                          <option>Technology</option>
                      </select>
                  </div>
                  <div>
                      <h3>Job Type</h3>
                      <select className={styles.select}>
                          <option>Full Time</option>
                          <option>Part Time</option>
                          <option>Casual</option>
                      </select>
                  </div>
              </div>
              <div className={styles.box3}>
                  <div>
                      <h3>Job Location</h3>
                      <input type='text' placeholder='Location' className={styles.input1} />
                  </div>
                  <div>
                      <h3>Salary Range</h3>
                      <input type='text' placeholder='Salary Range' className={styles.input1} />
                  </div>
              </div>
              <div className={styles.box4}>
                  <div>
                      <h3>Experience</h3>
                      <input type='text' placeholder='Experience' className={styles.input1} />
                  </div>
                  <div>
                      <h3>Qualifation</h3>
                      <input type='text' placeholder='Qualification' className={styles.input1} />
                  </div>
              </div>
              <div>
                  <h3>Application Deadline</h3>
                  <input type='text' placeholder='Job Application Deadline' className={styles.input1} />
              </div>
              <div>
                  <h3>Job Application Link</h3>
                  <input type='text' placeholder='Job Application Link url' className={styles.input1} />
              </div>
              <div>
                  <h3>Job Description</h3>
                  <input type='textarea' placeholder='Job Description' className={styles.input1} />
              </div>
              <button className={styles.postBtn}>Post Job</button>
          </div>
      </div><Footer /></>
  )
}

export default AddJobListing;