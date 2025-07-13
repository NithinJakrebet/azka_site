import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';

export const pages = [
  { name: "Home", path: "/", icon: <HomeRoundedIcon /> },
  { name: "About Us", path: "/about", icon: <EmojiPeopleRoundedIcon /> },
  { name: "Gallery", path: "/gallery", icon: <PhotoLibraryRoundedIcon /> },
  { name: "Newsletter", path: "/newsletter", icon: <NewspaperRoundedIcon /> },
  // { name: "Contact", path: "/contact", icon: <MailOutlineRoundedIcon /> },
];

export const formConfig = {
  committeeMember: {
    item: "Committee Member",
    formFields: [
      { label: "Name", name: "name", type: "text" },
      { label: "Position", name: "position", type: "text" },
      { label: "Bio", name: "bio", type: "text", multiline: true, rows: 4 },
      { label: "Image URL", name: "imageUrl", type: "text" },
    ],
    emptyForm: {
      name: "",
      position: "",
      bio: "",
      imageUrl: "",
    },
  },
  album: {
    item: "Album",
    formFields: [
      { label: "Title", name: "title", type: "text" },
      { label: "Date", name: "date", type: "date" },
      { label: "Image URLs (comma-separated)", name: "images", type: "array" },
      { label: "Link to Full Album", name: "link", type: "text" }
    ],
    emptyForm: { title: "", date: "", images: [], link: "" },
  },
  event: {
    item: "Event",
    formFields: [
      { label: "Event Title", name: "title", type: "text" },
      { label: "Description", name: "description", type: "text", multiline: true, rows: 4 },
      { label: "Date", name: "date", type: "date" },
      { label: "Start Time", name: "startTime", type: "time" },
      { label: "End Time", name: "endTime", type: "time" },
      { label: "Location", name: "location", type: "text" },
    ],
    emptyForm: {
      title: "",
      description: "",
      date: "",
      startTime: "",
      endTime: "",
      location: "",
    },
  },
  newsletter: {
    item: "Newsletter",
    formFields: [
      { label: "Title", name: "title", type: "text" },
      { label: "Date", name: "date", type: "date" },
      { label: "Image URL", name: "imgURL", type: "text" },
      { label: "PDF URL (Google Drive Link)", name: "pdfURL", type: "text" },
    ],
    emptyForm: {
      title: "",
      date: "",
      imgURL: "",
      pdfURL: "",
    },
  },

}