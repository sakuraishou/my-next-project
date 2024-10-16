import Image from "next/image";
import styles from "./index.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <Image
          src="/logo.svg"
          alt="sample"
          className={styles.logo}
          width={348}
          height={133}
          loading="eager"
        />
      </a>
    </header>
  );
}
