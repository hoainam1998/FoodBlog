import React from 'react';
import style from './banner.module.css';

function Banner() {

    function BannerTitlePost() {
        return (
            <div className={style.post_mini_banner}>
                <div className={style.post_mini_date}>
                    <span>08</span><br/>
                    <span>AUG</span>
                </div>
                <div className={style.post_mini_content}>
                    <div>
                        <span>vegan</span>
                        <span>|</span>
                        <span>dessert</span>
                    </div>
                    <p className="post_title">Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                </div>
            </div>
        )
    }

    return (
        <div className={style.layout_banner} >
            <div className={style.main_banner}>
                <img src={require(`../images/banner1.jpeg`)} alt="banner1"></img>
                <div className={style.post_main_banner}>
                    <div className={style.post_main_date}>
                        <span>08</span>
                        <span>Aug</span>
                    </div>
                    <div className={style.post_main_content}>
                        <div className={style.category}>
                            <span>vegan </span>
                            <span>|</span>
                            <span>dessert</span>
                        </div>
                        <p className={style.post_title}>
                            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                            Donec rutrum congue leo eget malesuada.
                            </p>
                        <div className={style.comment_read}>
                            <span>by <span style={{ color: 'white' }}>admin</span></span>
                            <span className="mx-3">|</span>
                            <span>3 min read</span>
                            <span className="mx-3">|</span>
                            <span>20 comment</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.square_banner}>
                <BannerTitlePost/>
            </div>
            <div className={style.square_banner}>
                <BannerTitlePost />
            </div>
            <div className={style.rectangle_banner}>
                <BannerTitlePost />
            </div>
        </div>
    )
}

export default React.memo(Banner);