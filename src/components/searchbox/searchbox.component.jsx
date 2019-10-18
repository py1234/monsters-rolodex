import React from 'react';
import './searchbox.styles.css';
export const SearchBox = ({placeholder, changeHolder}) => (
    <input type='search' placeholder={placeholder} onChange={changeHolder}/>
    );