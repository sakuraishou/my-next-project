import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <dl>
        <dt className={styles.title}>ページが見つかりません</dt>
        <dd className={styles.text}>
          あなたがアクセスしようとページは存在しません。
          <br />
          URLを再度ご確認ください。
        </dd>
      </dl>
    </div>
  );
}
