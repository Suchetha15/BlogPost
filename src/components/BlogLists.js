import React from 'react';
import { connect } from 'react-redux';
import BlogListItems from './BlogListItems';
//import { startGetBloglength } from '../actions/filters';
import selectVisibleBlogs from '../selectors/selectBlogs';


const BlogLists = (props) => {
   // console.log(props.dispatch(startGetBloglength()));
    return (
        <div className="content-container">
            <div className="list-header">
                    Blogs
            </div>
            <div>
                {props.blogs.map((blog) => (
                    <BlogListItems key={blog.id} {...blog} />
                ))}             
            </div>
        </div>
    );
} 

        
const mapStateToProps = (state) => {
    return {
        blogs: selectVisibleBlogs(state.blogs,state.filters)
    };
};

export default connect(mapStateToProps)(BlogLists);
