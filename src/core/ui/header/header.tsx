import { Icon } from "../icon/icon";
import { CoreText } from "../text/text";
import "./header.css";
export const Header = () => (
  <div
    className="header"
    style={{
      border: "1px solid #292929",
      // boxShadow: "inset 0px 0px 23.9px #292929;",
      display: "flex",
      // filter: "saturate(2.2);",
      position: "absolute",
      width: "100vw",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: 2,
      paddingTop: 15,
      paddingBottom: 15,
    }}
  >
    <CoreText
      text={"ROB OTTMACHIN"}
      fontSize={32}
      color="#10F48A"
      style={{
        width: 610,
        paddingLeft: 32,
        textShadow: "0px 0px 4px rgba(166, 255, 201, 0.5)",
      }}
    />
    {/* <div
      style={{
        width: 14,
        height: 9,
        transform: "rotate(48deg)",
        backgroundColor: "white",
        alignSelf: "center",
      }}
    /> */}
    <Icon
      type="whiteSquare"
      style={{
        alignSelf: "center",
        marginBottom: 5,
        zIndex: 2,
      }}
    />
    <div
      style={{
        width: "100%",
        height: 1,
        background: "white",
        alignSelf: "center",
      }}
    />
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", top: 22 }}>
        <Icon type={"hederTop"} />
      </div>
    </div>
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", top: 26, left: 16 }}>
        <Icon type={"headerBottom"} />
      </div>
    </div>

    <div
      style={{
        width: "100%",
        height: 1,
        background: "white",
        alignSelf: "center",
      }}
    />

    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          height: 1,
          top: 37.5,
          width: 20,
          background: "white",
        }}
      />
    </div>
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute" }}>
        <CoreText
          text="CONNECT"
          style={{ position: "relative", left: 60, top: 26 }}
          color="black"
        />
      </div>
    </div>
    <Icon type="topButton" style={{ alignContent: "center" }} />
    <div style={{ width: 40 }} />
  </div>
);
/* Line 9 */
