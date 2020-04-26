import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "./Card";

function Body({
  className,
  history,
  reservateData,
  state: {
    selected_data: { reservate_detail },
  },
  dispatchState,
}) {
  const clearData = () => {
    dispatchState({ type: "CLEAR_SELECTED" });
  };

  const Cards = reservateData.map((data) => (
    <Card key={data.title} data={data} dispatchState={dispatchState} />
  ));

  return (
    <div className={className}>
      <div className="subtitle">
        <span>상세설정</span>
      </div>
      {Cards}
      <div className="footer">
        <Link to="/" onClick={clearData}>
          완료
        </Link>
      </div>
    </div>
  );
}
export default styled(Body)`
  padding-top: 136px;
  height: 740px;
  div.subtitle {
    span {
      font-size: 14px;
      font-weight: bold;
      color: #000000;
    }
    width: 100%;
    height: 64px;
    line-height: 118px;
    text-align: center;
  }
  div.footer {
    margin-top: 24px;
    padding: 12px;
    background-color: #fff;
    a {
      color: #fff;
      display: block;
      height: 48px;
      line-height: 48px;
      width: 100%;
      border-radius: 4px;
      text-align: center;
      background-color: #006cb3;
    }
  }
`;
