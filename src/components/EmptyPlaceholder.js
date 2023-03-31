import { Paper, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Stack } from '@mui/system';
import logo from '../content/emptyLogo.png';

function EmptyPlaceholder({ emptyText = 'Нет данных' }) {
  return (
    <Grid2
      container
      xs={12}
      sx={{ height: '100%' }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid2
        alignItems="center"
        justifyContent="center"
        item
        xs={6}
      >
        <Paper
          elevation={0}
          sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent',
          }}
        >
          <Paper elevation={0} sx={{ backgroundColor: 'transparent' }}>
            <img draggable="false" sx={{ userSelect: 'none' }} src={logo} />
          </Paper>
          <Typography variant="subtitle1" component="p" sx={{ fontFamily: 'Comfortaa', userSelect: 'none' }}>{emptyText}</Typography>
        </Paper>
      </Grid2>
    </Grid2>
  );
}

export default EmptyPlaceholder;
