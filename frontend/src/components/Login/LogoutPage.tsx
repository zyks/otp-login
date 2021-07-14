import { useEffect } from "react"
import { useHistory } from "react-router-dom";
import AuthenticationService from "../../services/AuthenticationService"

function LogoutPage() {
    const history = useHistory()
    const service = new AuthenticationService()

    useEffect(() => {
        service.logout()
        history.push("/login/")
    }, [])

    return (
        <div>Logging out...</div>
    )
}

export default LogoutPage
