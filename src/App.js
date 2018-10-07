import React from 'react';
import './App.css';
import 'typeface-roboto';
import { withStyles } from '@material-ui/core/styles';

import Items from './Items';
import AppBar from './AppBar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import { initItems } from './actions';
import { withI18n } from "react-i18next";
import ErrorBoundary from 'react-error-boundary';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const mapDispatchToProps = dispatch => ({
  init: () => dispatch(initItems())
})

class App extends React.Component {
  componentDidMount() {
    const { init } = this.props;
    init();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <ErrorBoundary><AppBar/></ErrorBoundary>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}> 
            <Grid container spacing={24}>
              <Grid item xs={1}/>
              <Grid item xs={10}>
                <ErrorBoundary><Items/></ErrorBoundary>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      </div>
    );
  }
}


export default connect(
  null, 
  mapDispatchToProps
)(withI18n()(withStyles(styles)(App)));
