interface HardLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const HardLink = ({ to, children, className }: HardLinkProps) => {
  return (
    <a href={to} className={className}>
      {children}
    </a>
  );
};

export default HardLink;