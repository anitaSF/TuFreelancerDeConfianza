import { Link } from "react-router-dom"
import infoLog from "../../images/info.png";


function HeaderLogin({ userType }) {
    return (
        <header className={userType}>
            <nav>
                <Link to="/">
                    <img src="" alt="" />
                    <p>Login</p>
                </Link>
                <Link to="/info" state="/">
                    <img src={infoLog} alt="información" />
                </Link>
            </nav>
        </header>
    )
}

export default HeaderLogin
