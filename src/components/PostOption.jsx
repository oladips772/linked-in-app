import React from 'react';
import "../css/PostOption.css"

const PostOption = ({ Icon, title, color }) => {
    return (
        <div className="post-option">
            {Icon && <Icon style={{ color : color }} className="option-icon"/>}
            <h4>{title}</h4>
        </div>
    )
}

export default PostOption;
