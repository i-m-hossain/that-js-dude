import React from 'react';

const Tutorial = (props) => {
    const {title, details} = props.tutorial
    return (
        <div class="tutorial">
            <h2 class="title">{title}</h2>
            <p class="details">{details}</p>
            <button class="btn btn-white">View details </button>
        </div>
    );
};

export default Tutorial;