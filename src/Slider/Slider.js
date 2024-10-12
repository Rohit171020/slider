// import React, { useState } from 'react';
// import Image from 'next/image';
// import styles from './Slider.module.css';


// const users = [
//   {
//     name: "User 1",
//     img: "/images/sohel-img.jpg",
//     testimonial: "/images/sohel.jpg", // Add the mobile view image or testimonial for each user
//   },
//   {
//     name: "User 2",
//     img: "/images/komal-img.jpg",
//     testimonial: "/images/komal.jpg",
//   },
//   {
//     name: "User 3",
//     img: "/images/soniya-img.jpg",
//     testimonial: "/images/soniya.jpg",
//   },
//   {
//     name: "User 4",
//     img: "/images/sohel-img.jpg",
//     testimonial: "/images/sohel.jpg",
//   },
//   {
//     name: "User 5",
//     img: "/images/amrit-img.jpg",
//     testimonial: "/images/amit.jpg",
//   }
// ];

// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0); // Track current image

//   // Handle clicking the next button
//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === users.length - 1 ? 0 : prevIndex + 1));
//   };

//   // Handle clicking the previous button
//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? users.length - 1 : prevIndex - 1));
//   };

//   return (
//     <div className={styles.sliderContainer}>
//       {/* Left Section: Title and Image Carousel */}
//       <div className={styles.sliderContent}>
//         <h2 className={styles.sliderTitle}>
//           Insider glimpses: <span>Click to see real conversations with our learners</span>
//         </h2>

//         {/* Horizontal Image Carousel */}
//         <div className={styles.carouselContainer}>
//           <button onClick={handlePrev} className={styles.arrowButton}>{"<"}</button>
//           <div className={styles.imageTrack}>
//             {users.map((user, index) => (
//               <div
//                 key={index}
//                 className={`${styles.imageContainer} ${currentIndex === index ? styles.active : ''}`}
//                 onClick={() => setCurrentIndex(index)}
//                 style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Slide effect
//               >
//                 <Image
//                   src={user.img}
//                   alt={user.name}
//                   width={80}
//                   height={80}
//                   className={styles.circularImage}
//                 />
//               </div>
//             ))}
//           </div>
//           <button onClick={handleNext} className={styles.arrowButton}>{">"}</button>
//         </div>

//         <button className={styles.ctaButton}>Free Career Counseling from Experts</button>
//       </div>

//       {/* Right Section: Display the testimonial */}
//       <div className={styles.testimonialView}>
//         <Image
//           src={users[currentIndex].testimonial} // Show the selected user's testimonial
//           alt={`Testimonial for ${users[currentIndex].name}`}
//           width={300}
//           height={500}
//           className={styles.testimonialImage}
//         />
//       </div>
//     </div>
//   );
// };

// export default Slider;


// import React, { useState } from 'react';
// import Image from 'next/image';
// import styles from './Slider.module.css';


// const users = [
//   {
//     name: "User 1",
//     img: "/images/sohel-img.jpg",
//     testimonial: "/images/sohel.jpg",
//   },
//   {
//     name: "User 2",
//     img: "/images/komal-img.jpg",
//     testimonial: "/images/komal.jpg",
//   },
//   {
//     name: "User 3",
//     img: "/images/soniya-img.jpg",
//     testimonial: "/images/soniya.jpg",
//   },
//   {
//     name: "User 4",
//     img: "/images/sohel-img.jpg",
//     testimonial: "/images/sohel.jpg",
//   },
//   {
//     name: "User 5",
//     img: "/images/amrit-img.jpg",
//     testimonial: "/images/amit.jpg",
//   }
// ];

// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0); 


//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === users.length - 1 ? 0 : prevIndex + 1));
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? users.length - 1 : prevIndex - 1));
//   };

//   return (
//     <div className={styles.sliderContainer}>
  
//       <div className={styles.sliderContent}>
//         <h2 className={styles.sliderTitle}>
//           Insider glimpses: <span>Click to see real conversations with our learners</span>
//         </h2>


//         <div className={styles.carouselContainer}>
//           <button onClick={handlePrev} className={`${styles.arrowButton} ${styles.left}`}>&lt;</button>

//           <div className={styles.carouselTrack}>
//             {users.map((user, index) => (
//               <div
//                 key={index}
//                 className={`${styles.carouselItem} ${currentIndex === index ? styles.active : styles.inactive}`}
//                 onClick={() => setCurrentIndex(index)}
//                 style={{ transform: `translateX(${(index - currentIndex) * 70}px)` }} 
//               >
//                 <Image
//                   src={user.img}
//                   alt={user.name}
//                   width={80}
//                   height={80}
//                   className={styles.circularImage}
//                 />
//               </div>
//             ))}
//           </div>

//           <button onClick={handleNext} className={`${styles.arrowButton} ${styles.right}`}>&gt;</button>
//         </div>

//         <button className={styles.ctaButton}>Free Career Counseling from Experts</button>
//       </div>


//       <div className={styles.testimonialView}>
//         <Image
//           src={users[currentIndex].testimonial}
//           alt={`Testimonial for ${users[currentIndex].name}`}
//           width={300}
//           height={500}
//           className={styles.testimonialImage}
//         />
//       </div>
//     </div>
//   );
// };

// export default Slider;


import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Slider.module.css';

const users = [
  {
    name: 'User 1',
    img: '/images/sohel-img.jpg',
    testimonial: '/images/sohel.jpg',
  },
  {
    name: 'User 2',
    img: '/images/komal-img.jpg',
    testimonial: '/images/komal.jpg',
  },
  {
    name: 'User 3',
    img: '/images/soniya-img.jpg',
    testimonial: '/images/soniya.jpg',
  },
  {
    name: 'User 4',
    img: '/images/sohel-img.jpg',
    testimonial: '/images/sohel.jpg',
  },
  {
    name: 'User 5',
    img: '/images/amrit-img.jpg',
    testimonial: '/images/amit.jpg',
  }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === users.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? users.length - 1 : prevIndex - 1));
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderContent}>
        <h2 className={styles.sliderTitle}>
          Insider glimpses: <span>Click to see real conversations with our learners</span>
        </h2>

        <div className={styles.carouselContainer}>
          <button onClick={handlePrev} className={`${styles.arrowButton} ${styles.left}`}>&lt;</button>

          <div className={styles.carouselTrack}>
            {users.map((user, index) => (
              <div
                key={index}
                className={`${styles.carouselItem} ${currentIndex === index ? styles.active : styles.inactive}`}
                style={{ transform: `translateX(${(index - currentIndex) * 10}px)` }}  
                onClick={() => setCurrentIndex(index)}  
              >
                <Image
                  src={user.img}
                  alt={user.name}
                  width={80}
                  height={80}
                  className={styles.circularImage}
                />
              </div>
            ))}
          </div>

          <button onClick={handleNext} className={`${styles.arrowButton} ${styles.right}`}>&gt;</button>
        </div>

        <button className={styles.ctaButton}>Free Career Counseling from Experts</button>
      </div>

      <div className={styles.testimonialView}>
        <Image
          src={users[currentIndex].testimonial}
          alt={`Testimonial for ${users[currentIndex].name}`}
          width={300}
          height={500}
          className={styles.testimonialImage}
        />
      </div>
    </div>
  );
};

export default Slider;

