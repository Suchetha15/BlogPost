import React from 'react';
import { connect } from 'react-redux';
import BlogForm from './BlogForm';
import { startAddBlog } from '../actions/blogs';

export class CreateBlogPage extends React.Component{
    onSubmit = (blog) => {
        this.props.startAddBlog(blog);
        this.props.history.push('/');
    }   
      render() {
        return (
            <div className="page-body">
                <BlogForm onSubmit={this.onSubmit}
                />
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    startAddBlog: (blog) => dispatch(startAddBlog(blog))
  });

export default connect(undefined, mapDispatchToProps)(CreateBlogPage);