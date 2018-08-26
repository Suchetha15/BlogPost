import React from 'react';
//import { Link } from 'react-router-dom';
import BlogsSummary from './BlogsSummary';
import BlogListFilter from './BlogListFilter';
import BlogLists from './BlogLists';


const DashboardPage = () => (
	<div>
		<BlogsSummary />
		<BlogListFilter />
		<BlogLists />
	</div>
);

export default DashboardPage;