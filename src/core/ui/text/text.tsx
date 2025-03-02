import "./text.css";

export const CoreText: React.FC<{
  text: string;
  color?: string;
  fontSize?: number;
  style?: React.CSSProperties;
  contentEditable?: boolean;
  onChange?: (text: string) => void;
  ref?: React.RefObject<HTMLDivElement | null>;
}> = ({ text, color, fontSize, style, contentEditable, onChange, ref }) => (
  <div
    ref={ref}
    onInput={(event) => {
      if (onChange !== undefined) {
        // @ts-expect-error
        onChange(event.target.innerText);
      }
    }}
    contentEditable={contentEditable}
    style={Object.assign(
      {
        fontFamily: "GraublauWeb",
        color: color ?? "white",
        fontSize: fontSize,
      },

      style
    )}
  >
    {text}
  </div>
);
