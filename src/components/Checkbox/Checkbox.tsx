import checkedSvg from "../../assets/checked.svg";
import uncheckedSvg from "../../assets/unchecked.svg";

interface CheckboxProps {
  checked: boolean;
}

export default function Checkbox({ checked }: CheckboxProps) {
  return (
    <div style={{
      backgroundImage: `url(${checked ? checkedSvg : uncheckedSvg})`,
      backgroundSize: "contain",
      width: 36,
      height: 36,
    }} />
  );
  
}