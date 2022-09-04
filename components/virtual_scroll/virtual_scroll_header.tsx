import Head from "next/head";

export const VirtualScrollHeader = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div
      className="mb-3"
      style={{
        position: "absolute",
        right: 0,
        left: 0,
        zIndex: 999,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card mt-3 mx-5">
              <div className="card-body">
                <h1 className="mt-2">
                  Performance Comparison of Virtual Scroll
                </h1>
                <a className="btn btn-link" href="/virtual_scroll">
                  baseline
                </a>
                <a className="btn btn-link" href="/virtual_scroll_virtuoso">
                  virtuoso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
