import React from "react";
import styled from "styled-components";

function RangePicker({ className, id, value = ["00:00", "00:00"], style }) {
  return (
    <fieldset id={id} className={className}>
      <input className="left" type="text" defaultValue={value[0]} />
      <input className="center" type="text" value="~" readOnly />
      <input className="right" type="text" defaultValue={value[1]} />
    </fieldset>
  );
}
export default styled(RangePicker)`
  flex: 1;
  width: 100%;
  height: 44px;
  input {
    display: inline-block;
    height: inherit;
    max-width: 45%;
  }
  input.left {
    padding-left: 12px;
    border-right: none;
  }
  input.center {
    width: 10%;
    border-left: none;
    border-right: none;
  }
  input.right {
    padding-right: 12px;
    border-left: none;
  }
  ${(props) => props.style}
`;
