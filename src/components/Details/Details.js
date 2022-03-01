import React from 'react';
import 'chart.js/auto';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useTransactions from '../../useTransactions';

import useStyles from './detailsStyles';

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);

  return ( 
    <Card className={title === 'Income' ? classes.income : classes.expense}>
       <CardHeader title={ title } />
       <CardContent>
           <Typography variant='h5'>NGN{total}</Typography>
           <Doughnut data={chartData} className={classes.doughnut} />
       </CardContent>
    </Card>
  )
};

export default Details;
