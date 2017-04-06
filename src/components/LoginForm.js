import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper'




const LoginForm = (props) => {

    const handleLogin = ()=>{

        props.loginHandler();
    }
    const style={
        width:'100%'
    }
    const divStyle= {
        marginTop:'10px'
    }
    const paperStyle={
        margin:20,
        padding:20
    }
    return(
        
        <div className="offset-md-1" style={divStyle}>
            <Paper
                zDepth={2}
                style={paperStyle}
                >
            <div className="row">
                <div className="col-md-10">
                    <TextField 
                        floatingLabelText="First Name"
                        floatingLabelFixed={true}
                        fullWidth={true}
                        id="first_name"
                        style={style}
                    /><br/>
                </div>
            </div>
             <div className="row">
                <div className="col-md-10">
                    <TextField 
                        floatingLabelText="Last Name"
                        floatingLabelFixed={true}
                        fullWidth={true}
                        id="last_name"
                        style={style}
                    /><br/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-10">
                    <TextField 
                        floatingLabelText="Survey Pin"
                        floatingLabelFixed={true}
                        fullWidth={true}
                        id="pin"
                        style={style}
                    /><br/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-10">
                    <RaisedButton
                        label="Start Survey"
                        primary={true}
                        onClick={handleLogin}
                    />
                </div>
            </div>
            </Paper>
        </div>
    )
    
}

export default LoginForm