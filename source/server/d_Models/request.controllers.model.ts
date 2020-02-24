import { GetControllers, GetConfig } from "./get.model.ts";
import { PostConfig } from "./post.model";

export interface RequestsControllers {
    get: GetConfig;
    post : PostConfig
}