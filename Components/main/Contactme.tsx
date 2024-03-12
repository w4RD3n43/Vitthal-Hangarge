import ContactForm from '../sub/ContactForm'
import React from "react";

const Page = () => {
  return (
    <div id='contact-me' className="w-screen h-screen bg-cover bg-center flex items-center justify-center">
      <div style={{ backgroundImage: "url(atombg-comp.webp" }} className=" h-[60%] w-[80%] relative bg-cover bg-center rounded-xl  z-[50]"
      >
        <div className="absolute left-8 md:left-20 bottom-16 mr-16 w-[80%] md:w-[25%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;