import React,{Component} from 'react';
import CommentAdd from "../comment-add/comment-add";
import CommentList from "../comment-list/comment-list";

export default class App extends Component {

    state = {
        /*comments:[
            {username : 'Tom', content : 'React 挺好的',},
            {username : 'Jack', content : 'React 太难了！',},
        ],*/
        comments : [],
    }
    componentDidMount() {
        //模拟发送异步ajax请求，获取数据
        setTimeout(()=> {
            const comments = [
                {username : 'Tom', content : 'React 挺好的',},
                {username : 'Jack', content : 'React 太难了！',},
            ]
            this.setState({comments});
        },1000)
    }

    //添加评论
    addComment = (comment) =>{
        const {comments} = this.state;
        comments.unshift(comment);
        //更新状态
        this.setState({comments});
    }

    //删除指定评论，删除数组中的数据，需要得到数组的下标
    deleteComment = (index) =>{
        const {comments} = this.state;
        comments.splice(index,1); //删除指定下标的元素，第二个元素：删除几个

        //更新状态
        this.setState({comments});
    }

    render(){
        const {comments} = this.state;
        return(
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComment = {this.addComment}/>
                    <CommentList comments = {comments} deleteComment = {this.deleteComment}/>
                </div>
            </div>
        );
    }
}