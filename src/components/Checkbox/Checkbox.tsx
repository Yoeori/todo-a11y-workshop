interface CheckboxProps {
  checked: boolean;
}

export default function Checkbox({ checked }: CheckboxProps) {
  return (
    <div style={{
      backgroundImage: `url(${checked ? "./checked.svg" : "./unchecked.svg"})`,
      backgroundSize: "contain",
      width: 36,
      height: 36,
    }} />
  );
  
}