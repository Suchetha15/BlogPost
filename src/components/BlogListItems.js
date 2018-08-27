import React from 'react';
import { Link } from 'react-router-dom';

const BlogListItems = ({id, title}) => (	
		<div className="list-content">
			<Link 
				to={`/edit/${id}`}
				className="list-content__link"
				>{title}</Link>
		</div>
);


export default BlogListItems;