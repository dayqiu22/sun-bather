import styles from "./page.module.css";
import Start from './ui/landing/start';
import Title from './ui/landing/title';

export default function Landing() {

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        Landing Page
        <Title/>
        <Start/>
      </div>
    </main>
  );
}
