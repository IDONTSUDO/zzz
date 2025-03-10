/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { Logs } from "./core/ui/logs/logs";
import { Header } from "./core/ui/header/header";
import { Footer } from "./core/ui/footer/footer";
import { observer } from "mobx-react-lite";
import { Button } from "./core/ui/button/button";
import { makeAutoObservable } from "mobx";
import { GenerationEventForm } from "./core/ui/form/generation_event_form";
import { Icon } from "./core/ui/icon/icon";
import { configure } from "mobx";
import { AboutForm } from "./core/ui/form/about_form";
import { BulletInForm } from "./core/ui/form/bulletin_form";

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
  generationEventFormIsVisible = true;
  bulletFormIsVisible = false;
  aboutFormIsVisible = false;
  topLineTop?: number;
  generationEventBottomLineTop?: number;
  arrowTop = 0;
  arrowLeft = 0;
  generationEventArrowTop = 0;
  mutation = 0;
  generationEventArrowLeft = 0;
  ggg = () => this.topLineTop ?? 0;
  red: React.RefObject<HTMLDivElement | null> | undefined;
  white: React.RefObject<HTMLDivElement | null> | undefined;
  isReady = true;
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
      this.aboutFormIsVisible = false;
      this.bulletFormIsVisible = false;
      this.generationEventFormIsVisible = !this.generationEventFormIsVisible;
    }
    if (name === "aboutButtonIsActive") {
      this.aboutButtonIsActive = !this.aboutButtonIsActive;
      this.generationButtonIsActive = false;
      this.bulletButtonIsActive = false;
      this.generationEventFormIsVisible = false;
      this.bulletFormIsVisible = false;
      this.aboutFormIsVisible = !this.aboutFormIsVisible;
    }
    if (name === "bulletButtonIsActive") {
      this.bulletButtonIsActive = !this.bulletButtonIsActive;
      this.aboutButtonIsActive = false;
      this.aboutFormIsVisible = false;
      this.generationEventFormIsVisible = false;
      this.bulletFormIsVisible = !this.bulletFormIsVisible;
    }
  };
  generationEventFormInit(domRect: DOMRect) {
    this.arrowLeft = domRect.right;
  }

  generationEventArrowRefInit(domRect: DOMRect) {
    this.generationEventArrowTop = domRect.top;
    this.generationEventArrowLeft = domRect.left;
  }
  closeForm(form: string) {}
  generateWhittt() {
    if (
      document.getElementById("white") === null &&
      document.getElementById("red") === null
    ) {
      return 0;
    }
    return (
      // @ts-ignore
      this.white?.current.getBoundingClientRect().left -
      // @ts-ignore
      this.red?.current.getBoundingClientRect().left
    );
  }
}

export const P = () => (
  <>
    <Page />
  </>
);
export const Page = observer(() => {
  const [store] = useState(new StorePage());
  const mainLineRef = useRef<HTMLDivElement>(null);
  const topLineRef = useRef<HTMLDivElement>(null);
  const generationEventBottomLineRef = useRef<HTMLDivElement>(null);
  const white = useRef<HTMLDivElement>(null);
  const red = useRef<HTMLDivElement>(null);
  const generationEventArrowRef = useRef<SVGPathElement>(null);
  useEffect(() => {
    store.mainRefHeight = ((mainLineRef.current?.clientHeight ?? 1) / 100) * 60;
    store.topLineTop =
      topLineRef.current!.getBoundingClientRect().top + window.screenY;
    store.generationEventBottomLineTop =
      generationEventBottomLineRef.current!.getBoundingClientRect().top +
      window.screenY;
  }, [topLineRef, mainLineRef]);
  useEffect(() => {
    if (generationEventArrowRef.current !== undefined)
      store.generationEventArrowRefInit(
        generationEventArrowRef.current!.getBoundingClientRect()
      );
  }, [generationEventArrowRef]);
  useEffect(() => {
    store.red = red;
    store.white = white;
  }, [white, red]);

  return (
    <>
      <div
        id="white"
        ref={white}
        style={{
          visibility: store.generationEventFormIsVisible ? "visible" : "hidden",
          top: store.generationEventButtonTop() + 21,
          width: 2,
          height: 2,
          right: store.generationEventArrowLeft + 255,
          position: "absolute",
          backgroundColor: "white",
        }}
      />
      <div
        ref={red}
        id="red"
        style={{
          left: store.arrowLeft + 27,
          visibility: store.generationEventFormIsVisible ? "visible" : "hidden",
          top: store.generationEventButtonTop() + 21,
          width: 2,
          zIndex: 10,
          height: 2,
          // backgroundColor: "red",
          position: "absolute",
        }}
      />
      <div
        style={{
          left: store.arrowLeft + 27,
          visibility: store.generationEventFormIsVisible ? "visible" : "hidden",
          top: store.generationEventButtonTop() + 21,
          width: store.generateWhittt(),
          zIndex: 10,
          height: 1.5,
          backgroundColor: "white",
          position: "absolute",
        }}
      />
      <div
        style={{
          top: store.generationEventButtonTop() + 10.5,
          visibility: store.generationEventFormIsVisible ? "visible" : "hidden",
          height: 2,
          width: 20,
          left: store.arrowLeft - 5,
          position: "absolute",
          backgroundColor: "white",
        }}
      ></div>

      <Icon
        type="dasdasdds"
        style={{
          position: "absolute",
          top: store.aboutButtonTop() + 47 + 16,
          right: 24.5,
        }}
      />

      <div>
        <div
          style={{
            position: "absolute",
            left: store.arrowLeft + 13,
            top: store.generationEventButtonTop() + 8.5,
            visibility: store.generationEventFormIsVisible
              ? "visible"
              : "hidden",
          }}
        >
          <Icon ref={generationEventArrowRef} type="generationEventArrow" />
        </div>
      </div>

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
      {store.bulletFormIsVisible ? (
        <BulletInForm
          closeCallback={() => store.clickButton("bulletButtonIsActive")}
        />
      ) : (
        <></>
      )}
      {store.generationEventFormIsVisible ? (
        <GenerationEventForm
          closeCallback={() => store.clickButton("generationButtonIsActive")}
          init={(domRect: DOMRect) => store.generationEventFormInit(domRect)}
        />
      ) : (
        <></>
      )}
      {store.aboutFormIsVisible ? (
        <AboutForm
          closeCallback={() => store.clickButton("generationButtonIsActive")}
          // init={(domRect: DOMRect) => store.generationEventFormInit(domRect)}
        />
      ) : (
        <></>
      )}
      <div
        ref={mainLineRef}
        style={{
          position: "absolute",
          right: 20,
          zIndex: 4,
          top: 108,
          height: store.mainRefHeight ?? "calc(100% - 108px)",

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
    <P />
  </React.StrictMode>
);
