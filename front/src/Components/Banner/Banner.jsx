// import { useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
// import "./Banner.css";

// // import ExampleCarouselImage from "components/ExampleCarouselImage";

// export default function Banner() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <div className="container">
//       <Carousel
//         activeIndex={index}
//         onSelect={handleSelect}
//         className="carousel-sl"
//       >
//         <Carousel.Item>
//           <div className="item-banner">
//             <img className="carousel-img" alt="" src="./img/0.webp" />
//             <Carousel.Caption className="content">
//               <div className="content-container">
//                 <h3 className="content-title">Чай недели!</h3>
//                 <p className="content-text">
//                   Каждую неделю новый сорт чая на который мы делаем скидку в
//                   размере 20% от общей суммы
//                 </p>
//               </div>
//             </Carousel.Caption>
//           </div>
//         </Carousel.Item>
//         <Carousel.Item>
//           <div className="item-banner">
//             <img className="carousel-img" alt="" src="./img/1.webp" />
//             <Carousel.Caption className="content">
//               <div className="content-container">
//                 <h3 className="content-title">
//                   Соберите набор для подарка из разных сортов и видов чая
//                 </h3>
//                 <p className="content-text">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//               </div>
//             </Carousel.Caption>
//           </div>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img className="carousel-img" alt="" src="./img/2.webp" />
//           <Carousel.Caption className="content">
//             <div className="content-container">
//               <h3 className="content-title">
//                 Когда хочется провести вечер за любимой книгой
//               </h3>
//               <p className="content-text">
//                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//               </p>
//             </div>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// }

import "./Banner.css";

export default function Banner() {
  return (
    <div className=" container ban" style={{ display: "flex" }}>
      <div className="banner-img">
        <img alt="" src="./img/banner.jpg" style={{ flex: " 1" }}></img>
      </div>
      <div className="banner-desc" style={{ flex: " 1" }}>
        <b className="text-center">
          Открой для себя волшебный мир ароматов и вкусов в интернет-магазине
          'Чайный сад'!
        </b>
        <p className="text-center">
          Погрузись в уютную атмосферу чаепития и выбери свой идеальный чай с
          нами. Качество, разнообразие и радость каждого глотка ждут тебя здесь.
          Дари себе моменты умиротворения с 'Чайным садом'! 🍵✨
        </p>
        <button className="but">Перейти в каталог</button>
      </div>
    </div>
  );
}
