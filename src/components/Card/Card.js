import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import './Card.css'

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
      <div id="EGA-singleCardWrapper">
        <Card className={classes.card}>
          <CardContent>
            <Typography
              className={classes.title}
              // color="textSecondary"
              gutterBottom
            >
              {this.props.collabName}
            </Typography>
            <div id="EGA-imageDiv">
              <img id="EGA-imageIcon" src={this.props.image} />
            </div>
            <Typography className={classes.pos} color="textSecondary">
              {this.props.appDesc}
            </Typography>
            <Typography component="p">
              Coders Needed: {this.props.coders}
            </Typography>
            <Typography component="p">
              Difficulty Rating:{' '}
              <i className="fa fa-star EGA-starFavIcon" aria-hidden="true" />{' '}
              <i className="fa fa-star EGA-starFavIcon" aria-hidden="true" />{' '}
              <i className="fa fa-star EGA-starFavIcon" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
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
              {this.props.collabName}
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              {this.props.appDesc}
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              Technologies used: {this.props.tech}
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              Help needed by: {this.props.timeline}
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
