import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import { startGetBloglength } from '../actions/blogs';

const BlogsSummary = (props) => {
	//console.log(props.dispatch(startGetBloglength(props.blogs)));
    return (
			<div className="page-header">
				<div  className="content-container">
					Welcome {props.auth.userName}, 
					<br />
					{props.blogs.length === 0 ? <h3>You have not posted anything yet. Click <i>Add Post</i> to post your first blog</h3> : <h3>You have published {props.blogs.length} blogs. Click on any post to view or edit</h3>}
					<div className="button">
						<Link 
							to='/create'
							className="link"
						>Add Post</Link> 
					</div>
				</div>
			</div>
    )
};
const mapStateToProps = (state) => {
	//console.log(state.blogs.length);
	return {
		auth: state.auth,
		blogs: state.blogs
	};
};
export default connect(mapStateToProps)(BlogsSummary);