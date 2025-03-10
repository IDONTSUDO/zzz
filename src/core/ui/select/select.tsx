import { useEffect, useRef, useState } from "react";
import { Icon } from "../icon/icon";
import { hoverSelectEvent } from "../form/generation_event_form";
import { CoreText } from "../text/text";
import { Hover } from "../hover/hover";

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
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<Item>({
    text: "SOL",
    icon: "sol",
  });
  const [hoverItem, setHoverItem] = useState("");
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
  const setSelect = (text: string) => {
    const index = items.findIndex((el) => el.text === text);

    setValue(items[index]);
    setOpen(false);
  };
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
          onClick={() => setOpen(true)}
        >
          <Icon type={value.icon} style={{ position: "relative", left: 4 }} />
          <CoreText
            text={value.text}
            color="black"
            fontSize={9}
            style={{ position: "relative", top: 5, left: 4 }}
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
          {items.map((el, key) => (
            <div key={key} style={{ display: "flex", height: 24 }}>
              {el.text === hoverItem ? (
                <>
                  <div style={{ position: "absolute" }}>
                    <div style={{ position: "relative", top: -12, left: 2 }}>
                      <Icon type="selectItemBg" width={67} />
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
              <Hover
                onClick={() => setSelect(el.text)}
                id={el.text}
                style={{ display: "flex" }}
                onHover={function (status: boolean, id?: string): void {
                  if (status === false) {
                    setHoverItem("");
                  }
                  if (id !== undefined) {
                    setHoverItem(id);
                  }
                }}
                children={
                  <>
                    {el.l}
                    <Icon
                      type={el.icon}
                      style={{
                        zIndex: 100,
                        position: "relative",
                        left: 4,
                        top: 2,
                      }}
                    />
                    {el.s}
                    <CoreText
                      text={el.text}
                      color="black"
                      fontSize={9}
                      style={{ position: "relative", top: 5, left: 3 }}
                    />
                  </>
                }
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
