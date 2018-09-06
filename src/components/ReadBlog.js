import React from 'react';
import { connect } from 'react-redux';
//import Header from './Header';

const ReadBlog = (props) => {
    console.log(props);
    return (
        <div>
            {/* <Header /> */}
            <div className="read-page-content ">
                <div className="content-container">
                    <h3 className="read-header">{props.blog.title}</h3>
                    <p className="read-content">{props.blog.note}</p>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state,props) => {
    //console.log(state);
    return {
        blog: state.blogs.find((blog) => (blog.id === props.match.params.id))
    }
}

export default connect(mapStateToProps)(ReadBlog);
