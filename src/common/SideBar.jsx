import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function ListaPrueba() {
  const [state, setState] = React.useState({
    left: false,
  });
const navigate = useNavigate()
const redirigir =(ruta)=>{
  navigate(ruta)
}

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ left: open });
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className="d-flex flex-column justify-content-center align-items-center mt-5 ">
        <ListItemButton
          onClick={() => redirigir("/home")}
          component="a"
          className="w-100"
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItemButton>
        <ListItemButton
          onClick={() => redirigir("/cap-humano")}
          component="a"
          className="w-100"
        >
          <ListItemIcon>
            <AssignmentIndIcon />
          </ListItemIcon>
          <ListItemText primary="Capital Humano" />
        </ListItemButton>
        <ListItemButton
          onClick={() => redirigir("/reclamos-estadisticas")}
          component="a"
          className="w-100"
        >
            <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Reclamos" />
        </ListItemButton>
      
      </div>
    </Box>
  );

  return (
    <div>
      <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
