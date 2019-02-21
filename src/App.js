import React from 'react'

import {
  Grid,
  AppBar,
  CustomToolbar as Toolbar,
  Typography,
  Menu,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Link
} from './components/';

import challenges from './challenges.json';

import { useToggler } from './containers';

function App() {
  const { on, toggle } = useToggler();
  return (
    <Grid
      container
      direction="column">
      <Grid item>
        <AppBar position='static'>
          <Toolbar>
            <Typography
              align="center"
              variant='h4'>
              The Art of Sound
            </Typography>
            <IconButton onClick={toggle}>
              <Menu />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          open={on}
          onClose={toggle}
          anchor="right"
        >
          <List onClick={toggle}>
            {challenges.map(link => (
              <ListItem
                component={Link}
                to={link.to}>
                <ListItemText align="right">
                  {`Challenge ${link.id}`}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Grid>
      <Grid item>

      </Grid>
      <Grid item></Grid>

    </Grid>
  )
}

export default App
