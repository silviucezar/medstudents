import { GetConfig } from "./get.model";
import { PostConfig } from "./post.model";

export interface RequestsControllers {
    get: GetConfig;
    post: PostConfig
}