import React ,{useEffect,useState} from 'react';
import style from './header.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';

function Header() {

    const [titlePost, setTitlePost] = useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        axios.get('../postData.json').then((res)=>{
            let titleList=res.data.map((item)=>{return item.title});
            setTitlePost(titleList);
            setLoading(false);
        }).catch((err)=>{
            console.log(err);
        })

    },[])

    function subcrible(){
       $('body').css('overflow','hidden');
        $('.signIn').css('display','block');
    }

    function btn_search(){
        $('body').css('overflow','hidden');
        $('.search').css('display','block');
    }

    function openSideMenu(evt){
       $('#sidemenu').addClass('showSideMenu');
    }

    if (loading) {
        return (<h1>Co loi</h1>);
    } else {
        let uniqueTitle=[];
        titlePost.forEach((item)=>{
            if(!uniqueTitle.includes(item)){
                uniqueTitle.push(item);
            }
        })
        return (
            <div>
                <div className={style.topMenu}>
                    <div className={style.headerMenu}>
                        <button className={`${style.icon_menu} ${style.btn_bars}`} onClick={openSideMenu}>
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className={style.content_menu}>
                            <ul className={style.listMainLink}>
                                <li className={style.mainLink}><Link to="/"> Home</Link></li>
                                <li className={`${style.mainLink} ${style.recipes}`} style={{ 'position': 'relative' }}>
                                    <a href=" ">recipes</a>
                                    <div className={`${style.content_navigator_recipes}`}>
                                            <div className={style.item_navigator}>
                                                <img src={require('../images/itemmenu1.jpeg')} alt="img_item1"></img>
                                                <a href=" ">How to Make a Milkshake With Any Ice Cream ...</a>
                                            </div>
                                            <div className={style.item_navigator}>
                                                <img src={require('../images/itemmenu2.jpeg')} alt="img_item1"></img>
                                                <a href=" ">How to Make a Milkshake With Any Ice Cream ...</a>
                                            </div>
                                            <div className={style.item_navigator}>
                                                <img src={require('../images/itemmenu3.jpeg')} alt="img_item1"></img>
                                                <a href=" ">How to Make a Milkshake With Any Ice Cream ...</a>
                                            </div>
                                            <div className={style.item_navigator}>
                                                <img src={require('../images/itemmenu4.jpeg')} alt="img_item1"></img>
                                                <a href=" ">How to Make a Milkshake With Any Ice Cream ...</a>
                                            </div>
                                            <div className={style.item_navigator}>
                                                <img src={require('../images/itemmenu5.jpeg')} alt="img_item1"></img>
                                                <a href=" ">How to Make a Milkshake With Any Ice Cream ...</a>
                                            </div>
                                        </div>
                                </li>
                                <li className={style.mainLink}><a href=" ">dinner</a></li>
                                <li className={style.mainLink}><a href=" ">desserts</a></li>
                                <li className={`${style.mainLink} ${style.categories}`} style={{ 'position': 'relative' }}>
                                    <Link to={`/blogsPage/${uniqueTitle[0]}`} id="pageMenu">categories</Link>
                                    <div className={`${style.content_navigator_pages}`}>
                                        <ul className={style.listPageLink}>
                                            {
                                                uniqueTitle.map((item,index)=>
                                                    <li className={style.linkCategorie} key={index}><Link to={`/blogsPage/${item}`}>{item}</Link></li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                </li>
                                <li className={style.mainLink}><Link to="/aboutMe">about</Link></li>
                                <li className={style.mainLink}><Link to="/contactMe">contact</Link></li>
                            </ul>
                        </div>
                        <button className={`${style.icon_menu} btn_search`} onClick={btn_search}>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className={style.header}>
                    <div className={style.logo}>
                        <div className={style.btn_subcribe}>
                            <button className="subcrible" onClick={subcrible}>subcrible</button>
                        </div>
                        <div className={style.logo}>
                            <img src={require(`../images/logo.webp`)} alt="logo"></img>
                        </div>
                        <div className={`${style.btn_socialmedia}`}>
                            <ul className={style.listIconMedia}>
                                <li><i className="fab fa-facebook-f"></i></li>
                                <li><i className="fab fa-twitter"></i></li>
                                <li><i className="fab fa-youtube"></i></li>
                                <li><i className="fab fa-instagram"></i></li>
                                <li><i className="far fa-envelope"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default React.memo(Header);