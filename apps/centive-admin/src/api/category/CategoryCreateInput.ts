import { PostCreateNestedManyWithoutCategoriesInput } from "./PostCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name: string;
  post?: PostCreateNestedManyWithoutCategoriesInput;
  slug: string;
};
