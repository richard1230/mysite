import React, { Component } from 'react';
import styles from './home.module.scss';
import WorkLists from '../../components/WorkLists';
import worksData from '../works.json';



export default ()=>{
  return (
    <div className={styles.wrap}>
      <section className={ styles.brief }>
        {/*<img src={ require("../../assets/images/avatar.jpg") } />*/}
        <h2>Richard Hu</h2>
        <ul>
          <li>software engineer</li>
          <li>full-stack developer</li>
          <li>React</li>
        </ul>
        <p>I design applications, interactive systems and websites. I love using technology in creative contexts.</p>
        <p>I am a web developer based in Yangzhou China.</p>
        <p>Contact me at yongjinhu1230@gmail.com</p>
      </section>

      {/* 作品列表 */}
      <section className={ styles.work }>
        <div className={ styles.title }>
          <h3>A selection of work</h3>
          <p>You can find more in the work overview.</p>
        </div>
        <WorkLists dataSource = { worksData.data } />
        {/*<WorkLists/>*/}
      </section>


    </div>
  )
}