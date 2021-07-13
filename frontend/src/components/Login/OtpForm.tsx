import React, { useState } from "react";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import OtpInput from "react-otp-input";

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(2, 0, 2),
    },
}));

interface OtpFormProps {
    submitOtp: (otp: string) => void,
}
  
function OtpForm({ submitOtp }: OtpFormProps) {
    const [otp, setOtp] = useState("")
    const classes = useStyles()
    const otpInputLength = 6

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        submitOtp(otp)
    }

    return (
        <>
            <Typography component="h1" variant="h6">Please enter authentication code</Typography>
            <form onSubmit={handleSubmit}>
                <OtpInput 
                    numInputs={otpInputLength} 
                    value={otp} 
                    onChange={(value: string) => setOtp(value)} 
                    separator={<span>-</span>} 
                    />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={otp.length < otpInputLength}
                    >
                    Submit
                </Button>
            </form>
        </>
    )
}

export default OtpForm
