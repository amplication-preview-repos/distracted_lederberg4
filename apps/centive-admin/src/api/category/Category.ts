import { Post } from "../post/Post";

export type Category = {
  createdAt: Date;
  id: string;
  name: string;
  post?: Array<Post>;
  slug: string;
  updatedAt: Date;
};
