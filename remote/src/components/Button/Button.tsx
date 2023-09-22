export type ButtonProps = {
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    console.log('Click handler triggered on remote.');
    onClick?.();
  };
  return <>
    <button onClick={handleClick}>Remote Button</button>
  </>
}

export default Button;