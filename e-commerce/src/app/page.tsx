import Header from "@/components/header";
import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import Footer from "@/components/Footer";
// import { EditorsPick } from '@/components/editors-pick/EditorsPick';
// import Pagetwo from "./components/Pagetwo";
// import Header from "./components/Header";

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