import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../assets/list.json"
import Cards from "./Cards/Cards";

const FreeBook = () => {

    const filterData = list.filter((data) => data.category === "Free")
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



    return (
        <>
            <div className="max-w-screen-xl container mx-auto md:px-10 px-4">
                <Slider {...settings}>
                    {filterData.map((item) => (
                        <Cards item={item} key={item.id} />
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default FreeBook;