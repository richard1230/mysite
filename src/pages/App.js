import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      个人网站
      <header className={styles.header}>
         头部
      </header>
      <section className={styles.content}>
        内容
      </section>
      <footer className={styles.footer}>
        底部
      </footer>
    </div>
  );
}

export default App;
