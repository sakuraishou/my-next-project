import Link from "next/link";
import Image from "next/image";
import { News } from "@/app/_libs/microcms";
import Date from "@/app/_components/Date";
import Category from "@/app/_components/Category";
import styles from "./index.module.css";

type Props = {
  data: News;
};

export default async function Article({ data }: Props) {
  return (
    <main>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.description}>{data.description}</p>
      <div className={styles.meta}>
        <Link
          href={`/news/category/${data.category[0].id}`}
          className={styles.categoryLink}
        >
          <Category category={data.category[0]} />
        </Link>
        <Date date={data.publishedAt ?? data.createdAt} />
      </div>
      {data.thumbnail && (
        <Image
          src={data.thumbnail.url}
          className={styles.thumbnail}
          alt=""
          width={data.thumbnail.width}
          height={data.thumbnail.height}
        />
      )}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      />
    </main>
  );
}
