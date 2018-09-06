import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
//import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import DashboardPage from '../components/Dashboard';
import CreateBlogPage from '../components/CreateBlogPage';
import EditBlogPage from '../components/EditBlogPage';
import ReadBlog from '../components/ReadBlog';

export const history = createHistory();

const AppRouter = () => (
  <Router history = {history}>
    <div>
        <Switch>
          <PublicRoute path="/" component={LoginPage}  exact={true}/>
          <PrivateRoute path="/dashboard" component={DashboardPage} />
          <PrivateRoute path="/create" component={CreateBlogPage} />
          <PrivateRoute path="/edit/:id" component={EditBlogPage} />
          <PrivateRoute  path="/read/:id" component={ReadBlog}/>
          <Route component={ NotFoundPage } />
        </Switch>
    </div >
  </Router>
);

export default AppRouter;