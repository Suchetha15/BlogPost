import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import BlogForm from './BlogForm';
import { startUpdateBlog, startRemoveBlog } from '../actions/blogs';
//import ReadBlog from './ReadBlog';

const EditBlogPage = (props) =>{
	console.log(props);
	return (
		<div className="content-container">
			<div className="page-header">
				<p className="page-header__title">Find your readable blog at
					<span>
						<Link to={`/read/${props.blog.id}`}>{`  localhost:8080/read/${props.blog.id}`}</Link> 
					</span>
				</p> 
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