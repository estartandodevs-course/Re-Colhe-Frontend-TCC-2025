import Eye from '../../assets/icons/eye-icon.png'

type InputProps = {
  placeholder?: string;
  className?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  disabled?: boolean;
  showEyeIcon?: boolean;
};

function InputBar({
  placeholder,
  className,
  type = 'text',
  value,
  onChange,
  name,
  id,
  disabled,
  showEyeIcon = false,
}: InputProps) {
  return (
    <div className={className}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        disabled={disabled}
      />
      {showEyeIcon && (
        <img src={Eye} alt="Mostrar/esconder senha" className="eye-icon" />
      )}
    </div>
  );
}

export default InputBar;
