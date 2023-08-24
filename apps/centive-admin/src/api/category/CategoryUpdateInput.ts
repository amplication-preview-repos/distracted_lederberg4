import { PostUpdateManyWithoutCategoriesInput } from "./PostUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string;
  post?: PostUpdateManyWithoutCategoriesInput;
  slug?: string;
};
