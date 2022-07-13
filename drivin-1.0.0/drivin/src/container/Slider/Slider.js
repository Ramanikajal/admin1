// import Slider from "react-slick";

function Slider (props) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
        return (

            <div className="container">
                <Slider {...settings}>
                    <div><p>1</p></div>
                    <div><p>2</p></div>
                    <div><p>3</p></div>
                </Slider>
            </div>

        );
}

export default Slider;