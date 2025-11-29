export interface Prayer {
  id: string;
  title: string;
  article: string[];
  videos: {
    title: string;
    id: string;
  }[];
}
