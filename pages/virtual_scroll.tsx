import type { NextPage } from "next";

import "bootstrap/dist/css/bootstrap.css";

import { VirtualScrollHeader } from "../components/virtual_scroll/virtual_scroll_header";
import { VirtualScrollCard } from "../components/virtual_scroll/virtual_scroll_card";

const items = [...Array(1000)];
const itemsCol = [...Array(8)];

const VirtualScroll: NextPage = () => {
  return (
    <>
      <VirtualScrollHeader />

      <div className="container-xxl">
        <div>
          <div style={{ height: "100%", width: "100%", position: "relative" }}>
            {items.map((_, indexY) => (
              <div className="row" key={indexY}>
                {itemsCol.map((_, indexX) => (
                  <div className="col" key={indexX}>
                    <VirtualScrollCard
                      posX={indexX}
                      posY={indexY}
                      colorR={128}
                      colorG={168}
                      colorB={255}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VirtualScroll;
