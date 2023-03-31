import { useState, useEffect } from 'react';

import { IconButton, Tooltip, Zoom } from '@mui/material';

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import categoryProps from '../categoryProps';

const SideMenuContainer = styled('div')(({ theme }) => ({
  display: 'none',
  flexDirection: 'column',
  gap: '1rem',
  position: 'fixed',
  top: '50%',
  left: '5%',
  transform: 'translate(-50%, -50%)',
  color: '#fff',
  cursor: 'pointer',
  zIndex: '30',
  backgroundColor: '#111111',
  borderRadius: '20px',
  padding: '1rem',
  [theme.breakpoints.up('xl')]: {
    display: 'flex',
  },
}));

function SideMenu() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setShowSideMenu(true);
      } else {
        setShowSideMenu(false);
      }
    });
  }, []);
  return (
    <>
      {' '}
      {showSideMenu && (
        <SideMenuContainer>
          {categoryProps.map((page, index) => (
            <IconButton
              component={Link}
              to={page.url}
              sx={{
                '&:hover': {
                  color: `${categoryProps[index].color}`,
                },
              }}
              color="inherit"
            >
              <Tooltip
                title={page.name}
                TransitionComponent={Zoom}
                placement="right"
              >
                {page.icon}
              </Tooltip>
            </IconButton>
          ))}
        </SideMenuContainer>
      )}
      {' '}
    </>
  );
}
export default SideMenu;
