import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Link,
  TextField,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import logo from '../content/logo.png';
import categoryProps from '../categoryProps';

const styles = {
  rootBox: {
    justifyContent: 'center',
  },
  footerNav: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: '12px',
    marginBottom: '0',
  },
  footerLink: {
    color: 'white',
    marginLeft: '12px',
    marginRight: '12px',
  },
};

function Footer() {
  return (
    <footer>
      <Container maxWidth="lg">
        <Box
          py={6}
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          sx={styles.rootBox}
        >
          <IconButton size="small" aria-label="logo" color="inherit">
            <div style={{ width: '2.5rem' }}>
              <img
                style={{ width: '100%', height: '100%' }}
                alt="logo"
                src={logo}
              />
            </div>
          </IconButton>
          <Box component="nav" sx={styles.footerNav}>
            {categoryProps.map((page) => (
              <Button
                href={page.url}
                key={page.url}
                sx={{
                  my: 2,
                  color: 'white',
                  textAlign: 'center',
                  fontSize: '1rem',
                  display: 'block',
                  '&:hover': {
                    color: 'red',
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          {/* <Divider color="white" orientation="vertical" flexItem/> */}
          <Typography
            component="p"
            variant="caption"
            gutterBottom={false}
            color="white"
          >
            '© 2023 React Новости'
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}

export default Footer;
