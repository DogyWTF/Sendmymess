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
        let dateMsg = '';
        const dateNow = new Date()

        if (messages[userId - 1].length === 0) {
            dateMsg = undefined
        } else {
            dateMsg = new Date(messages[userId - 1][messages[userId - 1].length - 1].time)
        }

        if (dateMsg !== undefined) {
            if (dateMsg.getFullYear() === dateNow.getFullYear()
                && dateMsg.getMonth() === dateNow.getMonth()
                && dateMsg.getDate() === dateNow.getDate()) {

                return messages[userId - 1].push(
                    {
                        id: messages[userId - 1].length + 1, isMyMessage: true,
                        time: date, revised: false, message: msg
                    }
                )

            } else {
                return messages[userId - 1].push(
                    { id: messages[userId - 1].length + 1, date: date },
                    {
                        id: messages[userId - 1].length + 2, isMyMessage: true,
                        time: date, revised: false, message: msg
                    }
                )
            }
        } else {
            return messages[userId - 1].push(
                {
                    id: messages[userId - 1].length + 1, isMyMessage: true,
                    time: date, revised: false, message: msg
                }
            )
        }

    },
    addLastMsgToChat(userId = 1) {
        chats[userId - 1] = { ...chats[userId - 1], lastMsg: messages[userId - 1][messages[userId - 1].length - 1].message }
    },
    findMsg(id, userId) {
        return messages[userId - 1][id - 1]
    },
    deleteMsg(obj, userId) {
        if (obj.isMyMessage && messages[userId - 1][obj.id - 2].date) {
            messages[userId - 1].splice(obj.id - 2, 2)
        } else if (obj.isMyMessage) {
            messages[userId - 1].splice(obj.id - 1, 1)
        }
    }
}