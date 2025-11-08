import ReColhe from '../../assets/logo/logo-re-colhe.png';

type LogoProps = {
  width?: number | string;
  height?: number | string;
  className?: string;
};

function Logo({ width, height, className }: LogoProps) {
  return (
    <img
      src={ReColhe}
      alt="Logo da aplicação"
      width={width}
      height={height}
      className={className}
      style={{ width, height }}
    />
  );
}

export default Logo;
