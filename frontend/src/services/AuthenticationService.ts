import axios, { AxiosResponse, AxiosError } from 'axios';

class AuthenticationService {
    credentialsAuthURL: string = "http://localhost:5000/auth/login/"
    otpAuthURL: string = "http://localhost:5000/auth/login/otp/"
    authTokenName = "authToken"

    async loginCredentials(
        email: string,
        password: string,
        onSuccess: (response: AxiosResponse) => void,
        onError: (error: AxiosError) => void,
    ) {
        const data = {
            email: email,
            password: password,
        }
        this.login(this.credentialsAuthURL, data, onSuccess, onError)
    }

    async loginOtp(
        otp: string,
        onSuccess: (response: AxiosResponse) => void,
        onError: (error: AxiosError) => void,
    ) {
        const data = {otp: otp}
        this.login(this.otpAuthURL, data, onSuccess, onError)
    }

    logout() {
        localStorage.removeItem(this.authTokenName);
    }

    isLoggedIn() {
        return this.getToken() !== null;
    }

    setToken(token: string) {
        localStorage.setItem(this.authTokenName, token)
    }

    getToken() {
        return localStorage.getItem(this.authTokenName)
    }

    private async login(
        url: string,
        data: { [param: string]: string },
        onSuccess: (response: AxiosResponse) => void,
        onError: (error: AxiosError) => void,
    ) {
        const headers = {
            'Content-Type': 'application/json',
        }
        try {
            const response = await axios.post(url, data, { headers: headers })
            if (response.data.token) {
                this.setToken(response.data.token)
            }
            onSuccess(response)
        } catch(error) {
            onError(error)
        }
    }
}

export default AuthenticationService
