import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import BlogForm from './BlogForm';
import { startUpdateBlog, startRemoveBlog } from '../actions/blogs';
import RemoveModal from './RemoveModal';
import RemoveAction from './RemoveAction';
import {openModal, closeModal} from '../actions/filters';


class EditBlogPage extends React.Component{
	constructor(props){
		super(props);
	}

	handleDelete = () => {
		this.props.openModal();
	}

	handleRemoveBlog = () => {
		this.props.startRemoveBlog(this.props.blog.id);
		this.props.closeModal();
		this.props.history.push('/');
	}

	handleClearDeleteOption = () => {
		this.props.closeModal();
	};

	render(){
		console.log(this.props);
		return (
			<div className="edit-page-content">
				<div className="content-container">
					<div>
						<h3 className="page-header__title">Find your readable blog at
							<span>
								<Link 
									to={`/read/${this.props.blog.id}`}
								>
									{` https://myfirst-blog-web-app.herokuapp.com/read/${this.props.blog.id}`}
								</Link> 
							</span>
						</h3> 
					</div>
					
					<BlogForm
						blog ={this.props.blog}
						onSubmit={(blog) => {
							this.props.dispatch(startUpdateBlog(this.props.match.params.id, blog));
							this.props.history.push('/');
						}}
					/>

					<RemoveAction
						handleDelete={this.handleDelete}
					/>
					</div>
					<div className="content-container">
						<RemoveModal 
							handleRemoveBlog = {this.handleRemoveBlog}
							removeSelected = {this.props.removeSelected}
							handleClearDeleteOption = {this.handleClearDeleteOption}
						/>
					</div>
			</div>
		);
	}	
}



const mapStateToProps = (state,props) => {
	return {
		blog: state.blogs.find((blog) => (blog.id === props.match.params.id)),
		removeSelected: state.filters.removeSelected
	}
};

const mapDispatchToProps = (dispatch) => ({
	openModal: () => dispatch(openModal()),
	closeModal: () => dispatch(closeModal()),
	startRemoveBlog: (id) => dispatch(startRemoveBlog(id))
  });

export default connect(mapStateToProps, mapDispatchToProps)(EditBlogPage);