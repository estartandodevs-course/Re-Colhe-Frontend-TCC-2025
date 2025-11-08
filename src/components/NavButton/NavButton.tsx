import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type NavButtonProps = {
  to: string;
  label?: string;
  className?: string;
  children?: ReactNode;
  state?: unknown; // novo: estado opcional para passar dados na navegação
};

function NavButton({ to, label, className, children, state }: NavButtonProps) {
  return (
    <Link to={to} state={state}>
      <button type="button" className={className}>
        {label}
        {children}
      </button>
    </Link>
  );
}

export default NavButton;
