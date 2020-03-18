import { GetConfig } from "./get.interface";
import { PostConfig } from "./post.interface";

export interface RequestsControllers {
    get: GetConfig;
    post: PostConfig
}