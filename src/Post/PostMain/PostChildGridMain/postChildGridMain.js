import React ,{useState} from 'react';
import style from './postChildGridMain.module.css';
import PostChildGrid from '../PostChildGrid/postChildGrid.js';
import SpecialPost from '../../../SpecialPost/specialPost.js';
import MessageAuthor from '../../../MessageAuthor/messageAuthor.js';
import useHook from '../../../Hook/useFetchingDataHook.js';

function renderpostColumnOne(post) {
    let dataRenderOne = post.map((item, pos) => <PostChildGrid key={pos+1} data={item} />)
    dataRenderOne.splice(1, 0, <SpecialPost key={"sepcialpost"} />);
    return dataRenderOne;
}

function renderpostColumnTwo(post) {
    let dataRenderTwo = post.map((item, pos) => <PostChildGrid key={pos+2} data={item} />)
    dataRenderTwo.splice(2, 0, <MessageAuthor key={"messageAuthor"} />);
    return dataRenderTwo;
}

function PostChildMain() {
    const [loading, posts] = useHook({});

    const [numberPost,setnumberPost]=useState(4);

    if (loading) {
        return <h1>Co loi</h1>
    }
    else {

        let currentPost=posts.slice(0,numberPost);
        let postColumnOne = currentPost.filter(item => currentPost.indexOf(item) % 2 === 0);
        let postColumnTwo = currentPost.filter(item => currentPost.indexOf(item) % 2 !== 0);
        return (
            <div className={style.layoutPostChildGridMain}>
                <div className={style.postChild}>
                    <div className={style.ColumnOne}>
                        {renderpostColumnOne(postColumnOne)}
                    </div>
                    <div className={style.ColumnTwo}>
                        {renderpostColumnTwo(postColumnTwo)}
                    </div>
                </div>
                <button className={style.btn_loadmore} onClick={()=>setnumberPost(numberPost+2)}id="load">load more</button>
            </div>
        )
    }
}

export default React.memo(PostChildMain)