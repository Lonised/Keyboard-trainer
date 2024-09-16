import React, { useEffect, useState } from 'react';
import styles from '../assets/css/Account.module.css';
import profileImg from '../assets/img/profile.png';
import menuImg from '../assets/img/menu.png';
import cameraImg from '../assets/img/photo-camera.png';
import downArrowImg from '../assets/img/downArrow.png';
import inImg from '../assets/img/in.png';
import gitImg from '../assets/img/git.png';
import twitterImg from '../assets/img/twitter.png';
import instagramImg from '../assets/img/instagram.png';
import pdfImg from '../assets/img/pdf.png';
import starImg from '../assets/img/star.png';

const Account = () => {
    const [isHeaderHidden, setIsHeaderHidden] = useState(false);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [isSecondarySidebarVisible, setIsSecondarySidebarVisible] = useState(false);

    // Функция для управления показом основного sidebar
    const toggleSidebar = () => {
      setIsSidebarVisible(!isSidebarVisible);
    };

    // Функция для управления показом вторичного sidebar
    const toggleSecondarySidebar = () => {
      setIsSecondarySidebarVisible(!isSecondarySidebarVisible);
    };

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 200) {
          setIsHeaderHidden(true);
        } else {
          setIsHeaderHidden(false);
        }
      };

      const handleClickOutside = (event) => {
        const sidebar = document.getElementById('sidebar');
        if (sidebar && !sidebar.contains(event.target)) {
          setIsSidebarVisible(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      if (isSidebarVisible) {
        document.addEventListener('click', handleClickOutside);
      }

      return () => {
        window.removeEventListener('scroll', handleScroll);
        document.removeEventListener('click', handleClickOutside);
      };
    }, [isSidebarVisible]);

    return (
        <div>
            <header className={styles['wrapper-header']}>
                <div className={styles['header']}>
                    <div className={styles['header-left']}>
                        <h1>Daniil Dmitrievich Shterkel</h1>
                    </div>

                    <div className={styles['header-right']}>
                        <a href="#"><img src={menuImg} className={styles['header-right-img']} id="burger-menu" alt="Menu"/></a>
                        <div className={styles['header-right-a']}>
                            <a href="/public/index.html" className={styles['header-right-href-active']}>Home</a>
                            <a href="/src/pages/About/about.html" className={styles['header-right-href']}>About</a>
                            <a href="/src/pages/Projects/projects.html" className={styles['header-right-href']}>Projects</a>
                            <a href="/src/pages/Media/media.html" className={styles['header-right-href']}>Media</a>
                            <a href="/src/pages/Blog/blog.html" className={styles['header-right-href']}>Blog</a>
                            <a href="/src/pages/Contact/contact.html" className={styles['header-right-href']}>Contact</a>
                        </div>
                    </div>

                    <div className={styles['sidebar']} id="sidebar">
                        <div className={styles['sidebar-login']}>
                            <a href="#"><img src={profileImg} alt="Profile"/><p>Log In</p></a>
                        </div>
                        <div className={styles['sidebar-line']}></div>
                        <a href="#" onClick={toggleSidebar} className={styles['closebtn']} id="closeSidebar">&times;</a>
                        <a href="/public/index.html" className={styles['sidebar-href-active']}>Home</a>
                        <a href="/src/pages/About/about.html" className={styles['sidebar-href']}>About</a>
                        <a href="/src/pages/Projects/projects.html" className={styles['sidebar-href']}>Projects</a>
                        <a href="/src/pages/Media/media.html" className={styles['sidebar-href']}>Media</a>
                        <a href="/src/pages/Blog/blog.html" className={styles['sidebar-href']}>Blog</a>
                        <a href="/src/pages/Contact/contact.html" className={styles['sidebar-href']}>Contact</a>
                    </div>
                </div>
                <div className={styles['header-line']}></div>
                <nav className={styles['wrapper-nav']}>
                    <div className={styles['nav-left']}>
                        <p>Student, Faculty of Innovative Technologies, Karaganda Saginov Technical University, STU</p>
                    </div>
                    <div className={styles['nav-right']}>
                        <a id="profile-link" href="/src/pages/Login/login.html">
                            <img id="user-avatar" src={profileImg} alt="User Avatar"/>
                        </a>
                        <a href="#" id="user-link">
                            <p id="user-name">Log In</p>
                        </a>
                        <a href="#" id="sidebarToggleBtn"><img src={downArrowImg} alt="Down Arrow"/></a>
                    </div>

                    <div id="secondarySidebar" className={styles['secondary-sidebar']}>
                        <a href="#">Profile</a>
                        <a href="#">My Orders</a>
                        <a href="#">My Wallet</a>
                        <a href="#">My Drafts</a>
                        <a href="#">My addresses</a>
                        <a href="#">My account</a>
                        <hr />
                        <a href="#" id="logoutBtn">Log Out</a>
                    </div>
                </nav>
            </header>

            <section className={styles['wrapper-account']}>
                <div className={styles['account']}>
                    <div className={styles['account-navigation']}>
                        <div className={styles['account-nav-name']}>
                            <a href="#"><img src={menuImg} className={styles['nav-name-img']} id="NavNameBtn" alt="Menu"/></a>
                            <div className={styles['avatar-container']} id="avatarContainer">
                                <img id="NavAvatar" src={profileImg} alt="User Avatar" className={styles['avatar']}/>
                                <div className={styles['camera-icon']}>
                                    <img src={cameraImg} alt="Change Avatar"/>
                                </div>
                            </div>

                            <input type="file" id="avatarInput" style={{display: 'none'}} />
                            <div id="thirdSidebar" className={styles['third-sidebar']}>
                                <a href="#" id="shareProfile">Share profile</a>
                                <a href="#">Edit profile</a>
                                <div className={styles['third-sidebar-line']}></div>
                                <a href="#">Add badges</a>
                            </div>
                            <h1 id="userName">User</h1>
                            <p>Admin</p>
                            <div className={styles['nav-name-sub']}>
                                <div className={styles['name-sub-left']}>
                                    <p>0</p>
                                    <h2>followers</h2>
                                </div>
                                <div className={styles['nav-name-line']}></div>
                                <div className={styles['name-sub-right']}>
                                    <p>0</p>
                                    <h2>following</h2>
                                </div>
                            </div>

                            <div id="cropperModal" style={{display: 'none'}}>
                                <div>
                                    <img id="cropperImage" src="" alt="Image for cropping"/>
                                </div>
                                <button id="cropButton">Crop</button>
                            </div>
                        </div>

                        <div className={styles['account-nav-button']}>
                            <a href="#" data-section="profile">Profile</a>
                            <a href="#" data-section="my-orders">My Orders</a>
                            <a href="#" data-section="files">Files</a>
                            <a href="#" data-section="my-account">My Account</a>
                            <a href="#" data-section="notifications">Notifications</a>
                            <a href="#" data-section="settings">Settings</a>
                            <a href="#" id="logoutBtn">Log Out</a>
                        </div>
                    </div>

                    <div className={`${styles['account-action']} ${styles['account-section']}`} id="profile">
                        <div className={styles['action']}>
                            <div className={styles['action-up']}>
                                <div className={styles['action-up-left']}>
                                    <h3>Profile</h3>
                                    <p>Registration date: July 16, 2024</p>
                                </div>
                                <div className={styles['action-up-right']}>
                                    <a href="#">Edit profile</a>
                                </div>
                            </div>
                            <div className={styles['action-line']}></div>
                            <div className={styles['action-middle']}>
                                <p>About me</p>
                                <button>Tell us about yourself</button>
                            </div>
                            <div className={styles['action-down']}>
                                <div className={styles['action-down-button']}>
                                    <p>Posts</p>
                                    <a href="#">Create a post</a>
                                </div>
                                <div className={styles['action-line']}></div>
                                <div className={styles['action-down-posts']}>
                                    <div className={styles['down-posts-buttons']}>
                                        <h4>You haven't written anything yet</h4>
                                        <button>Create your first post</button>
                                    </div>
                                </div>
                                <div className={styles['action-line']}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className={styles['wrapper-end']}>
                <div className={styles['end']}>
                    <p>© 2024 by Daniil D. Shterkel. Powered and secured by <a href="#">Wix</a></p>
                </div>
            </footer>
        </div>
    );
};

export default Account;
