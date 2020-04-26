import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import OkIcon from "../../../../Assets/ico/OkIcon";

function Card({
  className,
  data: { id, title, status, icon, time_start, time_end, amount },
  dispatchState,
}) {
  const setReservateType = (event) => {
    dispatchState({
      type: "SET_SELECTED_RESERVATE_TYPE",
      payload: id,
    });
  };
  const setSpaceDetail = (event) => {
    const [status, index] = event.target.id.split("_");
    if (status === "deny") {
      dispatchState({
        type: "SET_SELECTED_RESERVATE_DETAIL",
        payload: { index, key: "status", value: false },
      });
    } else if (status === "permit") {
      dispatchState({
        type: "SET_SELECTED_RESERVATE_DETAIL",
        payload: { index, key: "status", value: true },
      });
    }
  };
  return (
    <div className={className}>
      <div className="top">
        <Link to="/modify/modal" onClick={setReservateType}>
          수정하기
        </Link>
      </div>
      <div className="header">
        <div className="imageBox">{icon}</div>
        <div className="title">{title}</div>
        <div className="content">
          <div className="timeRange">{`시간(${time_start}시~${time_end}시)`}</div>
          <div className="amount">{`요금(${amount}원)`}</div>
        </div>
      </div>
      <div className="body">
        <div className="row">
          예약막기
          <input
            id={`deny_${id}`}
            name={`status_${id}`}
            defaultChecked={!status}
            // checked={!status}
            onChange={setSpaceDetail}
            type="radio"
            hidden
          />
          <label className="icon" htmlFor={`deny_${id}`}>
            <OkIcon />
          </label>
        </div>
        <div className="row">
          예약허용
          <input
            id={`permit_${id}`}
            name={`status_${id}`}
            defaultChecked={status}
            // checked={status}
            onChange={setSpaceDetail}
            type="radio"
            hidden
          />
          <label className="icon" htmlFor={`permit_${id}`}>
            <OkIcon />
          </label>
        </div>
      </div>
    </div>
  );
}
export default styled(Card)`
  height: 205px;
  margin-top: 10px;
  padding: 12px;
  box-sizing: border-box;
  background-color: #fff;
  div.top {
    width: 100%;
    text-align: right;
    a {
      font-family: NotoSansCJKkr;
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.67;
      letter-spacing: normal;
      text-decoration: none;
      color: #000000;
    }
  }
  div.header {
    height: 65px;
    display: flex;
    font-family: NotoSansCJKkr;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    border-bottom: solid 1px #f5f5f5;
    div.imageBox {
      height: 40px;
      width: 40px;
    }
    div.title {
      flex: 1;
      font-family: NotoSansCJKkr-Bold;
      font-size: 14px;
      font-weight: 500;
      line-height: 2.14;
      text-align: left;
      color: #000000;
    }
    div.content {
      div.timeRange,
      div.amount {
        font-size: 12px;
        line-height: 1.67;
        text-align: right;
        color: rgba(44, 44, 44, 0.6);
      }
    }
  }
  div.body {
    display: flex;
    flex-direction: column;
    height: 112px;
    div.row {
      display: flex;
      justify-content: space-between;
      flex: 1;
      padding: 12px;

      input {
        + label.icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          line-height: 32px;
          text-align: center;
          cursor: pointer;
        }
        &:checked + label.icon {
          background-color: #006cb3;
        }
      }
    }
  }
`;
