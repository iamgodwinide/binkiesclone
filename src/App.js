import CarouselCompnent from "./components/Carousel";
import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lights from "./components/Lights";
import { useEffect, useState } from "react";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ReactTyped from "react-typed";
import { Parallax } from "react-parallax";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";


function App() {
  const [isOpened, setIsOpended] = useState(false);

  return (
    <div id="app">
      {
        !isOpened
        &&
        <Loader setIsOpended={setIsOpended} />
      }
      {/* nav start */}
      <Navbar />
      {/* nav end */}

      {/* mobile nav start */}
      {/* mobile nav end */}

      {/* showcase section  start*/}
      <section className="showcase" id="home">
        <div className="shadow" />
        <div className="content">
          <h1>Binkies</h1>
          <ReactTyped
            strings={[
              "Do your own thing."
            ]}
            showCursor={false}
            style={{
              color: "#fff"
            }}
            typeSpeed={50}
            backSpeed={50}
            loop={false}
          />
          <ReactTyped
            strings={[
              " Live your best life"
            ]}
            showCursor={false}
            style={{
              color: "#fff"
            }}
            startDelay={1500}
            typeSpeed={50}
            backSpeed={50}
          />
        </div>
      </section>
      {/* showcase section end */}
      <Lights length={100} />
      <marquee
        loop
        className="marquee"
      >
        {
          Array(200).fill(0).map((_, key) => (
            <img key={key} src="https://www.gangsterallstar.com/images/Group-6325_1.svg" />
          ))
        }
      </marquee>
      {/* about section  start*/}
      <section className="about" name="about" id="about">
        <div className="content">
          <div>
            <h3>ABOUT US</h3>
            <h2>Meet The <h2>BINKIES</h2></h2>
            <p>
              Binkies is a collection of 10,000 NFTs hopping about and banging on the Ethereum blockchain. (Ever wondered where "going at it like rabbits” originated? It’s from us, the Binkies fam.)
            </p>
            <p>
              Each Binkie features 250+ trait variations, with all having something in common: a love of 24/7 partying and turning up. Whether you want a cutesy character or one known for its zombie-killing ways, we’ve got the perfect Binkie in mind.
            </p>
            <p>
              Join Binkyville and help us bridge the gap between Web3 and the physical world. We’re all about the community here, and we can’t wait to welcome our newest member: YOU!
            </p>
          </div>
          <div>
            <img src="https://nftevening.com/wp-content/uploads/2022/04/akuma-1.jpg" />
          </div>
        </div>
      </section>
      {/* about section end */}
      {/* parallax start */}
      <Parallax
        blur={0}
        bgImage="https://i.pinimg.com/originals/8d/f3/39/8df3394fa4a95833ca16a775b9af7345.jpg"
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

      {/* fqg start */}
      <FAQ />
      {/* faq end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}

    </div >
  );
}

export default App;
