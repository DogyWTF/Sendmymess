import { usersAPI } from "../../api/api";

const SET_USERS = "SET_USERS";
const SET_MESSAGES = "SET_MESSAGES"
const SET_CHAT_ACTIVE = "SET_CHAT_ACTIVE"
const SET_INPUT_MSG = "SET_INPUT_MSG"

let initalialState = {
    chats: [],
    messages: [],
    chatActive: null,
    scroll: 0,
    inputMsg: ""
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

        case SET_INPUT_MSG: {console.log('ddd')
            return {
                ...state,
                inputMsg: action.text
            }
        }

        default:
            return state;
    }
}

export const setUsers = (chats) => ({ type: SET_USERS, chats })
export const setMessages = (msg) => ({ type: SET_MESSAGES, msg })
export const setChatActive = (userId) => ({ type: SET_CHAT_ACTIVE, userId })
export const setinputMsg = (text) => ({ type: SET_INPUT_MSG, text })

export const getMessages = (userId) => async (dispatch) => {
    let response = await usersAPI.getMsg(userId)
    dispatch(setMessages(response))
    dispatch(setChatActive(userId))
};

export const getUsers = () => async (dispatch) => {
    let response = await usersAPI.getUsers()
    dispatch(setUsers(response))
};

export const addMessage = (userId, msg, date, setStatus) => async (dispatch) => {
    await usersAPI.addMessage(userId, msg, date)
    dispatch(getMessages(userId))
};

export const inputMsgChange = (text) => async (dispatch) => {
    dispatch(setinputMsg(text))
};

export default usersReducer;