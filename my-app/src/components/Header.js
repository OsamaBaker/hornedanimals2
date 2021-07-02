import React from 'react';
import Logo from './assets/Logo.png'

class Header extends React.Component{
    render(){
        return(
            <>
            <img src={Logo} alt='logo' width='100px' />
            <p>Osama's Website</p>
            </>
        )
    }
}

export default Header;