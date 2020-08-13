import React, { useEffect } from 'react';
import style from './contactAndSubcribe.module.css';
import $ from 'jquery';

function ContactAndSubcribe() {

    useEffect(() => {
        $('#label_checkbox').on('click', () => {
            $('#checkboxfake').toggleClass('changeStyle_Checkbox');
            $('#checkboxreal').click();
        })

        return () => {
            $('#label_checkbox').off('click');
        }
    }, [])

    return (
        <div className={style.contactAndsubcribe}>
            <div className="AboutMe">
                <h3 className={style.title}>About me</h3>
                <img src={require(`../images/aboutme.jpeg`)} alt="aboutme"></img>
                <span>Hi every one! I,m <span>Lena Mollein</span>.</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button>read more</button>
            </div>

            <div className={style.followMe}>
                <h3 className={style.title}>Follow me</h3>
                <div className="social_icon">
                    <span><i className="fab fa-facebook-f"></i></span>
                    <span><i className="fab fa-twitter"></i></span>
                    <span><i className="fab fa-youtube"></i></span>
                    <span><i className="far fa-envelope"></i></span>
                </div>
            </div>
            <div className={style.featurePost}>
                <h3 className={style.title}>Feature posts</h3>
                <div className={style.featurePost_img}>
                    <span className="small_title"><a href=" " className="linkCategories">dinner</a></span><br />
                    <a href=" " className="post_title">This Japanese Way of Making Iced Coffee Is a Game...</a>
                </div>
                <ul >
                    <li className={style.list_post}>
                        <div className="date">
                            <span>08</span><br />
                            <span>AUG</span>
                        </div>
                        <div className="linkAndCategrories">
                            <span className="small_title"><a href=" " className="linkCategories">dinner</a></span><br />
                            <a href=" " className="post_title">Grilled Potato and Green Bean Salad</a>
                        </div>
                    </li>
                    <li className={style.list_post}>
                        <div className="date">
                            <span>05</span><br />
                            <span>AUG</span>
                        </div>
                        <div>
                            <span className="small_title"><a href=" " className="linkCategories">SMOOTHIE</a></span><br />
                            <a href=" " className="post_title">The $8 French Rosé I Buy in Bulk Every Summer</a>
                        </div>
                    </li>
                    <li className={style.list_post}>
                        <div className="date">
                            <span>26</span><br />
                            <span>jul</span>
                        </div>
                        <div>
                            <span className="small_title"><a href=" " className="linkCategories">dessert</a></span><br />
                            <a href=" " className="post_title">Ina Garten's Skillet-Roasted Lemon Chicken</a>
                        </div>
                    </li>
                    <li className={style.list_post}>
                        <div className="date">
                            <span>16</span><br />
                            <span>jul</span>
                        </div>
                        <div>
                            <span className="small_title"><a href=" " className="linkCategories">VEGAN</a></span><br />
                            <a href=" " className="post_title">The Best Weeknight Baked Potatoes, 3 Creative Ways</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={style.banner}>
                <img src={require('../images/banner4.jpeg')} alt="banner1"></img>
            </div>
            <div className={style.category}>
                <h3 className={style.title}>Categories</h3>
                <div className={style.content_categories}>
                    <ul>
                        <li><a href="recipes">recipes</a><span>128</span></li>
                        <li><a href="dinner">dinner</a><span>32</span></li>
                        <li><a href="desert">desert</a><span>46</span></li>
                        <ul className={style.list_desert}>
                            <li><a href="smoothie">smoothie</a><span>46</span></li>
                            <li><a href="drinks">drinks</a><span>46</span></li>
                            <li><a href="cakes">cakes</a><span>46</span></li>
                        </ul>
                        <li><a href="vegan">vegan</a><span>63</span></li>
                        <li><a href="weightloss">weightloss</a><span>27</span></li>
                    </ul>
                </div>
            </div>
            <div className={style.contact}>
                <h3 className={style.title}>SUBSCRIBE</h3>
                <p>Subscribe to our newsletter and get our newest updates right on your inbox.</p>
                <input type="mail" placeholder="Your email"></input>
                <div className={style.checkbox_agree}>
                    <span id="checkboxfake"></span>
                    <label id="label_checkbox">I agree to the terms & conditions</label>
                    <input type="checkbox" id="checkboxreal"></input>
                </div>
                <button>subcribe</button>
            </div>
        </div>
    )
}

export default React.memo(ContactAndSubcribe)
