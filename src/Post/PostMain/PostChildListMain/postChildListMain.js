import React, { useState ,useEffect} from 'react';
import style from './postChildListMain.module.css';
import PostChildList from '../PostChildList/postChildList.js';
import axios from 'axios';
import $ from 'jquery';

function PostChildListMain({ dataTitle }) {
    const [current_page, setCurrentPage] = useState(1);

    const [loading,setLoading]=useState(true);
    const [postTitle,setPostTitle]=useState([]);

    useEffect(()=>{
        axios.get('../postData.json').then(response=>{
            setPostTitle(response.data.filter((item)=>item.title===dataTitle));
            setLoading(false);
        }).catch(error=>{
            console.log(error)
        });
    },[dataTitle])

    let post_per_page = 6;

    let total_pages = () => {
        return Math.ceil(postTitle.length / post_per_page);
    }

    let renderBnt = () => {
        let listNumberpage = [];
        for (let i = 0; i < total_pages(); i++) {
            listNumberpage.push(i + 1);
        }
        return listNumberpage;
    }

    let prev_page = () => {
        if (current_page > 1) {
            setCurrentPage(current_page - 1);
        }
    }

    let next_page = () => {
        if (current_page < total_pages()) {
            setCurrentPage(current_page + 1);
        }
    }

    let change_page = (page) => {
        let itemonpage = [];
        if (page < 1) page = 1;
        if (page > total_pages()) page = total_pages();

        for (let i = (page - 1) * post_per_page; i < (page * post_per_page); i++) {
            if (i < postTitle.length) {
                itemonpage.push(postTitle[i])
            }
        }

        if (page === 1) {
            $('#prev').css('visibility', 'hidden');
        } else {
            $('#prev').css('visibility', 'visible');
        }

        if (page === total_pages()) {
            $('#next').css('visibility', 'hidden');
        } else {
            $('#next').css('visibility', 'visible');
        }

        return itemonpage;
    }


    if (loading) {
        return (<h1>Loading</h1>)
    } else {
        return (
            <div className="rdpost">
                {change_page(current_page).map((item, index) => <PostChildList key={index} data={item} />)}
                <div className={style.btn_pagination}>
                    <button id="prev" onClick={() => prev_page()}>prev</button>
                    {
                        renderBnt().map((item, index) =>
                            <button onClick={(evt) => setCurrentPage(parseInt(evt.target.id))} key={index} id={item}>{item}</button>
                        )
                    }
                    <button id="next" onClick={() => next_page()}>next</button>
                </div>
            </div>
        )
    }
}

export default React.memo(PostChildListMain);