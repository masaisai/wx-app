import React, { Component } from 'react';
import logo from '../logo.svg';
import { SearchBar } from 'antd-mobile';

class Header extends Component{
    render() {
        return (
            <div className="App-header">
                <div className='App-logo'>
                    <img src={logo} style={{ height: '44px'}}/>
                    </div>
                <div className='App-search'>
                    <SearchBar placeholder="Search" maxLength={8} style={{ background:'none' }} />
               </div>
            </div>
        );
    }
}
export default Header;