import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../Circles";
import WorkSlider from "../../WorkSlider";
import { fadeIn } from "../../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
    
      <Bulb />
    </div>
  );
};

export default Work;