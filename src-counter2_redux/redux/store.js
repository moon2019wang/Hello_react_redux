import {createStore} from 'redux';
import {counter} from './reducers';


//生成一个store对象
const store = createStore(counter);//内部会第一次调用reducer函数得到出事state
console.log(store,store.getState());

export default store;