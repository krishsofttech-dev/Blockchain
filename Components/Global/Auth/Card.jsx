// import React from "react";

// const Card = ({
//   title,
//   patient,
//   number,
//   iconOne,
//   iconTwo,
//   classStyle,
//   handleClick,
// }) => {
//   return (
//     <div
//       onClick={() => handleClick(true)}
//       style={{
//         cursor: "pointer",
//       }}
//     >
//       <div className={`card gradient-bx text-white ${classStyle}`}>
//         <div className="card-body auth-width">
//           <div className="media align-items-center">
//             <div className="media-body">
//               <p className="mb-1">{title}</p>
//               <div className="d-flex flex-wrap">
//                 <h2 className="fs-40 font-w600 text-white mb-0 me-3">
//                   {patient}
//                 </h2>
//                 <div>
//                   {iconOne}
//                   <div className="fs-14">+{number}%</div>
//                 </div>
//               </div>
//             </div>
//             <span className="border rounded-circle p-4">{iconTwo}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
import React from "react";

const Card = ({ title, iconOne, iconTwo, classStyle, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(true)}
      style={{ cursor: "pointer" }}
      className="mb-3"
    >
      <div
        className={`card gradient-bx text-white ${classStyle} shadow-lg rounded-4`}
        style={{ transition: "all 0.3s ease" }}
      >
        <div className="card-body auth-width">
          <div className="d-flex justify-content-between align-items-center">
            {/* Text */}
            <div>
              <p className="mb-1 fw-semibold">{title}</p>
              <div className="d-flex align-items-center">
                {iconOne && (
                  <div className="mb-1 animate__animated animate__pulse animate__infinite">
                    {iconOne}
                  </div>
                )}
              </div>
            </div>

            {/* Image / Icon Two */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "80px",
                height: "80px",
                overflow: "hidden",
                borderRadius: "12px", // subtle rounding
                border: "2px solid rgba(255,255,255,0.3)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              {iconTwo}
            </div>
          </div>
        </div>

        {/* Hover Glow */}
        <style jsx>{`
          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          }
        `}</style>
      </div>
    </div>
  );
};

export default Card;
