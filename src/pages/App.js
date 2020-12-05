import styles from './App.module.scss';
import {Link,Route,withRouter} from 'react-router-dom'
import HomePage from './HomePage'
import WorkPage from './WorkPage'
import WorkPageDetail from './WorkPageDetail'

function App(props) {
  //location是withRouter的属性
  //props.location.pathname:获取当前的路由
  console.log(props.location.pathname);
  return (
    <div className={styles.App}>


      <header className={styles.header}>
        <div className={styles.box}>
          <Link to="/"><div className={styles.boxleft}>Richardlab </div></Link>
          <div className={styles.boxright}>
             <Link to="/" ><p className={props.location.pathname==="/"? styles.selected :null}>HOME</p></Link>
            <Link to="/works"><p className={props.location.pathname==="/works"? styles.selected :null}>WORKS</p></Link>
          </div>
        </div>

      </header>
      <section className={styles.content}>
        <Route path="/" exact component={HomePage}/>
        <Route path="/works" exact component={WorkPage}/>
        <Route path="/works/:id" exact component={WorkPageDetail}/>

      </section>
      <footer className={styles.footer}>
        <p>© <b>2020 Richard's Site</b></p>
        <p>Welcome !!!</p>
      </footer>
    </div>
  );
}

export default withRouter(App);
