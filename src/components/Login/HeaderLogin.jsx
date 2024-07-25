import { Link } from "react-router-dom";
import bgHeader from "../../images/bg-header.webp";
import infoLog from "../../images/info.png";

function HeaderLogin({ userType }) {
    return (
        <header className={userType} style={{ backgroundImage: `url(${bgHeader})`, backgroundPosition: 'top' }}>
            <nav>
                <Link to="/">
                    <h2 className="title-pag"><span>❮</span> Login</h2>
                </Link>
                <Link to="/info" state="/">
                    <h2 className="title-pag"><span className="big-icon">ⓘ</span></h2>
                </Link>
            </nav>
        </header>
    )
}

export default HeaderLogin
