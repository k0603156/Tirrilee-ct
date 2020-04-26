import React from "react";
import styled from "styled-components";

const weekArr = ["일", "월", "화", "수", "목", "금", "토"];

function WeekList(props) {
  return (
    <div className={props.className}>
      {weekArr.map((item) => (
        <div className="item" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default styled(WeekList)`
  display: flex;
  margin: 16px 0;
  div.item {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #c6c6c6;
  }
`;
