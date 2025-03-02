/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { Logs } from "./core/ui/logs/logs";
import { Header } from "./core/ui/header/header";
import { Footer } from "./core/ui/footer/footer";
import { observer } from "mobx-react-lite";
import { Button } from "./core/ui/button/button";
import { makeAutoObservable } from "mobx";
import { Form } from "./core/ui/form/form";
import { Icon } from "./core/ui/icon/icon";
import { configure } from "mobx";






configure({
  enforceActions: "never",
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export class StorePage {
  mainRefHeight?: number;
  bulletButtonIsActive = false;
  aboutButtonIsActive = false;
  generationButtonIsActive = false;

  topLineTop?: number;
  generationEventBottomLineTop?: number;
  ggg = () => this.topLineTop ?? 0;
  bulletButtonTop = () => (this?.mainRefHeight ?? 1) + 70;
  aboutButtonTop = () => this.bulletButtonTop() - 100;
  generationEventButtonTop = () => this.aboutButtonTop() - 100;
  generationEventButtonBegin = () => this.generationEventButtonTop() + 6;

  topButtonAccessibleDistance = () => this.generationEventButtonBegin() - 108;
  constructor() {
    makeAutoObservable(this);
  }
  clickButton = (name: string) => {
    if (name === "generationButtonIsActive") {
      this.generationButtonIsActive = !this.generationButtonIsActive;
      this.aboutButtonIsActive = false;
      this.bulletButtonIsActive = false;
    }
    if (name === "aboutButtonIsActive") {
      this.aboutButtonIsActive = !this.aboutButtonIsActive;
      this.generationButtonIsActive = false;
      this.bulletButtonIsActive = false;
    }
    if (name === "bulletButtonIsActive") {
      this.bulletButtonIsActive = !this.bulletButtonIsActive;
      this.generationButtonIsActive = false;
      this.aboutButtonIsActive = false;
    }
  };
}
export const Page = observer(() => {
  const [store] = useState(new StorePage());
  const mainLineRef = useRef<HTMLDivElement>(null);
  const topLineRef = useRef<HTMLDivElement>(null);
  const generationEventBottomLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    store.mainRefHeight = ((mainLineRef.current?.clientHeight ?? 1) / 100) * 60;
    store.topLineTop =
      topLineRef.current!.getBoundingClientRect().top + window.screenY;
    store.generationEventBottomLineTop =
      generationEventBottomLineRef.current!.getBoundingClientRect().top +
      window.screenY;
    // console.log(store.generationEventBottomLineTop);
  }, [topLineRef, mainLineRef]);

  return (
    <>
      {/* <div
        style={{
          top: store.bulletButtonTop() + 19,
          width: 2,
          height: 2,
          right: 26,
          position: "absolute",
          backgroundColor: "rebeccapurple",
        }}
      /> */}

      <Icon
        type="dasdasdds"
        style={{
          position: "absolute",
          top: store.aboutButtonTop() + 47 + 16,
          right: 24.5,
        }}
      />
      <div
        style={{
          top: store.aboutButtonTop() + 47 + 20,
          width: 0.5,
          height: Math.abs(
            store.aboutButtonTop() + 47 + 19 - (store.bulletButtonTop() + 19)
          ),
          right: 27.5,
          position: "absolute",
          backgroundColor: "white",
          opacity: 0.4,
        }}
      />

      <Icon
        type="qwewqe"
        style={{
          position: "absolute",
          right: 20,
          top: store.aboutButtonTop() + 47,
        }}
      />
      <Icon
        type="qwewqqw"
        style={{
          position: "absolute",
          right: 28,
          top: store.generationEventButtonTop() + 68,
        }}
      />
      <Icon
        type="dddd"
        style={{
          position: "absolute",
          right: 25,
          top: store.generationEventButtonTop() + 75,
        }}
      />

      <div
        style={{
          top: store.generationEventButtonTop() + 49 + 25,
          width: 0.5,
          height:
            Math.abs(
              store.generationEventButtonTop() +
                49 -
                store.aboutButtonTop() +
                18
            ) + 13,
          background: "white",
          opacity: 0.5,
          position: "absolute",
          right: 28,
          zIndex: 20,
        }}
      />
      <Header />
      <Button
        onClick={() => store.clickButton("generationButtonIsActive")}
        isActive={store.generationButtonIsActive}
        style={{
          position: "absolute",
          right: 20,
          top: store.generationEventButtonTop(),
        }}
        text={"GENERATION EVENT"}
        type={"generationEvent"}
        textStyle={{ position: "relative", top: 30, left: 20 }}
      />

      <div ref={generationEventBottomLineRef}>
        <Icon
          type="generationEventBottomLine"
          style={{
            position: "absolute",
            right: 20,
            top: store.generationEventButtonTop() + 49,
          }}
        />
      </div>
      <Button
        onClick={() => store.clickButton("aboutButtonIsActive")}
        isActive={store.aboutButtonIsActive}
        style={{
          position: "absolute",
          right: 20,
          top: store.aboutButtonTop(),
        }}
        text={"ABOUT"}
        type={"about"}
        textStyle={{ position: "relative", top: 30, left: 20 }}
      />

      <Button
        onClick={() => store.clickButton("bulletButtonIsActive")}
        isActive={store.bulletButtonIsActive}
        style={{
          position: "absolute",
          right: 20,
          top: store.bulletButtonTop(),
        }}
        text={"BULLETIN"}
        type={"bulletIn"}
        textStyle={{ position: "relative", top: 30, left: 20 }}
      />

      <Form />
      <div
        ref={mainLineRef}
        style={{
          position: "absolute",
          right: 20,
          zIndex: 4,
          top: 108,
          height: store.mainRefHeight ?? "calc(100% - 100px - 108px)",
 
          opacity: 0.4,
          width: 1,
        }}
      />
      
      <div
        style={{
          position: "absolute",
          height: store.generationEventButtonTop() - 110,
          background: "white",
          opacity: 0.5,
          width: 0.5,
          top: 108,
          right: 20.5,
          zIndex: 2,
        }}
      />
      <div
        ref={topLineRef}
        style={{
          position: "absolute",
          top: store.generationEventButtonTop() - 6,
          right: 20,
        }}
      >
        <Icon type={"topLine"} />
      </div>

      <div
        style={{
          position: "absolute",
          height: 12,
          background: "white",
          opacity: 0.5,
          width: 0.5,
          top: store.generationEventButtonTop() + 8,
          right: 28,
          zIndex: 2,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Logs />
        
        <img
          src={"/bg.jpg"}
          style={{
            height: "100vh",
            position: "relative",
            right: 100,
            zIndex: -1,
          }}
        />
      </div>
      <Footer />
    </>
  );
});

root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
