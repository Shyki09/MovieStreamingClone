import React from "react";
import ContactCard from "../components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Page</h1>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>
            We'd love to hear <span>from you</span>
          </h2>
          <ContactForm />
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15134.526063954534!2d73.81379461535946!3d18.500342922585872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb7a9d33861%3A0x8728dedf7245e190!2sShreeman%20Amruttulya!5e0!3m2!1sen!2sin!4v1689307793226!5m2!1sen!2sin"
        width={100}
        height={650}
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className={styles.mapping}
      ></iframe>
    </>
  );
};
export default Contact;
