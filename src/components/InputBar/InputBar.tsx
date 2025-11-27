import Eye from '../../assets/icons/eye-icon.png'
import EditData from '../../assets/icons/edit-data.png'
import './InputBar.css';

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
  editDataIcon?: boolean;
  autoComplete?: string;
  maxLength?: number;
  showCharCounter?: boolean;
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
  editDataIcon = false,
  autoComplete,
  maxLength,
  showCharCounter = false,
}: InputProps) {
  const charCount = value?.length || 0;

  return (
    <div className={`input-container ${className || ''}`}>
      <div className="input-wrapper">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          id={id}
          disabled={disabled}
          autoComplete={autoComplete}
          maxLength={maxLength}
        />
        {showEyeIcon && (
          <img src={Eye} alt="Mostrar/esconder senha" className="eye-icon" />
        )}
        {editDataIcon && (
          <img src={EditData} alt="Editar dados" className="edit-data" />
        )}
      </div>
      
      {showCharCounter && maxLength && (
        <div className="char-counter">
          {charCount}/{maxLength}
        </div>
      )}
    </div>
  );
}

export default InputBar;