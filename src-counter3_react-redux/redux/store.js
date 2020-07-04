import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {counter} from './reducers';

//生成一个store对象
const store = createStore(
    counter,
    applyMiddleware(thunk) //用上异步中间件
);//内部会第一次调用reducer函数得到出事state
console.log(store,store.getState());

export default store;