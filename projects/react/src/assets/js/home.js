export const handleScroll = (setIsHeaderHidden) => {
    const scrollHandler = () => {
      if (window.scrollY > 200) {
        setIsHeaderHidden(true);
      } else {
        setIsHeaderHidden(false);
      }
    };
  
    window.addEventListener('scroll', scrollHandler);
  
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  };
  