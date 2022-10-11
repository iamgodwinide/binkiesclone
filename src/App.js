import CarouselCompnent from "./components/Carousel";
import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Lights from "./components/Lights";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ReactTyped from "react-typed";
import { Parallax } from "react-parallax";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import { useState } from "react";
import ImageGrid from "./components/ImageGrid";
import MainMint from "./MainMint";


function App() {
  const [isOpened, setIsOpended] = useState(false);
  const [accounts, setAccounts] = useState([]);

  return (
    <div id="app" className="App">
      {
        !isOpened
        &&
        <Loader setIsOpended={setIsOpended} />
      }
      {/* nav start */}
      <Navbar accounts={accounts} setAccounts={setAccounts} />
      {/* nav end */}
      {/* showcase section  start*/}
      <section className="showcase" id="home">
        <MainMint accounts={accounts} setAccounts={setAccounts} />
        <div className="content">
          {/* <img src="/logo.png" /> */}
        </div>
      </section>
      {/* showcase section end */}
      <Lights length={100} />
      {/* <marquee
        loop
        className="marquee"
      >
        {
          Array(200).fill(0).map((_, key) => (
            <img key={key} src="https://www.gangsterallstar.com/images/Group-6325_1.svg" />
          ))
        }
      </marquee> */}
      {/* about section  start*/}
      <section className="about" name="about" id="about">
        <div className="content">
          <div>
            <h2>The <h2>ATAMO ASCENSION</h2></h2>
            <p>
              The Atamo Ascension is the journey of revolutionary sisters who must overcome two types of struggles – personal struggles and the environmental struggles of a decaying futuristic society – to reach a better life by climbing up the Ethereum Blockchain. Will they make it? Reader, find out.
            </p>

          </div>
          <div>
            <img src="/ATAMO MOBILE DONE.png" />
          </div>
        </div>
      </section>
      {/* about section end */}
      {/* parallax start */}
      <Parallax
        blur={0}
        bgImage={"/falling onaa final.png"}
        bgImageAlt="the samurai"
        strength={300}
      >
        <div className="parallax-content" />
      </Parallax>
      {/* parallax end */}
      {/* carousel start */}
      <div className='carousel-container'>
        <div className='carousel-wrap'>
          <h3>feast your eyes</h3>
          <h2>trust us it's gonna be huge</h2>
        </div>
        <CarouselCompnent />
      </div>
      {/* carousel end */}
      {/* faq start */}
      <FAQ />
      {/* faq end */}
      {/* footer start */}
      <Footer />
      {/* footer end */}
    </div >
  );
}

export default App;
