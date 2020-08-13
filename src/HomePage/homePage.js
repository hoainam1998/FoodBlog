import React from 'react';
import Post from '../Post/post.js';
import Banner from '../Banner/banner.js';
import Articles from '../Articles/articles.js';
import ContactAndSubcribe from '../ContactAndSubcribe/contactAndSubcribe.js';

function HomePage() {
    console.log('render');
    return (
        <main className="homePage">
            <Banner />
            <Articles />
            <section className="layoutPostAndContact">
                <Post categories={true} dataLink="novalue"/>
                <ContactAndSubcribe />
            </section>
        </main>
    )
}

export default React.memo(HomePage);