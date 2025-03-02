import { Icon } from "../icon/icon";
import { CoreText } from "../text/text";
import "./footer.css";
export const Footer = () => (
  <>
    <Icon
      type="greenSquare"
      style={{ position: "absolute", bottom: 83, zIndex: 2, right: 17 }}
    />
    <div
      style={{
        width: "calc(100% - 40px)",
        zIndex: 2,
        bottom: 90,
        height: 1,
        backgroundColor: "rgba(89, 254, 155, 1)",
        position: "absolute",
        marginLeft: 20,
        marginRight: 20,
      }}
    />
    <Icon
      type="greenSquare"
      style={{ position: "absolute", bottom: 83, zIndex: 2, left: 17 }}
    />
    <div
      className="footer"
      style={{
        position: "absolute",
        bottom: 0,
        width: "100vw",
        height: 100,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", height: "100%", alignItems: "center" }}>
        <div style={{ width: 24 }} />
        <Icon type="telegramm" />
        <div style={{ width: 24 }} />
        <Icon type="git" />
        <div style={{ width: 24 }} />
        <Icon type="x" />
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <CoreText
          text="docs"
          color="rgba(123, 123, 123, 1)"
          style={{ textDecoration: "underline" }}
        />
        <div style={{ width: 33 }} />
        <CoreText
          text="terms and conitions"
          color="rgba(123, 123, 123, 1)"
          style={{ textDecoration: "underline" }}
        />
        <div style={{ width: 33 }} />
        <CoreText
          text="privacy police"
          color="rgba(123, 123, 123, 1)"
          style={{ textDecoration: "underline" }}
        />
      </div>
      <div style={{ alignItems: "center", display: "flex" }}>
        <Icon type="logo" style={{ paddingRight: 25 }} />
      </div>
    </div>
  </>
);
