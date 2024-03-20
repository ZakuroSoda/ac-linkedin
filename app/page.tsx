import styles from "./page.module.css";

export default async function page() {
  return (
    <>
      <div className={styles.text}>
        <h1 className={styles.heroText}>
          Welcome to AC-LinkedIn.
        </h1>
      </div>
    </>
  );
}
