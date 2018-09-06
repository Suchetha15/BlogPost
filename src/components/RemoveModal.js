import React from 'react';
import Modal from 'react-modal';

export default (props) => {
	// console.log(props.removeSelected);
    return (
		props.removeSelected ? 
        <Modal
			isOpen = {props.removeSelected}
			contentLabel = 'Delete Blog'
			onRequestClose = {props.handleClearDeleteOption}
			closeTimeoutMS = {200}
        	className = 'modal'
		>
			<h3>Are you sure you want to delete this blog?</h3>
			<button className='button' onClick={props.handleRemoveBlog}>Yes</button>  
			<button className='button button-secondary' onClick={props.handleClearDeleteOption}>No</button>  
        </Modal> : null
    );
}