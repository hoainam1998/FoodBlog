import React from 'react';
import style from './postChildGrid.module.css';
import {Link} from 'react-router-dom';

function PostChildGrid({data}) {
    return (
        <div className={style.post_item}>
                <img src={require(`../../../images/${data.images[0]}`)} alt="post1"></img>
                <div className="date">
                    <span>08</span><br />
                    <span>aug</span>
                </div>
            <div className="small_title">
                <Link to={`/blogsPage/${data.title}`} className="linkCategories">{data.title}</Link>
            </div>
            <Link to={`/singlePost/${data.id}`} data-id="linksinglepost" className="link_title">
                {data.subTitle}
            </Link>
            <div className="author_read_comment">
                <span>by</span>
                <span>|</span>
                <span>3 min read</span>
                <span>|</span>
                <span>20 comment</span>
            </div>
            <p>
               {data.content}
            </p>
        </div>
    )
}

export default React.memo(PostChildGrid)