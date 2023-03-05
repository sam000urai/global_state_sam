import React from 'react'
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <h3>GlobalState</h3>
                <Link to="/">TOP</Link>
                <Link to="/second">Second</Link>
            </Toolbar>
        </AppBar>
    );
}
export default Header