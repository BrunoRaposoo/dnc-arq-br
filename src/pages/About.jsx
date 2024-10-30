import { useContext } from "react";
import AboutText from "../components/AboutText/AboutText";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { AppContext } from "../contexts/AppContext";

export default function About() {
  const appContext = useContext(AppContext)
  return (
    <>
      <Header />
      <Banner title={appContext.languages[appContext.language].menu.about} image='about.jpg'/>
      <div className="container">
        <AboutText />
      </div>
      <Footer />
    </>
  )
}