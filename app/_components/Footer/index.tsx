import styles from "./index.module.scss";

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
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <p className={styles.cr}>© SIMPLE. All Rights Reserved 2024</p>
    </footer>
  );
}
