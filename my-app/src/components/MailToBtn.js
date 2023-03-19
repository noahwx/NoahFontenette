import React from "react";
import { Link } from "react-router-dom";

const MailToBtn = ({ mailto, label }) => {
    return (
        <>
            <Link to='#'
                onClick={(e) => {
                    window.location.href = mailto;
                    e.preventDefault();
                }} className="mobile-contact-item">
                {label}
            </Link>
            <Link to='#'
                onClick={(e) => {
                    window.location.href = mailto;
                    e.preventDefault();
                }} className="desktop-contact-item">
                {label}
            </Link>
        </>
    );
};

export default MailToBtn;