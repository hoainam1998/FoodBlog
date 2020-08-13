import React from 'react';
import style from './postChildList.module.css';
import {Link} from 'react-router-dom';

function PostChildList({ data }) {

    return (
        <div className={style.postItem}>
            <div className={style.imgPostItem}>
                <img src={require(`../../../images/${data.images[1]}`)} alt="post1"></img>
                <div className="date" style={{ top: '20px', left: '20px' }}>
                    <span>08</span><br />
                    <span>aug</span>
                </div>
            </div>
            <div className={style.inforPostItem}>
                <div className="small_title" style={{textAlign:'left'}}>
                    <Link to={`/blogsPage/${data.title}`} className="linkCategories">{data.title}</Link>
                </div>
                <Link to={`/singlePost/${data.id}`} className="link_title" style={{textAlign:'left'}}>
                    {data.subTitle}
                </Link>
                <div className="author_read_comment" style={{textAlign:'left'}}>
                    <span>by</span>
                    <span>|</span>
                    <span>3 min read</span>
                    <span>|</span>
                    <span>20 comment</span>
                </div>
                <p style={{textAlign:'left'}}>
                    {data.content}
                </p>
            </div>
        </div>
    )
}

export default React.memo(PostChildList);