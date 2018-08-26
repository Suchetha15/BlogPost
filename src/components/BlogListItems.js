import React from 'react';
import { Link } from 'react-router-dom';

const BlogListItems = ({id,title, note}) => (	
		<div>
			<Link to={`/edit/${id}`}>{title}</Link>
			<p>{note}</p>
		</div>
);


export default BlogListItems;