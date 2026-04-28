// import React from "react";

// import {
//   HeroCard1,
//   HeroCard2,
//   HeroCard3,
//   HeroCard4,
//   HeroCard5,
//   HeroCard6,
//   HeroCard7,
//   HeroCard8,
// } from "../../SVG/index";
// import { FaArrowRightLong } from "../../ReactICON/index";
// import Card from "./Card";
// import Steps from "./Steps";

// const Auth = ({
//   setAddDocotr,
//   setAddPatient,
//   address,
//   connectMetaMask,
//   SHORTEN_ADDRESS,
// }) => {
//   return (
//     <div className="auth-modal">
//       <div className="authincation h-100">
//         <div className="container h-100">
//           <div className="row justify-content-center h-100 align-items-center">
//             <div className="col-md-6">
//               <div className="authincation-content">
//                 <div className="row no-gutters">
//                   <div className="col-xl-12">
//                     <div className="auth-form">
//                       <div className="text-center mb-3">
//                         <a>
//                           <img src="images/logo-full.png" alt="" />
//                         </a>
//                       </div>
//                       <Steps />

//                       <Card
//                         handleClick={address ? setAddPatient : connectMetaMask}
//                         title={"Patient Registration"}
//                         patient={"100k +"}
//                         number={"40"}
//                         iconOne={<HeroCard1 />}
//                         iconTwo={<HeroCard2 />}
//                         classStyle={"bg-success"}
//                       />
//                       <Card
//                         handleClick={address ? setAddDocotr : connectMetaMask}
//                         title={"Doctor Registration"}
//                         patient={"100 +"}
//                         number={"14"}
//                         iconOne={<HeroCard1 />}
//                         iconTwo={<HeroCard4 />}
//                         classStyle={"bg-danger "}
//                       />
//                       <div className="new-account mt-3">
//                         <p className="mb-0">
//                           Welcome to{" "}
//                           <a className="text-primary">
//                             Healthchain: Your Health, Our Priority
//                           </a>{" "}
//                           where compassionate care meets exceptional medical
//                           expertise. <FaArrowRightLong />
//                           <a
//                             className="text-primary"
//                             onClick={() => (address ? "" : connectMetaMask())}
//                             style={{
//                               cursor: "pointer",
//                             }}
//                           >
//                             &nbsp;
//                             {address
//                               ? `${SHORTEN_ADDRESS(address)}`
//                               : "Connect Wallet"}
//                           </a>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;


import React from "react";
import { HeroCard1, HeroCard2, HeroCard4 } from "../../SVG/index";
import { FaArrowRightLong } from "../../ReactICON/index";
import Steps from "./Steps";

const Auth = ({
  setAddDocotr,
  setAddPatient,
  address,
  connectMetaMask,
  SHORTEN_ADDRESS,
}) => {
  return (
    <div className="auth-modal">
      <div className="authincation h-100">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-md-6">
              {/* Glass Card Container */}
              <div className="modern-container p-5 animate__animated animate__fadeInUp">
                <div className="auth-form text-center">
                  {/* --- Heading --- */}
                  <div className="text-center mb-4">
                    <h1 className="text-4xl fw-bold text-primary animate__animated animate__bounceIn">
                      HealthChain
                    </h1>
                    <p className="text-muted text-sm mt-2 animate__animated animate__fadeIn animate__delay-1s">
                      Empowering Healthcare Through Secure Blockchain Records
                    </p>
                  </div>

                  {/* --- Steps Section --- */}
                  <div className="mb-4 animate__animated animate__fadeIn animate__delay-1s">
                    <Steps />
                  </div>

                  {/* --- Patient Registration Card --- */}
                  <div
                    className="custom-card mb-3 animate__animated animate__fadeInLeft animate__delay-2s"
                    onClick={address ? setAddPatient : connectMetaMask}
                  >
                    <div className="icon-wrapper">{<HeroCard1 />}</div>
                    <h5 className="card-title">Patient Registration</h5>
                    <p className="card-text">
                      Register and securely store your medical records.
                    </p>
                  </div>

                  {/* --- Doctor Registration Card --- */}
                  <div
                    className="custom-card mb-4 animate__animated animate__fadeInRight animate__delay-2s"
                    onClick={address ? setAddDocotr : connectMetaMask}
                  >
                    <div className="icon-wrapper">{<HeroCard4 />}</div>
                    <h5 className="card-title">Doctor Registration</h5>
                    <p className="card-text">
                      Join the network to access and manage patient data securely.
                    </p>
                  </div>

                  {/* --- Wallet/Info Section --- */}
                  <div className="new-account mt-4 animate__animated animate__fadeInUp animate__delay-3s">
                    <p className="mb-2 text-sm text-muted">
                      Seamlessly manage, share, and protect your health data with
                      <span className="fw-bold text-primary"> HealthChain</span>.
                    </p>
                    <div
                      className="wallet-pill d-inline-flex align-items-center px-3 py-2 mt-2 rounded-pill bg-light shadow-sm"
                      style={{ fontSize: "0.85rem" }}
                      onClick={() => (address ? null : connectMetaMask())}
                    >
                      <FaArrowRightLong className="me-2 text-primary" />
                      <span className="fw-bold text-primary cursor-pointer">
                        {address
                          ? `Connected: ${SHORTEN_ADDRESS(address)}`
                          : "Connect Your Wallet"}
                      </span>
                    </div>
                  </div>

                  {/* --- Spinner Animation --- */}
                  {!address && (
                    <div className="mt-3 animate__animated animate__fadeIn animate__delay-3s">
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Connecting...</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Styles */}
              <style jsx>{`
                .modern-container {
                  background: rgba(255, 255, 255, 0.1);
                  backdrop-filter: blur(20px);
                  border: 1px solid rgba(255, 255, 255, 0.2);
                  border-radius: 1.5rem;
                  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
                  transition: transform 0.3s, box-shadow 0.3s;
                }
                .modern-container:hover {
                  transform: translateY(-5px);
                  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
                }
                .custom-card {
                  background: linear-gradient(135deg, #43cea2, #185a9d);
                  border-radius: 1rem;
                  padding: 1.5rem;
                  color: #fff;
                  text-align: center;
                  cursor: pointer;
                  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
                  transition: transform 0.3s, box-shadow 0.3s;
                }
                .custom-card:hover {
                  transform: translateY(-5px);
                  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
                }
                .custom-card .icon-wrapper {
                  font-size: 2rem;
                  margin-bottom: 1rem;
                }
                .wallet-pill {
                  transition: background 0.3s, transform 0.3s;
                }
                .wallet-pill:hover {
                  background: rgba(0, 0, 0, 0.05);
                  transform: translateY(-2px);
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
