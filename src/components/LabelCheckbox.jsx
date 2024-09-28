import { useState } from "react";
import Checkbox from "./Checkbox";

const LabelCheckbox = ({ label }) => {
  const [checked, setChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setChecked((prev) => !prev);
  };

  return (
    <button
      onClick={() => setChecked(!checked)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      className="flex justify-between items-center w-[370px] h-[42px] bg-white py-[8px] pl-[22px] pr-[15px] hover:bg-gray-100 "
    >
      <label htmlFor="checkbox">{label}</label>
      <Checkbox
        checked={checked}
        setChecked={setChecked}
        isHovered={isHovered}
        isActive={isActive}
        onClick={handleToggle}
      />
    </button>
  );
};

export default LabelCheckbox;
