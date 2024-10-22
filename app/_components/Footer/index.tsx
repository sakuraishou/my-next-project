import styles from "./index.module.scss";
import Link from "next/link";

const navItems = [
  { href: "/news", label: "ニュース" },
  { href: "/members", label: "メンバー" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footer}>
        <ul className={styles.items}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.item}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <p className={styles.cr}>© SIMPLE. All Rights Reserved 2024</p>
    </footer>
  );
}
