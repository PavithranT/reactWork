import React from 'react';
import './Top.css'
function Top() {
    return (
        <div>
            <div className="navbar">
                <div className="menu" />
                <div className="logo">
                    <div className="path" />
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
                    <div className="addmovie">Add movie</div>
                </div>
                <div className="profile" />
            </div>
            <div className="searchbar">
            </div>
        </div>
    );
}

export default Top;