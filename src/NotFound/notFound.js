import React ,{useEffect} from 'react';
import style from './notFound.module.css';
import $ from 'jquery';

function NotFound (){
    
    useEffect(()=>{
        $('body').css('overflow','hidden');
    })

    return (
        <main className={style.notFound}>
            <section className={style.fourzerofour}>
                <h1 className={style.titlefourzerofour}>404</h1>
                <h1 className={style.caption}>Opps! This page Could Not Be Found!</h1>
                <p className={style.sorry}>Sorry bit the page you are looking for does not exist, have been removed or name changed</p>
                <div className={style.search}>
                    <input type="text" name="search" placeholder="Enter your keyword"></input>
                    <i className="fas fa-search"></i>
                </div>
            </section>
        </main>
    )
}

export default React.memo(NotFound);