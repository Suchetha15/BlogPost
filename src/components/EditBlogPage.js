import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import BlogForm from './BlogForm';
import { startUpdateBlog, startRemoveBlog } from '../actions/blogs';
import RemoveModal from './RemoveModal';
import RemoveAction from './RemoveAction';


class EditBlogPage extends React.Component{
	constructor(props){
		super(props);
	}

	state={
		removeSelected: false
	}

	componentDidMount() {
		try {
		  const json = localStorage.getItem('removeSelected');
		  const removeSelected = JSON.parse(json);
		  this.setState(() => ({removeSelected}))
		
		} catch(e) {
		  //Nothing
		}
	}

	componentDidUpdate() {
		  const json = JSON.stringify(this.state.removeSelected);
		  localStorage.setItem('removeSelected', json);
	}

	componentWillUnmount() {
		console.log('unmount');
	}

	handleDelete = () => {
		this.setState({removeSelected: true});
	}

	handleRemoveBlog = () => {
		this.props.dispatch(startRemoveBlog(this.props.blog.id));
		this.props.history.push('/');
	}

	handleClearDeleteOption = () => {
		this.setState(() => ({removeSelected: false}));
	};

	render(){
		return (
			<div className="edit-page-content">
				<div className="content-container">
					<div>
						<h3 className="page-header__title">Find your readable blog at
							<span>
								<Link to={`/read/${this.props.blog.id}`}>{`https://myfirst-blog-web-app.herokuapp.com/read/${this.props.blog.id}`}</Link> 
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
		
					<RemoveModal 
						handleRemoveBlog = {this.handleRemoveBlog}
						removeSelected = {this.state.removeSelected}
						handleClearDeleteOption = {this.handleClearDeleteOption}
					/>
				</div>
			</div>
		);
	}	
}
	
const mapStateToProps = (state,props) => {
	const id = props.match.params.id
	return {
		blog: state.blogs.find((blog) => (blog.id === id))
	}
};



export default connect(mapStateToProps)(EditBlogPage);