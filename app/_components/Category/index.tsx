import type { Category } from "@/app/_libs/microcms";
import styles from "./index.module.scss";

type Props = {
  href: string;
  category: Category;
};

export default function Category({ category }: Props) {
  return <span className={styles.tag}>{category.name}</span>;
}
