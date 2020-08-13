import React, { useEffect, useState } from 'react';
import style from './sideMenu.module.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';

function SideMenu() {

    const [titlePost, setTitlePost] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('../postData.json').then((res) => {
            let titleList = res.data.map((item) => { return item.title });
            setTitlePost(titleList);
            setLoading(false);
            $('.categories').next().hide();
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    function clickCategories(evt) {
        evt.preventDefault();
        $(evt.target).next().slideToggle('normal',function(){
            if($(this).is(':hidden')){
                $(this).prev().children('i').css('transform','rotate(90deg)');
            }else{
                $(this).prev().children('i').css('transform','rotate(-90deg)');
            }
        });
    }

    function evtforPolicy(evt){
        $(evt.target).children('input').click();
    }

    function closeSideMenu(evt){
        if($(evt.target).is($(`.${style.backgroundSideMenu}`))){
            $(evt.target).removeClass('showSideMenu');
        }
    }

    if (loading) {
        return (<h1>Co loi</h1>);
    } else {
        let uniqueTitle = [];
        titlePost.forEach((item) => {
            if (!uniqueTitle.includes(item)) {
                uniqueTitle.push(item);
            }
        })
        return (
            <section className={style.backgroundSideMenu} id="sidemenu" onClick={closeSideMenu}>
                <div className={style.sideMenu}>
                    <img src={require('../images/siign-in-logo.png')} alt="logoSideMenu"></img>
                    <ul className={style.listLinkSideMenu}>
                        <li><Link to="/" className={style.itemLinkSideMenu}>home</Link></li>
                        <li><a className={style.itemLinkSideMenu} href=" ">recipes</a></li>
                        <li><a className={style.itemLinkSideMenu} href=" ">dinner</a></li>
                        <li><a className={style.itemLinkSideMenu} href=" ">desserts</a></li>
                        <li>
                            <a className={`${style.itemLinkSideMenu} categories`} onClick={clickCategories} href=" ">
                                categories<i className="fas fa-caret-right"></i>
                            </a>
                            <ul className={style.listItemCategoriesSideMenu}>
                                {
                                    uniqueTitle.map((item, index) =>
                                        <li key={index}><Link to={`/blogsPage/${item}`} className={style.itemLinkCategoriesSideMenu}>{item}</Link></li>
                                    )
                                }
                            </ul>
                        </li>
                        <li><Link to="/aboutMe" className={style.itemLinkSideMenu}>about</Link></li>
                        <li><Link to="/contactMe" className={style.itemLinkSideMenu}>contact</Link></li>
                    </ul>
                    <div className={style.aboutMe}>
                        <h3 className={style.title}>About me</h3>
                        <img src={require('../images/banner3.jpeg')} alt="sideMenuImg"></img>
                        <h5 className={style.textTitle}>Hi every one! I,m Lena Mollein.</h5>
                        <p className={style.textIntro}>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className={style.btns_social}>
                            <span><i className="fab fa-facebook-f"></i></span>
                            <span><i className="fab fa-twitter"></i></span>
                            <span><i className="fab fa-youtube"></i></span>
                            <span><i className="fab fa-instagram"></i></span>
                            <span><i className="far fa-envelope"></i></span>
                        </div>
                        <div className={style.subcribe}>
                            <h3 className={style.title}>Subcribe</h3>
                            <p className={style.textSubcribe}>
                                Subscribe to our newsletter and get our
                                newest updates right on your inbox.
                            </p>
                            <form>
                                <input type="mail" name="email" placeholder="Your email"></input>
                                <p className={style.policy} onClick={evtforPolicy}><input type="checkbox" name="policy"></input>I agree to the terms & conditions</p>
                                <input type="submit" name="submit" value="subcribe"></input>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default React.memo(SideMenu);