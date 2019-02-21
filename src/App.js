import React from 'react'

import {
  Grid,
  Challenge,
  AppBar,
  CustomToolbar as Toolbar,
  Typography,
  Menu,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Link,
  Route,
  Switch,
  Divider,
  AddCircle,
  RemoveCircle,
  Note
} from './components/';

import challenges from './data/challenges.json';
import notes from './data/notes.json';

import { useToggler } from './containers';

function App() {
  const { on, toggle } = useToggler();
  return (
    <Grid
      container
      direction="column">
      <Grid item>
        <AppBar
          position='static'
          color="secondary">
          <Toolbar>
            <Typography
              align="center"
              variant='h5'>
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
            {challenges.map(challenge => (
              <ListItem
                key={challenge.id}
                component={Link}
                to={challenge.to}>
                <ListItemText align="right">
                  {`Challenge ${challenge.id}`}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Grid>
      <Grid item>
        <Switch>
          {challenges.map(challenge => {
            return <Route
              key={challenge.id}
              exact
              path={challenge.to}
              render={() => {
                return (
                  <>
                    <Typography
                      variant='h6'
                      align='right'>
                      {challenge.title}
                    </Typography>
                    <Divider />
                    <Challenge>
                      {challenge.instructions.map((instruction, i) => {
                        return (
                          <ListItem key={i}>
                            <ListItemText>
                              {instruction}
                            </ListItemText>
                          </ListItem>
                        )
                      })}
                    </Challenge>
                  </>
                )
              }} />
          })}
        </Switch>
      </Grid>
      <Grid item>
        <IconButton>
          <AddCircle />
        </IconButton>
        <IconButton>
          <RemoveCircle />
        </IconButton>
        <Typography inline variant='caption'>
          Octave: 2
        </Typography>
        <Grid container>
          {
            notes.map(note => {
              return (
                <Grid key={note.id} item xs={4}>
                  <Note color="secondary" variant="contained" className={note.color}>{''}</Note>
                </Grid>
              )
            })
          }
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App
