import { useEffect, useRef, useState } from "react";
import { Icon } from "../icon/icon";
import { CoreText } from "../text/text";

export const AboutForm: React.FC<{ closeCallback: Function }> = ({
  closeCallback,
}) => {
  const formWidth = 550;
  const height = 450;
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [domRect, setDomRect] = useState<DOMRect | undefined>(undefined);

  const svgRef = useRef<SVGPathElement>(null);
  window.addEventListener("resize", () => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  });

  useEffect(() => {
    setDomRect(svgRef.current!.getBoundingClientRect());
  }, [svgRef]);

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
        <div style={{ position: "relative", bottom: 100 }}>
          <Icon ref={svgRef} type="aboutForm" width={formWidth} />
          <div
            onClick={() => closeCallback()}
            style={{
              position: "absolute",
              top: (domRect?.top ?? 0) - 39,
              left: (domRect?.left ?? 0) + 166,
              width: 50,
              height: 50,
              cursor: "pointer",
            }}
          ></div>
        </div>
        <div
          style={{
            // backgroundColor: "red",
            width: domRect?.width ?? 0,
            top: 5 + 40 + 10,
            paddingLeft: 10,
            height: (domRect?.height ?? 0) - 40 - 20,
            position: "absolute",
          }}
        >
          <div
            className="element"
            style={{
              height: "100%",
              width: "calc(100% - 10)",
              padding: 10,
              overflow: "auto",
            }}
          >
            <CoreText
              text="The Future of Decentralized AI"
              color="black"
              fontSize={18}
            />

            <Block
              subTopText="Welcome to the New Era of Intelligence"
              bodyText="Imagine a world where artificial intelligence is not controlled by a select few but is accessible, transparent, and truly democratic. At [Your Brand Name], we are building a decentralized AI ecosystem that empowers individuals and communities to harness the power of AI without compromising security or privacy."
              textTopWidth={631}
            />
            <BlockV2
              subTopText="Why Decentralized AI?"
              bodyText={[
                "Security & Privacy First: Your data remains yours. Decentralized AI ensures that no single entity has control over sensitive information.",
                "Global Collaboration: Break down barriers and enable innovation through a decentralized network where everyone can contribute.",
                "Resilient Systems: Decentralized AI is more robust, reducing the risks of single points of failure.",
                "Fair Access: Level the playing field by providing equal opportunities to develop and benefit from AI technologies",
              ]}
              textTopWidth={250}
            />
            <BlockV3
              subTopText="Our Vision"
              bodyText="At [Your Brand Name], we believe that the future of AI lies in decentralization. By leveraging blockchain technology, federated learning, and peer-to-peer networks, we are creating an open, trustless, and inclusive environment where AI evolves through collective intelligence."
              textTopWidth={95}
              bottomTextPadding={5}
              bottomText={[
                "Key Features",
                "1. Decentralized Training AI models are trained across multiple nodes without requiring centralized data collection. This ensures security, scalability, and inclusivity.",
                "2. Tokenized Ecosystem Incentivize contributions with a token economy. Earn rewards for providing computational power, contributing data, or developing AI models.",
                "3. Transparent Governance Community-driven decision-making ensures accountability and adaptability to the evolving needs of users.",
                "4. Privacy-Preserving Technology Our platform employs state-of-the-art encryption and differential privacy to protect users and their data. Use Cases",
                "1. Personalized AI Services Receive AI-driven insights tailored to your needs without sharing your data with third parties.",
                "2. Open AI Marketplaces Buy, sell, or trade AI models and datasets in a decentralized marketplace.",
                "3. Collaborative Innovation Participate in global AI challenges and projects to push the boundaries of what’s possible.",
                "4. Sustainable AI Promote energy-efficient AI development by sharing computational resources across the network. Join the Revolution",
                "The future of AI is decentralized. Be a part of the change and help shape the next wave of technological innovation.",
              ]}
            />
            <BlockV3
              textTopWidth={200}
              subTopText="[Get Started Today]"
              bodyText="FAQs"
              bottomTextPadding={5}
              bottomText={[
                "1. What is Decentralized AI? Decentralized AI refers to artificial intelligence systems that operate on distributed networks, eliminating the need for centralized control.",
                "2. How does it protect my privacy? By using techniques like federated learning and blockchain technology, decentralized AI ensures that your data never leaves your device.",
                "3. What can I do on this platform? You can train AI models, contribute data, earn rewards, and collaborate on AI projects with people from around the world.",
                "Ready to Embrace the Future?",
                "Join our community and start building a decentralized AI-powered tomorrow. [Sign Up Now]",
              ]}
            />
            <div style={{ height: 10 }} />
          </div>
        </div>
      </div>
    </>
  );
};
export const BlockV3: React.FC<{
  subTopText: string;
  bodyText: string;
  textTopWidth: number;
  bottomTextPadding: number;
  bottomText: string[];
}> = ({
  subTopText,
  bodyText,
  textTopWidth,
  bottomText,
  bottomTextPadding,
}) => (
  <>
    <div style={{ height: 5 }} />
    <div style={{ display: "flex", alignItems: "center" }}>
      <CoreText
        style={{ width: textTopWidth ?? 631 }}
        fontSize={12}
        text={subTopText}
        color="black"
      />
      <div style={{ backgroundColor: "black", width: "100%", height: 0.5 }} />
    </div>
    <div style={{ height: 5 }} />
    <CoreText text={bodyText} color="black" fontSize={10} />
    <div style={{ height: bottomTextPadding }} />
    {bottomText.map((el) => (
      <div>
        <CoreText text={`• ` + el} color="black" fontSize={9} />
      </div>
    ))}
  </>
);

export const BlockV2: React.FC<{
  subTopText: string;
  bodyText: string[];
  textTopWidth: number;
}> = ({ subTopText, bodyText, textTopWidth }) => (
  <>
    <div style={{ height: 5 }} />
    <div style={{ display: "flex", alignItems: "center" }}>
      <CoreText
        style={{ width: textTopWidth ?? 631 }}
        fontSize={12}
        text={subTopText}
        color="black"
      />
      <div style={{ backgroundColor: "black", width: "100%", height: 0.5 }} />
    </div>
    <div style={{ height: 5 }} />

    {bodyText.map((el) => (
      <div>
        <CoreText text={`• ` + el} color="black" fontSize={9} />
      </div>
    ))}
  </>
);

export const Block: React.FC<{
  subTopText: string;
  bodyText: string;
  textTopWidth: number;
}> = ({ subTopText, bodyText, textTopWidth }) => (
  <>
    <div style={{ height: 5 }} />
    <div style={{ display: "flex", alignItems: "center" }}>
      <CoreText
        style={{ width: textTopWidth ?? 631 }}
        fontSize={12}
        text={subTopText}
        color="black"
      />
      <div style={{ backgroundColor: "black", width: "100%", height: 0.5 }} />
    </div>
    <div style={{ height: 5 }} />
    <CoreText text={bodyText} color="black" fontSize={10} />
  </>
);
