
import styles from '../assets/styles';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/icons/Menu';
import AddCircle from '@material-ui/icons/AddCircle';
import RemoveCircle from '@material-ui/icons/RemoveCircle';
import MusicNote from '@material-ui/icons/MusicNote';
import MusicOff from '@material-ui/icons/MusicOff';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';


import { Link, Route, Switch } from 'react-router-dom';

const CustomToolbar = withStyles(styles.toolbar)(Toolbar);
const Note = withStyles(styles.note)(Button);
const Challenge = withStyles(styles.challenge)(List);

export {
  Challenge,
  Note,
  MusicNote,
  MusicOff,
  Divider,
  Grid,
  AppBar,
  CustomToolbar,
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
  AddCircle,
  RemoveCircle
}