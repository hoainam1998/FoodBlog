import React from 'react';
import style from './post.module.css';
import PostChildLarge from './postChildLarge.js';
import PostChildGridMain from './PostMain/PostChildGridMain/postChildGridMain.js';
import PostChildListMain from './PostMain/PostChildListMain/postChildListMain.js';

function Post({dataLink}) {

    if(dataLink!=="novalue"){
        let url=dataLink.url.split("/");
        return(<div className={style.post_main}>
                    <div className="titleCategoriesAndLink">
                        <h1>
                            <span>Categories:</span>
                            <span className="nameTitle"> {dataLink.params.title}</span>
                        </h1>
                        <h2><a href="9">{url[1]}</a><span> / {url[2]}</span></h2>
                    </div>
                    <PostChildListMain dataTitle={dataLink.params.title}/>
                </div>
                
        )
    }else {
        return (
            <div className={style.post_main}>
                <PostChildLarge />
                <PostChildGridMain />
            </div>
            );
    }
}

export default React.memo(Post)