import { useEffect, useRef } from "react";
import { Icon } from "../icon/icon";
import { CoreText } from "../text/text";

export const Input: React.FC<{
  onChange?: (text: string) => void;
  isNeedMaxIcon?: boolean;
  text?: string;
}> = ({ onChange, text, isNeedMaxIcon }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current!.addEventListener("keypress", function (event) {
      // Запретить перенос строки при нажатии Enter
      if (event.key === "Enter") {
        event.preventDefault();
      }
    });
    ref.current!.addEventListener("input", function () {
      // Изменяем размер div, если текст превышает ширину
      if (ref.current!.scrollWidth > ref.current!.clientWidth) {
        ref.current!.style.overflow = "hidden";
        ref.current!.innerText = ref.current!.innerText.slice(0, -1); // Удаляем последний символ
      }
    });

    ref.current!.addEventListener("paste", function (event) {
      // Запретить перенос строк при вставке текста
      // @ts-expect-error
      const clipboardData = event.clipboardData || window.clipboardData;
      const pastedData = clipboardData.getData("Text");
      const cleanData = pastedData.replace(/\r?\n|\r/g, " "); // Заменить переносы на пробелы
      event.preventDefault();
      document.execCommand("insertText", false, cleanData);
    });
  }, []);
  return (
    <>
      <Icon type="amountPayForm" width={230} />

      <div style={{ position: "absolute" }}>
        <div style={{ position: "relative", top: 14, left: 10 }}>
          <CoreText
            ref={ref}
            style={{
              width: isNeedMaxIcon ? 166 : 212,
              wordWrap: "break-word",
              overflow: "hidden",
              overflowX: "hidden",
              whiteSpace: "nowrap",

              display: "inline-block",
            }}
            text={text ?? ""}
            contentEditable={true}
            color="black"
            onChange={(text) => onChange?.(text)}
          />
        </div>
        <div style={{ position: "relative", bottom: 17, left: 179, width: 10 }}>
          <Icon type="inputMax" width={47} />
        </div>
        <div style={{ position: "relative", bottom: 46, left: 183, width: 10 }}>
          <CoreText text="MAX" color="black" fontSize={12} style={{width:'min-content'}} />
        </div>
      </div>
    </>
  );
};
