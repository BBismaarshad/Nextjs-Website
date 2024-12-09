import Header from "@/components/header";
import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import Footer from "@/components/Footer";


export default function Home() {
  return ( <div> 
    <Header/>
    <Navbar/> 
    <Hero/> 
    {/* <EditorsPick /> */}
    <Footer/>


   </div>
  );
}