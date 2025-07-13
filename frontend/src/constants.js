import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

export const pages = [
  { name: "Home", path: "/", icon: <HomeRoundedIcon /> },
  { name: "About Us", path: "/about", icon: <EmojiPeopleRoundedIcon /> },
  { name: "Gallery", path: "/gallery", icon: <PhotoLibraryRoundedIcon /> },
  { name: "Newsletter", path: "/newsletter", icon: <NewspaperRoundedIcon /> },
  { name: "Contact", path: "/contact", icon: <MailOutlineRoundedIcon /> },
];