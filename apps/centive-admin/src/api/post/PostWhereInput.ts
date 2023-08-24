import { CategoryListRelationFilter } from "../category/CategoryListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type PostWhereInput = {
  categories?: CategoryListRelationFilter;
  content?: StringFilter;
  id?: StringFilter;
};
