import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './router/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import { startSetBlog } from './actions/blogs';


const store = configureStore();
const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById("test"));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById("test"));

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user.uid, user.displayName));
        store.dispatch(startSetBlog()).then(() => {
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard');
            }
        });

    }else {
            store.dispatch(logout());
            renderApp();
            history.push('/');
        }
});








// console.log(store.getState());
//const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
//const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));
// store.dispatch(addExpense({ description: 'Water bill', amount:250 }));
// store.dispatch(addExpense({ description: 'Gas bill', amount: 700 }));
// store.dispatch(addExpense({ description: 'Rent', createdAt: 1000 }));
//store.dispatch(setTextFilter('bill'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('Gas'));  
// }, 3000)

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

//webpack to make page route in client side routing
{/*

Create new /router/AppRouter.js
Move code to the new path
Modify the import statements as required
Breakup individual components as well setting up import and exports


//ReactDOM.render(<p>Here is some new code</p>, document.getElementById("test"));
//React-modal for further explanation on using third party tools
//https://reacttraining.com/react-router/web/guides 
//https://github.com/reactjs/react-redux
//moment.js.com/docs for time related functions
*/}