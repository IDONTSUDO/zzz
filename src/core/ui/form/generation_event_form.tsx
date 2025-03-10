import { RefObject, useEffect, useRef, useState } from "react";
import { CoreText } from "../text/text";
import { Icon } from "../icon/icon";
import { CheckBox } from "../checkbox/checkbox";
import { ButtonGreen } from "../button/button";
import { Input } from "../input/input";
import { Select } from "../select/select";
import { TypedEvent } from "../../helper/event";
import makeAutoObservable from "mobx-store-inheritance";
import { observer } from "mobx-react-lite";

class HoverSelectEvent extends TypedEvent<boolean> {}

export const hoverSelectEvent = new HoverSelectEvent();
class GenerationStore {
  changeCheckBox(arg0: string) {
    // @ts-expect-error
    this[arg0] = !this[arg0];
  }
  readAndAgree = true;
  undestandRisk = false;
  constructor() {
    makeAutoObservable(this);
  }
}
export const GenerationEventForm: React.FC<{
  init: (domRect: DOMRect) => void;
  closeCallback: () => void;
}> = observer(({ init, closeCallback }) => {
  const [store] = useState(new GenerationStore());
  const formWidth = 513;
  const height = 500;
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const svgRef = useRef<SVGPathElement>(null);
  window.addEventListener("resize", () => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  });
  const [isHover, setHover] = useState(true);
  hoverSelectEvent.on((event) => setHover(event));
  useEffect(() => {
    init(svgRef.current!.getBoundingClientRect());
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
        <div style={{ position: "absolute" }}>
          <div
            style={{
              position: "absolute",
              zIndex: 10,
              height: 500,
              left: "79px",
              right: 643.131591796875,
              width: 355.26318359375,
            }}
          >
            <div
              style={{
                marginRight: 15,
                marginLeft: 15,
                marginTop: 15,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Icon
                  type="rrrtrqwe"
                  width={280}
                  style={{ position: "relative", bottom: 5 }}
                />
                <div style={{ position: "absolute" }}>
                  <CoreText
                    text="GENERATION EVENT"
                    color="black"
                    style={{ position: "relative", top: 10, left: 25 }}
                  />
                </div>
                <Icon type="closeicon" width={25} height={25} />
              </div>
              <CoreText
                text="Join Rob for the live AMA on Feb 32, 2025 at 12:00pm (UTC)"
                color="black"
                fontSize={9}
              />
              <div style={{ height: 20 }} />
              <div style={{ display: "flex" }}>
                <CoreText text="Raised" fontSize={9} color="black" />
                <div style={{ width: 5 }} />
                <CoreText text="901,236,355.00" fontSize={9} color="black" />
                <div style={{ width: 5 }} />
                <CoreText
                  text="of 100,000,000,000.00 AGT"
                  fontSize={9}
                  color="black"
                />
              </div>
              <div style={{ height: 8 }} />
              <Icon type="progress" width={320} />
              <CoreText text="Amount you pay" color="black" fontSize={7} />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Input text="69.8841" isNeedMaxIcon={true} />

                <div>
                  <div style={{ position: "absolute" }}>
                    <div
                      style={{
                        position: "relative",
                        bottom: 10,
                        right: 60,
                        display: "flex",
                      }}
                    >
                      <CoreText text="SOL Avbl." fontSize={6} color="black" />
                      <div style={{ width: 4 }} />
                      <CoreText
                        text="15,877.1223"
                        fontSize={6}
                        color="black"
                        style={{
                          textShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
                        }}
                      />
                    </div>
                  </div>

                  <Select />
                </div>
              </div>

              <CoreText text="Amount you receive" color="black" fontSize={7} />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Input text="69.8841" />
                <div>
                  <Icon type="rob" width={70} />

                  <div
                    style={{
                      position: "absolute",
                      visibility: isHover ? "hidden" : "visible",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        bottom: 55,
                        left: 5,
                        display: "flex",
                      }}
                    >
                      <CoreText text="AGT Avbl." fontSize={6} color="black" />
                      <div style={{ width: 4 }} />
                      <CoreText text="0.00" fontSize={6} color="black" />
                    </div>
                  </div>
                </div>
              </div>

              <ButtonGreen text="Connect wallet" />
              <div style={{ display: "flex", alignItems: "center" }}>
                <CheckBox
                  value={store.readAndAgree}
                  onClick={() => store.changeCheckBox("readAndAgree")}
                />
                <div style={{ width: 5 }} />
                <CoreText
                  text="I have read and agreed to Terms of Service"
                  fontSize={9}
                  color="black"
                />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <CheckBox
                  value={store.undestandRisk}
                  onClick={() => store.changeCheckBox("undestandRisk")}
                />
                <div style={{ width: 5 }} />
                <CoreText
                  text="I uderstand substational risks of loss"
                  fontSize={9}
                  color="black"
                />
              </div>
            </div>
            <div style={{ height: 10 }} />
            <Icon
              type="greenSvgLine"
              width={310}
              style={{ position: "relative", left: 20 }}
            />
            <div style={{ height: 16 }} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <CoreText
                text="Amount to claim"
                color="black"
                fontSize={8}
                style={{ marginLeft: 20 }}
              />
              <div style={{ display: "flex" }}>
                <CoreText
                  text="Clamable Amt."
                  color="black"
                  fontSize={8}
                  style={{ marginLeft: 20 }}
                />
                <div style={{ width: 4 }} />
                <CoreText
                  text="69,884.1"
                  color="black"
                  fontSize={8}
                  style={{ marginRight: 20 }}
                />
              </div>
            </div>
            <Icon type="fffffasdas" width={230} style={{ marginLeft: 20 }} />
          </div>

          <Icon ref={svgRef} type="bigFormBg" height={height} />
          <div
            onClick={() => closeCallback()}
            style={{
              zIndex: 100,
              position: "relative",
              bottom: 500,
              width: 50,
              height: 50,
              // backgroundColor: "red",
              cursor: "pointer",
              left: 380,
            }}
          />
        </div>
      </div>
    </>
  );
});
