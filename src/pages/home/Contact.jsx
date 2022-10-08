import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center w-full h-[49.5rem] bg-gazangul-lake  bg-no-repeat  bg-cover	">
      <div className="text-center bg-khaki w-[62.1rem] h-[42.8rem] rounded-bl-[5.3rem] rounded-tr-[5.3rem]">
        <div>
          <h3 className="p-3 text-5xl font-bold text-darkerGreen pt-14">
            Contact Us
          </h3>
          <p className="p-6 text-xl font-semibold text-white">
            Feel free to contact us. We will back to you as soon as possible.
          </p>
        </div>
        <div className="w-[39.5rem] mx-auto">
          <form className="px-8 pt-6 pb-8 mb-4 text-xl text-white rounded">
            <div className="mb-4">
              <input
                className="w-full px-3 py-5 leading-tight bg-transparent border border-darkerGreen rounded-xl placeholder:text-white placeholder:text-xl placeholder:pl-5"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-6">
              <input
                className="w-full px-3 py-5 mb-3 leading-tight bg-transparent border border-darkerGreen rounded-xl placeholder:text-white placeholder:text-xl placeholder:pl-3"
                id="email"
                type="text"
                placeholder="Email or phone number"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="w-full px-3 py-5 mb-3 bg-transparent border  border-darkerGreen rounded-xl placeholder:text-white placeholder:text-xl h-36 placeholder:pl-5"
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="w-full px-4 py-5 text-xl text-white border bg-darkerGreen border-darkerGreen rounded-xl "
                type="submit"
              >
                Send your message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
