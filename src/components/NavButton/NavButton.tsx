import { Link } from 'react-router-dom';

type NavButtonProps = {
  to: string;
  label: string;
  className?: string;
};

function NavButton({ to, label, className }: NavButtonProps) {
  return (
    <Link to={to}>
      <button type="button" className={className}>
        {label}
      </button>
    </Link>
  );
}

export default NavButton;
