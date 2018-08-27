import React from 'react';
import { connect } from 'react-redux';
import BlogForm from './BlogForm';
import { startAddBlog } from '../actions/blogs';

const CreateBlogPage = (props) => {
    return (
        <div className="page-body">
            <BlogForm onSubmit={(blog) => {
                props.dispatch(startAddBlog(blog));
                props.history.push('/');
            }}/>
        </div>
    )
};

export default connect()(CreateBlogPage);