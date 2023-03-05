import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <h3>GlobalState</h3>
            </Toolbar>
        </AppBar>
    );
}
export default Header