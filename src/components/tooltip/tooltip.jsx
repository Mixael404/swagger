import { memo } from "react";
import classes from "./tooltip.module.css";
import { Tooltip as TooltipController } from "react-tooltip";

function TooltipComponent({text}) {
  return (
    <>
      <img width={30} height={30} data-tooltip-id="my-tooltip"  className={classes.tooltip} src="https://cdn-icons-png.flaticon.com/512/25/25333.png" alt="" />
      {/* <svg
        id="tooltip"
        data-tooltip-id="my-tooltip" 
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="18.0pt"
        height="18.0pt"
        viewBox="0 0 1280.000000 1280.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
          fill="#555555"
          stroke="none"
        >
          <path
            d="M6010 12083 c-758 -57 -1399 -279 -1906 -658 -718 -539 -1152 -1347
-1303 -2427 -12 -82 -21 -152 -21 -157 0 -5 41 -35 91 -66 l92 -56 691 -83
c380 -46 694 -80 698 -77 4 4 19 69 33 146 160 877 511 1442 1076 1735 282
146 526 207 870 217 288 9 494 -19 739 -100 560 -184 1049 -669 1223 -1212 62
-193 72 -263 72 -515 0 -251 -9 -314 -72 -494 -119 -342 -368 -642 -998 -1202
-721 -641 -996 -942 -1235 -1358 -304 -528 -437 -1166 -414 -1979 l7 -247 681
2 681 3 7 205 c22 678 85 1026 244 1343 66 131 105 195 192 307 98 127 478
502 817 806 1138 1020 1523 1593 1652 2460 27 185 24 610 -6 804 -52 336 -129
581 -275 867 -184 363 -484 723 -835 1002 -524 417 -1171 656 -1968 726 -152
13 -693 19 -833 8z"
          />
          <path
            d="M5605 2658 c-35 -151 -35 -157 -35 -984 l0 -814 800 0 800 0 -1 833
c-1 735 -3 841 -17 907 l-17 75 -762 3 -763 2 -5 -22z"
          />
        </g>
      </svg> */}

      <TooltipController
      style={{ whiteSpace: 'break-all', maxWidth: '100%' }}
      id="my-tooltip"
      content={text}
      place="left-start"
      />
    </>
  );
}

export const Tooltip = memo(TooltipComponent);