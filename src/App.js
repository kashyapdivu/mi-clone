import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Data from './data/data.json';
import PreNavbar from './Component/PreNavbar';
import Navbar from './Component/Navbar';
import Slider from './Component/Slider.js';
import Offers from './Component/Offers.js';
import Heading from './Component/Heading.js';
import StarProducts from './Component/StarProducts.js';
import HotAccessoriesMenu from './Component/HotAccessoriesMenu.js';
import HotAccessories from './Component/HotAccessories.js';
import ProductReviews from './Component/ProductReviews.js';
import Videos from './Component/Videos.js';
import Footer from './Component/Footer.js';
import NavOptions from './Component/NavOptions';

function App() {
  console.log("** divya ***" + JSON.stringify(Data.hotAccessories.music))
  return (
    <Router>
      <PreNavbar />
      <Navbar/>
        
        <NavOptions
        miPhones={Data.miPhones} redmiPhones={Data.redmiPhones}
        tv={Data.tv} laptop={Data.laptop}
        fitnessAndLifeStyle={Data.fitnessAndLifeStyle} home={Data.home}
        audio={Data.audio} accessories={Data.accessories}
        />

      <Slider sliderData={Data.banner.start} comingFrom="start" />
      <Offers offerData={Data.offer} />
      <Heading text={"STAR PRODUCT"} />
      <StarProducts starProduct={Data.starProduct} />
      <Heading text={"HOT ACCESSORIES"} />
      <HotAccessoriesMenu />

      <Routes>
        <Route exact path="/music" element={
          <HotAccessories music={Data.hotAccessories.music} cover={Data.hotAccessoriesCover.music} />
        } />

        <Route exact path="/smart-devices" element={
          <HotAccessories music={Data.hotAccessories.smartDevice} cover={Data.hotAccessoriesCover.smartDevice} />
        } />
        <Route exact path="/home" element={
          <HotAccessories music={Data.hotAccessories.home} cover={Data.hotAccessoriesCover.home} />
        } />

        <Route exact path="/lifeStyle" element={
          <HotAccessories music={Data.hotAccessories.lifeStyle} cover={Data.hotAccessoriesCover.lifeStyle} />
        } />

        <Route exact path="/mobile-accessories" element={
          <HotAccessories music={Data.hotAccessories.mobileAccessories} cover={Data.hotAccessoriesCover.mobileAccessories} />
        } />

      </Routes>

      <Heading text={"PRODUCT REVIEWS"} />
      <ProductReviews productReviews={Data.productReviews}/>

      <Heading text={"VIDEOS"} />
      <Videos videos={Data.videos}/>

      <Heading text={"IN THE PRESS"} />
      <Slider sliderData={Data.banner.end} comingFrom="end" />

      <Footer footer={Data.footer}/>
    </Router>
  );
}

export default App;
