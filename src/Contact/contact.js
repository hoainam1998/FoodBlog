import React from 'react';
import style from './contact.module.css';

function Contact() {
    return (
        <main className="contactMe">
            <section className={style.contact}>
                <div className={`${style.newStyleContact} titleCategoriesAndLink`}>
                    <h1><span>Contact me</span></h1>
                    <h2><a href="9">Home</a><span> / Contact</span></h2>
                </div>
                <div className={style.contentContact}>
                    <div className={style.address}>
                        <div className={style.map}>
                            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!
                            1d96748.74301332569!2d-74.25209590314151!3d40.731262282150816
                            !2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!
                            1s0x89c25370329a0e1d%3A0xe1bcdc2adcfee473!2sNewark%2C%20New%20Jersey%2C%20
                            Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1592535852222!5m2!1svi!2s"
                                frameBorder="0" style={{ border: 0 }}
                                allowFullScreen="" aria-hidden="false" tabIndex="0">
                            </iframe>
                        </div>
                        <div className={style.infroAddress}>
                            <div className={style.itemAdress}>
                                <span className={style.addressIcon}>
                                <i className="fas fa-map-marker-alt"></i>
                                </span>
                                <span className={style.textAddress}>John Doe, 123 Main St Chicago, IL 60626</span>
                            </div>
                            <div className={style.itemAdress}>
                                <span className={style.addressIcon}>
                                <i className="fas fa-mobile-alt"></i>
                                </span>
                                <span className={style.textAddress}>Phone: 258-556-189</span>
                            </div>
                            <div className={style.itemAdress}>
                                <span className={style.addressIcon}>
                                <i className="far fa-envelope"></i>
                                </span>
                                <span className={style.textAddress}>Email: info@greenorganic.com</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.formAddress}>
                        <h1 className="captionAbout">GET IN TOUCH</h1>
                        <p className={style.paragraphAddress}>
                            My experience with Realy is absolutely positive.
                            The themes are beautifully designed and well documented.
                            Realy theme provides quick support.
                        </p>
                        <form className={style.formInputAddress}>
                            <input type="text" name="name" placeholder="Name"></input>
                            <input type="mail" name="email" placeholder="Email"></input>
                            <input type="url" name="website" placeholder="website"></input>
                            <textarea defaultValue="message"></textarea>
                            <input type="submit" name="submit" value="Submit"></input>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default React.memo(Contact);