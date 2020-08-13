import React from 'react';
import style from './footer.module.css';

function ContentFooter() {

    return (
        <div className={`${style.content_footer}`}>
            <div className={style.contact_infor}>
                <img src={require('../images/logo.webp')} alt="logo"></img>
                <p>Pellentesque in ipsum id orci porta dapibus.
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Cras ultricies ligula sed magna dictum porta.
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Cras ultricies ligula sed magna dictum porta.</p>
                <div className={`social_icon`}>
                    <span><i className="fab fa-facebook-f"></i></span>
                    <span><i className="fab fa-twitter"></i></span>
                    <span><i className="fab fa-instagram"></i></span>
                    <span><i className="fab fa-youtube"></i></span>
                    <span><i className="far fa-envelope"></i></span>
                </div>
            </div>
            <hr></hr>
            <p>Copyright ©2020 All rights reserved | This template is made with <i className="fas fa-heart"></i> by <a href=" " className={style.owner}>Hoai Nam</a></p>
        </div>
    )
}

export default React.memo(ContentFooter);