import React from 'react';
import Menu from './menu/menu';

class Header extends React.Component{
    render(){
        return(
            <header>
                <Menu/>
            </header>
        );
    }
}

export default Header;