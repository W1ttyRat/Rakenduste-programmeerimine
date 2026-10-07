import styles from "./page.module.css";
import Counter from "./components/Counter";
import Message from "./components/Message";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Counter />
        <Message />
      </main>
    </div>
  );
}
