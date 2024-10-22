import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";
import Menu from "../Menu";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/logo.svg"
          alt="sample"
          className={styles.logo}
          width={348}
          height={133}
          loading="eager"
        />
      </Link>
      <Menu />
    </header>
  );
}
