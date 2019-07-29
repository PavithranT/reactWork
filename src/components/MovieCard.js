import React from 'react'
import './MovieCard.css'



function MovieCard(props) {
    return (
        <div style={{ maxWidth: "400px" }}>
            <div className="moviecard">
                <div className="card">
                    <div className="imgloc">

                        <img width="100%" height="100%" src={props.movie.img} alt="Not FOund" />
                    </div>
                    <div className="textcontent">
                        <div style={{display:"flex"}} >
                            <div className="movietitle">{props.movie.name}</div>
                            <div className="rate" >{props.movie.rating}</div>
                            <div className="rectangle"></div>
                        </div>
                        
                        <div className="releasedate">{props.movie.release}</div>
                        <div className="moviedesc">{props.movie.detail}</div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MovieCard;