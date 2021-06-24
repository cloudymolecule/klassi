import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/menu.css'

const Menu = () => {
    return (
        <div className='menu'>
            <Link className='menu-link' to={'/search'}>Search</Link>
            <Link className='menu-link' to={'/about'}>About</Link>
            <Link className='menu-link' to={'/recent'}>Recent Listings</Link>
            <Link className='menu-link' to={'/my-account'}>My Account</Link>
            <Link className='menu-link' to={'/new-listing'}>New Listing</Link>
        </div>
    )
}

export default Menu