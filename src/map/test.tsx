import React, { FC, isValidElement, ReactNode } from "react";
import { map } from ".";
import { render } from "@testing-library/react";

type AppProps = {
  fn: Parameters<typeof map>[1];
  options?: Parameters<typeof map>[2];
};

describe(map, () => {
  const App: FC<AppProps> = ({ children, fn, options }) => (
    <>{map(children, fn, options)}</>
  );

  it("applies the mapping fn depth first, post-order", () => {
    let idx = 0;
    const fn = jest.fn((el: ReactNode) => {
      idx++;

      return (
        <div
          data-visit-idx={idx}
          children={isValidElement(el) ? el.props.children : null}
        />
      );
    });

    const { container } = render(
      <App fn={fn}>
        <div>
          <div>
            <div />
            <div />
          </div>
          <div>
            <div />
            <div />
          </div>
        </div>
      </App>
    );

    expect(container).toMatchInlineSnapshot(`
<div>
  <div
    data-visit-idx="7"
  >
    <div
      data-visit-idx="3"
    >
      <div
        data-visit-idx="1"
      />
      <div
        data-visit-idx="2"
      />
    </div>
    <div
      data-visit-idx="6"
    >
      <div
        data-visit-idx="4"
      />
      <div
        data-visit-idx="5"
      />
    </div>
  </div>
</div>
`);
  });

  it("only descends maxDepth", () => {
    let idx = 0;
    const fn = jest.fn((el: ReactNode) => {
      idx++;

      return (
        <div
          data-visit-idx={idx}
          children={isValidElement(el) ? el.props.children : null}
        />
      );
    });

    const { container } = render(
      <App fn={fn} options={{ maxDepth: 1 }}>
        <div>
          <div>
            <div />
            <div />
          </div>
          <div>
            <div />
            <div />
          </div>
        </div>
      </App>
    );

    expect(container).toMatchInlineSnapshot(`
<div>
  <div
    data-visit-idx="3"
  >
    <div
      data-visit-idx="1"
    >
      <div />
      <div />
    </div>
    <div
      data-visit-idx="2"
    >
      <div />
      <div />
    </div>
  </div>
</div>
`);
  });
});
