import React from 'react';
import styles from '../assets/css/Home.module.css';
import menuImg from '../assets/img/menu.png';
import profileImg from '../assets/img/profile.png';
import downArrowImg from '../assets/img/downArrow.png';
import linkedinImg from '../assets/img/in.png';
import githubImg from '../assets/img/git.png';
import twitterImg from '../assets/img/twitter.png';
import instagramImg from '../assets/img/instagram.png';
import meImg from '../assets/img/Me.jpg';
import wrapperPhoto1 from '../assets/img/wrapper-photo(1).png';
import wrapperPhoto2 from '../assets/img/wrapper-photo(2).png';
import wrapperPhoto3 from '../assets/img/wrapper-photo(3).png';
import postExample from '../assets/img/postExample.jpg';
import wallpaperImg from '../assets/img/wallpaper.png';
import likeImg from '../assets/img/like.png';
import meNow from '../assets/img/2024.jpg';
import message from '../assets/img/message.png'

const Home = () => {
  return (
    <div>
      <header className={`${styles['wrapper-header']}`}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h1>Daniil Dmitrievich Shterkel</h1>
          </div>

          <div className={styles.headerRight}>
            <a href="#">
              <img src={menuImg} className={styles['headerRight-img']} id="burger-menu" alt="Menu" />
            </a>
            <div className={styles.headerRightA}>
              <a href="/" className={styles['headerRight-href-active']}>Home</a>
              <a href="/about" className={styles['headerRight-href']}>About</a>
              <a href="/projects" className={styles['headerRight-href']}>Projects</a>
              <a href="/media" className={styles['headerRight-href']}>Media</a>
              <a href="/blog" className={styles['headerRight-href']}>Blog</a>
              <a href="/contact" className={styles['headerRight-href']}>Contact</a>
            </div>
          </div>

          {/* Sidebar */}
          <div className={`${styles.sidebar}`} id="sidebar">
            <div className={styles.sidebarLogin}>
              <a href="#"><img src={profileImg} alt="Profile" />
                <p>Log In</p>
              </a>
            </div>
            <div className={styles.sidebarLine}></div>
            <a href="/" className={styles['sidebar-href-active']}>Home</a>
            <a href="/about" className={styles['sidebar-href']}>About</a>
            <a href="/projects" className={styles['sidebar-href']}>Projects</a>
            <a href="/media" className={styles['sidebar-href']}>Media</a>
            <a href="/blog" className={styles['sidebar-href']}>Blog</a>
            <a href="/contact" className={styles['sidebar-href']}>Contact</a>
          </div>
        </div>

        <div className={styles.headerLine}></div>

        {/* Secondary Sidebar */}
        <nav className={styles['wrapper-nav']}>
          <div className={styles.navLeft}>
            <p>Student, Faculty of Innovative Technologies, Karaganda Saginov Technical University, STU</p>
          </div>
          <div className={styles.navRight}>
            <a id="profile-link" href="/login">
              <img id="user-avatar" src={profileImg} alt="User Avatar" />
            </a>
            <a href="/login">
              <p id="user-name">Log In</p>
            </a>
            <a href="#">
              <img src={downArrowImg} alt="Toggle Sidebar" />
            </a>
          </div>

          {/* Secondary Sidebar */}
          <div id="secondarySidebar" className={`${styles['secondary-sidebar']}`}>
            <a href="/account" id="profileLink">Profile</a>
            <a href="/account" id="ordersLink">My Orders</a>
            <a href="/account" id="walletLink">Files</a>
            <a href="/account" id="draftsLink">My Account</a>
            <a href="/account" id="addressesLink">Notifications</a>
            <a href="/account" id="accountLink">Settings</a>
            <hr />
            <a href="#" id="logoutBtn">Log Out</a>
          </div>
        </nav>
      </header>

      <div className={styles.overlay} id="overlay"></div>

      <section className={styles['wrapper-about']}>
        <div className={styles.about}>
          <div className={styles.aboutLeft}>
            <img src={meNow} alt="meNow" />
          </div>
          <div className={styles.aboutRight}>
            <div className={styles['aboutRight-name']}>
              <h1>Daniil D. Shterkel</h1>
            </div>
            <div className={styles['aboutRight-info']}>
              <p>Student, Faculty of Innovative Technologies, Karaganda Saginov Technical University, STU</p>
              <p>I am studying to become a software engineer and am also interested in frontend development. If you want to learn more about me, click the button below.</p>
              <a href="/about" className={styles['aboutRight-href']}>Read All</a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles['wrapper-photo']}>
        <img src={wrapperPhoto1} alt="Wrapper Photo 1" />
        <img src={wrapperPhoto2} alt="Wrapper Photo 2" />
        <img src={wrapperPhoto3} alt="Wrapper Photo 3" />
      </section>

      <section className={styles['wrapper-projects']}>
        <div className={styles.projects}>
          <h1>Projects</h1>
          <p>I am learning and practicing frontend development. If you would like to view and appreciate my projects and work, click the button below to see my latest work.</p>
          <a href="#">View works</a>
        </div>
      </section>

      <section className={styles['wrapper-posts']}>
        <div className={styles.postsUp}>
          <div className={styles.postsUpLeft}>
            <h3>Post & Articles</h3>
          </div>
          <div className={styles.postsUpRight}>
            <p>I am learning and practicing frontend development. If you would like to view and appreciate my projects and work, click the button below to see my latest work.</p>
            <a href="#">Read All</a>
          </div>
        </div>
        <div className={styles.postsDown}>
          <div className={styles.posts}>
            <img src={postExample} alt="Post" />
            <div className={styles.postsInfo}>
              <div className={styles['postsInfo-name']}>
                <a href="#">I am learning and practicing frontend development.</a>
              </div>
              <div className={styles['headerLine-posts']}></div>
              <div className={styles['postsInfo-href']}>
                <div className={styles['postsInfo-hrefA']}>
                  <a href="#"><img src={message} alt="Message" /></a>
                  <p>1</p>
                </div>
                <div className={styles['postsInfo-hrefA']}>
                  <p>2</p>
                  <a href="#"><img src={likeImg} alt="Like" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles['wrapper-wallpaper']}>
        <div className={styles.wallpaper}>
          <img src={wallpaperImg} alt="Wallpaper" />
        </div>
      </section>

      <section className={styles['wrapper-faq']}>
        <div className={styles.faq}>
          <div className={styles.faqLeft}>
            <a href="#">Story Policy</a>
            <a href="#">Shipping & Returns</a>
            <a href="#">FAQ</a>
          </div>
          <div className={styles.faqRight}>
            <div className={styles.faqRightIcon}>
              <a href="https://www.linkedin.com/in/daniil-shterkel-686661318/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinImg} alt="LinkedIn" />
                <span>LinkedIn</span>
              </a>
            </div>
            <div className={styles.faqRightIcon}>
              <a href="https://github.com/Lonised" target="_blank" rel="noopener noreferrer">
                <img src={githubImg} alt="GitHub" />
                <span>GitHub</span>
              </a>
            </div>
            <div className={styles.faqRightIcon}>
              <a href="https://x.com/lonised_" target="_blank" rel="noopener noreferrer">
                <img src={twitterImg} alt="Twitter" />
                <span>Twitter</span>
              </a>
            </div>
            <div className={styles.faqRightIcon}>
              <a href="https://www.instagram.com/lonised_/" target="_blank" rel="noopener noreferrer">
                <img src={instagramImg} alt="Instagram" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles['wrapper-end']}>
        <div className={styles.end}>
        <p>© 2024 by Daniil D. Shterkel. Powered and secured by <a href="#">Wix</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
