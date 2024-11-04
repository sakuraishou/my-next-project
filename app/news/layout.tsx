import Sheet from "@/app/_components/Sheet";
import Hero from "@/app/_components/Hero";
import { title } from "process";

export const metadata = {
  title: "ニュース",
};

type Props = {
  children: React.ReactNode;
};

export const revalidate = 60;

export default function Layout({ children }: Props) {
  return (
    <>
      <Hero title="News" sub="ニュース" />
      <Sheet>{children}</Sheet>
    </>
  );
}
