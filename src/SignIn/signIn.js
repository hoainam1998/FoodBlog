import React, { useEffect } from 'react';
import style from './signIn.module.css';
import $ from 'jquery';

function SignIn() {

    useEffect(() => {
        $('#signup').click(function () {
            closeAllTags();
            $(this).css('background', '#f2f2f2');
            $('.signUpTag').css('display', 'block');
        });

        $('#signin').click(function () {
            closeAllTags();
            $(this).css('background', '#f2f2f2');
            $('.signInTag').css('display', 'block');
        });

        $('.policy').click(function(){
            $(this).children('input').click();
        })

        $('input[type="checkbox"]').click(function (evt) {
            evt.stopPropagation();
        });

        $('.signIn').click(function(evt){
           if($(evt.target).is($('.signIn'))){
               $(evt.target).css('display','none');
           }
        })

        $('#signup').click();
    }, [])

    function closeAllTags() {
        $('.tag').each(function () {
            $(this).css('display', 'none');
        })

        $('.btns_tags button').each(function () {
            $(this).css('background', 'transparent');
        })
    }

    function closeSignIn() {
        $('.signIn').css('display', 'none');
    }

    return (
        <section className={`${style.signIn} signIn`}>
            <div className={style.signInContent}>
                <img src={require('../images/siign-in-logo.png')} alt="logoSignIn"></img>
                <p className={style.offer}>
                    Curabitur aliquet quam id dui posuere blandit.
                    Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
                </p>
                <div className={style.signInBox}>
                    <div className={`${style.btns_tags} btns_tags`}>
                        <button id="signup">sign up</button>
                        <button id="signin">sign in</button>
                    </div>
                    <div className={`${style.contentBoxSignUpTags} tag signUpTag`}>
                        <div className={style.signInWidthSocial}>
                            <span className={style.offerText}>with your social network :</span>
                            <span className={style.btns_social}>
                                <span><i className="fab fa-facebook-f"></i></span>
                                <span><i className="fab fa-twitter"></i></span>
                                <span><i className="fab fa-google"></i></span>
                            </span>
                            <span className={style.offerText}>or</span>
                        </div>
                        <form className={style.formSignIn}>
                            <input type="text" name="username" placeholder="User Name*" required></input>
                            <input type="password" name="password" placeholder="Password" required></input>
                            <input type="password" name="confirmpassword" placeholder="Confirm Password" required></input>
                            <input type="mail" name="email" placeholder="Email Address" required></input>
                            <input type="text" name="fullname" placeholder="Full Name" required></input>
                            <p className={`${style.policy} policy`}>
                                <input type="checkbox" name="policy" required></input>
                                I agree to the terms & conditions
                            </p>
                            <input type="submit" name="submit" value="register now"></input>
                        </form>
                    </div>
                    <div className={`${style.contentBoxSignInTags} tag signInTag`}>
                        <div className={style.signInWidthSocial}>
                            <span className={style.offerText}>with your social network :</span>
                            <span className={style.btns_social}>
                                <span><i className="fab fa-facebook-f"></i></span>
                                <span><i className="fab fa-twitter"></i></span>
                                <span><i className="fab fa-google"></i></span>
                            </span>
                            <span className={style.offerText}>or</span>
                        </div>
                        <form className={style.formSignIn}>
                            <input type="text" name="username" placeholder="User Name*" required></input>
                            <input type="password" name="password" placeholder="Password" required></input>
                            <input type="submit" name="submit" value="sign in"></input>
                        </form>
                    </div>
                </div>
            </div>
            <button className={`${style.closeSignIn} closeSignIn`} onClick={closeSignIn}><img src={require('../images/close.svg')} alt="close"></img></button>
        </section>
    )
}

export default React.memo(SignIn);