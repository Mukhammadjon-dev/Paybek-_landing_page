import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer_wrapper">
            <div className="footer_top">
                <p className="footer_top_title">
                    What still are you waiting for?
                </p>
                <p className="footer_top_description">
                    Get the only financial super app
                </p>
                <button className="footer_top_button">
                    Try Paybek now
                </button>
            </div>
            <div className="footer_bottom">
                <div className="footer_bottom_menu">
                    <div className="footer_bottom_menupart">
                        <div className="footer_bottom_elements">
                            <div className="footer_bottom_paybeklogo">
                            </div>
                            <div className="footer_bottom_largetext">
                                Creating an app people feels close,
                                by providing all financial services in
                                native language for them, giving them
                                chance to purchase for their families
                                back in home , making people feel one
                                step closer to their families by paying
                                back their love and gratitude with PayBek.
                            </div>
                        </div>
                        <div className="footer_bottom_elements">
                            <div className="footer_bottom_title">
                                Legal
                            </div>
                            <div className="footer_bottom_text">
                                <NavLink to="/privacy" className="footer_routerbutton"><p>Privacy Policy</p></NavLink>
                                <NavLink to="/terms" className="footer_routerbutton">Terms & Conditions</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bottom_menupart">
                        <div className="footer_bottom_elements">
                            <div className="footer_bottom_title">
                                Follow
                            </div>
                            <div className="footer_bottom_text">
                                <p> Instagram </p>
                                <p> Facebook </p>
                                <p> LinkedIn </p>
                            </div>
                        </div>
                        <div className="footer_bottom_elements">
                            <div className="footer_bottom_title">
                                Address
                            </div>
                            <div className="footer_bottom_largetext">
                                Location: 228 Park Ave S, PMB
                                61877, New York, New York 10003-1502
                                Email: admin@paybek.io
                                Phone: +1(929) 822-7007
                            </div>
                        </div>
                    </div>
                </div>
                <p className="footer_bottom_copyright">
                    Copyright @2022 PayBek, inc. All rights reserved
                </p>
            </div>
        </div>
    )
}

export default Footer