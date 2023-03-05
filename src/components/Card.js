import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        width: 300,
        border: '1px solid #ccc',
        margin: '3px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard({ user }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    ID : {user.id}
                </Typography>
                <Typography variant="h5" component="h2">
                    Name : {user.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    NickName : {user.username}
                </Typography>
                <Typography variant="body2" component="p">
                    email : {user.email}
                </Typography>
                <Typography variant="body2" component="p">
                    zip-code : {user.address.zipcode}
                </Typography>
            </CardContent>
        </Card>
    );
}