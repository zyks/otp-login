import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

interface LoginFormProps {
    submitCredentials: (email: string, password: string) => void
}

function LoginForm({ submitCredentials }: LoginFormProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        submitCredentials(email, password)
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={!email || !password}
            >
                Sign In
            </Button>
        </form>
    )
}

export default LoginForm
