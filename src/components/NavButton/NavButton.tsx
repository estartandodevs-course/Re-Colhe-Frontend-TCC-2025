import { useNavigate } from 'react-router-dom';
import type { ReactNode } from 'react';

type NavButtonProps = {
  to?: string;
  label?: string;
  className?: string;
  children?: ReactNode;
  state?: unknown;
  onClick?: () => void;
};

function NavButton({ to, label, className, children, state, onClick }: NavButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to, { state });
    }
  };

  return (
    <button type="button" className={className} onClick={handleClick}>
      {label}
      {children}
    </button>
  );
}

export default NavButton;
