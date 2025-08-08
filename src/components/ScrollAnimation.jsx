
// import { motion } from "framer-motion";
// import "../index.css"; 

// const animation = {
//   variants: {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//     slideStart: { clipPath: "inset(0 100% 0 0 round 8px)" },
//     slideEnd: { clipPath: "inset(0 0% 0 0 round 8px)" }
//   },
//   initial: ["hidden", "slideStart"],
//   whileInView: ["visible", "slideEnd"],
//   exit: ["hidden", "slideStart"],
//   viewport: {
//     amount: 0.4
//   },
//   transition: { type: "spring", duration: 1, bounce: 0 }
// };

// const messageAnimation = {
//   initial: { y: -64 },
//   whileInView: { y: 0 },
//   viewport: { once: true },
//   transition: { type: "spring", duration: 0.5, bounce: 0 }
// };

// const arrowAnimation = {
//   style: { originX: "center", originY: 0 },
//   whileInView: { y: [0, 24], scale: [1, 1.4] },
//   transition: {
//     repeat: 5,
//     repeatType: "mirror",
//     duration: 1.5
//   }
// };

// export default function ScrollAnimation() {
//   return (
//     <div className="scroll-container">
//         <motion.div {...messageAnimation} className="scroll-down__message">
//           <h2 style={{ textTransform: "uppercase" }}>Scroll down</h2>
//           <motion.div {...arrowAnimation} className="scroll-down__arrow">
//             &#8595;
//           </motion.div>
//         </motion.div>
//       <div className="motion__wrapper">
//         {Array.from(Array(8).keys()).map((i) => (
//           <motion.div {...animation} key={i} className="motion-box" />
//         ))}
//       </div>
//     </div>
//   );
// }
