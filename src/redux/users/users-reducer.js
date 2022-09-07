import { usersAPI } from "../../api/api";

const SET_USERS = "SET_USERS";
const SET_MESSAGES = "SET_MESSAGES"
const SET_CHAT_ACTIVE = "SET_CHAT_ACTIVE"

let initalialState = {
    chats: [],
    messages: [],
    chatActive: null,
    scroll: 0,
}

const usersReducer = (state = initalialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                chats: action.chats
            }
        }

        case SET_MESSAGES: {
            return {
                ...state,
                messages: action.msg
            }
        }

        case SET_CHAT_ACTIVE: {
            return {
                ...state,
                chatActive: action.userId
            }
        }

        default:
            return state;
    }
}

export const setUsers = (chats) => ({ type: SET_USERS, chats })
export const setMessages = (msg) => ({ type: SET_MESSAGES, msg })
export const setChatActive = (userId) => ({ type: SET_CHAT_ACTIVE, userId })

export const getMessages = (userId) => async (dispatch) => {
    let response = await usersAPI.getMsg(userId)
    dispatch(setMessages(response))
    dispatch(setChatActive(userId))
};

export const getUsers = () => async (dispatch) => {
    let response = await usersAPI.getUsers()
    dispatch(setUsers(response))
};

export default usersReducer;