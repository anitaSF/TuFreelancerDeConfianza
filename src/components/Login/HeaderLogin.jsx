import { Link } from "react-router-dom"


function HeaderLogin({ userType }) {
    return (
        <header className={userType}>
            <nav>
                <Link to="/">
                    <img src="" alt="" />
                    <p>Login</p>
                </Link>
            </nav>
        </header>
    )
}

export default HeaderLogin
