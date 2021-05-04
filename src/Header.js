import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from '@material-ui/core'
import './Header.css'
function Header() {
    return (
        <div className="header">
            <img 
                className="header__icon"
                src="https://res.cloudinary.com/aroy-1602/image/upload/v1620133560/Airbnb-clone/airbnb-logo_m53wxw.png"
                alt="Airbnb Logo"
            />
            <div className='header__center'>
                <input type="text"/>
                <SearchIcon />
            </div>

            <div className="header__right">
                <p>Become a Host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
