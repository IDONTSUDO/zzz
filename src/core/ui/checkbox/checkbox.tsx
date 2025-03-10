export const CheckBox: React.FC<{
  onClick?: Function;
  value: boolean;
}> = ({ onClick, value }) => (
  <>
    <div
      style={{
        position: "absolute",
        visibility: value ? "visible" : "hidden",
      }}
    >
      <div
        style={{ position: "relative", top: 0.3, left: 4.5, cursor: "pointer" }}
        onClick={() => onClick?.()}
      >
        <div style={{ width: 8, height: 8, backgroundColor: "#59FE9B" }} />
      </div>
    </div>
    <svg
      style={{ cursor: "pointer" }}
      onClick={() => onClick?.()}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_0_544)">
        <rect y="0.00012207" width="16" height="16" fill="white" />
      </g>
      <rect
        x="1"
        y="1.00012"
        width="14"
        height="14"
        stroke="white"
        strokeWidth="2"
      />
      <defs>
        <filter
          id="filter0_i_0_544"
          x="0"
          y="0.00012207"
          width="16"
          height="16"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4.75" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_0_544"
          />
        </filter>
      </defs>
    </svg>
  </>
);
