import React from 'react';
import moment from 'moment';


class BlogForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.blog ? props.blog.title : '',
            note: props.blog ? props.blog.note : '',
            createdAt: moment(),
            calendarFocused: false,
            error:''
        }
    }
    
    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({title}));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    };

    handleClickEvent = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            title: this.state.title,
            createdAt: this.state.createdAt.valueOf(),
            note: this.state.note
        });
    };

    render() {
        return (
                <form 
                    onSubmit={this.handleClickEvent}
                    className="content-container form"
                >
                    <div> 
                        <input
                            placeholder="Add title for the Blog"
                            type="text"
                            autoFocus
                            value={this.state.title}
                            onChange={this.onTitleChange}
                            required
                            className="text-input"
                        ></input>
                    </div>
                    <div>
                        <textarea
                            placeholder="Start typing your Blog here..."
                            value={this.state.note}
                            onChange={this.onNoteChange}
                            className="text-area"
                        ></textarea>
                    </div>
                    <div>
                        <button
                            className="button"
                        >
                            Publish Blog
                        </button>
                    </div>
                    
                </form>
        );
    }
}

	
export default BlogForm;