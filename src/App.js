import React from 'react';
// import { useEffect } from 'react';
import { useState } from 'react';
// import MyProfile from './MyProfile';
import Header from './component/user/header';
import PhoneList from './component/user/main';
import Footer from './component/user/footer';

import './App.css';



function App() {
  return (
  <div className="App">
    <Header/>
    {/* <PhoneList/> */}
    <Footer/>
  </div>
);
}


// function DiemTrungBinh() {
//   const [toan, setToan] = useState("");
//   const [ly, setLy] = useState("");
//   const [hoa, setHoa] = useState("");
//   const [diemTrungBinh, setDiemTrungBinh] = useState("");
//   const [xepLoai, setXepLoai] = useState("");

//   const handleChangeToan = (event) => {
//     setToan(event.target.value);
//   };

//   const handleChangeLy = (event) => {
//     setLy(event.target.value);
//   };

//   const handleChangeHoa = (event) => {
//     setHoa(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const diemTB = (parseFloat(toan) + parseFloat(ly) + parseFloat(hoa)) / 3;
//     setDiemTrungBinh(diemTB.toFixed(1));

//     if (diemTB > 8) {
//       setXepLoai("Giỏi");
//     } else if (diemTB >= 6) {
//       setXepLoai("Khá");
//     } else {
//       setXepLoai("Trung bình");
//     }

//     alert(`Điểm trung bình của bạn là ${diemTB.toFixed(2)}. Xếp loại: ${xepLoai}`);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Toán:
//           <input type="number" value={toan} onChange={handleChangeToan} />
//         </label>
//         <br />
//         <label>
//           Lý:
//           <input type="number" value={ly} onChange={handleChangeLy} />
//         </label>
//         <br />
//         <label>
//           Hóa:
//           <input type="number" value={hoa} onChange={handleChangeHoa} />
//         </label>
//         <br />
//         <button type="submit">Tính điểm trung bình</button>
//       </form>
//       <br />
//       <p>Điểm trung bình: {diemTrungBinh}</p>
//       <p>Xếp loại: {xepLoai}</p>
//     </div>
//   );
// }






// function InputDisplay() {
//   const [inputValue, setInputValue] = useState('');

//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={inputValue} onChange={handleChange} />
//       <p>hello {inputValue}</p>
//     </div>
//   );
// }




// function Counter() {
//   const [count, setCount] = useState(0);
//   const [isCounting, setIsCounting] = useState(true);

//   useEffect(() => {
//     let intervalId;
//     if (isCounting) {
//       intervalId = setInterval(() => {
//         setCount((count) => count + 1);
//       }, 1000);
//     }
//     return () => clearInterval(intervalId);
//   }, [isCounting]);

//   const handleToggleCounting = () => {
//     setIsCounting(!isCounting);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleToggleCounting}>{isCounting ? 'Stop' : 'Start'}</button>
//     </div>
//   );
// }



// function Counter() {

//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (count < 10) {
//       const intervalId = setInterval(() => {
//         setCount((count) => count + 1);
//       }, 1000);
//       return () => clearInterval(intervalId);
//     }
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     if (count < 10) {
//       const intervalId = setInterval(() => {
//         setCount((count) => count + 1);
//       }, 1000);
//       return () => clearInterval(intervalId);
//     } else {
//       setIsVisible(false);
//     }
//   }, [count]);

//   if (!isVisible) {
//     return null; // ẩn component khi isVisible là false
//   }

//   return (
//     <div>
//       <p>Count: {count}</p>
//     </div>
//   );
// }


// function Counter() {
//   const [count, setCount] = useState(0);

//   setTimeout( () => {
//     setCount(count + 1);
//   },1000
//   )

//   return (
//     <div>
//       <p>Count: {count}</p>
//     </div>
//   );
// }

// function ImageSwitcher() {
//   const images = [
    
//     'https://images.pexels.com/photos/6462662/pexels-photo-6462662.png?auto=compress&cs=tinysrgb&w=600',
  
//     'https://images.pexels.com/photos/2896135/pexels-photo-2896135.jpeg?auto=compress&cs=tinysrgb&w=600',
   
//     'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=600',
     
    
//   ];

//   const [currentImage, setCurrentImage] = useState(0);

//   setTimeout(() => { 
//     setCurrentImage((currentImage + 1) % images.length);
//   },3000);

//   return (
//     <div>
//       <img src={images[currentImage]} alt={images[currentImage]} style={{width:'80%',height:'90vh', objectFit:'cover',objectPosition:'center'}}/> <br/>
//     </div>
//   );
// }

export default App;
