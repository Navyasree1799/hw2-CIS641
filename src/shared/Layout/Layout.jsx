import { useContext } from "react";
import "../styles.css";
import { MyContext } from "../../App";
import { Divider } from "../components/Common";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const { setCurrentTab } = useContext(MyContext);
    const navigate = useNavigate();
    return (
        <div className="main-container">
            <div className="flex-wrapper-space-between">
                <a onClick={() => navigate("/")}>
                    {" "}
                    <span style={{ cursor: 'pointer' }} className="name">Navyasree </span>
                    Dev
                </a>

                <div>
                    <a className="nav-link" onClick={() => navigate("/resume")}>
                        Resume
                    </a>{" "}
                    |
                    <a className="nav-link" href="https://navyasree1799.github.io/GVSU-CIS641-PIRATES_/">
                        {" "}
                        Projects
                    </a>{" "}
                    |
                    <a className="nav-link" onClick={() => navigate("/contact")}>
                        {" "}
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <div className="main-container">
            <Divider />
            <div className="flex-wrapper-space-between" style={{ paddingLeft: 200, paddingRight: 100 }}>
                <div>
                    <div className="footer-header">Phone</div>
                    <div>(+1)6162369207</div>
                </div>
                <div>
                    <div className="footer-header">Email</div>
                    <div>putlurin@mail.gvsu.edu</div>
                </div>
                <div>
                    <div className="footer-header">Follow Me</div>
                    <div>
                        <a href="https://www.linkedin.com/in/navyasree-putluri-abb478193/">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>{" "}
                        <a href="https://github.com/Navyasree1799">
                            {" "}
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
                {/* <div>
                    <div>
                        © 2035 By Nicol Rider.
                        <br />
                        Powered and secured by Wix
                    </div>
                </div> */}
            </div>
        </div>
    );
};

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="body-container">{children}</div>
            <Footer />
        </>
    );
};

export default Layout;
