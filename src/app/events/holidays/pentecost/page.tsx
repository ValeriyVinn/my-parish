import styles from "./page.module.css";

export default function PentecostPage() {
  return (
    <div className={styles.container}>
      {/* <h1 className={styles.mainHeader}>Трійця</h1> */}
      <article className={styles.article}>
        <p className={styles.paragraph}>
          День Святої Трійці або П&apos;ятдесятниці,  відзначається на 50-й день після Великодня.  Це свято знаменує сходження Святого Духа на апостолів і початок їхньої місії проповідування Євангелія. Трійця є одним з найважливіших свят у християнському календарі, оскільки символізує народження Церкви та об&apos;єднання віруючих у Христі.
        </p>
        
      </article>
    </div>
  );
}