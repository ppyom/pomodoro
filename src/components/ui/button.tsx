import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const baseStyle =
  'px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer disabled:cursor-not-allowed';
const variants = {
  primary: 'bg-accent-primary text-white hover:bg-accent-primary/90',
  secondary: 'bg-accent-soft text-text-primary hover:bg-accent-soft/70',
  outline:
    'border border-border-default text-text-secondary hover:bg-surface-accent/30',
};

export function Button({
  variant = 'secondary',
  children,
  onClick,
  className,
  disabled,
}: Props) {
  return (
    <button
      className={clsx(baseStyle, variants[variant], className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
