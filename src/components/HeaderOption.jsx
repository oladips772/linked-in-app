import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from "../features/userSlice";
import "../css/HeaderOption.css";
import { Avatar } from '@mui/material';

const HeaderOption = ({ Icon, title, avatar, onClick }) => {
    const user = useSelector(selectUser)
    return (
        <div className="headerOption" onClick={onClick}>
            {Icon && <Icon className="headerOptionIcon" />}
            {avatar && <Avatar src={user?.photoUrl} className="header-icon">
                {user?.email[0].toUpperCase()}</Avatar>}
            <h4>{title}</h4>
        </div>
    )
}

export default HeaderOption;
 