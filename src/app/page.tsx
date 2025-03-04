
import Bim from "./Componets/Bim";
import BimConsulting from "./Componets/BimConsulting";
import Carrousel from "./Componets/Carrousel";
import { Footer } from "./Componets/Footer";
import { Navbar } from "./Componets/Navbar";
import Section from "./Componets/Section";


export default function Home() {
  return (
    <>
      <Navbar />
      <Carrousel/>
      <Section />
      <BimConsulting />
      <Bim />
      <Footer />  
    </>
  );
}
