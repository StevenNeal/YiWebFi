import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Select,
  MenuItem,
  FormControl
} from '@material-ui/core';
import { colors } from '../../theme'

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import SecurityIcon from '@material-ui/icons/Security';
import DescriptionIcon from '@material-ui/icons/Description';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import ForumIcon from '@material-ui/icons/Forum';
import BarChartIcon from '@material-ui/icons/BarChart';
import BuildIcon from '@material-ui/icons/Build';

import Store from "../../stores";
const store = Store.store

const styles = theme => ({
  footer: {
    padding: '24px',
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    background: colors.white,
    borderRadius: '50px 50px 0px 0px',
    border: '1px solid '+colors.borderBlue,
    borderBottom: 'none',
    marginTop: '48px',
    flexWrap: 'wrap',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
    }
  },
  heading: {
    marginBottom: '12px',
    paddingBottom: '9px',
    borderBottom: "3px solid "+colors.borderBlue,
    width: 'fit-content',
    marginLeft: '30px'
  },
  link: {
    paddingBottom: '12px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  icon: {
    fill: colors.borderBlue,
    marginRight: '6px'
  },
  yearnIcon: {
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  builtWith:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  },
  builtWithLink: {
    paddingTop: '12px'
  },
  builtHeading: {
    marginBottom: '12px',
    paddingBottom: '9px',
    borderBottom: "3px solid "+colors.borderBlue,
    width: 'fit-content',
  },
  products: {
    padding: '0px 24px',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: '24px'
    }
  },
  community: {
    padding: '0px 24px',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: '24px'
    }
  },
  socials: {
    padding: '0px 24px'
  }
});


class Footer extends Component {

  constructor(props) {
    super()
  }

  render() {
    const { classes, t, location } = this.props;

    return (
      <div className={classes.footer}>
        <div className={ classes.builtWith }>
          <Typography className={ classes.builtHeading } variant={ 'h6'}>ygov.finance</Typography>
          <img
            alt=""
            src={ require('../../assets/YFI-logo.png') }
            height={ '120px' }
            width={ '120px' }
          />
        </div>
        <div className={ classes.products }>
          <Typography className={ classes.heading } variant={ 'h6'}>Products</Typography>
          <div  className={ classes.link } onClick={()=> window.open("https://yearn.finance", "_blank")} >
            <AttachMoneyIcon height='15px' className={ classes.icon } />
            <Typography variant={ 'h4'} >yearn.finance</Typography>
          </div>
          <div  className={ classes.link } onClick={()=> window.open("https://ygov.finance", "_blank")} >
            <HowToVoteIcon height='15px' className={ classes.icon } />
            <Typography variant={ 'h4'} >ygov.finance</Typography>
          </div>
          <div  className={ classes.link } onClick={()=> window.open("https://yinsure.finance", "_blank")} >
            <SecurityIcon height='15px' className={ classes.icon } />
            <Typography variant={ 'h4'} >yinsure.finance</Typography>
          </div>
          <div  className={ classes.link } onClick={()=> window.open("https://yborrow.finance", "_blank")} >
            <MonetizationOnIcon height='15px' className={ classes.icon } />
            <Typography variant={ 'h4'} >yborrow.finance</Typography>
          </div>
          <div  className={ classes.link } onClick={()=> window.open("https://docs.yearn.finance", "_blank")} >
            <DescriptionIcon height='15px' className={ classes.icon } />
            <Typography variant={ 'h4'} >docs.yearn.finance</Typography>
          </div>
        </div>
        <div className={ classes.community }>
          <Typography className={ classes.heading } variant={ 'h6'}>Community</Typography>
          <div  className={ classes.link } onClick={()=> window.open("https://ycosystem.info", "_blank")} >
            <DescriptionIcon height='15px' className={ classes.icon } />
            <Typography variant={ 'h4'} >ycosystem.info</Typography>
          </div>
          <div  className={ classes.link } onClick={()=> window.open("https://www.learnyearn.finance", "_blank")}>
            <DescriptionIcon height='15px' className={ classes.icon } />
            <Typography variant={ 'h4'} >learnyearn.finance</Typography>
          </div>
          <div  className={ classes.link } onClick={()=> window.open("https://stats.finance/yearn", "_blank")} >
            <BarChartIcon height='15px' className={ classes.icon } />
            <Typography variant={ 'h4'} >stats.finance</Typography>
          </div>
          <div  className={ classes.link } onClick={()=> window.open("https://yieldfarming.info", "_blank")} >
            <BarChartIcon height='15px' className={ classes.icon } />
            <Typography variant={ 'h4'} >yieldfarming.info</Typography>
          </div>
          <div  className={ classes.link } onClick={()=> window.open("https://feel-the-yearn.app", "_blank")} >
            <BarChartIcon height='15px' className={ classes.icon } />
            <Typography variant={ 'h4'} >feel-the-yearn.app</Typography>
          </div>
          <div  className={ classes.link } onClick={()=> window.open("https://yearn.snapshot.page", "_blank")} >
            <ForumIcon height='15px' className={ classes.icon } />
            <Typography variant={ 'h4'} >yearn.snapshot.page</Typography>
          </div>
        </div>
        <div className={ classes.socials }>
          <Typography className={ classes.heading } variant={ 'h6'}>Socials</Typography>
          <div  className={ classes.link } onClick={()=> window.open("https://twitter.com/iearnfinance", "_blank")} >
            <img alt="" src={ require('../../assets/twitter.svg') } height='24px' className={ classes.icon } />
            <Typography variant={ 'h4'} >Twitter</Typography>
          </div>
          <div  className={ classes.link } onClick={()=> window.open("https://medium.com/iearn", "_blank")} >
            <img alt="" src={ require('../../assets/medium.svg') } height='24px' className={ classes.icon } />
            <Typography variant={ 'h4'} >Medium</Typography>
          </div>
          <div  className={ classes.link } onClick={()=> window.open("https://discord.gg/GcjxhWR", "_blank")} >
            <img alt="" src={ require('../../assets/discord.svg') } height='24px' className={ classes.icon } />
            <Typography variant={ 'h4'} >Discord</Typography>
          </div>
          <div  className={ classes.link } onClick={()=> window.open("https://t.me/yearnfinance", "_blank")} >
            <img alt="" src={ require('../../assets/telegram.svg') } height='24px' className={ classes.icon } />
            <Typography variant={ 'h4'} >Telegram</Typography>
          </div>
          <div  className={ classes.link } onClick={()=> window.open("https://github.com/iearn-finance", "_blank")} >
            <img alt="" src={ require('../../assets/github.svg') } height='24px' className={ classes.icon } />
            <Typography variant={ 'h4'} >Github</Typography>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(withStyles(styles)(Footer));
