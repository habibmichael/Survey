import React from 'react'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const SurveyAppBar = () => {
    return(
        <div>
            <AppBar title="Survey"
                    iconElementRight={<FlatButton label="Instructor Login"/>}/>  
        </div>
    )
}

export default SurveyAppBar;