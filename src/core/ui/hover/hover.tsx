import React, { useEffect, useRef } from "react";

export const Hover: React.FC<{
  onHover: (status: boolean, id: string | undefined) => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
  id?: string;
  onClick?: () => void;
}> = ({ onHover, children, style, id, onClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.addEventListener("mouseover", () => onHover(true, id));
    ref.current?.addEventListener("mouseout", () => onHover(false, id));
  }, []);
  return (
    <div onClick={onClick} style={style} ref={ref}>
      {children}
    </div>
  );
};
