import { CategoryCreateNestedManyWithoutPostsInput } from "./CategoryCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  categories?: CategoryCreateNestedManyWithoutPostsInput;
  content: string;
};
