import BusinessIcon from '@mui/icons-material/Business';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ScienceIcon from '@mui/icons-material/Science';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import MemoryIcon from '@mui/icons-material/Memory';
 
 const categoryProps = [
    {
      "name": "Бизнес",
      "url": "business",
      "param": "category=business",
      "icon": <BusinessIcon/>,
    },
    {
      "name": "Медиа",
      "url": "entertainment",
      "param": "category=entertainment",
      "icon": <LiveTvIcon/>,
    },
    {
      "name": "Здоровье",
      "url": "health",
      "param": "category=health",
      "icon": <FavoriteBorderIcon/>,
    },
    {
      "name": "Наука",
      "url": "science",
      "param": "category=science",
      "icon": <ScienceIcon/>,
    },
    {
      "name": "Спорт",
      "url": "sports",
      "param": "category=sports",
      "icon": <SportsBasketballIcon/>,
    },
    {
      "name": "Технологии",
      "url": "technology",
      "param": "category=technology",
      "icon": <MemoryIcon/>,
    },
  ]
  export default categoryProps