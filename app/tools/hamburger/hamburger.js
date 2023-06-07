
import './hamburger.scss';

export default function Hamburger({isOpen, setIsOpen}) {
  return (
    <div className={`hamburger ${isOpen ? 'hamburger-open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className={`hamburger__line ${isOpen ? 'rotate45' : ''}`}></div>
      <div className={`hamburger__line ${isOpen ? 'fade-out' : ''}`}></div>
      <div className={`hamburger__line ${isOpen ? 'rotate-45' : ''}`}></div>
    </div>
  );
}