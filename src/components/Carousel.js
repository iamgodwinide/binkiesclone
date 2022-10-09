import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import UAParser from "ua-parser-js";
import './carousel.css'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};
const images = [
    "https://i.pinimg.com/736x/b3/b7/1c/b3b71caedde9b80297faf6a77d04be3f.jpg",
    "https://preview.redd.it/oo2ns5ogw1h81.jpg?auto=webp&s=446f445d14a8967888baf39719c97eecd488e14f",
    "https://i.pinimg.com/736x/98/64/74/986474493cc4ffac916d651659e1f6a7.jpg",
    "https://nftevening.com/wp-content/uploads/2022/04/Project-PXN-NFT-collection.png.webp",
    "https://pbs.twimg.com/media/FJ4VWvUaIAIWv3f.jpg:large",
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const CarouselCompnent = () => {
    const userAgent = navigator.userAgent;
    const parser = new UAParser();
    parser.setUA(userAgent);
    const result = parser.getResult();
    const deviceType = (result.device && result.device.type) || "desktop";
    return (
        <Carousel
            ssr
            partialVisbile
            deviceType={deviceType}
            itemClass="image-item"
            responsive={responsive}
        >
            {images.slice(0, 5).map(image => {
                return (
                    <Image
                        draggable={false}
                        style={{ width: "100%", height: "100%" }}
                        src={image}
                    />
                );
            })}
        </Carousel>
    );
};

export default CarouselCompnent;
