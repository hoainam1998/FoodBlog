import React from 'react';
import style from './aboutMe.module.css';

function AboutMe() {
    return (
        <main className="aboutMe">
            <section className={style.about}>
                <div className={`${style.newStyleTitleCategories} titleCategoriesAndLink`}>
                    <h1><span>About me</span></h1>
                    <h2><a href="9">Home</a><span> / About</span></h2>
                </div>
                <div className={style.contentAbout}>
                    <div className={style.collectionImg}>
                        <img src={require('../images/article1.jpeg')} alt="imgabout"></img>
                        <img src={require('../images/article2.jpeg')} alt="imgabout"></img>
                        <img src={require('../images/post2.jpeg')} alt="imgabout"></img>
                    </div>
                    <div className={style.contentText}>
                        <h1 className="captionAbout">HELLO EVERY ONE !!!</h1>
                        <div className={style.intro}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure Lorem ipsum dolor
                            sit amet, consectetur adipisicing elit, incididunt ut
                            labore et dolore magna aliqua accusantium doloremque laudantium.
                            </p>
                            <ul className={style.lisIntro}>
                                <li>Class aptent taciti sociosqu ad litora torquent per conubia nostra</li>
                                <li>Inceptos himenaeos mauris.Integer gravida tincidunt accumsan.</li>
                                <li>Vestibulum nulla mauris, condimentum id felis ac, volutpat volutpat mi.</li>
                                <li>In vitae tempor velit of the impenetrable foliage.</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure Lorem ipsum dolor
                            sit amet, consectetur adipisicing elit, incididunt ut
                            labore et dolore magna aliqua accusantium doloremque laudantium.
                            </p>
                        </div>
                        <div className={style.btns_social}>
                            <span><i className="fab fa-facebook-f"></i></span>
                            <span><i className="fab fa-twitter"></i></span>
                            <span><i className="fab fa-youtube"></i></span>
                            <span><i className="fab fa-instagram"></i></span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default React.memo(AboutMe);