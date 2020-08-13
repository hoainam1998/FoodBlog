import React, { useState } from 'react';
import style from './singlePostPage.module.css';
import { Link } from 'react-router-dom';
import useHook from '../Hook/useFetchingDataHook.js';
import $ from 'jquery';

function SinglePostPage({ match }) {
    let id = match.params.id;
    const [loading, post] = useHook({});
    const [idPost, setIDPost] = useState(parseInt(id));

    function returnPost(paramID) {
        let postitem = post.find((item) => item.id === paramID.toString());
        if (postitem === undefined) {
            return " ";
        }
        return postitem;
    }

    function controlPreviousPost() {
        if (idPost <= 1) {
            setIDPost(idPost);
            $(`.prev`).hide();
        } else {
            setIDPost(idPost => idPost - 1);
            $(`.prev`).show();
        }

        if (idPost < post.length) {
            $('.next').show();
        }
    }

    function controlNextPost() {
        if (idPost >= post.length) {
            setIDPost(idPost)
            $(`.next`).hide();
        } else {
            setIDPost(idPost => idPost + 1)
            $(`.next`).show();

        }

        if (idPost > 1) {
            $('.prev').show();
        }
    }

    if (loading) {
        return <h1>Co loi</h1>
    } else {
        let post = returnPost(idPost);
        let prevPost = returnPost(idPost - 1)
        let nextPost = returnPost(idPost + 1)
        return (
            <div>
                <div className={style.background} style={{
                    backgroundImage: `url(${require(`../images/${post.images[1]}`)})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: '100% 100%'
                }}>
                </div>
                <div className={style.contentSinglePost}>
                    <div className={style.btn_social_vertical}>
                        <button><i className="fab fa-facebook-f"></i></button>
                        <button><i className="fab fa-twitter"></i></button>
                        <button><i className="fab fa-youtube"></i></button>
                        <button><i className="fab fa-instagram"></i></button>
                    </div>
                    <div className={`${style.inforTitle} ${style.displayFlex}`}>
                        <div className={style.boxdate}>
                            <span>09</span><br />
                            <span>aug</span>
                        </div>
                        <div className={style.titleSinglePost}>
                            <div className={`${style.marginTitle} small_title`}>
                                <Link to="/blogsPage" className="linkCategories">vegan</Link>
                                <span>|</span>
                                <Link to="/blogsPage" className="linkCategories">dessert</Link>
                            </div>
                            <h1 className="link_title">{post.subTitle}</h1>
                            <div className="author_read_comment">
                                <span>by</span>
                                <span>|</span>
                                <span>3 min read</span>
                                <span>|</span>
                                <span>20 comment</span>
                            </div>
                        </div>
                    </div>
                    <p className={style.inforSingPost}>{post.content}</p>
                    <div className={style.recipes}>
                        <div className={style.titleRecipes}>
                            <div>
                                <h2><i className="fas fa-user"></i>serves</h2>
                                <span>2 as main, 4 as a side</span>
                            </div>
                            <div>
                                <h2><i className="far fa-clock"></i>Prep time</h2>
                                <span>15 minute</span>
                            </div>
                            <div>
                                <h2><i className="far fa-clock"></i>cook time</h2>
                                <span>15 minute</span>
                            </div>
                            <button><i className="fas fa-print"></i>Read more</button>
                        </div>
                        <div className={`${style.ingredients} ${style.recipesPadding}`}>
                            <h5>INGREDIENTS</h5>
                            <ul>
                                <li>Ingredients</li>
                                <li>1 cup (240 ml) water, plus more as needed</li>
                                <li>1 teaspoon fine sea salt</li>
                                <li>2 tablespoons olive oil</li>
                                <li>3/4 cup (120 g) fine polenta</li>
                                <li>3 cups sunflower oil, plus more as needed</li>
                                <li>7 ounces (200 g) peeled parsnips, very thinly sliced on a mandoline</li>
                                <li>1 pinch fine sea salt, plus more to taste</li>
                                <li>2 tablespoons (30 g) unsalted butter</li>
                                <li>1/2 tablespoon maple syrup (up to 1 tablespoon as needed)</li>

                            </ul>
                        </div>
                        <div className={`${style.directions} ${style.recipesPadding}`}>
                            <h5>directions</h5>
                            <ol>
                                <li>Ingredients</li>
                                <li>1 cup (240 ml) water, plus more as needed</li>
                                <li>1 teaspoon fine sea salt</li>
                                <li>2 tablespoons olive oil</li>
                                <li>3/4 cup (120 g) fine polenta</li>
                                <li>3 cups sunflower oil, plus more as needed</li>
                                <li>7 ounces (200 g) peeled parsnips, very thinly sliced on a mandoline</li>
                                <li>1 pinch fine sea salt, plus more to taste</li>
                                <li>2 tablespoons (30 g) unsalted butter</li>
                                <li>1/2 tablespoon maple syrup (up to 1 tablespoon as needed)</li>
                            </ol>
                        </div>
                    </div>
                    <div className="content">
                        <p className={style.inforSingPost}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum
                        dolor sit amet.
                        </p>
                        <div className={style.quote}>
                            <img src={require('../images/quote-left.png')} alt="quote"></img>
                            <div className={style.contentQuote}>
                                <p className="link_title">The whole family of tiny legumes, whether red,
                                green, yellow, or black, offers so many possibilities to create an exciting lunch.
                             </p>
                                <span className={style.author}>MEIKE PETERS</span>
                            </div>
                        </div>
                        <p className={style.inforSingPost}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum
                        dolor sit amet.
                        </p>
                        <h2 className={style.mainTitlePost}>YOU CAN BUY FOR LESS THAN A COLLEGE DEGREE</h2>
                        <p className={style.inforSingPost}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum
                        dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className={style.imgAndContent}>
                            <img src={require(`../images/${post.images[0]}`)} alt="imgContent"></img>
                            <p className={style.inforSingPost}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum
                            dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        </div>
                        <p className={style.inforSingPost} style={{ 'marginBottom': '15px' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum
                        dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p className={style.inforSingPost}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum
                        dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className={style.tags}>
                            <button className={style.tag}>Food</button>
                            <button className={style.tag}>Vegan</button>
                            <button className={style.tag}>Tomato</button>
                            <button className={style.tag}>Weightloss</button>
                        </div>
                    </div>
                    <div className={style.previous_next_post}>
                        {(prevPost !== " ") ? <div className={`${style.previousPost} prev`}>
                            <button className={style.btn_previousPost} onClick={controlPreviousPost}>
                                <i className="fas fa-angle-left"></i>previous post
                            </button>
                            <div className={style.layoutItemPost}>
                                <div className={`date ${style.newStyleDate}`}>
                                    <span>08</span><br />
                                    <span>AUG</span>
                                </div>
                                <div className={`linkAndCategrories ${style.newStyleTitle}`}>
                                    <span className="small_title">
                                        <a href=" " className="linkCategories">{prevPost.title}</a>
                                    </span>
                                    <a href=" " onClick={function(evt){
                                        evt.preventDefault();
                                        setIDPost(parseInt(prevPost.id))
                                        }} 
                                        className={`post_title ${style.newStyleLink}`}>{prevPost.subTitle}</a>
                                </div>
                            </div>
                        </div> : null}
                        {(nextPost !== " ") ? <div className={`${style.nextPost} next`}>
                            <button className={style.btn_nextPost} onClick={controlNextPost}>
                                next post <i className="fas fa-angle-right"></i>
                            </button>
                            <div className={style.layoutItemPost}>
                                <div className={`date ${style.newStyleDate}`}>
                                    <span>08</span><br />
                                    <span>AUG</span>
                                </div>
                                <div className={`linkAndCategrories ${style.newStyleTitle}`}>
                                    <span className={`small_title`}>
                                        <a href=" " className="linkCategories">{nextPost.title}</a>
                                    </span>
                                    <a href=" "  onClick={function(evt){
                                        evt.preventDefault();
                                        setIDPost(parseInt(prevPost.id))
                                    }} 
                                    className={`post_title ${style.newStyleLink}`}>{nextPost.subTitle}</a>
                                </div>
                            </div>
                        </div> : null}
                    </div>
                    <div className={style.aboutAuthor}>
                        <img src={require('../images/person_1.jpg')} className={style.imgAuthor} alt="imgAuthor"></img>
                        <div className={style.inforAuthor}>
                            <h5 className={style.authorName}>LENA MOLLEIN.</h5>
                            <p className={style.contentMessageFromAuthor}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div className={style.btns_contactAuthor}>
                                <span className={style.iconContact}><i className="fab fa-facebook-f"></i></span>
                                <span className={style.iconContact}><i className="fab fa-twitter"></i></span>
                                <span className={style.iconContact}><i className="fab fa-google-plus-g"></i></span>
                                <span className={style.iconContact}><i className="fab fa-instagram"></i></span>
                                <span className={style.iconContact}><i className="fab fa-youtube"></i></span>
                            </div>
                        </div>
                    </div>
                    {/* Comment */}
                    <div className={style.comment}>
                        <h1 className={style.caption}>03 Comment</h1>
                        <div className={style.OneComment}>
                            <div className={style.commentator}>
                                <div className={style.imagePerson}>
                                    <img src={require(`../images/person_1.jpg`)} alt="commentatorimg"></img>
                                </div>
                                <div className={style.contentComment}>
                                    <h5 className={style.nameAndLikeShare}>
                                        <span className={style.name}>BRANDON KELLEY</span>
                                        <span className={style.likeAndShare}>
                                            <i className="far fa-heart"></i>
                                            <i className="fas fa-share-square"></i>
                                        </span>
                                    </h5>
                                    <span className={style.dateAndComment}>15 Aug 2020</span>
                                    <p className={style.commentContext}>
                                        Sed porttitor lectus nibh. Vivamus magna justo,
                                        lacinia eget consectetur sed, convallis at tellus.
                                        Curabitur aliquet quam id dui posuere blandit.
                                    </p>
                                </div>
                            </div>
                            <ul className={style.respondents}>
                                <li className={style.respondent}>
                                    <div className={style.commentator}>
                                        <div className={style.imagePersonRespondent}>
                                            <img src={require(`../images/person_4.jpg`)} alt="commentatorimg"></img>
                                        </div>
                                        <div className={style.contentComment}>
                                            <h5 className={style.nameAndLikeShare}>
                                                <span className={style.name}>BRANDON KELLEY</span>
                                                <span className={style.likeAndShare}>
                                                    <i className="far fa-heart"></i>
                                                    <i className="fas fa-share-square"></i>
                                                </span>
                                            </h5>
                                            <span className={style.dateAndComment}>15 Aug 2020</span>
                                            <p className={style.commentContext}>
                                                Sed porttitor lectus nibh. Vivamus magna justo,
                                                lacinia eget consectetur sed, convallis at tellus.
                                                Curabitur aliquet quam id dui posuere blandit.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className={style.respondent}>
                                    <div className={style.commentator}>
                                        <div className={style.imagePersonRespondent}>
                                            <img src={require(`../images/person_7.jpg`)} alt="commentatorimg"></img>
                                        </div>
                                        <div className={style.contentComment}>
                                            <h5 className={style.nameAndLikeShare}>
                                                <span className={style.name}>BRANDON KELLEY</span>
                                                <span className={style.likeAndShare}>
                                                    <i className="far fa-heart"></i>
                                                    <i className="fas fa-share-square"></i>
                                                </span>
                                            </h5>
                                            <span className={style.dateAndComment}>15 Aug 2020</span>
                                            <p className={style.commentContext}>
                                                Sed porttitor lectus nibh. Vivamus magna justo,
                                                lacinia eget consectetur sed, convallis at tellus.
                                                Curabitur aliquet quam id dui posuere blandit.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className={style.OneComment}>
                            <div className={style.commentator}>
                                <div className={style.imagePerson}>
                                    <img src={require(`../images/person_1.jpg`)} alt="commentatorimg"></img>
                                </div>
                                <div className={style.contentComment}>
                                    <h5 className={style.nameAndLikeShare}>
                                        <span className={style.name}>BRANDON KELLEY</span>
                                        <span className={style.likeAndShare}>
                                            <i className="far fa-heart"></i>
                                            <i className="fas fa-share-square"></i>
                                        </span>
                                    </h5>
                                    <span className={style.dateAndComment}>15 Aug 2020</span>
                                    <p className={style.commentContext}>
                                        Sed porttitor lectus nibh. Vivamus magna justo,
                                        lacinia eget consectetur sed, convallis at tellus.
                                        Curabitur aliquet quam id dui posuere blandit.
                                        Vivamus magna justo,
                                        lacinia eget consectetur sed, convallis at tellus.
                                    </p>
                                </div>
                            </div>
                            <ul className={style.respondents}>
                                <li className={style.respondent}>
                                    <div className={style.commentator}>
                                        <div className={style.imagePersonRespondent}>
                                            <img src={require(`../images/person_4.jpg`)} alt="commentatorimg"></img>
                                        </div>
                                        <div className={style.contentComment}>
                                            <h5 className={style.nameAndLikeShare}>
                                                <span className={style.name}>BRANDON KELLEY</span>
                                                <span className={style.likeAndShare}>
                                                    <i className="far fa-heart"></i>
                                                    <i className="fas fa-share-square"></i>
                                                </span>
                                            </h5>
                                            <span className={style.dateAndComment}>15 Aug 2020</span>
                                            <p className={style.commentContext}>
                                                Sed porttitor lectus nibh. Vivamus magna justo,
                                                lacinia eget consectetur sed, convallis at tellus.
                                                Curabitur aliquet quam id dui posuere blandit.
                                                Sed porttitor lectus nibh
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* End Comment */}

                    {/* leave a comment */}
                    <div className={style.leaveComment}>
                        <h1 className={style.caption}>leave a comment</h1>
                        <form className={style.formComment}>
                            <div className={style.inputToEnterInfor}>
                                <input type="text" name="name" placeholder="Name" ></input>
                                <input type="mail" name="email" placeholder="Email" ></input>
                                <input type="url" name="website" placeholder="Website" ></input>
                            </div>
                            <textarea className={style.contentTextComment} defaultValue="Nulla porttitor">
                            </textarea>
                            <input type="submit" name="submit" value="submit"></input>
                        </form>
                    </div>
                    {/* End Leave A comment */}
                </div>
            </div>
        )
    }
}

export default React.memo(SinglePostPage);