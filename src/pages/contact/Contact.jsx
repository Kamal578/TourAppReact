import React from "react";
import Header from "../../components/layout/Header";
import ContactUs from "./ContactUs";

export default function Contact() {
  return (
    <div className="bg-black bg-no-repeat bg-cover">
      <Header currentPage={5} color="white" />
      <ContactUs />
    </div>
  );
}
