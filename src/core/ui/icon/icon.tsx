export const Icon: React.FC<{
  type: string;
  onClick?: Function;
  style?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
  width?: number;
  height?: number;
  ref?: React.RefObject<SVGPathElement | null>;
}> = ({ type, onClick, style, width, height, ref, iconStyle }) => {
  return (
    <div style={style} onClick={() => onClick?.()}>
      {getIcon(type, width, height, ref, iconStyle)}
    </div>
  );
};
const getIcon = (
  type: string,
  width: number | undefined,
  height: number | undefined,
  ref?: React.RefObject<SVGPathElement | null>,
  iconStyle?: React.CSSProperties
) => {
  if (type === "selectItemBg") {
    return (
      <svg
        width={width ?? "100"}
        height={height ?? "43"}
        viewBox="0 0 100 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 33.0084L89.6586 43H0.00361633L0 9.99167L10.3414 0H99.9964L100 33.0084Z"
          fill="#59FE9B"
        />
      </svg>
    );
  }
  if (type === "usdt") {
    return (
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.00936 7.19651C6.49837 7.19651 6.71759 7.18343 6.76002 7.18025L6.75861 7.17989C8.25887 7.11342 9.37797 6.85177 9.37797 6.5392C9.37797 6.22663 8.25852 5.96497 6.75861 5.89815V6.92001C6.71653 6.9239 6.48281 6.94334 6.01608 6.94334C5.62714 6.94334 5.34568 6.92673 5.24739 6.91965V5.89744C3.74429 5.96462 2.62237 6.22592 2.62237 6.5392C2.62237 6.85247 3.74429 7.11413 5.24739 7.18025C5.34427 7.18484 5.62042 7.19651 6.00936 7.19651Z"
          fill="black"
        />
        <path
          d="M6.76002 5.79209V5.79243L6.75967 5.79207C6.75979 5.79208 6.7599 5.79208 6.76002 5.79209Z"
          fill="black"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.54803 12.321C7.76309 13.1226 11.019 11.1662 11.8205 7.95154L11.8204 7.9516C12.6219 4.73677 10.6656 1.48026 7.45081 0.678828C4.23674 -0.122605 0.980793 1.83393 0.179711 5.04897C-0.622074 8.26338 1.33432 11.5195 4.54803 12.321ZM6.76002 4.8777V5.79209C8.45812 5.87061 9.73403 6.20721 9.73403 6.61062C9.73403 7.01406 8.45688 7.35068 6.75967 7.42882V10.3611H5.24703V7.42988C3.54593 7.35138 2.26666 7.01477 2.26666 6.61097C2.26666 6.20718 3.54593 5.87021 5.24703 5.79207V4.8777H3.15416V3.48281H8.85325V4.8777H6.76002Z"
          fill="black"
        />
      </svg>
    );
  }
  if (type === "usdc") {
    return (
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 6.5C12 9.82502 9.32502 12.5 6 12.5C2.67498 12.5 0 9.82502 0 6.5C0 3.17498 2.67498 0.5 6 0.5C9.32502 0.5 12 3.17498 12 6.5ZM2.50002 5.27496C1.77498 7.2 2.775 9.375 4.725 10.075C4.8 10.125 4.875 10.225 4.875 10.3V10.65C4.875 10.7 4.875 10.725 4.84998 10.75C4.82502 10.85 4.725 10.9 4.62498 10.85C3.225 10.4 2.14998 9.32496 1.69998 7.92498C0.949979 5.55 2.25 3.02496 4.62498 2.27496C4.65 2.25 4.69998 2.25 4.725 2.25C4.82502 2.27496 4.875 2.34996 4.875 2.44998V2.79996C4.875 2.925 4.82502 3 4.725 3.04998C3.70002 3.42498 2.87502 4.22496 2.50002 5.27496ZM7.15002 2.37498C7.17498 2.27496 7.275 2.22498 7.37502 2.27496C8.74998 2.72496 9.85002 3.79998 10.3 5.22498C11.05 7.59996 9.75 10.125 7.37502 10.875C7.35 10.9 7.30002 10.9 7.275 10.9C7.17498 10.875 7.125 10.8 7.125 10.7V10.35C7.125 10.225 7.17498 10.15 7.275 10.1C8.29998 9.72498 9.12498 8.925 9.49998 7.875C10.225 5.94996 9.225 3.77496 7.275 3.075C7.2 3.02496 7.125 2.925 7.125 2.82498V2.475C7.125 2.42496 7.125 2.4 7.15002 2.37498ZM7.64998 7.45C7.64998 6.57502 7.12498 6.27502 6.07498 6.15004C5.32498 6.05002 5.17498 5.85004 5.17498 5.5C5.17498 5.14996 5.425 4.92502 5.92498 4.92502C6.37498 4.92502 6.625 5.07502 6.74998 5.45002C6.775 5.52502 6.85 5.575 6.925 5.575H7.32496C7.42498 5.575 7.49998 5.5 7.49998 5.40004V5.37502C7.39996 4.825 6.94996 4.40002 6.37498 4.35004V3.75004C6.37498 3.65002 6.29998 3.57502 6.175 3.55H5.8C5.69998 3.55 5.62498 3.625 5.59996 3.75004V4.32502C4.84996 4.42504 4.375 4.92502 4.375 5.55004C4.375 6.37504 4.87498 6.7 5.92498 6.82504C6.625 6.95002 6.85 7.10002 6.85 7.50004C6.85 7.90006 6.49996 8.17504 6.025 8.17504C5.37496 8.17504 5.14996 7.9 5.07496 7.525C5.05 7.42504 4.975 7.375 4.9 7.375H4.47496C4.375 7.375 4.3 7.45 4.3 7.55002V7.57504C4.39996 8.2 4.79998 8.65 5.62498 8.77504V9.37504C5.62498 9.475 5.69998 9.55 5.82496 9.57502H6.19996C6.29998 9.57502 6.37498 9.50002 6.4 9.37504V8.77504C7.15 8.65 7.64998 8.125 7.64998 7.45Z"
          fill="black"
        />
      </svg>
    );
  }
  if (type === "jup") {
    return (
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.63443 9.79764C7.34088 7.6791 5.41217 6.47827 3.03032 5.97841C2.18796 5.80268 1.34173 5.80463 0.524545 6.12876C-0.0350916 6.35135 -0.120296 6.58566 0.143063 7.17729C1.93235 6.74968 3.5977 7.148 5.15655 8.05595C6.72702 8.9717 7.89858 10.2467 8.43111 12.0587C9.17858 11.8283 9.2754 11.7014 9.09531 11.0004C8.98881 10.5884 8.85519 10.1589 8.63443 9.79764Z"
          fill="black"
        />
        <path
          d="M10.05 8.07352C8.3885 5.63281 6.03571 4.26796 3.16007 3.81106C2.39904 3.69 1.62252 3.72319 0.9099 4.09028C0.569084 4.26601 0.266996 4.49055 0.185665 4.96698C2.42808 4.34411 4.44006 4.89474 6.33392 6.00184C8.23746 7.11481 9.72466 8.60853 10.3037 10.9047C10.7064 10.5455 10.7781 10.1042 10.6735 9.69416C10.5302 9.13181 10.3676 8.54019 10.05 8.07352Z"
          fill="black"
        />
        <path
          d="M0.288297 8.22973C0.429659 8.54604 0.522609 8.90336 0.733683 9.15915C0.840188 9.28997 1.16358 9.23921 1.38821 9.27045C1.42306 9.27435 1.45792 9.28021 1.49277 9.28412C3.48539 9.58286 5.0578 10.5552 6.18094 12.252C6.24678 12.3516 6.35329 12.5 6.44043 12.5C6.77737 12.498 7.11625 12.4453 7.45707 12.4121C6.94972 9.57505 2.76309 7.24758 0.288297 8.22973Z"
          fill="black"
        />
        <path
          d="M10.9698 5.84954C9.87183 4.30115 8.35752 3.2702 6.63795 2.53603C5.44702 2.02641 4.2135 1.71985 2.90445 1.87801C2.45132 1.93268 2.02724 2.06351 1.67674 2.3603C6.14802 2.47355 9.51165 4.42612 11.8238 8.28245C11.8277 8.02666 11.8664 7.74158 11.7734 7.51118C11.5411 6.93908 11.3203 6.34354 10.9698 5.84954Z"
          fill="black"
        />
        <path
          d="M12 5.04118C11.0899 1.54803 7.39123 -0.133136 4.65695 0.718185C7.6023 1.30396 10.019 2.71957 12 5.04118Z"
          fill="black"
        />
        <path
          d="M1.26427 10.0905C2.32158 11.4437 3.66548 12.2325 5.38893 12.4883C4.73053 11.2484 2.41066 9.90699 1.26427 10.0905Z"
          fill="black"
        />
      </svg>
    );
  }
  if (type === "sol") {
    return (
      <svg
        width="20"
        height="19"
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_0_782)">
          <path
            d="M5.95017 12.1338C6.02359 12.0558 6.12314 12.0119 6.22693 12.0119H15.8038C15.9783 12.0119 16.0656 12.2362 15.9422 12.3674L14.0498 14.3781C13.9764 14.4562 13.8769 14.5 13.7731 14.5H4.19618C4.02171 14.5 3.93438 14.2757 4.05779 14.1445L5.95017 12.1338Z"
            fill="black"
          />
          <path
            d="M5.95017 4.62184C6.02359 4.54382 6.12314 4.5 6.22693 4.5H15.8038C15.9783 4.5 16.0656 4.72434 15.9422 4.85547L14.0498 6.86623C13.9764 6.94424 13.8769 6.98807 13.7731 6.98807H4.19618C4.02171 6.98807 3.93438 6.76373 4.05779 6.6326L5.95017 4.62184Z"
            fill="black"
          />
          <path
            d="M14.0498 8.35395C13.9764 8.27594 13.8769 8.23209 13.7731 8.23209H4.19618C4.02171 8.23209 3.93438 8.45643 4.05779 8.58758L5.95017 10.5983C6.02359 10.6763 6.12314 10.7202 6.22693 10.7202H15.8038C15.9783 10.7202 16.0656 10.4958 15.9422 10.3647L14.0498 8.35395Z"
            fill="black"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_0_782"
            x="0"
            y="0.5"
            width="20"
            height="18"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_782"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_782"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  }
  if (type === "cursor") {
    return (
      <svg
        width={width ?? "21"}
        height="15"
        viewBox="0 0 21 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_0_785)">
          <path
            d="M16.7279 4.31799L10.364 10.682L4 4.31799H16.7279Z"
            fill="black"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_0_785"
            x="0"
            y="0.317993"
            width="20.7279"
            height="14.364"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_785"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_785"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  }
  if (type === "selectBgClose") {
    return (
      <svg
        width={width ?? "108"}
        height="48"
        viewBox="0 0 108 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.4" filter="url(#filter0_i_60_657)">
          <path
            d="M108 37.3335L96.8311 48.0001H0.000198364V10.6668L11.1694 0.00012207H108V37.3335Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_60_657"
            x="0.000244141"
            y="0.00012207"
            width="108"
            height="48"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            <feGaussianBlur stdDeviation="2.9" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_60_657"
            />
          </filter>
        </defs>
      </svg>
    );
  }
  if (type === "selectBg") {
    return (
      <svg
        width={width ?? 110}
        height="130"
        viewBox="0 0 110 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i_257_849)">
          <path
            d="M109.004 148.333L97.8348 159H1.00392L1.00002 11.6668L12.1692 1H109L109.004 148.333Z"
            fill="white"
          />
        </g>
        <path
          d="M109.004 148.333L97.8348 159H1.00392L1.00002 11.6668L12.1692 1H109L109.004 148.333Z"
          stroke="white"
        />
        <defs>
          <filter
            id="filter0_i_257_849"
            x="0.5"
            y="0.5"
            width="109.004"
            height="159"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            <feGaussianBlur stdDeviation="2.9" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_257_849"
            />
          </filter>
        </defs>
      </svg>
    );
  }
  if (type === "inputMax") {
    return (
      <svg
        style={iconStyle}
        width={width ?? "82"}
        height="36"
        viewBox="0 0 82 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M82 8L73.52 0H0V28L8.48001 36H82V8Z" fill="white" />
      </svg>
    );
  }
  if (type === "greenButton") {
    return (
      <svg
        width={width ?? "484"}
        height="48"
        viewBox="0 0 484 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i_53_227)">
          <path d="M0 16L16.3548 0L484 0V32L467.645 48H0V16Z" fill="#59FE9B" />
        </g>
        <path
          d="M1 16.4207L16.7626 1H483V31.5793L467.237 47H1V16.4207Z"
          stroke="white"
          stroke-width="2"
        />
        <defs>
          <filter
            id="filter0_i_53_227"
            x="0"
            y="0"
            width="484"
            height="48"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              result="effect1_innerShadow_53_227"
            />
          </filter>
        </defs>
      </svg>
    );
  }
  if (type === "fffffasdas") {
    return (
      <svg
        width={width ?? "355"}
        height="48"
        viewBox="0 0 355 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.4">
          <g filter="url(#filter0_i_257_228)">
            <path
              d="M355 10.6668L344.356 0.000160217L0.000183105 0.000225067V37.3336L10.6445 48.0002L355 48.0002V10.6668Z"
              fill="black"
              fill-opacity="0.3"
            />
          </g>
          <path
            d="M354.5 47.5002V10.8736L344.148 0.50016L0.500183 0.500225V37.1268L10.8519 47.5002L354.5 47.5002Z"
            stroke="black"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_257_228"
            x="0.000244141"
            y="0.000160217"
            width="355"
            height="48.0001"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            <feGaussianBlur stdDeviation="2.9" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_257_228"
            />
          </filter>
        </defs>
      </svg>
    );
  }
  if (type === "greenSvgLine") {
    return (
      <svg
        width={width ?? "476"}
        height="6"
        viewBox="0 0 476 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.113249 3L3 5.88675L5.88675 3L3 0.113249L0.113249 3ZM475.887 3L473 0.113249L470.113 3L473 5.88675L475.887 3ZM3 3.5H473V2.5H3V3.5Z"
          fill="#59FE9B"
        />
      </svg>
    );
  }
  if (type === "connectedWallet") {
    return (
      <svg
        width={width ?? "484"}
        height="48"
        viewBox="0 0 484 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i_0_539)">
          <path
            d="M0 16.0001L16.3548 0.00012207L484 0.00012207V32.0001L467.645 48.0001H0V16.0001Z"
            fill="#59FE9B"
          />
        </g>
        <path
          d="M1 47.0001V16.4208L16.7626 1.00012H483V31.5795L467.237 47.0001H1Z"
          stroke="white"
          stroke-width="2"
        />
        <g filter="url(#filter1_d_0_539)">
          <path
            d="M141.04 33.3335C135.64 33.3335 134.596 31.2668 134.596 24.3557C134.596 17.4668 135.64 15.3779 141.04 15.3779C145.707 15.3779 147.174 17.0001 147.174 21.4223V21.7335H144.907V21.5557C144.907 18.5112 144.285 17.489 140.951 17.489C137.529 17.489 136.951 18.5335 136.951 24.3779C136.951 30.2223 137.529 31.2223 140.951 31.2223C144.351 31.2223 144.951 30.2668 144.951 26.8668V26.7112H147.218V27.0001C147.218 31.6446 145.929 33.3335 141.04 33.3335ZM156.403 33.3335C150.936 33.3335 149.914 31.3335 149.914 24.3557C149.914 17.3779 150.936 15.3779 156.403 15.3779C161.847 15.3779 162.869 17.3779 162.869 24.3557C162.869 31.3335 161.847 33.3335 156.403 33.3335ZM152.269 24.3557C152.269 30.2446 152.736 31.2223 156.403 31.2223C160.047 31.2223 160.514 30.2446 160.514 24.3557C160.514 18.4668 160.047 17.489 156.403 17.489C152.736 17.489 152.269 18.4668 152.269 24.3557ZM165.921 33.0001V15.7112H169.121L175.899 30.2223H175.943L175.832 25.5779V15.7112H178.032V33.0001H174.899L168.054 18.4223H168.01L168.121 23.1335V33.0001H165.921ZM181.483 33.0001V15.7112H184.683L191.461 30.2223H191.506L191.394 25.5779V15.7112H193.594V33.0001H190.461L183.617 18.4223H183.572L183.683 23.1335V33.0001H181.483ZM197.401 33.0001V15.7112H209.068V17.8223H199.779V23.0446H208.535V25.1557H199.779V30.889H209.157V33.0001H197.401ZM218.853 33.3335C213.453 33.3335 212.408 31.2668 212.408 24.3557C212.408 17.4668 213.453 15.3779 218.853 15.3779C223.519 15.3779 224.986 17.0001 224.986 21.4223V21.7335H222.719V21.5557C222.719 18.5112 222.097 17.489 218.764 17.489C215.342 17.489 214.764 18.5335 214.764 24.3779C214.764 30.2223 215.342 31.2223 218.764 31.2223C222.164 31.2223 222.764 30.2668 222.764 26.8668V26.7112H225.031V27.0001C225.031 31.6446 223.742 33.3335 218.853 33.3335ZM233.015 33.0001V17.8223H227.46V15.7112H240.949V17.8223H235.393V33.0001H233.015ZM260.629 33.0001L258.096 15.7112H260.518L261.807 26.1779L262.207 30.1779H262.251L262.985 26.1779L264.251 19.9557H266.451L267.74 26.1779L268.474 30.1779H268.518L268.896 26.1779L270.207 15.7112H272.585L270.051 33.0001H267.207L265.962 26.489L265.385 22.9112H265.34L264.762 26.489L263.54 33.0001H260.629ZM273.725 33.0001L279.281 15.7112H282.547L288.103 33.0001H285.614L284.414 29.089H277.369L276.169 33.0001H273.725ZM278.014 26.9779H283.769L280.903 17.689H280.858L278.014 26.9779ZM290.976 33.0001V15.7112H293.332V30.889H302.599V33.0001H290.976ZM306.539 33.0001V15.7112H308.894V30.889H318.161V33.0001H306.539ZM321.901 33.0001V15.7112H333.568V17.8223H324.279V23.0446H333.035V25.1557H324.279V30.889H333.657V33.0001H321.901ZM341.953 33.0001V17.8223H336.397V15.7112H349.886V17.8223H344.331V33.0001H341.953Z"
            fill="black"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_0_539"
            x="0"
            y="0.00012207"
            width="484"
            height="48"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              result="effect1_innerShadow_0_539"
            />
          </filter>
          <filter
            id="filter1_d_0_539"
            x="130.596"
            y="11.3779"
            width="223.29"
            height="25.9556"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_539"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_539"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  }
  if (type === "rob") {
    return (
      <svg
        width={width ?? "108"}
        height="48"
        viewBox="0 0 108 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.4" filter="url(#filter0_i_0_533)">
          <path
            d="M108 37.3335L96.8308 48.0001H-4.57764e-05V10.6668L11.1691 0.00012207H108V37.3335Z"
            fill="white"
          />
        </g>
        <g filter="url(#filter1_d_0_533)">
          <path
            d="M29.8444 35.2223V33.2223C27.7111 33.1557 26.2444 32.8001 25.3778 31.7779C24.6444 30.9335 24.4222 29.6446 24.4222 27.8001V27.3779H26.7556V27.7112C26.7556 29.0223 26.8222 29.8001 27.3111 30.3335C27.7111 30.7779 28.3778 31.0668 29.8444 31.1335V25.2446C27.4222 25.0668 26.1111 24.689 25.4 23.7557C24.8 23.0001 24.5778 21.8446 24.5778 20.3335C24.5778 18.889 24.7778 17.7335 25.5333 16.889C26.4222 15.9112 28 15.5557 29.8444 15.489V13.7112H31.8889V15.5112C33.7111 15.6001 35.1111 15.9779 35.8444 16.8668C36.5111 17.6446 36.6889 18.8001 36.6889 20.6223V20.889H34.4222V20.689C34.4222 19.5335 34.3556 18.8446 33.9111 18.3557C33.5111 17.9112 32.8667 17.6668 31.8889 17.5779V23.1557C34.5333 23.3557 35.7556 23.7112 36.4444 24.6223C37 25.3779 37.1778 26.5779 37.1778 28.1779C37.1778 29.7112 36.9333 30.889 36.2444 31.689C35.2889 32.8001 33.6 33.1335 31.8889 33.2223V35.2223H29.8444ZM26.8889 20.289C26.8889 21.2668 27 21.8446 27.3333 22.2446C27.7111 22.689 28.4444 22.8668 29.8444 23.0001V17.5557C28.6889 17.6001 27.8222 17.8001 27.3556 18.3779C27 18.8001 26.8889 19.4668 26.8889 20.289ZM31.8889 31.1112C33.0889 31.0446 33.9111 30.8001 34.3556 30.3112C34.7778 29.8223 34.8667 29.0223 34.8667 28.3112C34.8667 27.089 34.6889 26.5335 34.3778 26.1779C34 25.7112 33.3778 25.5335 31.8889 25.4001V31.1112ZM40.4514 33.0001V15.7112H46.7625C51.4292 15.7112 52.6736 17.1335 52.6736 20.6668C52.6736 23.489 51.9181 24.489 50.2069 25.0001V25.089C52.0292 25.3779 52.6736 26.5335 52.6736 29.0446V33.0001H50.2958V29.5779C50.2958 26.6668 49.7403 26.1557 46.9181 26.1557H42.8069V33.0001H40.4514ZM42.8069 24.0223H46.9847C49.6292 24.0223 50.3181 23.3335 50.3181 20.9112C50.3181 18.4223 49.5847 17.8223 46.6292 17.8223H42.8069V24.0223ZM61.9028 33.3335C56.4361 33.3335 55.4139 31.3335 55.4139 24.3557C55.4139 17.3779 56.4361 15.3779 61.9028 15.3779C67.3472 15.3779 68.3694 17.3779 68.3694 24.3557C68.3694 31.3335 67.3472 33.3335 61.9028 33.3335ZM57.7694 24.3557C57.7694 30.2446 58.2361 31.2223 61.9028 31.2223C65.5472 31.2223 66.0139 30.2446 66.0139 24.3557C66.0139 18.4668 65.5472 17.489 61.9028 17.489C58.2361 17.489 57.7694 18.4668 57.7694 24.3557ZM71.5542 33.0001V15.7112H78.2653C82.1319 15.7112 83.5542 16.8223 83.5542 20.1335C83.5542 22.4446 82.8653 23.489 81.1986 23.9557V24.0223C83.1986 24.4446 83.9986 25.6223 83.9986 28.2223C83.9986 31.8001 82.4875 33.0001 78.2875 33.0001H71.5542ZM73.9097 30.889H78.2875C80.7986 30.889 81.6431 30.3112 81.6431 28.0001C81.6431 25.7557 80.8431 25.1335 78.5542 25.1335H73.9097V30.889ZM73.9097 23.0001H78.4431C80.5097 23.0001 81.2431 22.4001 81.2431 20.3557C81.2431 18.3557 80.5319 17.8223 78.2653 17.8223H73.9097V23.0001Z"
            fill="black"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_0_533"
            x="0"
            y="0.00012207"
            width="108"
            height="48"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            <feGaussianBlur stdDeviation="2.9" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_0_533"
            />
          </filter>
          <filter
            id="filter1_d_0_533"
            x="20.4221"
            y="9.71118"
            width="67.5764"
            height="29.5111"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_533"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_533"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  }
  if (type === "selectBg") {
    return (
      <svg
        width={width ?? "108"}
        height="48"
        viewBox="0 0 108 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.4" filter="url(#filter0_i_0_516)">
          <path
            d="M108 37.3335L96.8306 48.0001H-0.000289917V10.6668L11.1689 0.00012207H108V37.3335Z"
            fill="white"
          />
        </g>
        <g filter="url(#filter1_d_0_516)">
          <path
            d="M13.9499 27.1339C14.0233 27.0559 14.1229 27.0121 14.2267 27.0121H23.8036C23.978 27.0121 24.0654 27.2364 23.942 27.3675L22.0496 29.3783C21.9762 29.4563 21.8766 29.5001 21.7728 29.5001H12.1959C12.0215 29.5001 11.9341 29.2758 12.0575 29.1446L13.9499 27.1339Z"
            fill="black"
          />
          <path
            d="M13.9499 19.622C14.0233 19.5439 14.1229 19.5001 14.2267 19.5001H23.8036C23.978 19.5001 24.0654 19.7245 23.942 19.8556L22.0496 21.8663C21.9762 21.9444 21.8766 21.9882 21.7728 21.9882H12.1959C12.0215 21.9882 11.9341 21.7638 12.0575 21.6327L13.9499 19.622Z"
            fill="black"
          />
          <path
            d="M22.0496 23.3541C21.9762 23.2761 21.8766 23.2322 21.7728 23.2322H12.1959C12.0215 23.2322 11.9341 23.4566 12.0575 23.5877L13.9499 25.5985C14.0233 25.6765 14.1229 25.7203 14.2267 25.7203H23.8036C23.978 25.7203 24.0654 25.4959 23.942 25.3648L22.0496 23.3541Z"
            fill="black"
          />
        </g>
        <g filter="url(#filter2_d_0_516)">
          <path
            d="M39.822 33.2446C37.1331 33.2446 35.3775 32.9557 34.3775 31.7779C33.6442 30.9335 33.422 29.6446 33.422 27.8001V27.3779H35.7553V27.7112C35.7553 29.0223 35.822 29.8001 36.3109 30.3335C36.7998 30.8668 37.622 31.1557 39.7775 31.1557C41.622 31.1557 42.7775 30.9335 43.3553 30.3112C43.7775 29.8223 43.8664 29.0223 43.8664 28.3112C43.8664 27.089 43.6886 26.5335 43.3775 26.1779C42.8664 25.5557 41.9109 25.4446 39.0664 25.2668C36.5109 25.089 35.1331 24.7112 34.3998 23.7557C33.7998 23.0001 33.5775 21.8446 33.5775 20.3335C33.5775 18.889 33.7775 17.7335 34.5331 16.889C35.5331 15.7779 37.422 15.4668 39.5998 15.4668C42.0442 15.4668 43.9331 15.7779 44.8442 16.8668C45.5109 17.6446 45.6886 18.8001 45.6886 20.6223V20.889H43.422V20.689C43.422 19.5335 43.3553 18.8446 42.9109 18.3557C42.3553 17.7335 41.3331 17.5335 39.622 17.5335C38.0664 17.5335 36.9109 17.689 36.3553 18.3779C35.9998 18.8001 35.8886 19.4668 35.8886 20.289C35.8886 21.2668 35.9998 21.8446 36.3331 22.2446C36.822 22.8223 37.9331 22.9557 40.3331 23.1112C43.3775 23.3112 44.7109 23.6446 45.4442 24.6223C45.9998 25.3779 46.1775 26.5779 46.1775 28.1779C46.1775 29.7112 45.9331 30.889 45.2442 31.689C44.0886 33.0223 41.8664 33.2446 39.822 33.2446ZM55.34 33.3335C49.8734 33.3335 48.8511 31.3335 48.8511 24.3557C48.8511 17.3779 49.8734 15.3779 55.34 15.3779C60.7845 15.3779 61.8067 17.3779 61.8067 24.3557C61.8067 31.3335 60.7845 33.3335 55.34 33.3335ZM51.2067 24.3557C51.2067 30.2446 51.6734 31.2223 55.34 31.2223C58.9845 31.2223 59.4511 30.2446 59.4511 24.3557C59.4511 18.4668 58.9845 17.489 55.34 17.489C51.6734 17.489 51.2067 18.4668 51.2067 24.3557ZM65.4136 33.0001V15.7112H67.7692V30.889H77.0359V33.0001H65.4136Z"
            fill="black"
          />
        </g>
        <g filter="url(#filter3_d_0_516)">
          <path
            d="M95.7277 21.3181L89.3637 27.6821L82.9998 21.3181H95.7277Z"
            fill="black"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_0_516"
            x="-0.000244141"
            y="0.00012207"
            width="108"
            height="48"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            <feGaussianBlur stdDeviation="2.9" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_0_516"
            />
          </filter>
          <filter
            id="filter1_d_0_516"
            x="7.99976"
            y="15.5001"
            width="20"
            height="18"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_516"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_516"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d_0_516"
            x="29.4219"
            y="11.3779"
            width="51.614"
            height="25.9556"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_516"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_516"
              result="shape"
            />
          </filter>
          <filter
            id="filter3_d_0_516"
            x="78.9998"
            y="17.3181"
            width="20.728"
            height="14.364"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_516"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_516"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  }
  if (type === "amountPayForm") {
    return (
      <svg
        width={width ?? "355"}
        height="48"
        viewBox="0 0 355 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.4">
          <g filter="url(#filter0_i_0_510)">
            <path
              d="M355 10.6668L344.355 0.00012207L-6.10352e-05 0.00018692V37.3335L10.6442 48.0002L355 48.0001V10.6668Z"
              fill="black"
              fill-opacity="0.3"
            />
          </g>
          <path
            d="M354.5 47.5001V10.8736L344.148 0.500122L0.499939 0.500187V37.1267L10.8516 47.5002L354.5 47.5001Z"
            stroke="black"
          />
        </g>
        {/* <g filter="url(#filter1_d_0_510)">
          <path
            d="M28.9111 33.3333C26.1778 33.3333 24.6 32.9556 23.6667 31.9333C22.5778 30.7111 22.3333 28.7556 22.3333 24.1556C22.3333 17.1111 23.4 15.3778 28.9778 15.3778C33.6 15.3778 35.2444 16.6 35.2444 20.6444V20.7333H32.8667V20.6444C32.8667 18.2222 31.9111 17.6222 28.9778 17.6222C25.1778 17.6222 24.7111 18.5333 24.7111 23.7556V24.2889H24.7556C25.2889 23 26.6 22.4889 29.5333 22.4889C34.1111 22.4889 35.4444 23.8 35.4444 27.8C35.4444 32.1333 33.9556 33.3333 28.9111 33.3333ZM24.8222 27.7556C24.8222 28.9778 25.0222 29.8 25.4222 30.2667C26 30.9556 27.1778 31.0889 28.8889 31.0889C32.4 31.0889 33.0222 30.4667 33.0222 27.8444C33.0222 25.2667 32.4444 24.7333 28.9333 24.7333C25.5111 24.7333 24.8222 25.2444 24.8222 27.7556ZM44.1181 33.3333C39.4292 33.3333 37.7847 32.1111 37.7847 28.0667V27.9778H40.1625V28.0667C40.1625 30.4889 41.0958 31.0889 44.1181 31.0889C47.9403 31.0889 48.3847 30.1778 48.3847 24.9778V24.4222H48.3403C47.8292 25.7111 46.4958 26.2222 43.5847 26.2222C38.9847 26.2222 37.6736 24.9111 37.6736 20.9111C37.6736 16.5778 39.1625 15.3778 44.2069 15.3778C46.8736 15.3778 48.5181 15.7333 49.4736 16.8222C50.5403 18.0444 50.7625 19.9556 50.7625 24.5556C50.7625 31.6 49.6958 33.3333 44.1181 33.3333ZM40.0958 20.8667C40.0958 23.4444 40.6736 23.9778 44.2292 23.9778C47.6069 23.9778 48.2736 23.4667 48.2736 20.9556C48.2736 19.7778 48.0958 18.9556 47.6958 18.4444C47.1181 17.7556 45.9403 17.6222 44.2292 17.6222C40.7403 17.6222 40.0958 18.2444 40.0958 20.8667ZM58.4361 33V29.1333H61.3694V33H58.4361ZM75.4653 33.3333C70.5097 33.3333 68.9319 32.2222 68.9319 28.4667C68.9319 25.7333 69.7319 24.4444 71.8431 24.1111V24.0667C69.8875 23.7333 69.1319 22.5778 69.1319 20C69.1319 16.4889 70.5764 15.3778 75.4653 15.3778C80.3097 15.3778 81.7764 16.4889 81.7764 20C81.7764 22.5556 81.0208 23.7333 79.0431 24.0667V24.1111C81.1542 24.4444 81.9986 25.7333 81.9986 28.4667C81.9986 32.2222 80.4208 33.3333 75.4653 33.3333ZM71.3319 28.1556C71.3319 30.5778 72.0431 31.0889 75.4653 31.0889C78.8431 31.0889 79.5764 30.5778 79.5764 28.1556C79.5764 25.7556 78.8653 25.2 75.4653 25.2C72.0431 25.2 71.3319 25.7333 71.3319 28.1556ZM71.5097 20.2889C71.5097 22.4667 72.1764 22.9778 75.4653 22.9778C78.7319 22.9778 79.3986 22.4667 79.3986 20.2889C79.3986 18.1556 78.7319 17.6222 75.4653 17.6222C72.1764 17.6222 71.5097 18.1556 71.5097 20.2889ZM91.0278 33.3333C86.0722 33.3333 84.4944 32.2222 84.4944 28.4667C84.4944 25.7333 85.2944 24.4444 87.4056 24.1111V24.0667C85.45 23.7333 84.6944 22.5778 84.6944 20C84.6944 16.4889 86.1389 15.3778 91.0278 15.3778C95.8722 15.3778 97.3389 16.4889 97.3389 20C97.3389 22.5556 96.5833 23.7333 94.6056 24.0667V24.1111C96.7167 24.4444 97.5611 25.7333 97.5611 28.4667C97.5611 32.2222 95.9833 33.3333 91.0278 33.3333ZM86.8944 28.1556C86.8944 30.5778 87.6056 31.0889 91.0278 31.0889C94.4056 31.0889 95.1389 30.5778 95.1389 28.1556C95.1389 25.7556 94.4278 25.2 91.0278 25.2C87.6056 25.2 86.8944 25.7333 86.8944 28.1556ZM87.0722 20.2889C87.0722 22.4667 87.7389 22.9778 91.0278 22.9778C94.2944 22.9778 94.9611 22.4667 94.9611 20.2889C94.9611 18.1556 94.2944 17.6222 91.0278 17.6222C87.7389 17.6222 87.0722 18.1556 87.0722 20.2889ZM108.901 33V29.1778H99.7458V26.5556L107.946 15.7111H111.212V26.9556H113.257V29.1778H111.212V33H108.901ZM102.19 26.9556H108.901V17.9556H108.857L102.19 26.9111V26.9556ZM116.464 33V30.8H121.797V18.1111H121.753L117.575 22.0889L116.086 20.4667L121.108 15.7111H124.153V30.8H128.708V33H116.464Z"
            fill="black"
          />
        </g> */}
        <defs>
          <filter
            id="filter0_i_0_510"
            x="0"
            y="0.00012207"
            width="355"
            height="48.0001"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            <feGaussianBlur stdDeviation="2.9" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_0_510"
            />
          </filter>
          <filter
            id="filter1_d_0_510"
            x="18.3333"
            y="11.3778"
            width="114.375"
            height="25.9556"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_510"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_510"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  }
  if (type === "rrrtrqwe") {
    return (
      <svg
        width={width ?? "376"}
        height="48"
        viewBox="0 0 376 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i_0_494)">
          <path d="M0 16L16 0H376V32L360 48H0V16Z" fill="white" />
        </g>
        <path
          d="M1 47V16.4142L16.4142 1H375V31.5858L359.586 47H1Z"
          stroke="white"
          stroke-width="2"
        />
        <defs>
          <filter
            id="filter0_i_0_494"
            x="0"
            y="0"
            width="376"
            height="48"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              result="effect1_innerShadow_0_494"
            />
          </filter>
        </defs>
      </svg>
    );
  }
  if (type === "closeicon") {
    return (
      <svg
        width={width ?? "32"}
        height={height ?? "32"}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.4" filter="url(#filter0_d_257_238)">
          <path
            d="M4 25.7056L14.0566 15.6489L4 5.5923L5.5923 4L15.6489 14.0566L25.7056 4L27.3817 5.67611L17.325 15.7327L27.3817 25.7894L25.7894 27.3817L15.7327 17.325L5.67611 27.3817L4 25.7056Z"
            fill="black"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_257_238"
            x="0"
            y="0"
            width="31.3816"
            height="31.3817"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_257_238"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_257_238"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  }
  if (type === "bigFormBg") {
    return (
      <svg
        width="513"
        height={height ?? "722"}
        viewBox="0 0 513 722"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i_44_27)">
          <path
            ref={ref}
            d="M513 0L25.8237 0L0 25.7857V722H487.159L513 696.214V0Z"
            fill="white"
          />
        </g>
        <path
          d="M1.17266 26.272L26.309 1.17266H511.827V695.728L486.674 720.827H1.17266V26.272Z"
          stroke="white"
          stroke-width="2.34532"
        />
        <defs>
          <filter
            id="filter0_i_44_27"
            x="0"
            y="0"
            width="513"
            height="722"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            <feGaussianBlur stdDeviation="5.57014" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_44_27"
            />
          </filter>
        </defs>
      </svg>
    );
  }
  if (type === "progress") {
    return (
      <svg
        width={width ?? "484"}
        height="17"
        viewBox="0 0 484 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i_0_498)">
          <path
            d="M0 5.66667L5.81204 0H483.812V11.3333L478 17H0V5.66667Z"
            fill="white"
          />
        </g>
        <path
          d="M1 16V6.08832L6.21885 1H482.812V10.9117L477.593 16H1Z"
          stroke="white"
          stroke-width="2"
        />
        <g filter="url(#filter1_i_0_498)">
          <path
            d="M0 5.66667L5.81204 0H342V11.3333L336.188 17H0V5.66667Z"
            fill="#59FE9B"
          />
        </g>
        <path
          d="M1 16V6.08832L6.21885 1H341V10.9117L335.781 16H1Z"
          stroke="white"
          stroke-width="2"
        />
        <defs>
          <filter
            id="filter0_i_0_498"
            x="0"
            y="0"
            width="483.812"
            height="17"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              result="effect1_innerShadow_0_498"
            />
          </filter>
          <filter
            id="filter1_i_0_498"
            x="0"
            y="0"
            width="342"
            height="17"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              result="effect1_innerShadow_0_498"
            />
          </filter>
        </defs>
      </svg>
    );
  }
  if (type === "form") {
    return (
      <svg
        width="513"
        height="723"
        viewBox="0 0 513 723"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i_33_11)">
          <path
            d="M512.5 0L25.7986 0L0 25.7986V722.36H486.684L512.5 696.561V0Z"
            fill="white"
          />
        </g>
        <path
          d="M1.17266 26.2843L26.2843 1.17266H511.327V696.075L486.199 721.187H1.17266V26.2843Z"
          stroke="white"
          stroke-width="2.34532"
        />
        <defs>
          <filter
            id="filter0_i_33_11"
            x="0"
            y="0"
            width="512.5"
            height="722.36"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            <feGaussianBlur stdDeviation="5.57014" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_33_11"
            />
          </filter>
        </defs>
      </svg>
    );
  }
  if (type === "dasdasdds") {
    return (
      <svg
        width="3"
        height="28"
        viewBox="0 0 3 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 0.5L0 3.31617V27.5L3 23.9094V0.5Z" fill="#7B7B7B" />
      </svg>
    );
  }
  if (type === "qwewqe") {
    return (
      <svg
        width="9"
        height="20"
        viewBox="0 0 9 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M0.999992 20L0.999992 19.5L8 12.5L8 0"
          stroke="white"
        />
      </svg>
    );
  }
  if (type === "qwewqqw") {
    return (
      <svg
        width="3"
        height="14"
        viewBox="0 0 3 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 0.5L0 2.87986V10.8822L3 13.5V0.5Z" fill="#7B7B7B" />
      </svg>
    );
  }
  if (type === "dddd") {
    return (
      <svg
        width="3"
        height="20"
        viewBox="0 0 3 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0.5L3 2.87986V16.5L0 19.1178V0.5Z" fill="#7B7B7B" />
      </svg>
    );
  }
  if (type === "generationEventBottomLine") {
    return (
      <svg
        width="9"
        height="25"
        viewBox="0 0 9 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M0.999993 25L0.999992 19.5L8 12.5L8 0"
          stroke="white"
        />
      </svg>
    );
  }
  if (type === "topLine") {
    return (
      <svg
        width="9"
        height="11"
        viewBox="0 0 9 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M0.999992 9.00001L0.646439 8.64645L0.499992 8.7929L0.499992 9.00001L0.999992 9.00001ZM8 2L8.35355 2.35355L8.5 2.20711L8.5 2L8 2ZM1.35355 9.35356L8.35355 2.35355L7.64645 1.64645L0.646439 8.64645L1.35355 9.35356ZM8.5 2L8.5 0.5L7.5 0.5L7.5 2L8.5 2ZM0.499992 9.00001L0.499992 10.5L1.49999 10.5L1.49999 9.00001L0.499992 9.00001Z"
          fill="white"
        />
      </svg>
    );
  }
  if (type === "generationEventForm") {
    return (
      <svg
        width="513"
        height="723"
        viewBox="0 0 513 723"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i_20_3)">
          <path
            d="M512.5 0H25.7986L0 25.7986V722.359H486.684L512.5 696.561V0Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_20_3"
            x="0"
            y="0"
            width="512.5"
            height="722.359"
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
            <feGaussianBlur stdDeviation="5.57014" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_20_3"
            />
          </filter>
        </defs>
      </svg>
    );
  }
  if (type === "bulletInActive") {
    return (
      <svg
        width="149"
        height="40"
        viewBox="0 0 149 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject x="-22.6" y="-22.6" width="193.7" height="85.2">
          <div
          // xmlns="http://www.w3.org/1999/xhtml"
          // style="backdrop-filter:blur(11.3px);clipPath:url(#bgblur_0_0_366_clip_path);height:100%;width:100%"
          ></div>
        </foreignObject>
        <g
          opacity="0.91"
          filter="url(#filter0_i_0_366)"
          data-figma-bg-blur-radius="22.6"
        >
          <path
            d="M0.5 13.5L13.5765 0.5H148V26.5L134.923 39.5H0.5V13.5Z"
            fill="#59FE9B"
          />
          <path
            d="M0.5 13.5L13.5765 0.5H148V26.5L134.923 39.5H0.5V13.5Z"
            stroke="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_0_366"
            x="-22.6"
            y="-22.6"
            width="193.7"
            height="85.2"
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
            <feGaussianBlur stdDeviation="2.9" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_0_366"
            />
          </filter>
          <clipPath id="bgblur_0_0_366_clip_path">
            <path
              transform="translate(22.6 22.6)"
              d="M0.5 13.5L13.5765 0.5H148V26.5L134.923 39.5H0.5V13.5Z"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
  if (type === "bulletIn") {
    return (
      <svg
        width="149"
        height="40"
        viewBox="0 0 149 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject x="-22.6" y="-22.6" width="193.7" height="85.2">
          {/* <div
            xmlns="http://www.w3.org/1999/xhtml"
            style="backdrop-filter:blur(11.3px);clipPath:url(#bgblur_0_0_875_clip_path);height:100%;width:100%"
          ></div> */}
        </foreignObject>
        <g
          opacity="0.91"
          filter="url(#filter0_i_0_875)"
          data-figma-bg-blur-radius="22.6"
        >
          <path
            d="M0.5 13.5L13.5765 0.5H148V26.5L134.923 39.5H0.5V13.5Z"
            fill="white"
            fillOpacity="0.3"
          />
          <path
            d="M0.5 13.5L13.5765 0.5H148V26.5L134.923 39.5H0.5V13.5Z"
            stroke="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_0_875"
            x="-22.6"
            y="-22.6"
            width="193.7"
            height="85.2"
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
            <feGaussianBlur stdDeviation="2.9" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_0_875"
            />
          </filter>
          <clipPath id="bgblur_0_0_875_clip_path">
            <path
              transform="translate(22.6 22.6)"
              d="M0.5 13.5L13.5765 0.5H148V26.5L134.923 39.5H0.5V13.5Z"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
  if (type === "generationEventActive") {
    return (
      <svg
        width="252"
        height="40"
        viewBox="0 0 252 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject x="-22.1" y="-22.6" width="296.2" height="85.2">
          <div
          // xmlns="http://www.w3.org/1999/xhtml"

          // style="backdrop-filter:blur(11.3px);clipPath:url(#bgblur_0_0_66_clip_path);height:100%;width:100%"
          ></div>
        </foreignObject>
        <g
          opacity="0.91"
          filter="url(#filter0_i_0_66)"
          data-figma-bg-blur-radius="22.6"
        >
          <path
            d="M1 13.5L14.0765 0.5L251 0.5V26.5L237.923 39.5H1V13.5Z"
            fill="#59FE9B"
          />
          <path
            d="M1 13.5L14.0765 0.5L251 0.5V26.5L237.923 39.5H1V13.5Z"
            stroke="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_0_66"
            x="-22.1"
            y="-22.6"
            width="296.2"
            height="85.2"
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
            <feGaussianBlur stdDeviation="2.9" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_0_66"
            />
          </filter>
          <clipPath id="bgblur_0_0_66_clip_path">
            <path
              transform="translate(22.1 22.6)"
              d="M1 13.5L14.0765 0.5L251 0.5V26.5L237.923 39.5H1V13.5Z"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
  if (type === "generationEvent") {
    return (
      <svg
        width="252"
        height="40"
        viewBox="0 0 252 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject x="-22.1" y="-22.6" width="296.2" height="85.2">
          <div
          // xmlns="http://www.w3.org/1999/xhtml"
          // style="backdrop-filter:blur(11.3px);clipPath:url(#bgblur_0_0_255_clip_path);height:100%;width:100%"
          ></div>
        </foreignObject>
        <g
          opacity="0.91"
          filter="url(#filter0_i_0_255)"
          data-figma-bg-blur-radius="22.6"
        >
          <path
            d="M1 13.5L14.0765 0.5L251 0.5V26.5L237.923 39.5H1V13.5Z"
            fill="white"
            fillOpacity="0.3"
          />
          <path
            d="M1 13.5L14.0765 0.5L251 0.5V26.5L237.923 39.5H1V13.5Z"
            stroke="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_0_255"
            x="-22.1"
            y="-22.6"
            width="296.2"
            height="85.2"
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
            <feGaussianBlur stdDeviation="2.9" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_0_255"
            />
          </filter>
          <clipPath id="bgblur_0_0_255_clip_path">
            <path
              transform="translate(22.1 22.6)"
              d="M1 13.5L14.0765 0.5L251 0.5V26.5L237.923 39.5H1V13.5Z"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
  if (type === "generationEvent") {
    return (
      <svg
        width="108"
        height="40"
        viewBox="0 0 108 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject x="-22.1" y="-22.6" width="152.2" height="85.2">
          <div
          // xmlns="http://www.w3.org/1999/xhtml"
          // style="backdrop-filter:blur(11.3px);clipPath:url(#bgblur_0_0_256_clip_path);height:100%;width:100%"
          ></div>
        </foreignObject>
        <g
          opacity="0.91"
          filter="url(#filter0_i_0_256)"
          data-figma-bg-blur-radius="22.6"
        >
          <path
            d="M1 13.5L14.0765 0.5L107 0.5V26.5L93.9235 39.5H1V13.5Z"
            fill="#59FE9B"
          />
          <path
            d="M1 13.5L14.0765 0.5L107 0.5V26.5L93.9235 39.5H1V13.5Z"
            stroke="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_0_256"
            x="-22.1"
            y="-22.6"
            width="152.2"
            height="85.2"
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
            <feGaussianBlur stdDeviation="2.9" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_0_256"
            />
          </filter>
          <clipPath id="bgblur_0_0_256_clip_path">
            <path
              transform="translate(22.1 22.6)"
              d="M1 13.5L14.0765 0.5L107 0.5V26.5L93.9235 39.5H1V13.5Z"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
  if (type === "headerBottom") {
    return (
      <svg
        width="61"
        height="3"
        viewBox="0 0 61 3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 2.49114e-05L2.37986 3.00002L57.8821 3L60.5 8.13812e-07L0 2.49114e-05Z"
          fill="white"
        />
      </svg>
    );
  }
  if (type === "aboutActive") {
    return (
      <svg
        width="108"
        height="40"
        viewBox="0 0 108 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject x="-22.1" y="-22.6" width="152.2" height="85.2">
          <div
          // xmlns="http://www.w3.org/1999/xhtml"
          // style="backdrop-filter:blur(11.3px);clipPath:url(#bgblur_0_0_256_clip_path);height:100%;width:100%"
          ></div>
        </foreignObject>
        <g
          opacity="0.91"
          filter="url(#filter0_i_0_256)"
          data-figma-bg-blur-radius="22.6"
        >
          <path
            d="M1 13.5L14.0765 0.5L107 0.5V26.5L93.9235 39.5H1V13.5Z"
            fill="#59FE9B"
          />
          <path
            d="M1 13.5L14.0765 0.5L107 0.5V26.5L93.9235 39.5H1V13.5Z"
            stroke="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_0_256"
            x="-22.1"
            y="-22.6"
            width="152.2"
            height="85.2"
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
            <feGaussianBlur stdDeviation="2.9" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_0_256"
            />
          </filter>
          <clipPath id="bgblur_0_0_256_clip_path">
            <path
              transform="translate(22.1 22.6)"
              d="M1 13.5L14.0765 0.5L107 0.5V26.5L93.9235 39.5H1V13.5Z"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
  if (type === "about") {
    return (
      <svg
        width="108"
        height="40"
        viewBox="0 0 108 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject x="-22.1" y="-22.6" width="152.2" height="85.2">
          <div
          // xmlns="http://www.w3.org/1999/xhtml"
          // style="backdrop-filter:blur(11.3px);clipPath:url(#bgblur_0_0_67_clip_path);height:100%;width:100%"
          ></div>
        </foreignObject>
        <g
          opacity="0.91"
          filter="url(#filter0_i_0_67)"
          data-figma-bg-blur-radius="22.6"
        >
          <path
            d="M1 13.5L14.0765 0.5L107 0.5V26.5L93.9235 39.5H1V13.5Z"
            fill="white"
            fillOpacity="0.3"
          />
          <path
            d="M1 13.5L14.0765 0.5L107 0.5V26.5L93.9235 39.5H1V13.5Z"
            stroke="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_0_67"
            x="-22.1"
            y="-22.6"
            width="152.2"
            height="85.2"
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
            <feGaussianBlur stdDeviation="2.9" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_0_67"
            />
          </filter>
          <clipPath id="bgblur_0_0_67_clip_path">
            <path
              transform="translate(22.1 22.6)"
              d="M1 13.5L14.0765 0.5L107 0.5V26.5L93.9235 39.5H1V13.5Z"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
  if (type === "hederTop") {
    return (
      <svg
        width="19"
        height="3"
        viewBox="0 0 19 3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 3L2.37986 -1.04027e-07L16 -6.99382e-07L18.6178 3L0 3Z"
          fill="white"
        />
      </svg>
    );
  }
  if (type === "greenSquare") {
    return (
      <svg
        width="6"
        height="6"
        viewBox="0 0 6 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3.0332"
          y="0.0817871"
          width="4.05452"
          height="4.10551"
          transform="rotate(45.1514 3.0332 0.0817871)"
          fill="#59FE9B"
        />
      </svg>
    );
  }
  if (type === "whiteSquare") {
    return (
      <svg
        width="6"
        height="6"
        viewBox="0 0 6 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2.98535"
          y="0.134644"
          width="4.0808"
          height="4.01187"
          transform="rotate(45.1891 2.98535 0.134644)"
          fill="#ECECEC"
        />
      </svg>
    );
  }
  if (type === "logSquare") {
    return (
      <svg
        width="6"
        height="111"
        viewBox="0 0 6 111"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0L6 5V105.5L0 111V0Z" fill="#7B7B7B" />
      </svg>
    );
  }
  if (type === "topButton") {
    return (
      <>
        <svg
          width="221"
          height="54"
          viewBox="0 0 221 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_i_257_73)">
            <path d="M17 21L29.0161 9H204V33L191.984 45H17V21Z" fill="white" />
          </g>
          <path
            d="M18 44V21.4146L29.4299 10H203V32.5854L191.57 44H18Z"
            stroke="white"
            strokeWidth="2"
          />
          <g opacity="0.4">
            <g filter="url(#filter1_i_257_73)">
              <path
                d="M1 12L11.9851 1H93V23L82.0149 34H1V12Z"
                fill="white"
                fillOpacity="0.3"
              />
            </g>
            <path d="M1 12L11.9851 1H93V23L82.0149 34H1V12Z" stroke="white" />
          </g>
          <g opacity="0.4">
            <g filter="url(#filter2_i_257_73)">
              <path
                d="M128 31L138.985 20H220V42L209.015 53H128V31Z"
                fill="white"
                fillOpacity="0.3"
              />
            </g>
            <path
              d="M128 31L138.985 20H220V42L209.015 53H128V31Z"
              stroke="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_i_257_73"
              x="17"
              y="9"
              width="187"
              height="36"
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
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_257_73"
              />
            </filter>
            <filter
              id="filter1_i_257_73"
              x="0.5"
              y="0.5"
              width="93"
              height="34"
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
              <feGaussianBlur stdDeviation="2.9" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_257_73"
              />
            </filter>
            <filter
              id="filter2_i_257_73"
              x="127.5"
              y="19.5"
              width="93"
              height="34"
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
              <feGaussianBlur stdDeviation="2.9" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_257_73"
              />
            </filter>
          </defs>
        </svg>
      </>
    );
  }
  if (type === "logo") {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <svg
          width="105"
          height="11"
          viewBox="0 0 105 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="104.591"
            height="10.0455"
            fill="url(#pattern0_257_1069)"
          />
          <defs>
            <pattern
              id="pattern0_257_1069"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_257_1069"
                transform="matrix(0.00102775 0 0 0.0107007 0 -0.00828244)"
              />
            </pattern>
            <image
              id="image0_257_1069"
              width="973"
              height="95"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>

        <svg
          width="105"
          height="13"
          viewBox="0 0 105 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="0.295471"
            width="104.591"
            height="12.7045"
            fill="url(#pattern0_257_1070)"
          />
          <defs>
            <pattern
              id="pattern0_257_1070"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_257_1070"
                transform="matrix(0.0013089 0 0 0.0107756 0 -0.00106541)"
              />
            </pattern>
            <image
              id="image0_257_1070"
              width="764"
              height="93"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      </div>
    );
  }
  if (type === "x") {
    return (
      <svg
        width="19"
        height="16"
        viewBox="0 0 19 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.4604 0H17.1396L11.2877 6.79111L18.1972 16H12.7683L8.53808 10.4178L3.67328 16H0.994123L7.269 8.74667L0.641602 0H6.21144L10.0539 5.12L14.4604 0ZM13.5086 14.3644H14.9892L5.40064 1.52889H3.77904L13.5086 14.3644Z"
          fill="#7B7B7B"
        />
      </svg>
    );
  }
  if (type === "git") {
    return (
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.51291 0C4.01042 0 0.370605 3.66665 0.370605 8.2028C0.370605 11.8288 2.70276 14.8981 5.93808 15.9844C6.34258 16.0661 6.49075 15.8079 6.49075 15.5908C6.49075 15.4006 6.47741 14.7488 6.47741 14.0696C4.21242 14.5586 3.74076 13.0918 3.74076 13.0918C3.37676 12.1411 2.83743 11.8968 2.83743 11.8968C2.0961 11.3943 2.89143 11.3943 2.89143 11.3943C3.71376 11.4486 4.14526 12.2363 4.14526 12.2363C4.87309 13.4856 6.04592 13.1326 6.51775 12.9153C6.58508 12.3856 6.80091 12.0189 7.03008 11.8153C5.22359 11.6251 3.32293 10.919 3.32293 7.76813C3.32293 6.8718 3.64626 6.13847 4.15859 5.56814C4.07776 5.36448 3.79459 4.52231 4.23959 3.39515C4.23959 3.39515 4.92709 3.17782 6.47725 4.23715C7.14093 4.05759 7.82537 3.96625 8.51291 3.96548C9.2004 3.96548 9.90123 4.06065 10.5484 4.23715C12.0987 3.17782 12.7862 3.39515 12.7862 3.39515C13.2312 4.52231 12.9479 5.36448 12.8671 5.56814C13.3929 6.13847 13.7029 6.8718 13.7029 7.76813C13.7029 10.919 11.8022 11.6115 9.98223 11.8153C10.2789 12.0733 10.5349 12.5621 10.5349 13.3363C10.5349 14.4363 10.5216 15.3191 10.5216 15.5906C10.5216 15.8079 10.6699 16.0661 11.0742 15.9846C14.3095 14.8979 16.6417 11.8288 16.6417 8.2028C16.655 3.66665 13.0019 0 8.51291 0Z"
          fill="#7B7B7B"
        />
      </svg>
    );
  }
  if (type === "telegramm") {
    return (
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.33824 6.914C6.53068 4.6371 10.0016 3.16545 11.7509 2.4435C16.6934 0.38874 17.7208 0.0277671 18.3872 0C18.5261 0 18.8593 0.0277673 19.0814 0.19437C19.248 0.333205 19.3035 0.527575 19.3313 0.66641C19.3591 0.805246 19.3868 1.11068 19.3591 1.36059C19.0814 4.16506 17.9429 11.0235 17.3321 14.1612C17.0822 15.494 16.5824 15.9383 16.1103 15.9938C15.0829 16.0771 14.2777 15.2997 13.2781 14.661C11.7231 13.6336 10.8346 12.995 9.30739 11.9954C7.55806 10.8292 8.69651 10.1905 9.69613 9.16314C9.94603 8.88546 14.5276 4.74817 14.6109 4.35943C14.6109 4.3039 14.6387 4.1373 14.5276 4.05399C14.4165 3.97069 14.2777 3.99846 14.1666 4.02623C14 4.05399 11.501 5.72002 6.64175 8.99653C5.9198 9.49634 5.28116 9.71848 4.69805 9.71848C4.05941 9.71848 2.83766 9.3575 1.92134 9.05207C0.810661 8.69109 -0.0778856 8.49673 0.00541561 7.88585C0.0609498 7.58041 0.505223 7.24721 1.33824 6.914Z"
          fill="#7B7B7B"
        />
      </svg>
    );
  }
  return <></>;
};
