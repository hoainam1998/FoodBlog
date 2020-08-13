import React ,{useEffect}from 'react';
import './App.css';
import Header from './Header/header.js';
import HomePage from './HomePage/homePage.js';
import BlogPage from './BlogItemPage/blogItem.js';
import SinglePostPage from './SinglePostPage/singlePostPage.js';
import AboutMe from './AboutMe/aboutMe.js';
import ContactMe from './Contact/contact.js';
import NotFound from './NotFound/notFound.js';
import CollectionImg from './CollectionImages/collectionImg.js';
import ContentFooter from './Footer/footer.js';
import SignIn from './SignIn/signIn.js';
import Search from './Search/search.js';
import SideMenu from './SideMenu/sideMenu.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import $ from 'jquery';

function App() {

  useEffect(()=>{
    $(window).scroll(function(){
      if($(this).scrollTop() >= 4000){
        $('.scroll').show();
      }else {
        $('.scroll').hide();
      }
    })

    $('.scroll').click(function(evt){
      evt.preventDefault();
      var hash=this.hash;

      $('html,body').animate({
        scrollTop: $(hash).offset().top
      },800)
    })
  },[])

  return (
    <main>
      <Router>
        <header id="header">
          <SideMenu />
          <Header />
        </header>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/blogsPage/:title" component={BlogPage}></Route>
          <Route path="/singlePost/:id" component={SinglePostPage}></Route>
          <Route path="/aboutMe" component={AboutMe}></Route>
          <Route path="/contactMe" component={ContactMe}></Route>
          <Route component={NotFound}></Route>
        </Switch>
        <footer id="footer">
        <a href="#header" className="scroll"><i className="fas fa-arrow-up"></i></a>
          <CollectionImg />
          <ContentFooter />
        </footer>
        <SignIn />
        <Search />
      </Router>
    </main>
  );
}

export default App;
