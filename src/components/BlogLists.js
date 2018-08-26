import React from 'react';
import { connect } from 'react-redux';
import BlogListItems from './BlogListItems';
//import { startGetBloglength } from '../actions/filters';
import selectVisibleBlogs from '../selectors/selectBlogs';


const BlogLists = (props) => {
   // console.log(props.dispatch(startGetBloglength()));
    return (
        <div>
            {props.blogs.map((blog) => (
                 <BlogListItems key={blog.id} {...blog} />
            ))}             
        </div>
    );
} 

        
const mapStateToProps = (state) => {
    return {
        blogs: selectVisibleBlogs(state.blogs,state.filters)
    };
};

export default connect(mapStateToProps)(BlogLists);
