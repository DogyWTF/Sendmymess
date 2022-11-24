import { usersAPI } from "../../api/api";

const SET_USERS = "SET_USERS";
const SET_MESSAGES = "SET_MESSAGES"
const SET_CHAT_ACTIVE = "SET_CHAT_ACTIVE"
const SET_MESSAGE = "SET_MESSAGE"
const SET_USER_SCROLL = "SET_USER_SCROLL"
const GET_USER_SCROLL = "GET_USER_SCROLL"
const SETTER_CLOSE_OPEN_CHAT = "SETTER_CLOSE_OPEN_CHAT"
const SET_RENDERED = "SET_RENDERED"
const SETTER_ON_RIGHT_CLICK = "SETTER_ON_RIGHT_CLICK"
const SETTER_MSG_ACTIVE = "SETTER_MSG_ACTIVE"
const SETTER_POPUP_TEXT = "SETTER_POPUP_TEXT"

let initalialState = {
    chats: [],
    messages: [],
    chatActive: null,
    msgActive: null,
    popupText: null,
    scroll: 0,
    inputMsg: "",
    closeOpenChat: true,
    rendered: false
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
                scroll: state.chats[state.chatActive-1].scroll
            }
        }

        case SET_USER_SCROLL: {
            return {
                ...state,
                chats: state.chats.map(c => {
                    if (c.id === state.chatActive) {
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

        case SET_RENDERED: {
            return {
                ...state,
                rendered: action.bool
            }
        }

        case SETTER_ON_RIGHT_CLICK: {
            return {
                ...state,
                msgActive: action.msg
            }
        }

        case SETTER_MSG_ACTIVE: {
            return {
                ...state,
                msgActive: null
            }
        }

        case SETTER_POPUP_TEXT: {
            return {
                ...state,
                popupText: action.text
            }
        }

        default:
            return state;
    }
}

export const setterRendered = (bool) => ({ type: SET_RENDERED, bool })

export const setUsers = (chats) => ({ type: SET_USERS, chats })
export const setMessages = (msg) => ({ type: SET_MESSAGES, msg })
export const setChatActive = (userId) => ({ type: SET_CHAT_ACTIVE, userId })
export const setMessage = (text) => ({ type: SET_MESSAGE, text })

export const getUserScroll = () => ({ type: GET_USER_SCROLL })
export const setUserScroll = (scroll) => ({ type: SET_USER_SCROLL, scroll })

export const setterCloseOpenChat = (change) => ({ type: SETTER_CLOSE_OPEN_CHAT, change })
export const setterOnRightClick = (msg) => ({ type: SETTER_ON_RIGHT_CLICK, msg })
export const setterMsgActive = () => ({ type: SETTER_MSG_ACTIVE })

export const setterPopupText = (text) => ({ type: SETTER_POPUP_TEXT, text })




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
    if (msg.trim() !== "") {
        await usersAPI.addMessage(userId, msg, date)
        await usersAPI.addLastMsgToChat(userId)
        dispatch(getMessages(userId))
        dispatch(getUsers())
        dispatch(setterRendered(false))
        dispatch(setMessage(""))
    }
};

export const getScroll = () => async (dispatch) => {
    dispatch(getUserScroll())
};

export const setScroll = (scroll) => async (dispatch) => {
    dispatch(setUserScroll(scroll))
};

export const setRendered = (bool) => async (dispatch) => {
    dispatch(setterRendered(bool))
};

export const setCloseOpenChat = (change) => async (dispatch) => {
    dispatch(setterCloseOpenChat(change))
};

export const setOnRightClick = (id, chatActive) => async (dispatch) => {
    let response = await usersAPI.findMsg(id, chatActive)
    dispatch(setterOnRightClick(response))
};

export const setMsgActive = () => async (dispatch) => {
    dispatch(setterMsgActive())
};

export const deleteMsg = (obj, chatActive) => async (dispatch) => {
    await usersAPI.deleteMsg(obj, chatActive)
    await usersAPI.addLastMsgToChat(chatActive)
    dispatch(getMessages(chatActive))
    dispatch(getUsers())
};

export const setPopupText = (text) => async (dispatch) => {
    dispatch(setterPopupText(text))
};


export default usersReducer;