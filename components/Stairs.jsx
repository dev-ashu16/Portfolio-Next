import { motion } from "framer-motion";
//variants
const stairAnimations = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

// calculte the reverse index for staggred delay
const reverseIndex = (index) => {
 const totalSteps = 6; // total number of steps
 return totalSteps - index - 1 ;
};
const Stairs = () => {
    return (
        <>
            {/* render 6 motion divs, each representing a step of the stairs. 
            Each div will have the same animation defined by the stairsanimation object.
      The delay for each div is calculated sinamically based on the it's reversed index, 
      creating a staggered effect with decreasing delay for each subsuquent step.
      */}

      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
              key={index}
              variants={stairAnimations}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: reverseIndex(index) * 0.1,
              }}
            className="h-full w-full bg-white relative"
          />
            );
            })}
        </>
    )
};

export default Stairs;
