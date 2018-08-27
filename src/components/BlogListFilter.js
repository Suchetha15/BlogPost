import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDateAsc, sortByTitleAsc, sortByDateDesc, sortByTitleDesc } from '../actions/filters';

export class BlogListFilter extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div  className="content-container">
            <form className="filter-input-group">
                <input
                    placeholder="Search Blogs.."
                    type="text"
                    value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                      }}  
                    className="filter-group-item" 
                ></input>
                <select
                    value = {this.props.filters.value}
                    onChange={(e) => {
                        console.log(e.target.value);
                        if(e.target.value === 'date_desc'){
                            this.props.dispatch(sortByDateDesc(e.target.value));
                        }else if(e.target.value === 'title_asc'){
                            this.props.dispatch(sortByTitleDesc(e.target.value));
                        }else if(e.target.value === 'title_desc'){
                            this.props.dispatch(sortByTitleAsc(e.target.value));
                        }else if(e.target.value === 'date_asc'){
                                this.props.dispatch(sortByDateAsc(e.target.value));
                            }
                        }    
                    }
                    className="filter-group-item"
                >
                    <option value="date_asc">Recent Blogs first</option>
                    <option value="date_desc">Oldest Blogs first</option>
                    <option value="title_asc">Title[A-Z]</option>
                    <option value="title_desc">Title[Z-A]</option>
                </select>
            </form>
            
        </div>
        );
        
    }
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(BlogListFilter);