import { useState } from "react";

const StandaloneCheckbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <label
      className={`flex  items-center justify-center size-[25px] rounded-[6px] shadow-sm cursor-pointer border border-[#CDCDCD] group active:border-2 active:border-lightBlue ${
        checked
          ? "bg-checkboxBg hover:bg-secondaryCheckboxBg "
          : "bg-white hover:border hover:border-secondaryColor "
      }`}
    >
      <input
        type="checkbox"
        className="hidden peer"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <svg
        className={`w-[17px] h-[12px] ${
          checked
            ? "text-white "
            : "text-transparent group-hover:text-hoverCheckbox group-active:text-activeCheckbox"
        } `}
        width="17"
        height="12"
        viewBox="0 0 19 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7.6L7.03451 12.9672C7.05497 12.9854 7.08626 12.9837 7.1047 12.9635L18 1"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </svg>
    </label>
  );
};

export default StandaloneCheckbox;
