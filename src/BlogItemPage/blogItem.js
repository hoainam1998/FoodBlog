import React from 'react';
import Post from '../Post/post.js';
import ContactAndSubcribe from '../ContactAndSubcribe/contactAndSubcribe.js';

function BlogItemPage ({match}){
    
    return (
        <main className="blogItemPage">
            <section className="layoutBlogItemPage">
                <Post categories={false} dataLink={match}/>
                <ContactAndSubcribe />
            </section>
        </main>
    )
}

export default BlogItemPage;