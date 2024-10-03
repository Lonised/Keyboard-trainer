import React, { useState } from 'react';
import styles from '../assets/css/Home.module.css';
import { images } from '../components/images';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (href) => {
    if (location.pathname === href) {
      navigate(0);
    } else {
      setIsFadingOut(true);
      setTimeout(() => {
        navigate(href);
      }, 1000);
    }
  };


  return (
    <div>
      <header className={`${styles['wrapper-header']}`}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h1>Daniil Dmitrievich Shterkel</h1>
          </div>
          <div className={styles.headerRight}>
            <a href="#" onClick={() => handleLinkClick('/')}>
              <img src={images.menuImg} className={styles['headerRight-img']} id="burger-menu" alt="Menu" />
            </a>
            <div className={styles.headerRightA}>
              <a href="#" className={styles['headerRight-href-active']} onClick={() => handleLinkClick('/')}>Home</a>
              <a href="#" className={styles['headerRight-href']} onClick={() => handleLinkClick('/about')}>About</a>
              <a href="#" className={styles['headerRight-href']} onClick={() => handleLinkClick('/projects')}>Projects</a>
              <a href="#" className={styles['headerRight-href']} onClick={() => handleLinkClick('/media')}>Media</a>
              <a href="#" className={styles['headerRight-href']} onClick={() => handleLinkClick('/blog')}>Blog</a>
              <a href="#" className={styles['headerRight-href']} onClick={() => handleLinkClick('/contact')}>Contact</a>
            </div>
          </div>

          {/* Sidebar */}
          <div className={`${styles.sidebar}`} id="sidebar">
            <div className={styles.sidebarLogin}>
              <a href="#"><img src={images.profileImg} alt="Profile" />
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
              <img id="user-avatar" src={images.profileImg} alt="User Avatar" />
            </a>
            <a href="/login">
              <p id="user-name">Log In</p>
            </a>
            <a href="#">
              <img src={images.downArrowImg} alt="Toggle Sidebar" />
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

      <main className={`${styles.wrapper} ${isFadingOut ? styles.fadeOut : ''}`}>
        <section className={styles['wrapper-about']}>
          <div className={styles.about}>
            <div className={styles.aboutLeft}>
              <img src={images.meNow} alt="meNow" />
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
          <img src={images.wrapperPhoto1} alt="Wrapper Photo 1" />
          <img src={images.wrapperPhoto2} alt="Wrapper Photo 2" />
          <img src={images.wrapperPhoto3} alt="Wrapper Photo 3" />
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
              <img src={images.postExample} alt="Post" />
              <div className={styles.postsInfo}>
                <div className={styles['postsInfo-name']}>
                  <a href="#">I am learning and practicing frontend development.</a>
                </div>
                <div className={styles['headerLine-posts']}></div>
                <div className={styles['postsInfo-href']}>
                  <div className={styles['postsInfo-hrefA']}>
                    <a href="#"><img src={images.message} alt="Message" /></a>
                    <p>1</p>
                  </div>
                  <div className={styles['postsInfo-hrefA']}>
                    <p>2</p>
                    <a href="#"><img src={images.likeImg} alt="Like" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles['wrapper-wallpaper']}>
          <div className={styles.wallpaper}>
            <img src={images.wallpaperImg} alt="Wallpaper" />
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
                  <img src={images.linkedinImg} alt="LinkedIn" />
                  <span>LinkedIn</span>
                </a>
              </div>
              <div className={styles.faqRightIcon}>
                <a href="https://github.com/Lonised" target="_blank" rel="noopener noreferrer">
                  <img src={images.githubImg} alt="GitHub" />
                  <span>GitHub</span>
                </a>
              </div>
              <div className={styles.faqRightIcon}>
                <a href="https://x.com/lonised_" target="_blank" rel="noopener noreferrer">
                  <img src={images.twitterImg} alt="Twitter" />
                  <span>Twitter</span>
                </a>
              </div>
              <div className={styles.faqRightIcon}>
                <a href="https://www.instagram.com/lonised_/" target="_blank" rel="noopener noreferrer">
                  <img src={images.instagramImg} alt="Instagram" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles['wrapper-end']}>
        <div className={styles.end}>
          <p>© 2024 by Daniil D. Shterkel. Powered and secured by <a href="#">Wix</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Home;


