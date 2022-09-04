import type { NextPage } from "next";
import { Virtuoso } from "react-virtuoso";

import "bootstrap/dist/css/bootstrap.css";

import { VirtualScrollHeader } from "../components/virtual_scroll/virtual_scroll_header";
import { VirtualScrollCard } from "../components/virtual_scroll/virtual_scroll_card";

const items = [...Array(1000)];
const itemsCol = [...Array(8)];

const VirtualScrollVirtuoso: NextPage = () => {
  return (
    <>
      <VirtualScrollHeader />

      <div className="container-xxl" style={{}}>
        <div
          style={{
            position: "absolute",
            height: "100%",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
          }}
        >
          <Virtuoso
            style={{ height: "100%", width: "100%" }}
            totalCount={items.length}
            itemContent={(indexY) => (
              <div className="row" key={indexY}>
                {itemsCol.map((_, indexX) => (
                  <div className="col">
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
            )}
          />
        </div>
      </div>
    </>
  );
};

export default VirtualScrollVirtuoso;
