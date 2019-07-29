import React from 'react';
import './Top.css'
import path from '../images/Path.png'
import menu from '../images/ic_menu.png'
import profile from '../images/profile.png'
import plus from '../images/plus.png'
import searchicon from '../images/ic_search.png'

function Top() {
    return (
        <div>
            <div className="navbar">
                <div className="menu">
                    <img src={menu} alt="menu" />
                </div>
                <div className="logo">
                    <div className="path">
                        <img height="100%" width="100%" src={path} alt="logo" />
                    </div>
                    <div className="moviehunt">Movie hunt</div>
                </div>
                <div className="tab">
                    <div className="toprated" >Top Rated</div>
                    <div className="rectangle1" />
                </div>
                <div className="option" >Movies</div>
                <div className="option1">Discover</div>
                <div className="rectangle2" />
                <div className="rectangle3">
                    <div className="rectangle3div">
                        <img className="plus" src={plus} alt="plus" ></img>
                        <div className="addmovie">Add movie</div>
                    </div>
                </div>
                <div className="profile"><img height="100%" width="100%" src={profile} alt="profile" /> </div>
            </div>
            <div  style ={{display:"flex"}}>
                <div className="top-rated-movies" >Top Rated Movies</div>
                <img className="ic-search" src={searchicon} alt="not found"/>
            </div>
        </div>
    );
}

export default Top;