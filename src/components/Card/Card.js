import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const styles = theme => ({
  card: {
    maxWidth: 250,
  },
  title: {
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
})

class appCard extends React.Component {
  state = {
    open: false,
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { classes } = this.props

    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              className={classes.title}
              // color="textSecondary"
              gutterBottom
            >
              App Title Here
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              description of app here description of app here description of app
              here description of app here description of app here description
              of app here
            </Typography>
            <Typography component="p">
              Coders Needed:
              {/* insert number here */}
            </Typography>
            <Typography component="p">
              Difficulty Rating:
              {/* insert number here */}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.handleOpen}
            >
              Collab
            </Button>
          </CardActions>
        </Card>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              App Title
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              More detailed description here
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              How hard the app is going to be and necessary technologies
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              Other stuff
            </Typography>
            {/* <SimpleModalWrapped /> */}
          </div>
        </Modal>
      </div>
    )
  }
}

appCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(appCard)
