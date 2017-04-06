import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';



const LoginForm = () => {
    const style={
        width:'90%'
    }
    return(
        <div>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <TextField 
                        floatingLabelText="First Name"
                        floatingLabelFixed={true}
                        id="first_name"
                        style={style}
                    /><br/>
                </div>
            </div>
             <div className="row">
                <div className="col-md-6 offset-md-3">
                    <TextField 
                        floatingLabelText="Last Name"
                        floatingLabelFixed={true}
                        id="last_name"
                        style={style}
                    /><br/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <TextField 
                        floatingLabelText="Survey Pin"
                        floatingLabelFixed={true}
                        id="pin"
                        style={style}
                    /><br/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <RaisedButton
                        label="Start Survey"
                        primary={true}
                        
                    />
                </div>
            </div>
        </div>
    )
    
}

export default LoginForm