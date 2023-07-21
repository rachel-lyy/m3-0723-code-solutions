import './CustomButton.css';

function CustomButton({ text, className }) {
  return <button className={className}>{text}</button>;
}

export default CustomButton;
