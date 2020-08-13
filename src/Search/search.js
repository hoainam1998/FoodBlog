import React ,{useEffect} from 'react';
import style from './search.module.css';
import $ from 'jquery';

function Search(){

    useEffect(()=>{   
        $('.closeSearch').click(()=>{
            $('.search').css('display','none');
            $('body').css('overflow','auto');
        })

    },[])

    return (
        <main className={`${style.search} search`}>
            <section className={style.searchBox}>
                <div className={style.searchContent}>
                    <input type="text" name="search" required></input>
                    <label>Search here ...</label>
                </div>
                <button className={style.searchBtn}>search</button>
                <button className={`${style.closeSearch} closeSearch`}><i className="fas fa-times"></i></button>
            </section>
        </main>
    )
}

export default React.memo(Search);