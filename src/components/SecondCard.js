import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';

export default function SimpleCard({ comments }) {
    return (
        <Card sx={{ width: 275, marginX: 1, marginY: 1 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    ID : {comments.id}
                </Typography>
                <Typography variant="h5" component="div">
                    Name : {comments.name}
                </Typography>
                <Typography variant="body2">
                    email : {comments.email}
                </Typography>
                <Typography variant="body3">
                    body :{comments.body}
                </Typography>
            </CardContent>
        </Card>
    );
}