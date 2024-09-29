import React, { useEffect, useState } from 'react';
import styles from '../assets/css/Account.module.css';
import profileImg from '../assets/img/profile.png';
import menuImg from '../assets/img/menu.png';
import cameraImg from '../assets/img/photo-camera.png';
import downArrowImg from '../assets/img/downArrow.png';
{/*import inImg from '../assets/img/in.png';
import gitImg from '../assets/img/git.png';
import twitterImg from '../assets/img/twitter.png';
import instagramImg from '../assets/img/instagram.png';
import pdfImg from '../assets/img/pdf.png';
import starImg from '../assets/img/star.png';*/}

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
            <header className={`${styles['wrapper-header']} ${isHeaderHidden ? styles.hidden : ''}`}>
                <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <h1>Daniil Dmitrievich Shterkel</h1>
                </div>

                <div className={styles.headerRight}>
                    <a href="#" onClick={toggleSidebar}>
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
                <div className={`${styles.sidebar} ${isSidebarVisible ? styles.visible : ''}`} id="sidebar">
                    <div className={styles.sidebarLogin}>
                    <a href="#"><img src={profileImg} alt="Profile" />
                        <p>Log In</p>
                    </a>
                    </div>
                    <div className={styles.sidebarLine}></div>
                    <a href="#" onClick={toggleSidebar} className={styles.closebtn} id="closeSidebar">&times;</a>
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
                    <a href="#" id="sidebarToggleBtn" onClick={toggleSecondarySidebar}>
                    <img src={downArrowImg} alt="Toggle Sidebar" />
                    </a>
                </div>

                {/* Secondary Sidebar */}
                <div id="secondarySidebar" className={`${styles['secondary-sidebar']} ${isSecondarySidebarVisible ? styles.visible : ''}`}>
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

            <section className={styles['wrapper-account']}>
                <div className={styles['account']}>
                    <div className={styles['account-navigation']}>
                        <div className={styles['accountNavName']}>
                            <a href="#"><img src={menuImg} className={styles['NavNameImg']} id="NavNameBtn" alt="Menu"/></a>
                            <div className={styles['avatar-container']} id="avatar-container">
                                <img id="NavAvatar" src={profileImg} alt="User Avatar" className={styles['avatar']}/>
                                <div className={styles['camera-icon']}>
                                    <img src={cameraImg} alt="Change Avatar"/>
                                </div>
                            </div>

                            <input type="file" id="avatarInput" style={{display: 'none'}} />
                            <div id="thirdSidebar" className={styles['third-sidebar']}>
                                <a href="#" id="shareProfile">Share profile</a>
                                <a href="#">Edit profile</a>
                                <div className={styles['thirdSidebar-line']}></div>
                                <a href="#">Add badges</a>
                            </div>
                            <h1 id="userName">User</h1>
                            <p>Admin</p>
                            <div className={styles['NavNameSub']}>
                                <div className={styles['NameSubLeft']}>
                                    <p>0</p>
                                    <h2>followers</h2>
                                </div>
                                <div className={styles['NavNameLine']}></div>
                                <div className={styles['NameSubRight']}>
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

                        <div className={styles['accountNavButton']}>
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
                            <div className={styles['actionUp']}>
                                <div className={styles['actionUpLeft']}>
                                    <h3>Profile</h3>
                                    <p>Registration date: July 16, 2024</p>
                                </div>
                                <div className={styles['actionUpRight']}>
                                    <a href="#">Edit profile</a>
                                </div>
                            </div>
                            <div className={styles['actionLine']}></div>
                            <div className={styles['actionMiddle']}>
                                <p>About me</p>
                                <button>Tell us about yourself</button>
                            </div>
                            <div className={styles['actionDown']}>
                                <div className={styles['actionDownButton']}>
                                    <p>Posts</p>
                                    <a href="#">Create a post</a>
                                </div>
                                <div className={styles['actionLine']}></div>
                                <div className={styles['actionDownPosts']}>
                                    <div className={styles['downPostsButtons']}>
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
