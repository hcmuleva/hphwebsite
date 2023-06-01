import './App.css';
import Top from './components/Carousel/Top';
import CardCarousel from './components/Carousel/CardCarousel';
import NavMenu from './components/Navbar/NavMenu';
import TopGrid from './components/Text-Grid/TopGrid';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import WhyPeople from './components/Text-Grid/WhyPeople';
import BlueSection from './components/Section/BlueSection';
import BlueSection2 from './components/Section/BlueSection2';
import ImageText from './components/Text-Grid/ImageText';
import Review from './components/Carousel/Review';
import DoubleSlider from './components/Carousel/DoubleSlider';


function App() {
  return (
    <div>
      <NavMenu />
      <Top />
      <TopGrid />
      <CardCarousel />
      <BlueSection />
      <ImageText />
      <DoubleSlider />
      <Review />
      <WhyPeople />
      <BlueSection2 />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
