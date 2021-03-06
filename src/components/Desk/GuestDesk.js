import React, { Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import '../../App.css';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Divider from '@material-ui/core/Divider';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import clsx from 'clsx';
//import makeStyles from '@material-ui/styles';

import { Paper,Typography, makeStyles, Box} from '@material-ui/core';


/*constructor(props){
    super(props);
    this.AddTask = this.AddTask.bind(this); 
    this.AddBtn = this.AddBtn.bind(this); 
}*/
/*AddTask(){
return (
  <textarea>
    
  </textarea>
)
}*/


//попытка сделать хедер без теней
/* function ElevationScroll(props) {
  return React.cloneElement({
    elevation: 0,
  });
} */

const useStyles = makeStyles({
  linkstyle:{
    underline: "none",
    color: "white",
    paddingRight: 30,
    fontSize: 20
  },
  appbarstyle:{
    elevation: 0,
    
  },
  
  descrstyle:{
    /*высоту надо будет высчитывать исходя из длины/высоты текста */
    height: "100px",
  },
  
});

const useStyles2 = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  btnclr1:{
    color: "white",
    height: "10px",
  },
}));


const useStyles3 = makeStyles((theme) => ({
  root: {
    width: '100%',
    borderRadius: 20,
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    
    
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export default function DeskName(){
  const linksunderline = useStyles();
  const styles2 = useStyles2();
    const classes1 = useStyles3();
    return(
  <div>
{/*хедер на замену*/}
        
        <AppBar position="static" className={linksunderline.appbarstyle}>
          <Toolbar className={linksunderline.appbarstyle}>   
    
            <Link href="/" className={linksunderline.linkstyle} >Главная</Link>
            <Link href="/guests" className={linksunderline.linkstyle} >Доска Задач</Link>
            <Link href="/guestD" className={linksunderline.linkstyle} >Доска</Link>
            
            <h4  className={linksunderline.linkstyle}  >DeskName</h4>
            <h3 className={linksunderline.linkstyle} >UserName</h3>
            <Link href="/" className={linksunderline.linkstyle} >Выход</Link>
          </Toolbar>
        </AppBar>
 




    <div>
     
{/*стыбженный код c раскрывающимся описанием */}
      <div className={classes1.root}>
      <ExpansionPanel defaultExpanded className={classes1.root}>
        <ExpansionPanelSummary
       
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes1.column}>
            <Typography className={classes1.heading}>Описание доски</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes1.details}>
          <div className={classes1.column} />
          <div className={classes1.column}>
            <Typography>Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,</Typography>
            
          </div>
          <div className={clsx(classes1.column, classes1.helper)}>
            <Typography variant="caption">
              Здесь будет описание доски
              <br />
              {/* <a href="#secondary-heading-and-columns" className={classes1.link}>
                Learn more
              </a> */}
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small">Отмена</Button>
          <Button size="small" color="primary">
            Сохранить
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>


    <div className={classes1.root}>
      <ExpansionPanel defaultExpanded className={classes1.root}>
        <ExpansionPanelSummary
       
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes1.column}>
            <Typography className={classes1.heading}>Фильтры</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes1.details}>
          <div className={classes1.column} />
            <div className={classes1.column}>
            <Chip label="Название задачи" onDelete={() => {}} />
            <Chip label="Участник: Петя" onDelete={() => {}} />
              
            </div>
          <div className={clsx(classes1.column, classes1.helper)}>
            <Typography variant="caption">
              Примененные фильтры
              {/* <a href="#secondary-heading-and-columns" className={classes1.link}>
                Learn more
              </a> */}
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small">Отмена</Button>
          <Button size="small" color="primary">
            Применить
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>

    </div>
    
    
    
  {/*страшная конструкция*/}
    <Paper elevation = "0">
      
      <Typography className="marg1">
        <Container maxWidth="xl"  >
          <Typography component="div" style={{ backgroundColor: '#ffffff', height: '100vh' }}>
            <div className={styles2.root}>
            <Button className={styles2.paper}variant="outlined" color="primary">+Добавить колонку</Button>
              <Grid container spacing={0}>
                 <Grid item xs={12}>
                  <Button className={styles2.paper}variant="outlined" color="primary">+Добавить колонку</Button>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={styles2.paper}>
                    <Typography><h3>Task Name</h3>
                      <button >+Добавить задачу</button>
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={styles2.paper}>
                    <Typography><h3>Task Name</h3>
                      <button >+Добавить задачу</button>
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={styles2.paper}>
                    <Typography><h3>Task Name</h3>
                      <button >+Добавить задачу</button>
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={styles2.paper}>
                    <Typography><h3>Task Name</h3>
                      <button >+Добавить задачу</button>
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </Typography>
        </Container>
          
      </Typography>
    </Paper>
   
  
  </div>
    );
  }
  
