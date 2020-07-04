import React from 'react';
import {connect} from "react-redux";

import {decrement, increment} from "../redux/actions";
import Counter from "../components/counter";
//connect 连接 react组件和redux

export default connect(
    state => ({count:state}),
    {increment:increment, decrement:decrement}
)(Counter)