import React from 'react';
import style from './collectionImg.module.css';

function CollectionImg() {
    return (
        <div className={style.collection_container}>
            <div className={style.img_collection}>
                <div className={style.imgCollectionItem}>
                    <img src={require('../images/collectionimg1.jpeg')} alt="img"></img>
                </div>
                <div className={style.imgCollectionItem}>
                    <img src={require('../images/post4.jpeg')} alt="img"></img>
                </div>
                <div className={style.imgCollectionItem}>
                    <img src={require('../images/banner4.jpeg')} alt="img"></img>
                </div>
                <div className={style.imgCollectionItem}>
                    <img src={require('../images/collectionImg3.jpeg')} alt="img"></img>
                </div>
                <div className={style.imgCollectionItem}>
                    <img src={require('../images/collectionImg4.jpeg')} alt="img"></img>
                </div>
                <div className={style.imgCollectionItem}>
                    <img src={require('../images/collectionImg2.jpg')} alt="img"></img>
                </div>
            </div>
            <div className={style.follower}>
                <div className={style.avatar}>
                    <img src={require('../images/post2.jpeg')} alt="avatar"></img>
                </div>
                <div className={style.avatar_text}>
                    <span>@ foodieblog</span><br/>
                    <span>23,7k follower</span>
                </div>
            </div>
        </div>
    )
}

export default React.memo(CollectionImg);