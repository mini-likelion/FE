import styles from './mainPage.module.css';

const MainPage = () => {
  return (
    <div className={styles.main__wrapper}>
      <section className={styles.main__items}>
        <h1>반복되는 포스터</h1>
      </section>
      <div className={styles.main__pages}></div>
    </div>
  );
};

export default MainPage;
