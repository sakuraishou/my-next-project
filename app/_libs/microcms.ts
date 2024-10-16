export type Category = {
  name: string;
};

export type News = {
  id: string;
  title: string;
  category: { name: string };
  publishedAt: string;
  createdAd: string;
};
