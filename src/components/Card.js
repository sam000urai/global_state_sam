import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';

export default function SimpleCard({ user }) {
    return (
        <Card sx={{ width: 275, marginX: 1, marginY: 1 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    ID : {user.id}
                </Typography>
                <Typography variant="h5" component="div">
                    Name : {user.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    NickName : {user.username}
                </Typography>
                <Typography variant="body2">
                    email : {user.email}
                </Typography>
                <Typography variant="body3">
                    address :{user.address.zipcode}
                </Typography>
                <Typography variant="body4">
                    address :{user.address.geo.lat}
                </Typography>
            </CardContent>
        </Card>
    );
}