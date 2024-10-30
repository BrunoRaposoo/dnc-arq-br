import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function Contact() {
  const appContext = useContext(AppContext)
  return (
    <>
      <Header />
      <Banner title={appContext.languages[appContext.language].menu.contact} image='contact.jpg'/>
      <div className="container">
        <ContactForm />
      </div>
      <Footer />
    </>
  )
}