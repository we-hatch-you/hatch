import type { SVGAttributes } from "react";

const Logo = (props: SVGAttributes<SVGElement>) => {
  return (
    <div className="flex items-center gap-2.5">
      <span className="font-bold text-xl tracking-tight text-foreground flex items-center gap-2">
        Hatch Cards
      </span>
    </div>
  );
};

export default Logo;
