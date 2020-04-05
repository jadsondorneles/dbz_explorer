import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import CircularProgress2 from '@material-ui/core/CircularProgress'

const ColorCircularProgress = withStyles({
  root: {
    color: 'var(--terciario)',
  },
})(CircularProgress2)

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '188px',
  },
  margin: {
    margin: theme.spacing(1),
  },
  descricao: {
      fontSize: 12,
      color: 'var(--terciario)',
      margin: '5px 0 0 0',
  }
}))

export default function CircularProgress(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ColorCircularProgress size={65} thickness={3} />
      <p className={classes.descricao}>Please Wait. Loading...</p>
    </div>
  )
}