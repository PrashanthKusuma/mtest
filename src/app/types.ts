export type image = {
  id: number;
  url: string;
  alt_text: string;
};
export type matches = {
  id: number;
  username: string;
  name: string;
  bio: string;
  interests: string;
  images: image[];
};
