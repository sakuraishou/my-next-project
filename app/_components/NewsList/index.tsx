import Image from "next/image";

import styles from "./index.module.scss";
import Category from "../Category";
import Date from "../Date";
import type { News } from "@/app/_libs/microcms";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  return (
    <ul>
      {news.map((artice) => (
        <li key={artice.id} className={styles.list}>
          <div className={styles.link}>
            <Image
              className={styles.image}
              src="/no-image.png"
              alt="No Image"
              width={1200}
              height={630}
            />
            <dl className={styles.content}>
              <dt className={styles.title}>{artice.title}</dt>
              <dd className={styles.meta}>
                <Category category={artice.category} />
                <Date date={artice.publishedAt ?? artice.createdAd} />
              </dd>
            </dl>
          </div>
        </li>
      ))}
    </ul>
  );
}
