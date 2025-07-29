import { memo } from "react";

import { BUTTONS } from "@/constants/ActionButtons.constant";

const ActionButtons = () => (
  <div className="flex flex-col font-bold text-lg xs:text-2xl items-start text-grey">
    {BUTTONS.map((button) => (
      <button
        key={button}
        className="hover:text-white transition-colors duration-300"
      >
        {button}
      </button>
    ))}
  </div>
);

export default memo(ActionButtons);
