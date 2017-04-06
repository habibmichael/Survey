import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const QuestionCard = (props) => {
    console.log(props.data);

    const paperStyle={
        margin:20,
        padding:20
    }
    const cardStyle={
        width:'300px',
        height:'350px',
        margin:0,
        padding:0
    }
    return(
        <div>
            <Card
                style={cardStyle}
                >
                <CardMedia 
                    overlay={<CardTitle title={props.data.title}/>}>
                    <img src={props.data.img} height={150} width={250}/>
                </CardMedia> 
                <CardText>
                    {props.data.text}
                </CardText>
                <CardActions>
                    <RaisedButton label="Select" primary={true}/>
                </CardActions>
            </Card>
        </div>
    );
}

export default QuestionCard;