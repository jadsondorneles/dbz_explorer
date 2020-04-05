import React from 'react'
import { NavLink  } from 'react-router-dom'
import clsx from 'clsx'

import { Menu, ItemMenu, Logo, SphereMenu } from '../styles'
import logo from '../../../assets/img/logo.svg'
import sphere1 from '../../../assets/img/1-estrela.svg'

import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import DrawIcon from '../../../assets/img/menu.svg'
import DBZLogo from '../../../assets/img/logo.svg'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  drawicons: {
    width: 30,
  },
  btnDraw: {
    padding: 0,
    minWidth: 0,
    width: 42,
    height: 42,
    borderRadius: '50%',
    position: 'relative',
    left: 15,
    top: 15,
  },
  logoMobile: {
    width: 110,
    position: 'absolute',
    left: 81,
    top: 22,
  },
  MenuItem: {
    display: 'block',
  },
  menuContent: {
    background: 'var(--primario)',
  },
  '& .MuiPaper-root.MuiDrawer-paper.MuiDrawer-paperAnchorLeft': {
    background: 'var(--primario) !important',
  },
  '@media (min-width: 801px)': {
    btnDraw: {
      display: 'none !important'
    },
    logoMobile: {
      display: 'none !important'
    },
  }
});

export default function DrawMobile() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      }, classes.menuContent)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Menu className={classes.MenuItem} id="menuItem">
          <ItemMenu>
              <Logo src={logo} />
          </ItemMenu>
          <ItemMenu>
              <NavLink exact activeClassName="active" to="/">
                  <SphereMenu src={sphere1} className="rotating" /> Home
              </NavLink >
          </ItemMenu>
          <ItemMenu>
              <NavLink strict activeClassName="active" to="/Planets">
                  <SphereMenu src={sphere1} className="rotating" /> Planets
              </NavLink >
          </ItemMenu>
          <ItemMenu>
              <NavLink strict activeClassName="active" to="/Fighters">
                  <SphereMenu src={sphere1} className="rotating" /> Fighters
              </NavLink >
          </ItemMenu>
      </Menu>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} className={classes.btnDraw} id="btnDraw"><img className={classes.drawicons} src={DrawIcon} alt="" /> </Button>
          <img className={classes.logoMobile} src={DBZLogo} alt="logo"/>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}