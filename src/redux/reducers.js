/*
包含了n个reducer函数（根据老的state 和 action 返回一个新的state）
 */
import { combineReducers } from 'redux';
import { ADD_COMMENT,DELETE_COMMENT,RECEIVE_COMMENTS } from './action-types';
/*const initComments = [
    {username : 'Tom', content : 'React 挺好的',},
    {username : 'Jack', content : 'React 太难了！',},
];*/
const initComments = [];
function comments(state = initComments ,action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [action.data, ...state];
        case DELETE_COMMENT:
            return state.filter((comment,index) => index !==action.data)
        case RECEIVE_COMMENTS:
            return action.data;
        default:
            return state;
    }
}

export default combineReducers(
    {comments}
);

//redux 向外暴露的是个什么结构？
//{}