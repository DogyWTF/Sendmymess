const SET_GET_USERS = "SET_GET_USERS";

let initalialState = {
    chats: [
        { id: 1, username: "Dimych", avatar: null, description: "My name is Username", lastMsg: "Hello my dear friend. How are you? Maybe you need help?", missedMsg: 36, lastActive: true, scroll: 0 },
        { id: 2, username: "Andrey", avatar: null, description: "My name is Username", lastMsg: "Hello my dear friend. How are you? Maybe you need help?", missedMsg: 16, lastActive: "Was active on April 28 at 16:25", scroll: 0 },
        { id: 3, username: "Sveta", avatar: null, description: "My name is Username", lastMsg: "Hello my dear friend. How are you? Maybe you need help?", missedMsg: 4, lastActive: "Was active on April 28 at 16:25", scroll: 0 },
        { id: 4, username: "Sasha", avatar: null, description: "My name is Username", lastMsg: "Hello my dear friend. How are you? Maybe you need help?", missedMsg: false, lastActive: "Was active on April 28 at 16:25", scroll: 0 },
        { id: 5, username: "Viktor", avatar: null, description: "My name is Username", lastMsg: "Hello my dear friend.", missedMsg: false, lastActive: "Was active on April 28 at 16:25", scroll: 0 },
        { id: 6, username: "Valera", avatar: null, description: "My name is Username", lastMsg: null, missedMsg: false, lastActive: "Was active on April 28 at 16:25", scroll: 0 },
        { id: 7, username: "Alex", avatar: null, description: "My name is Username", lastMsg: "Hello my dear friend. How are you? Maybe you need help?", missedMsg: false, lastActive: "Was active on April 28 at 16:25", scroll: 0 },
    ],
    messages: [
        { id: 1, isMyMessage: true, time: "11:20", revised: true, message: "Hi my friend." },
        { id: 2, isMyMessage: true, time: "11:20", revised: true, message: "Do you like the new messenger?" },
        { id: 3, isMyMessage: true, time: "11:20", revised: true, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure commodi voluptas vel cum esse qui labore. Dolorum voluptatem quod nostrum, quaerat beatae iure esse molestias quasi deleniti, vero sapiente obcaecati." },
        { id: 4, date: "April 28" },
        { id: 5, isMyMessage: false, time: "15:20", revised: false, message: "Hello my dear friend. How are you? Maybe you need help?" },
    ],
    chat: {},
    scroll: 0,
}

const usersReducer = (state = initalialState, action) => {
    switch (action.type) {
        case SET_GET_USERS: {
            return {
                ...state,
                initialized: true
            }
        }

        default:
            return state;
    }
}

export const setGetUsers = () => ({ type: SET_GET_USERS })

export const getUsers = () => async (dispatch) => {
    dispatch(SET_GET_USERS)
};

export default usersReducer;