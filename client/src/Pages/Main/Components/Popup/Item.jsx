import React from "react";
import styled from "styled-components";
import OkIcon from "../../../../Assets/ico/OkIcon";
function Item({ className, selected_data, space, onChange }) {
  const isChecked = selected_data.space_id === space.id;
  return (
    <div className={className}>
      <div className={"imageBox"}></div>
      <div className={"contents"}>
        <h4>{space.title}</h4>
        <p>{space.location}</p>
      </div>
      <input
        id={`checkbox_${space.id}`}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        data-idx={space.id}
        hidden
      />
      <label htmlFor={`checkbox_${space.id}`}>
        <OkIcon />
      </label>
    </div>
  );
}
export default styled(Item)`
  display: flex;
  height: 92px;
  padding: 12px 24px;
  box-sizing: border-box;
  align-items: center;
  div.imageBox {
    height: 60px;
    border-radius: 10px;
    flex-basis: 60px;
    background-image: ${({ space }) => `url(${space.image})`};
  }
  div.contents {
    flex: 1;
    padding-left: 24px;
    h4 {
      height: 20px;
      font-family: NotoSansCJKkr;
      font-size: 14px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.43;
      letter-spacing: normal;
      text-align: left;
      color: #000000;
    }
    p {
      height: 14px;
      font-family: NotoSansCJKkr;
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.14;
      letter-spacing: normal;
      text-align: left;
      color: #707070;
    }
  }

  input {
    + label {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      line-height: 32px;
      text-align: center;
      cursor: pointer;
    }
    &:checked + label {
      background-color: #006cb3;
    }
  }
`;
