import { text } from "stream/consumers";
import { Icon } from "../icon/icon";
import { CoreText } from "../text/text";

export const Button: React.FC<{
  style: React.CSSProperties;
  text: string;
  type: string;
  textStyle: React.CSSProperties;
  isActive: boolean;
  onClick?: Function;
}> = ({ style, text, type, textStyle, isActive, onClick }) => (
  <div
    style={Object.assign({ cursor: "pointer" }, style)}
    onClick={() => onClick?.()}
  >
    <CoreText text={text} style={textStyle} />
    <Icon type={isActive ? `${type}Active` : type} />
  </div>
);

export const ButtonGreen: React.FC<{
  style?: React.CSSProperties;
  text?: string;
  type?: string;
  textStyle?: React.CSSProperties;

  onClick?: Function;
}> = ({ text, style, type, textStyle }) => (
  <div style={{ cursor: "pointer" }}>
    <div style={{ position: "absolute" }}>
      <div
        style={{
          position: "relative",
          width: 320,
          top: 13,
          textAlign: "center",
        }}
      >
        <CoreText text={text ?? ""} color="black" />
      </div>
    </div>
    <Icon type="greenButton" width={320} />
  </div>
);
