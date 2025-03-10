import { useEffect, useState } from "react";
import { logsFixture, Log } from "../../constants/logs";
import { CoreText } from "../text/text";
import { observer } from "mobx-react-lite";
import { makeAutoObservable } from "mobx";
import { Icon } from "../icon/icon";
function generateUUID(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
const statuses = [
  "discovery completed",
  "maintenance pending",
  "analysis completed",
  "maintenance running",
];
function generateYellow(): string {
  return statuses.at((Math.random() * statuses.length - 1) | 0) ?? "";
}

const localeMount = (mounth: number) => {
  switch (mounth) {
    case 1: {
      return "Jan";
    }
  }
  return "";
};
function generateTime(): string {
  const d = new Date();

  d.getMonth();
  d.getDate();

  return `${localeMount(
    d.getMonth()
  )} ${d.getDate()} ${d.getHours()}:${d.getHours()}:${d.getSeconds()}`;
}

class LogsStore {
  cursor: boolean = true;
  logs: Log[] = logsFixture;
  cursorCallback?: NodeJS.Timer;
  logsCallback?: NodeJS.Timer;
  constructor() {
    makeAutoObservable(this);
  }
  init = () => {
    this.cursorCallback = setInterval(() => {
      this.cursor = !this.cursor;
    }, 500);
    this.logsCallback = setInterval(() => {
      const log = JSON.parse(
        JSON.stringify(this.logs.at(this.logs.length - 1))
      );
      log.whiteLog = generateUUID();
      log.greenLog = generateYellow();
      log.yellowLog = generateTime();
      this.logs.push(log);
    }, 500);
  };
  dispoce = () => {
    clearInterval(this.cursorCallback);
    clearInterval(this.logsCallback);
  };
}

const bottom = 120;
const bb = bottom - 20;
const leftOffset = 37;
export const Logs = observer(() => {
  const [store] = useState(new LogsStore());
  useEffect(() => {
    store.init();
    return () => store.dispoce();
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          position: "relative",
          left: 20,
          height: "63%",
          marginTop: 120,
          marginBottom: 5,
          backgroundColor: "rgba(67, 67, 67, 1)",
          width: 2,
        }}
      >
        <Icon type={"logSquare"} style={{ position: "absolute", bottom: 20 }} />
      </div>

      <div style={{ position: "absolute", bottom: bottom, left: leftOffset }}>
        {store.logs.map((el, i) => (
          <div key={i} style={{ display: "flex" }}>
            <div style={{ width: 4 }} />
            <CoreText text={el.yellowLog} color="#F8FF7C" fontSize={12} />
            <div style={{ width: 4 }} />
            <CoreText text={el.whiteLog} fontSize={12} />
            <div style={{ width: 4 }} />
            <CoreText text={el.greenLog} color="#A6FFC9" fontSize={12} />
          </div>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        <CoreText
          text=">"
          style={{ position: "absolute", bottom: bb, left: leftOffset + 4 }}
        />
        <CoreText
          text="_"
          style={{
            position: "absolute",
            bottom: bb,
            left: leftOffset + 15,
            visibility: store.cursor ? undefined : "hidden",
          }}
        />
      </div>
    </div>
  );
});
