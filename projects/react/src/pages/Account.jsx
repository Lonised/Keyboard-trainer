import React, { useState } from 'react';
import styles from '../assets/css/Account.module.css';
import { images } from '../components/images';

const Account = () => {
    const [activeSection, setActiveSection] = useState('profile');
    const [prevSection, setPrevSection] = useState(null); 
    const [isAnimating, setIsAnimating] = useState(false)

    const handleSectionChange = (section) => {
    if (!isAnimating && activeSection !== section) {
        setPrevSection(activeSection);
        setIsAnimating(true);
        setTimeout(() => {
            setActiveSection(section);
                setActiveSection(section);
                setIsAnimating(false);
        }, 100);
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
                    <a href="#">
                        <img src={images.menuImg} className={styles['headerRight-img']} id="burger-menu" alt="Menu" />
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

            <section className={styles['wrapper-account']}>
                <div className={styles['account']}>
                    <div className={styles['account-navigation']}>
                        <div className={styles['accountNavName']}>
                            <a href="#"><img src={images.menu} className={styles['NavNameImg']} id="NavNameBtn" alt="Menu" /></a>
                            <div className={styles['avatar-container']} id="avatar-container">
                                <img id="NavAvatar" src={images.profile} alt="User Avatar" className={styles['avatar']} />
                                <div className={styles['camera-icon']}>
                                    <img src={images.camera} alt="Change Avatar" />
                                </div>
                            </div>

                            <input type="file" id="avatarInput" style={{ display: 'none' }} />
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

                            <div id="cropperModal" style={{ display: 'none' }}>
                                <div>
                                    <img id="cropperImage" src="" alt="Image for cropping" />
                                </div>
                                <button id="cropButton">Crop</button>
                            </div>
                        </div>

                        <div className={styles['accountNavButton']}>
                            <a href="#" onClick={() => handleSectionChange('profile')} data-section="profile">Profile</a>
                            <a href="#" onClick={() => handleSectionChange('my-orders')} data-section="my-orders">My Orders</a>
                            <a href="#" onClick={() => handleSectionChange('files')} data-section="files">Files</a>
                            <a href="#" onClick={() => handleSectionChange('my-account')} data-section="my-account">My Account</a>
                            <a href="#" onClick={() => handleSectionChange('notifications')} data-section="notifications">Notifications</a>
                            <a href="#" onClick={() => handleSectionChange('settings')} data-section="settings">Settings</a>
                            <a href="#" id="logoutBtn">Log Out</a>
                        </div>
                    </div>

                    {/* Секции */}
                    {activeSection === 'profile' && (
                        <div className={`${styles['account-action']} ${styles['account-section']} ${prevSection === 'profile' ? styles['slide-out'] : ''} ${activeSection === 'profile' ? styles['slide-in'] : styles.hidden}`}>
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
                    )}

                    {activeSection === 'my-orders' && (
                        <div className={`${styles['account-MyOrders']} ${styles['account-section']} ${prevSection === 'my-orders' ? styles['slide-out'] : ''} ${activeSection === 'my-orders' ? styles['slide-in'] : styles.hidden}`}>
                            <div className={styles["MyOrders"]}>
                                <h3>My orders</h3>
                                <p>View your order history and check the status of recent orders</p>
                                <div className={styles['actionLine']}></div>
                                <div className={styles['MyOrdersFunction']}>
                                    <h4>You haven't ordered anything yet.</h4>
                                    <a href="#">Look</a>
                                </div>      
                                <div className={`${styles['actionLine']}`}></div>
                            </div>
                        </div>
                    )}

                    {activeSection === 'files' && (
                        <div className={`${styles['account-files']} ${styles['account-section']} ${prevSection === 'files' ? styles['slide-out'] : ''} ${activeSection === 'files' ? styles['slide-in'] : styles.hidden}`}>
                            <div className={`${styles['files']}`}>
                                <div className={`${styles['filesUp']}`}>
                                    <h3>Files and folders</h3>
                                    <p>Below are the files uploaded by the user.</p>
                                </div>
                                <div className={`${styles['filesMiddle']}`}>
                                    <a href="#">Downloads</a>
                                    <a href="#">Favorites</a>
                                </div>
                                <div className={`${styles['filesLine']}`}></div>
                                <div className={`${styles['filesDown']}`}>
                                    <div className={`${styles['filesDownButton']}`}>
                                        <p>Item name</p>
                                        <a href="#">Update</a>
                                    </div>
                                    <div className={`${styles['filesLine']}`}></div>
                                    <div className={`${styles['filesDownFunction']}`}>
                                        <div className={`${styles['filesFunctionExample']}`}>
                                            <div className={`${styles['filesFunctionName']}`}>
                                                <img src={images.pdfExample} alt="#" />
                                                <div className={`${styles[`filesFunctionNameDop`]}`}>
                                                    <a href="#">File name</a>
                                                    <p>4.15 MB</p>
                                                </div>
                                            </div>
                                            <div className={`${styles['fileFunctionInfo']}`}>
                                                <p className={`${styles['fileFunctionTime']}`}>15 July 2024</p>
                                                <img src={images.star} alt="#" />
                                                <img src={images.menu} alt="#" />
                                            </div>
                                        </div>
                                        <div className={`${styles['filesLine']}`}></div>
                                        <div className={`${styles['filesFunctionExample']}`}>
                                            <div className={`${styles['filesFunctionName']}`}>
                                                <img src={images.pdfExample} alt="#" />
                                                <div className={`${styles[`filesFunctionNameDop`]}`}>
                                                    <a href="#">File name</a>
                                                    <p>4.15 MB</p>
                                                </div>
                                            </div>
                                            <div className={`${styles['fileFunctionInfo']}`}>
                                                <p className={`${styles['fileFunctionTime']}`}>15 July 2024</p>
                                                <img src={images.star} alt="#" />
                                                <img src={images.menu} alt="#" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles['filesLine']}`}></div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeSection === 'my-account' && (
                        <div className={`${styles['account-my']} ${styles['account-section']} ${prevSection === 'my-account' ? styles['slide-out'] : ''} ${activeSection === 'my-account' ? styles['slide-in'] : styles.hidden}`}>
                            <div className={styles['myAccount']}>
                                <div className={styles['myAccountUp']}>
                                    <div className={styles['myAccountUpLeft']}>
                                        <h1>Account</h1>
                                        <p>View and edit information about yourself</p>
                                    </div>
                                    <div className={styles['myAccountUpRight']}>
                                        <button className={styles['myAccountReset']}>Reset</button>
                                        <button className={styles['myAccountUpdate']}>Update</button>
                                    </div>
                                </div>
                                <div className={styles['actionLine']}></div>
                                <div className={styles['myAccountLogin']}>
                                    <h2>Basic information</h2>
                                    <p>This information will be visible to all site users</p>
                                    <div className={styles['myAccountLoginInput']}>
                                        <div className={styles['myAccountLoginInputDown']}>
                                            <p>Display name *</p>
                                            <input type="text" />
                                        </div>
                                        <div className={styles['myAccountLoginInputDown']}>
                                            <p>Name</p>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className={styles['actionLine']}></div>
                                    <h2>Personal data</h2>
                                    <p>Update your personal information</p>
                                    <div className={styles['myAccountLoginInfo']}>
                                        <div className={styles['myAccountLoginInputDown']}>
                                            <p>First Name</p>
                                            <input type="text" />
                                        </div>
                                        <div className={styles['myAccountLoginInputDown']}>
                                            <p>Last Name</p>
                                            <input type="text" />
                                        </div>
                                        <div className={styles['myAccountLoginInputDown']}>
                                            <p>Phone</p>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className={styles['myAccountLoginButton']}>
                                        <button className={styles['myAccountReset']}>Reset</button>
                                        <button className={styles['myAccountUpdate']}>Update</button>
                                    </div>
                                </div>
                                <div className={styles['actionLine']}></div>
                                <div className={styles['myAccountDown']}>
                                    <h2>Account login information</h2>
                                    <p>View and update your login email and password</p>
                                    <h2>Email for login:</h2>
                                    <p>daniilshterkel05@gmail.com</p>
                                    <h2>Password:</h2>
                                    <p>******</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeSection === 'notifications' && (
                        <div className={`${styles['account-notifications']} ${styles['account-section']} ${prevSection === 'notifications' ? styles['slide-out'] : ''} ${activeSection === 'notifications' ? styles['slide-in'] : styles.hidden}`}>
                            <div className={styles['notifications']}>
                                <h1>Notifications</h1>
                                <div className={styles['actionLine']}></div>
                                <div className={styles['notifications-function']}></div>
                                <div className={styles['notification-alert']}>
                                    <h2>No notifications yet</h2>
                                    <p>Notifications will appear here when you start leaving comments, following members, and liking posts.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeSection === 'settings' && (
                        <div className={`${styles['account-settings']} ${styles['account-section']} ${prevSection === 'settings' ? styles['slide-out'] : ''} ${activeSection === 'settings' ? styles['slide-in'] : styles.hidden}`}>
                            <div className={styles['settings']}>
                                <div className={styles['settingsUp']}>
                                    <h2>Setting up notifications</h2>
                                    <p>Choose which notifications you want to receive</p>
                                </div>
                                <div className={styles['actionLine']}></div>
                                <div className={styles['settingsDown']}>
                                    <h2>Notifications by email</h2>
                                </div>
                            </div>
                        </div>
                    )}

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
                                <img src={images.linkedin} alt="LinkedIn" />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                        <div className={styles.faqRightIcon}>
                            <a href="https://github.com/Lonised" target="_blank" rel="noopener noreferrer">
                                <img src={images.github} alt="GitHub" />
                                <span>GitHub</span>
                            </a>
                        </div>
                        <div className={styles.faqRightIcon}>
                            <a href="https://x.com/lonised_" target="_blank" rel="noopener noreferrer">
                                <img src={images.twitter} alt="Twitter" />
                                <span>Twitter</span>
                            </a>
                        </div>
                        <div className={styles.faqRightIcon}>
                            <a href="https://www.instagram.com/lonised_/" target="_blank" rel="noopener noreferrer">
                                <img src={images.instagram} alt="Instagram" />
                                <span>Instagram</span>
                            </a>
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
