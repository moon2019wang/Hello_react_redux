/*
包含所有action creator
同步的action 返回一个对象
异步的action 返回一个函数
 */

import {DECREMENT,INCREMENT} from "./action-types";
//增加
export const increment = (number) => ({type:INCREMENT, data: number});
//减少
export const decrement = (number) => ({type:DECREMENT, data: number});
//异步action
export const incrementAsync = (number) => {
    return dispatch => {
        setTimeout(()=>{
            //1s之后才去分发一个增加的action
            dispatch(increment(number))
        },1000)
    }
}