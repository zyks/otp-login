import { useHistory } from "react-router-dom";
import { Container, Typography, Button } from "@material-ui/core";

function HomePage() {
    const history = useHistory()

    function handleLogoutClick() {
        history.push("/logout/")
    }

    return (
        <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h4">Home page</Typography>
            <Button
                type="button"
                variant="contained"
                color="default"
                onClick={handleLogoutClick}
            >
                Logout
            </Button>
        </Container>
    )
}

export default HomePage
