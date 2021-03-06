import React,{useState} from 'react'
import './banner.css'
import Search from './Search'
import {Button} from '@material-ui/core'
import { useHistory } from 'react-router-dom';
function Banner() {
    const [showSearch,setShowSearch]=useState(false)
    const history=useHistory()
    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Search />}
                <Button
                    className="banner__searchButton"
                    varient="outlined"
                    onClick={()=>setShowSearch(!showSearch)}
                >
                   {showSearch?'Hide':'Search Dates'}
                </Button>
            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imagination.</h1>
                <h5>Put a different kind of gateway to uncover the hidden gems near you.</h5>
                <Button
                    varient="outlined"
                    onClick={()=>history.push('/search')}
                >
                    Explore Nearby
                </Button>
            </div>            
        </div>
    )
}

export default Banner
