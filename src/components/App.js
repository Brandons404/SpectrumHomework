import React from "react";
import "./styles/styles.css";
import customer from "../models/customer.json";
//Material-UI Components
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function calcPoints(amount) {
  amount = Math.trunc(amount);
  let total = 0;
  if (amount >= 100) {
    total += 50;
    total += (amount - 100) * 2;
  } else if (amount < 100 && amount >= 50) {
    total += (amount - 50);
  } else if (amount < 50) {
    return total;
  }
  return total;
};

const useStyles = makeStyles({
  table1: {
    //
  },
  container: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  header: {
    fontWeight: "bold",
  },
  paper: {
    width: "12%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2.5%",
    height: "20%",
  },
  total: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
});

export default function App() {
  const classes = useStyles();

  const customerM1 = customer.month1;
  const customerM2 = customer.month2;
  const customerM3 = customer.month3;

  let tempTableM1 = [];
  let tempTableM2 = [];
  let tempTableM3 = [];

  let totalMonth1Points = 0;
  let totalMonth2Points = 0;
  let totalMonth3Points = 0;


  for (let day in customerM1) {
    const key = customerM1[day];
    const transactionPoints = calcPoints(key.spent)
    tempTableM1.push((
      <TableRow key={key}>
        <TableCell component="th" scope="row">
          {Number(day) + 1}
        </TableCell>
        <TableCell align="right">${key.spent}</TableCell>
        <TableCell align="right">{transactionPoints}</TableCell>
      </TableRow>
    ));
    totalMonth1Points += transactionPoints;
  };

  for (let day in customerM2) {
    const key = customerM2[day];
    const transactionPoints = calcPoints(key.spent)
    tempTableM2.push((
      <TableRow key={key}>
        <TableCell component="th" scope="row">
          {Number(day) + 1}
        </TableCell>
        <TableCell align="right">${key.spent}</TableCell>
        <TableCell align="right">{transactionPoints}</TableCell>
      </TableRow>
    ));
    totalMonth2Points += transactionPoints;
  };

  for (let day in customerM3) {
    const key = customerM3[day];
    const transactionPoints = calcPoints(key.spent)
    tempTableM3.push((
      <TableRow key={key}>
        <TableCell component="th" scope="row">
          {Number(day) + 1}
        </TableCell>
        <TableCell align="right">${key.spent}</TableCell>
        <TableCell align="right">{transactionPoints}</TableCell>
      </TableRow>
    ));
    totalMonth3Points += transactionPoints;
  };

  const totalPoints = totalMonth1Points + totalMonth2Points + totalMonth3Points;  

  return (
    <div className="app">
        <div className="table1">
          <Typography style={{ marginBottom: "1%", fontWeight: "bold" }}>Month 1</Typography>
        <TableContainer className={classes.container} component={Paper}>
        <Table className={classes.table1} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.header}>Day of Month</TableCell>
              <TableCell className={classes.header} align="right">Amount Spent</TableCell>
              <TableCell className={classes.header} align="right">Transaction Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tempTableM1}
            <TableCell align="left">Total Month Points:</TableCell>
            <TableCell ></TableCell>
            <TableCell align="right">{totalMonth1Points}</TableCell>
          </TableBody>
        </Table>
      </TableContainer>
      </div>

      <div className="table2">
          <Typography style={{ marginBottom: "1%", fontWeight: "bold" }}>Month 2</Typography>
        <TableContainer className={classes.container} component={Paper}>
        <Table className={classes.table1} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.header}>Day of Month</TableCell>
              <TableCell className={classes.header} align="right">Amount Spent</TableCell>
              <TableCell className={classes.header} align="right">Transaction Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tempTableM2}
            <TableCell align="left">Total Month Points:</TableCell>
            <TableCell ></TableCell>
            <TableCell align="right">{totalMonth2Points}</TableCell>
          </TableBody>
        </Table>
      </TableContainer>
      </div>

      <div className="table3">
          <Typography style={{ marginBottom: "1%", fontWeight: "bold" }}>Month 3</Typography>
        <TableContainer className={classes.container} component={Paper}>
        <Table className={classes.table1} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.header}>Day of Month</TableCell>
              <TableCell className={classes.header} align="right">Amount Spent</TableCell>
              <TableCell className={classes.header} align="right">Transaction Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tempTableM3}
            <TableCell align="left">Total Month Points:</TableCell>
            <TableCell ></TableCell>
            <TableCell align="right">{totalMonth3Points}</TableCell>
          </TableBody>
        </Table>
      </TableContainer>
      </div>

      <Paper className={classes.paper} elevation={3}>
        <Typography className={classes.total}>Total points:</Typography>
        <Typography style={{ marginTop: "15%", marginBottom: "15%" }} className={classes.total}>{totalPoints}</Typography>
      </Paper>
      <Button href="https://github.com/Brandons404/SpectrumHomework.git" style={{ height: 30, right: "4%", top: "90%", position: "fixed", backgroundColor: "rgb(80, 80, 80)", color: "white", fontWeight: "bold" }} size="large" variant="contained" color="primary">
        Github Repo
      </Button>
      
    </div>
  );
}
