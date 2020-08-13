import React from 'react';
import style from './articles.module.css';

function Articles() {

    return (
        <article>
            <div className={style.article_item}>
                <div className={style.content_article}>
                    <span>dinner</span><br />
                    <span>28 articles</span>
                </div>
            </div>
            <div className={style.article_item}>
                <div className={style.content_article}>
                    <span>dinner</span><br />
                    <span>28 articles</span>
                </div>
            </div>
            <div className={style.article_item}>
                <div className={style.content_article}>
                    <span>dinner</span><br />
                    <span>28 articles</span>
                </div>
            </div>
            <div className={style.article_item}>
                <div className={style.content_article}>
                    <span>dinner</span><br />
                    <span>28 articles</span>
                </div>
            </div>
        </article>
    )
}

export default React.memo(Articles)