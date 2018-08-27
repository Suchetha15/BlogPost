import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import BlogForm from './BlogForm';
import { startUpdateBlog, startRemoveBlog } from '../actions/blogs';
//import ReadBlog from './ReadBlog';

const EditBlogPage = (props) =>{
	return (
		<div className="edit-page-content">
			<div className="content-container">
			<div>
				<h3 className="page-header__title">Find your readable blog at
					<span>
						<Link to={`/read/${props.blog.id}`}>{`https://myfirst-blog-web-app.herokuapp.com/read/${props.blog.id}`}</Link> 
					</span>
				</h3> 
			</div>
			
			<BlogForm
				blog ={props.blog}
				onSubmit={(blog) => {
					props.dispatch(startUpdateBlog(props.match.params.id, blog));
					props.history.push('/');
				}}
			/>
			<button
				onClick = {() => {
					props.dispatch(startRemoveBlog(props.blog.id));
					props.history.push('/');
				}}
				className="button button-secondary"
			>Delete Blog</button>
		</div>
		</div>
	);
}
	
// const total = selectExpensesTotal();
// console.log(total);
const mapStateToProps = (state,props) => {
	const id = props.match.params.id
	return {
		blog: state.blogs.find((blog) => (blog.id === id))
	}
};



export default connect(mapStateToProps)(EditBlogPage);