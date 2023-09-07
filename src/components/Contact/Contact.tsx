import "./Contact.css";
import PhotoHeader from "../PhotoHeader/PhotoHeader";
import IntersectionWrapper from "../IntersectionWrapper/IntersectionWrapper";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "Gabinet Terapii Psychologicznej Lorem Ipsum | Kontakt";
  }, []);

  return (
    <section className="contact-page">
      <PhotoHeader title="Kontakt" imageName="background.jpg" />
      <IntersectionWrapper>
        <article className="contact">
          <ul className="info-tiles">
            <li className="tile hidden">
              <a href="tel:+48123456789">
                <BsFillTelephoneFill />
                <span className="type">telefon</span>
                <span className="info">+48 123 456 789</span>
              </a>
            </li>
            <li className="tile hidden">
              <a href="mailto:fake@mail.com">
                <IoIosMail />
                <span className="type">e-mail</span>
                <span className="info">fake@mail.com</span>
              </a>
            </li>
            <li className="tile hidden">
              <FaMapMarkerAlt />
              <span className="type">adres</span>
              <span className="info">80-309 Gdańsk</span>
              <span className="info">ul. Jana Bażyńskiego 8</span>
            </li>
          </ul>
          <div className="text">( rejestracja telefoniczna )</div>
        </article>
        <div className="map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d297316.3131196441!2d17.964578989062495!3d54.3961355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd752f76dddae7%3A0x4d4128c9a5066e47!2sUniwersytet%20Gda%C5%84ski!5e0!3m2!1spl!2spl!4v1694085289971!5m2!1spl!2spl"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </IntersectionWrapper>
    </section>
  );
}

export default Contact;
