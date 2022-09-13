import { usersAPI } from "../../api/api";

const SET_USERS = "SET_USERS";
const SET_MESSAGES = "SET_MESSAGES"
const SET_CHAT_ACTIVE = "SET_CHAT_ACTIVE"
const SET_MESSAGE = "SET_MESSAGE"
const SET_USER_SCROLL = "SET_USER_SCROLL"
const GET_USER_SCROLL = "GET_USER_SCROLL"
const SETTER_CLOSE_OPEN_CHAT = "SETTER_CLOSE_OPEN_CHAT"

let initalialState = {
    chats: [],
    messages: [],
    chatActive: null,
    scroll: 0,
    inputMsg: "",
    closeOpenChat: true
}

const usersReducer = (state = initalialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                chats: action.chats.map(c => {
                    return { ...c, scroll: 0 }
                })
            }
        }

        case SET_MESSAGES: {
            return {
                ...state,
                messages: action.msg
            }
        }

        case SET_MESSAGE: {
            return {
                ...state,
                inputMsg: action.text
            }
        }

        case SET_CHAT_ACTIVE: {
            return {
                ...state,
                chatActive: action.userId
            }
        }

        case GET_USER_SCROLL: {
            return {
                ...state,
                scroll: state.chats[action.userId - 1].scroll
            }
        }

        case SET_USER_SCROLL: {
            return {
                ...state,
                chats: state.chats.map(c => {
                    if (c.id === action.userId) {
                        return {...c, scroll: action.scroll}
                    }
                    return c
                })
            }
        }

        case SETTER_CLOSE_OPEN_CHAT: {
            return {
                ...state,
                closeOpenChat: action.change
            }
        }

        default:
            return state;
    }
}

export const setUsers = (chats) => ({ type: SET_USERS, chats })
export const setMessages = (msg) => ({ type: SET_MESSAGES, msg })
export const setChatActive = (userId) => ({ type: SET_CHAT_ACTIVE, userId })
export const setMessage = (text) => ({ type: SET_MESSAGE, text })

export const getUserScroll = (userId) => ({ type: GET_USER_SCROLL, userId })
export const setUserScroll = (userId, scroll) => ({ type: SET_USER_SCROLL, userId, scroll })

export const setterCloseOpenChat = (change) => ({ type: SETTER_CLOSE_OPEN_CHAT, change })

export const getMessages = (userId) => async (dispatch) => {
    let response = await usersAPI.getMsg(userId)
    dispatch(setMessages(response))
    dispatch(setChatActive(userId))
};

export const getUsers = () => async (dispatch) => {
    let response = await usersAPI.getUsers()
    dispatch(setUsers(response))
};

export const changeMessage = (text) => async (dispatch) => {
    dispatch(setMessage(text))
};

export const addMessage = (userId, msg, date, state) => async (dispatch) => {
    await usersAPI.addMessage(userId, msg, date)
    await usersAPI.addLastMsgToChat(userId, msg)
    dispatch(setMessage(""))
    dispatch(getMessages(userId))
    dispatch(getUsers())
};

export const getScroll = (userId) => async (dispatch) => {
    dispatch(getUserScroll(userId))
};

export const setScroll = (userId, scroll) => async (dispatch) => {
    dispatch(setUserScroll(userId, scroll))
    dispatch(getScroll(userId, scroll))
};

export const setCloseOpenChat = (change) => async (dispatch) => {
    dispatch(setterCloseOpenChat(change))
};

export default usersReducer;