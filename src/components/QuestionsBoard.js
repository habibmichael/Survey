import React, {Component} from 'react';  
import QuestionCard from './QuestionCard'
import data from '../../data';
import Paper from 'material-ui/Paper'

class QuestionBoard extends Component{

    constructor(props){
        super(props);

    }
            
    render(){
        const paperStyle={
        margin:20,
        padding:20
    }
    const h2Style= {
        margin:5
    }
        return(
            <div>
                <Paper
                    style={paperStyle}>
                    <h2 style={h2Style}>Which Front-end Library/Framework do you want to cover?</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <QuestionCard
                                data={data[0]}
                                id={0}/>
                        </div>
                        <div className="col-md-6">
                            <QuestionCard
                                id={1}
                                data={data[1]}/>
                        </div>
                    </div>
                </Paper>
            </div>
        )
    }
}

export default QuestionBoard;