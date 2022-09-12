import * as axios from "axios";
import { chats, messages } from "../fakeServer/fakeServer";

export const usersAPI = {
    getUsers() {
        return chats
    },
    getMsg(userId) {
        return messages[userId - 1]
    },
    addMessage(userId = 1, msg, date) {
        return messages[userId - 1].push(
            { id: messages[userId - 1].length+1, isMyMessage: true, 
            time: date, revised: false, message: msg }
        )
    },
    addLastMsgToChat(userId = 1, msg) {
        chats[userId - 1] = {...chats[userId - 1], lastMsg: msg}
    }
}