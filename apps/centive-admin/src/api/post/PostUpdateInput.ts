import { CategoryUpdateManyWithoutPostsInput } from "./CategoryUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  categories?: CategoryUpdateManyWithoutPostsInput;
  content?: string;
};
