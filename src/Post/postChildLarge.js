import React from 'react';
import style from './post.module.css';

function PostChildLarge() {

    return (
        <div className={style.post_item}>
            <div className={style.img_date}>
                <img src={require('../images/postLarge.jpeg')} style={{ width: '100%', height: '533px' }} alt="postLage"></img>
                <div className="date">
                    <span>08</span><br />
                    <span>aug</span>
                </div>
            </div>
            <div className="small_title">
               <a href=" " className="linkCategories">vegan dessert</a>
            </div>
            <a href=" " className="link_title">
                The Absolute Best Way to Cook Steak Perfectly, According to Wayyy Too Many Tests
             </a>
            <div className={style.author_read_comment}>
                <span>by</span>
                <span>|</span>
                <span>3 min read</span>
                <span>|</span>
                <span>20 comment</span>
            </div>
            <p>Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed porttitor lectus nibh.
            Curabitur aliquet quam id dui posuere blandit.
            Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed porttitor lectus nibh.
            Curabitur aliquet quam id dui posuere blandit.
        </p>
            <button>Read more</button>
            <div className={style.social}>
                <span>share</span>
                <span><i className="fab fa-facebook-f"></i></span>
                <span><i className="fab fa-twitter"></i></span>
                <span><i className="far fa-envelope"></i></span>
            </div>
        </div>
    )
}

export default React.memo(PostChildLarge);