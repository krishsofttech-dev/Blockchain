// import React from "react";

// const Card = ({ title, number, classStyle, handleClick }) => {
//   return (
//     <div onClick={handleClick} className="col-xl-3 col-xxl-3 col-sm-6">
//       <div className={`card gradient-bx text-white ${classStyle}`}>
//         <div className="card-body">
//           <div className="media align-items-center">
//             <div className="media-body">
//               <p className="mb-1">{title}</p>
//               <div className="d-flex flex-wrap">
//                 <div>
//                   <div className="fs-14">{number}</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
import React from "react";

const Card = ({ title, number, classStyle, handleClick }) => {
  return (
    <div onClick={handleClick} className="col-xl-3 col-xxl-3 col-sm-6">
      <div className={`card modern-card p-4 ${classStyle}`}>
        <div className="d-flex flex-column justify-content-between h-100">
          <p className="text-muted mb-2">{title}</p>
          <h2 className="fs-28 font-weight-bold mb-0 number-black">{number}</h2>
        </div>

        {/* Optional inline styles for modern card */}
        <style jsx>{`
          .modern-card {
            background: linear-gradient(135deg, #43cea2, #185a9d);
            border-radius: 1rem;
            color: #fff;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
            transition: transform 0.3s, box-shadow 0.3s;
            cursor: pointer;
          }
          .modern-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 25px rgba(0, 0, 0, 0.25);
          }
          .number-black {
            color: #000; /* Black color for the number */
          }
        `}</style>
      </div>
    </div>
  );
};

export default Card;
