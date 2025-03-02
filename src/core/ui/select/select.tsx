import { useEffect, useRef, useState } from "react";
import { Icon } from "../icon/icon";
import { hoverSelectEvent } from "../form/form";
import { CoreText } from "../text/text";

export interface Item {
  icon: string;
  text: string;
  l?: React.ReactNode;
  s?: React.ReactNode;
}
const items: Item[] = [
  {
    text: "SOL",
    icon: "sol",
  },
  {
    text: "JUP",
    icon: "jup",
    l: <div style={{ width: 4 }} />,
    s: <div style={{ width: 4 }} />,
  },
  {
    text: "USDC",
    icon: "usdc",
    l: <div style={{ width: 4 }} />,
    s: <div style={{ width: 4 }} />,
  },
  {
    text: "USDT",
    icon: "usdt",
    l: <div style={{ width: 4 }} />,
    s: <div style={{ width: 4 }} />,
  },
];
export const Select: React.FC<{}> = () => {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState<Item>({
    text: "SOL",
    icon: "sol",
  });
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.addEventListener("mouseover", () => {
      setOpen(true);
      hoverSelectEvent.emit(true);
    });
    ref.current?.addEventListener("mouseout", () => {
      setOpen(false);
      hoverSelectEvent.emit(false);
    });
  }, []);
  return (
    <div ref={ref} style={{ cursor: "pointer", zIndex: 10 }}>
      <div style={{ position: "absolute" }}>
        <div
          style={{
            position: "relative",
            right: 70,
            bottom: open ? 4 : undefined,
          }}
        >
          <Icon type={open ? "selectBg" : "selectBgClose"} width={70} />
        </div>
      </div>
      <div style={{ position: "absolute" }}>
        <div
          style={{
            position: "relative",
            top: 15,
            left: -70,
            width: 70,
            display: "flex",
            justifyItems: "center",
          }}
        >
          <Icon type={value.icon} />
          <CoreText
            text={value.text}
            color="black"
            fontSize={9}
            style={{ position: "relative", top: 5 }}
          />
        </div>
      </div>
      <div style={{ position: "absolute" }}>
        <div
          style={{
            position: "relative",
            top: 40,
            left: -70,
            visibility: open ? undefined : "hidden",
          }}
        >
          {items
            .filter((el) => el.text !== value.text)
            .map((el) => (
              <div style={{ display: "flex", height: 24 }}>
                {el.text === "JUP" ? (
                  <>
                    <div style={{ position: "absolute" }}>
                      <div style={{ position: "relative", top: -12, left: 3 }}>
                        <Icon type="selectItemBg" width={66} />
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {el.l}
                <Icon type={el.icon} style={{ zIndex: 100 }} />
                {el.s}
                <CoreText
                  text={el.text}
                  color="black"
                  fontSize={9}
                  style={{ position: "relative", top: 5 }}
                />
              </div>
            ))}
        </div>
      </div>
      <div style={{ position: "absolute" }}>
        <div style={{ position: "relative", top: 17, left: -25 }}>
          <Icon type="cursor" />
        </div>
      </div>
    </div>
  );
};
