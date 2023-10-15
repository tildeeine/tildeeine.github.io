import React from "react";

const ContactSection: React.FC = () => {
    return (
        <section id="contact">
            <div>
                <p className="text-xl font-bold inline">
                    Contact me
                </p>
            </div>
            <div id='contactinfo'>
                <p>tilde.eine@gmail.com</p>
                <a
                    className="text-blue"
                    href="https://no.linkedin.com/in/tildeeine"
                >
                    LinkedIn
                </a>
            </div>
        </section>
    );
};

export default ContactSection;
