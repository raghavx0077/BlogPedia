// import React, { useCallback, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import "../css/home.css";
// import img2 from "../images/write.png";
// import img from "../images/read.png";
// import { Link } from "react-router-dom";
// import Footer from "../components/Footer";

// function Home() {
//   // const [firstName, setFirstName] = useState("");

//   const token = JSON.parse(localStorage.getItem("token2"));

//     const fetchUser =useCallback(async()=>{
//     const res = await fetch("http://localhost:8999", {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         "x-access-token": token,
//       },
//     });

//     if (res.ok) {
//       const { firstName } = await res.json();
//       localStorage.setItem("firstName", firstName);
//     }
//   },[token]);

//   useEffect(() => {
//     fetchUser();
//   }, [fetchUser]);

//   // console.log(firstName);

//   return (
//     <>
//       <Navbar />
//       <main className="main">
//         <div className="hero">
//           <img src={img2} alt="" />
//         </div>
//         <div className="slogan">
//           <h1>Stay curious</h1>
//           <h3>
//             Discover stories, thinking, and expertise from writers on any topic.
//           </h3>
//           <Link to="/write">Start writing</Link>
//         </div>
//       </main>
//       <section className="section">
//         <img src={img} alt="" />
//         <div>
//           <p>“Never trust anyone who has not brought a book with them.”</p>
//           <p>
//             <strong>― Lemony Snicket, Horseradish</strong>
//           </p>
//           <Link to="/blogs">Start Reading</Link>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }

// export default Home;
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../css/home.css";
import img2 from "../images/write.png";
import img from "../images/read.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  const token = JSON.parse(localStorage.getItem("token2"));

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      const res = await fetch("http://localhost:8999", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-access-token": token,
        },
      });

      if (res.ok) {
        const { firstName } = await res.json();
        localStorage.setItem("firstName", firstName);
      } else {
        console.error("Failed to fetch user information");
      }
    };

    fetchUser();
  }, [token]);

  return (
    <>
      <Navbar />
      <main className="main">
        <div className="hero">
          <img src={img2} alt="" />
        </div>
        <div className="slogan">
          <h1>Stay curious</h1>
          <h3>
            Discover stories, thinking, and expertise from writers on any topic.
          </h3>
          <Link to="/write">Start writing</Link>
        </div>
      </main>
      <section className="section">
        <img src={img} alt="" />
        <div>
          <p>“Never trust anyone who has not brought a book with them.”</p>
          <p>
            <strong>― Lemony Snicket, Horseradish</strong>
          </p>
          <Link to="/blogs">Start Reading</Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
