import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction';


class Posts extends Component {
    
    componentWillMount() {
        this.props.fetchPosts();
    }
    
    render() {
        console.log("this.state --> ", this.state);
        console.log("this.props --> ", this.props);
        return (
            <div>
                <h1>Posts</h1>  
                {
                    this.props.posts.map((post) => {
                        return (
                            <div>
                                <p> {post.title}</p>
                                <p> {post.body}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    posts: state.posts.items    
})


export default connect(mapStateToProps, {fetchPosts})(Posts);