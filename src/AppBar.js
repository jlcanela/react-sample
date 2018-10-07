import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Flag from 'react-flagkit';
import { withI18n } from "react-i18next";
import { connect } from 'react-redux'
import { selectLanguage } from './actions';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
};

const langToCountry = {
  en: 'GB',
  fr: 'FR',
}

function SimpleAppBar(props) {
  const { classes, languages, select, t } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.grow}>
            { t('Item selection')}
          </Typography>
         <div>
         {  languages.all.map( (lang) => 
              <IconButton key={lang}  variant="fab" disabled={lang === languages.current} onClick={() => select(lang)}>
              <Flag country={langToCountry[lang]} />
              </IconButton>
            )
         }
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  languages: state.languages,
})

const mapDispatchToProps = dispatch => ({
  select: id => dispatch(selectLanguage(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withI18n()(withStyles(styles)(SimpleAppBar)));
