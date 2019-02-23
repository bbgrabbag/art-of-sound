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
  Note,
  MusicNote,
  MusicOff
} from './components/';

import challenges from './data/challenges.json';
import notes from './data/notes.json';

import { useToggler, useAudio } from './containers';

function App() {
  const [open, toggleMenu] = useToggler(false);
  const [display, toggleNotes] = useToggler(true);
  const [octave, handleOctave, start, stop] = useAudio();

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
            <IconButton onClick={toggleMenu}>
              <Menu />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          open={open}
          onClose={toggleMenu}
          anchor="right"
        >
          <List onClick={toggleMenu}>
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
                      align='center'>
                      {challenge.title}
                    </Typography>
                    <Divider />
                    <Challenge>
                      {challenge.instructions.map((instruction, i) => {
                        return (
                          <ListItem key={i}>
                            <ListItemText primary={instruction} />
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
        <IconButton
          onClick={handleOctave('up')}>
          <AddCircle />
        </IconButton>
        <Typography inline variant='caption'>
          Octave: {octave}
        </Typography>
        <IconButton
          onClick={handleOctave('down')}>
          <RemoveCircle />
        </IconButton>
        {
          display ?
            <IconButton onClick={toggleNotes}>
              <MusicOff />
            </IconButton> :
            <IconButton onClick={toggleNotes}>
              <MusicNote />
            </IconButton>
        }
        <Grid container>
          {
            notes.map(note => {
              return (
                <Grid key={note.id} item xs={4}>
                  <Note
                    color="secondary"
                    variant="contained"
                    className={note.color}
                    onTouchStart={start(note.pitch)}
                    onTouchEnd={stop}
                    onMouseDown={start(note.pitch)}
                    onMouseUp={stop}>
                    {display && note.name}
                  </Note>
                </Grid>
              )
            })
          }
          <Grid item xs={12}>
            <Typography align='center' variant='caption'>
              Press and HOLD
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App
