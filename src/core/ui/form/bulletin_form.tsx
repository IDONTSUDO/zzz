import { useState, useRef, useEffect } from "react";
import { Icon } from "../icon/icon";
import { CoreText } from "../text/text";

export const BulletInForm: React.FC<{ closeCallback: Function }> = ({
  closeCallback,
}) => {
  const formWidth = 550;
  const height = 450;
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [domRect, setDomRect] = useState<DOMRect | undefined>();
  const svgRef = useRef<SVGPathElement>(null);
  window.addEventListener("resize", () => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  });

  useEffect(() => {
    setDomRect(svgRef.current?.getBoundingClientRect());
  }, []);

  return (
    <>
      <div
        style={{
          zIndex: 100,
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          top: windowHeight / 2 - (height + 32 + 42) / 2,
          left: windowWidth / 2 - formWidth / 2,
        }}
      >
        <div style={{ position: "relative", bottom: -100 }}>
          <div
            style={{
              position: "absolute",
              left: domRect?.left,
              top: domRect?.top ?? 0 - (domRect?.width ?? 0 / 2),
            }}
          ></div>
          <Icon ref={svgRef} type="bulletInForm" width={formWidth} />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: domRect?.left,
          top: domRect?.top,
          zIndex: 100,
          width: domRect?.width,
          // backgroundColor: "red",
          height: domRect?.height,
        }}
      >
        <div
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <div
            style={{ width: 50, height: 50, cursor: "pointer" }}
            onClick={() => closeCallback()}
          />
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            // backgroundColor: "red",
            alignContent: "center",
            placeItems: "center",
          }}
        >
          <div style={{ position: "relative", bottom: 40 }}>
            <CoreText
              text="↓ Download AGT WHITPAPER (.PDF 1,234 kB)"
              style={{ textDecoration: "underline", cursor: "pointer" }}
              color="black"
            />
            <div style={{ height: 20 }} />
            <CoreText
              text="↓ Download AGT WHITPAPER (.PDF 1,234 kB)"
              style={{ textDecoration: "underline", cursor: "pointer" }}
              color="black"
            />
          </div>
        </div>
      </div>
    </>
  );
};
