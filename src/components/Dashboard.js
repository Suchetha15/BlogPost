import React from 'react';
//import { Link } from 'react-router-dom';
import BlogsSummary from './BlogsSummary';
import BlogListFilter from './BlogListFilter';
import BlogLists from './BlogLists';


const DashboardPage = () => (
	<div className="dashpage-body">
		<BlogsSummary />
		<BlogListFilter />
		<BlogLists />
	</div>
);

export default DashboardPage;