import React from 'react'
import {  ChatIcon, EditIcon, ExternalLinkIcon, LinkIcon, PlusSquareIcon, WarningIcon } from '@chakra-ui/icons'

import styles from '../styles/AskQuestions.module.css'
function AskQuestion() {
  return (
    <div className={styles.mainBody}>
        <div className={styles.box0}>
            <div className={styles.box1}>
              <h1 className={styles.heading1}>Community</h1>
              <p>Find answers, ask questions, and connect with our community around the world.</p>
              <div className={styles.iconBar}>
                  <div className={styles.icon1}>
                    <ChatIcon width={6} />
                    <label>Topic</label>
                  </div>
                  <div className={styles.icon2}>
                    <ChatIcon width={6} />
                    <label>Other</label>
                  </div>
                  <div className={styles.icon3}>
                    <ChatIcon width={6} />
                    <label>Members</label>
                  </div>
              </div>
      
            </div>
            <div className={styles.box2}>
              <label className={styles.nameBox}>MK</label>
              <input type='text' value={'Add Query'} className={styles.queryInput}/>
              <PlusSquareIcon width={10} height={8} />
              <LinkIcon width={10} height={6} />
            </div>
            <div className={styles.box3}>
              <div className={styles.ask}>
                <ChatIcon  width={6}/>
                <label>Ask Truckers</label>
              </div>
              <div className={styles.answer}>
                <EditIcon  width={6}/>
                <label>Answer</label>
              </div>
              <div className={styles.post}>
                <ExternalLinkIcon  width={6}/>
                <label>Post</label>
              </div>
            </div>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.contentBox1}>
            <h2 className={styles.heading2}>Frequently Asked</h2>
            <div className={styles.subBox1}>
                <div className={styles.subBox1A}>
                  <ChatIcon marginEnd={2} width={6} />
                  <label>How long is the free trial ?</label>
                  <br />
                  <label className={styles.text1B}>How long is the free rial period ?</label>
                </div>
                <div className={styles.topicCount}>
                  <label className={styles.textA}>1</label>
                  <br />
                  <label className={styles.textB}>Topic</label>
                </div>
                <div className={styles.vertical}></div>
                <div className={styles.RepliesCount}>
                  <label className={styles.textA}>0</label>
                  <br />
                  <label className={styles.textB}>Replies</label>
                </div>
                <div className={styles.subBox1B}>
                  <img src='/images/john doe.jpg' className={styles.img1} />
                  <div className={styles.nameBox2}>
                      <label className={styles.nameText2} >Sandala Barby</label>
                      <br />
                      <label className={styles.textB}>3 Days, 5 hours ago</label>
                  </div>
                </div>
            </div>
          </div>
          <div className={styles.contentBox2}>
          <h2 className={styles.heading3}>Recent Topics</h2>
              <li>How long is free trail</li>
              <label className={styles.textC}>3 days, 5 hours ago</label>
              <li>How long is free trail</li>
              <label className={styles.textC}>3 days, 5 hours ago</label>
              <li>How long is free trail</li>
              <label className={styles.textC}>3 days, 5 hours ago</label>
          </div>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.contentBox1}>
            <h2 className={styles.heading2}>Community</h2>
            <div className={styles.subBox1}>
                <div className={styles.subBox1A}>
                  <ChatIcon marginEnd={2} width={6} />
                  <label>How long is the free trial ?</label>
                  <br />
                  <label className={styles.text1B}>How long is the free rial period ?</label>
                </div>
                <div className={styles.topicCount}>
                  <label className={styles.textA}>1</label>
                  <br />
                  <label className={styles.textB}>Topic</label>
                </div>
                <div className={styles.vertical}></div>
                <div className={styles.RepliesCount}>
                  <label className={styles.textA}>0</label>
                  <br />
                  <label className={styles.textB}>Replies</label>
                </div>
                <div className={styles.subBox1B}>
                  <img src='/images/john doe.jpg' className={styles.img1} />
                  <div className={styles.nameBox2}>
                      <label className={styles.nameText2} >Sandala Barby</label>
                      <br />
                      <label className={styles.textB}>3 Days, 5 hours ago</label>
                  </div>
                </div>
            </div>
          </div>
          <div className={styles.contentBox2}>
            <h2 className={styles.heading3}>Stats</h2>
            <label className={styles.label3}>Registerd Users</label><label>23</label>
            <br />
            <label className={styles.label3}>Topics</label><span className={styles.tab}></span><label>13</label>
            <br />
            <label className={styles.label3}>Replies</label> <span className={styles.tab}></span><label>2</label>
          </div>
        </div>
        <div className={styles.contentBox1}>
            <h2 className={styles.heading2}>Informative</h2>
            <div className={styles.subBox1}>
                <div className={styles.subBox1A}>
                  <ChatIcon marginEnd={2} width={6} />
                  <label>How long is the free trial ?</label>
                  <br />
                  <label className={styles.text1B}>How long is the free rial period ?</label>
                </div>
                <div className={styles.topicCount}>
                  <label className={styles.textA}>1</label>
                  <br />
                  <label className={styles.textB}>Topic</label>
                </div>
                <div className={styles.vertical}></div>
                <div className={styles.RepliesCount}>
                  <label className={styles.textA}>0</label>
                  <br />
                  <label className={styles.textB}>Replies</label>
                </div>
                <div className={styles.subBox1B}>
                  <img src='/images/john doe.jpg' className={styles.img1} />
                  <div className={styles.nameBox2}>
                      <label className={styles.nameText2} >Sandala Barby</label>
                      <br />
                      <label className={styles.textB}>3 Days, 5 hours ago</label>
                  </div>
                </div>
            </div>
            <div className={styles.subBox1}>
                <div className={styles.subBox1A}>
                  <ChatIcon marginEnd={2} width={6} />
                  <label>How long is the free trial ?</label>
                  <br />
                  <label className={styles.text1B}>How long is the free rial period ?</label>
                </div>
                <div className={styles.topicCount}>
                  <label className={styles.textA}>1</label>
                  <br />
                  <label className={styles.textB}>Topic</label>
                </div>
                <div className={styles.vertical}></div>
                <div className={styles.RepliesCount}>
                  <label className={styles.textA}>0</label>
                  <br />
                  <label className={styles.textB}>Replies</label>
                </div>
                <div className={styles.subBox1B}>
                  <img src='/images/john doe.jpg' className={styles.img1} />
                  <div className={styles.nameBox2}>
                      <label className={styles.nameText2} >Sandala Barby</label>
                      <br />
                      <label className={styles.textB}>3 Days, 5 hours ago</label>
                  </div>
                </div>
            </div>
          </div>
    </div>
  )
}

export default AskQuestion;