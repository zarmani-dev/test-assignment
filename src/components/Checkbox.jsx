const Checkbox = ({ checked, setChecked, isHovered, isActive, onClick }) => {
  return (
    <label
      className={`flex items-center justify-center w-[23px] h-[23px] rounded-[6px] shadow-sm cursor-pointer border border-[#CDCDCD] ${
        isActive && "border-2 border-lightBlue"
      }  ${
        checked
          ? `bg-checkboxBg ${isHovered && "bg-secondaryCheckboxBg"}`
          : `bg-white ${isHovered && "border border-secondaryColor"}`
      }`}
    >
      <input
        type="checkbox"
        className="hidden "
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
        onClick={onClick}
      />
      <svg
        className={`w-[17px] h-[12px] ${
          checked
            ? "text-white"
            : ` ${isHovered ? "text-hoverCheckbox" : "text-transparent"} ${
                isActive && "text-black text-opacity-40"
              }`
        }`}
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

export default Checkbox;
