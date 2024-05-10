import React from "react";

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="w-full mt-30">
            <div className="w-4/5 mx-auto">
                <div className="mt-40 w-4/5">
                    <p className="text-4xl font-poppins text-darkorange text-left">
                        Have an opportunity, some feedback, or an interesting idea to share?
                    </p>
                    <p className="text-4xl mt-2 font-poppins text-darkorange text-left">
                        Get in touch!
                    </p>
                </div>
                <div className="flex flex-wrap items-start font-poppins mt-5">
                    <button className="bg-transparent hover:bg-darkorange text-darkorange font-semibold hover:text-background py-2 px-4 border border-darkorange hover:border-transparent rounded mr-4 text-left">
                        Email
                    </button>
                    <button className="bg-transparent hover:bg-darkorange text-darkorange font-semibold hover:text-background py-2 px-4 border border-darkorange hover:border-transparent rounded mr-4 text-left">
                        LinkedIn
                    </button>
                    <button className="bg-transparent hover:bg-darkorange text-darkorange font-semibold hover:text-background py-2 px-4 border border-darkorange hover:border-transparent rounded text-left">
                        GitHub
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;