import Main from "./main/page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
