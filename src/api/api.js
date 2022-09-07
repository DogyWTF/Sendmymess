import * as axios from "axios";
import { chats, messages } from "../fakeServer/fakeServer";

export const usersAPI = {
    getUsers() {
        return chats
    },
    getMsg(userId) {
        return messages[userId - 1]
    }
}