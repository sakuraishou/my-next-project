import styles from "./index.module.scss";
type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <div className={styles.container}>{children}</div>;
    </>
  );
}
