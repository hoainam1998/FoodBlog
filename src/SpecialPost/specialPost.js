import React from 'react';
import style from './specialPost.module.css';

function SpecialPost() {
    return (
        <div className={style.specialPostContainer}>
            <img src={require("../images/post4.jpeg")} alt="specialPostimg"></img>
            <div className={style.content}>
                 <div className={style.special_post_date}>
                    <span>08</span><br/>
                    <span>aug</span>
                </div> 
                 <p>This Summer Snacking Cake Is theSweetest Excuse to...</p>
                <div className={style.social}>
                    <span>share</span>
                    <span><i className="fab fa-facebook-f"></i></span>
                    <span><i className="fab fa-twitter"></i></span>
                    <span><i className="far fa-envelope"></i></span>
                </div>
            </div>
        </div>
    )
}

export default React.memo(SpecialPost)
