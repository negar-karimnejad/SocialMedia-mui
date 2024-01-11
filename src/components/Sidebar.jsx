import {
  AccountBox,
  DarkMode,
  Group,
  Home,
  LightMode,
  Person,
  Settings,
  StickyNote2,
  Storefront,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Switch from "@mui/material/Switch";

const listItems = [
  { icon: <Home />, title: "Homepage" },
  { icon: <StickyNote2 />, title: "Pages" },
  { icon: <Group />, title: "Groups" },
  { icon: <Storefront />, title: "Marketplace" },
  { icon: <Person />, title: "Friends" },
  { icon: <Settings />, title: "Setting" },
  { icon: <AccountBox />, title: "Profile" },
];

// eslint-disable-next-line react/prop-types
export default function Sidebar({ dark, setDark }) {
  return (
    <Box position={"fixed"} sx={{ bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>
          {listItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>{dark ? <LightMode /> : <DarkMode />}</ListItemIcon>
              <Switch
                checked={dark}
                onChange={() => setDark((prev) => !prev)}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
