import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
    const history = useHistory();
    return (<div className="tinder-header">
        {backButton ? (
            <IconButton onClick={() => history.replace(backButton)}>
                <ArrowBackIosIcon className="header__icon" fontSize="large" />
            </IconButton>
        ) : (
                <Link to="/profile">
                    <IconButton>
                        <PersonIcon className="header__icon" fontSize="large" />
                    </IconButton>
                </Link>
            )
        }

        <Link to="/">
            <img src="https://www.flaticon.com/svg/static/icons/svg/408/408790.svg" className="brand__logo" alt="brand logo" />
        </Link>
        <Link to="/chat">
            <IconButton>
                <ForumIcon className="header__icon" fontSize="large" />
            </IconButton>
        </Link>
    </div >)
}

export default Header