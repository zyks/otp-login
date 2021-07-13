import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Typography } from "@material-ui/core";
import toast, { Toaster } from "react-hot-toast";
import OtpForm from "./OtpForm";
import LoginForm from "./LoginForm";
import AuthenticationService from "../../services/AuthenticationService";

function LoginPage() {
    const [{ credentialsSuccess, otpSuccess}, setAuthSuccess] = useState({credentialsSuccess: false, otpSuccess: true})
    const history = useHistory()
    useEffect(() => {
        if (credentialsSuccess && otpSuccess) {
            history.push("/")
        }
    })
    const authService = new AuthenticationService()

    function submitCredentials(email: string, password: string) {
        authService.loginCredentials(
            email,
            password,
            (response) => {
                setAuthSuccess({
                    credentialsSuccess: true,
                    otpSuccess: response.data.otp_required !== true,
                })
                toast.success(response.data.message)
            }, 
            (error) => {
                error.response ? toast.error(error.response.data.message) : console.error(error)
            },
        )
    }

    function submitOtp(otp: string) {
        authService.loginOtp(
            otp,
            (response) => {
                setAuthSuccess({
                    credentialsSuccess: true,
                    otpSuccess: true,
                })
                toast.success(response.data.message)
            },
            (error) => {
                error.response ? toast.error(error.response.data.message) : console.error(error)
            },
        )
    }

    const credentialsForm = (
        <LoginForm submitCredentials={submitCredentials} />
    )

    const otpForm = (
        <OtpForm submitOtp={submitOtp} />
    )

    return (
        <Container component="main" maxWidth="xs">
            <Toaster position="top-right" />
            <Typography component="h1" variant="h4">
                Sign in
            </Typography>
            { !credentialsSuccess ? credentialsForm : !otpSuccess ? otpForm : null }
        </Container>
    )
}

export default LoginPage
