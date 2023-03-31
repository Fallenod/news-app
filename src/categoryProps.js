import PaidIcon from '@mui/icons-material/Paid';
import StarsIcon from '@mui/icons-material/Stars';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ScienceIcon from '@mui/icons-material/Science';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import MemoryIcon from '@mui/icons-material/Memory';
import businessBg from './content/businessBg.svg';
import entertainmentBg from './content/entertainmentBg.svg';
import healthBg from './content/healthBg.svg';
import scienceBg from './content/scienceBg.svg';
import sportsBg from './content/sportsBg.svg';
import technologyBg from './content/technologyBg.svg';

const categoryProps = [
  {
    name: 'Бизнес',
    url: 'business',
    param: 'business',
    icon: <PaidIcon />,
    color: '#FFD669',
    bg: `${businessBg}`,
  },
  {
    name: 'Медиа',
    url: 'entertainment',
    param: 'entertainment',
    icon: <StarsIcon />,
    color: '#3A9CFC',
    bg: `${entertainmentBg}`,
  },
  {
    name: 'Здоровье',
    url: 'health',
    param: 'health',
    icon: <FavoriteBorderIcon />,
    color: '#FE6A77',
    bg: `${healthBg}`,
  },
  {
    name: 'Наука',
    url: 'science',
    param: 'science',
    icon: <ScienceIcon />,
    color: '#02D1B9',
    bg: `${scienceBg}`,
  },
  {
    name: 'Спорт',
    url: 'sports',
    param: 'sports',
    icon: <SportsBasketballIcon />,
    color: '#895BF7',
    bg: `${sportsBg}`,
  },
  {
    name: 'Технологии',
    url: 'technology',
    param: 'technology',
    icon: <MemoryIcon />,
    color: '#FDC799',
    bg: `${technologyBg}`,
  },
];
export default categoryProps;
