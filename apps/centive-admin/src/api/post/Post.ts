import { Category } from "../category/Category";

export type Post = {
  categories?: Array<Category>;
  content: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
