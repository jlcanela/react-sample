import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SettingsIcon from '@material-ui/icons/Settings';
import moment from 'moment';
import 'moment/locale/fr';
import 'moment/locale/zh-cn';
import { withI18n } from "react-i18next";
import { connect } from 'react-redux'
import { selectItem } from './actions';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  selected: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
});

function Items(props) {
  const { classes, items, select, t, lang } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.head}>{t('Name')}</TableCell>
            <TableCell className={classes.head}>{t('Date')}</TableCell>
            <TableCell className={classes.head}>{t('Action')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
              
              items.map(item => {
                return (
                <TableRow key={item.id} className={item.selected ? classes.selected : classes.row}>
                    <TableCell component="th" scope="row">{item.name}
                    </TableCell>
                    <TableCell>{moment(item.date).locale(lang).format('LL')}</TableCell>
                    <TableCell>
                      { !item.selected && <SettingsIcon color="primary" onClick={() => select(item.id)}/>}
                    </TableCell>
                </TableRow>
                ) 
            })}
        </TableBody>
      </Table>
    </Paper>
  );
}

Items.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  items: state.items,
  languages: state.languages,
  lang: state.languages.current,
})


const mapDispatchToProps = dispatch => ({
  select: id => dispatch(selectItem(id))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withI18n()(withStyles(styles)(Items)));