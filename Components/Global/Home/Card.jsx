// import React from "react";

// const Card = ({ title, patient, number, iconOne, iconTwo, classStyle }) => {
//   return (
//     <div className="col-xl-3 col-xxl-3 col-sm-6">
//       <div className={`card gradient-bx text-white ${classStyle}`}>
//         <div className="card-body">
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

const Card = ({ title, patient, number, iconOne, iconTwo, classStyle }) => {
  return (
    <div className="col-xl-3 col-xxl-3 col-sm-6">
      <div className={`card modern-card p-4 ${classStyle}`}>
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <p className="mb-2 text-muted">{title}</p>
            <div className="d-flex align-items-center">
              <h2 className="fs-32 font-weight-bold mb-0 me-3">{patient}</h2>
              <div className="d-flex flex-column align-items-start">
                <div className="icon mb-1">{iconOne}</div>
                <span className="fs-14 text-success">+{number}%</span>
              </div>
            </div>
          </div>
          <div className="icon-circle bg-white text-dark shadow-sm">
            {iconTwo}
          </div>
        </div>
      </div>

      {/* Optional styles for modern card */}
      <style jsx>{`
        .modern-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 1rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .modern-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 25px rgba(0,0,0,0.2);
        }
        .icon-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default Card;
