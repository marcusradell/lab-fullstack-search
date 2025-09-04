type NavLogoProps = {
  text: string;
};

export function NavLogo({ text }: NavLogoProps) {
  return (
    <div className="text-2xl font-bold font-mono text-cyan-300">[ {text} ]</div>
  );
}
