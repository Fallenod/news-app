import { useState, useEffect } from 'react';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { IconButton, styled } from '@mui/material';

const ArrowButton = styled(IconButton)`
  position: fixed;
  bottom: 40px;
  right: 25px;
  height: 50px;
  width: 50px;
  color: #fff;
  cursor: pointer;
  z-index: 20;
`;

function ScrollToTopButton() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {' '}
      {showTopBtn && (
        // <FaAngleUp
        //     className="icon-position icon-style"
        //     onClick={goToTop}
        // />
        <ArrowButton onClick={goToTop}>
          <ArrowUpwardIcon />
        </ArrowButton>
      )}
      {' '}
    </>
  );
}
export default ScrollToTopButton;
