import styles from './App.module.scss';
import {Link,Route} from 'react-router-dom'
import HomePage from './HomePage'
import WorkPage from './WorkPage'
import WorkPageDetail from './WorkPageDetail'

function App() {
  return (
    <div className={styles.App}>


      <header className={styles.header}>
        <div className={styles.box}>
          <Link to="/"><div className={styles.boxleft}>Vauxlab </div></Link>
          <div className={styles.boxright}>
             <Link to="/"><p>HOME</p></Link>
            <Link to="/works"><p>WORKS</p></Link>
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

export default App;
