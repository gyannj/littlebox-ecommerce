
type Props ={
    isOpen: boolean;
    onClick : () => void
}
const BurgerButton = ({ isOpen, onClick }: Props) => (
    <button className="h-5 w-5" onClick={onClick}>
      <div className="sr-only">{isOpen ? "Close menu" : "Open menu"}</div>
      <div
        aria-hidden="true"
        className={`absolute h-0.5 w-5 bg-current transition duration-300 ease-in-out ${
          isOpen ? "rotate-45" : "-translate-y-1.5"
        }`}
      />
      <div
        aria-hidden="true"
        className={`absolute h-0.5 w-5 bg-current transition duration-300 ease-in-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        aria-hidden="true"
        className={`absolute h-0.5 w-5 bg-current transition duration-300 ease-in-out ${
          isOpen ? "-rotate-45" : "translate-y-1.5"
        }`}
      />
    </button>
  );
export default BurgerButton;