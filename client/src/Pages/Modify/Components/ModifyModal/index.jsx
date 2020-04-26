import React, { useState } from "react";
import styled from "styled-components";
import RangePicker from "./RangePicker";

const ModifyModal = ({
  className,
  history,
  header,
  reservateData,
  state: {
    selected_data: { reservate_id },
  },
  dispatchState,
}) => {
  const { title, time_start, time_end, amount, icon } = reservateData[
    reservate_id - 1
  ];
  //todo: 모달에서 시간 요금변경
  const [value, setValue] = useState({
    time_start: "",
    time_end: "",
    amount: "",
  });
  const onClick = () => {
    // dispatchState({
    //   type: "SET_SELECTED_RESERVATE_DETAIL",
    //   payload: {
    //     index: reservate_id,
    //     key: "amount",
    //     value: "210,000",
    //   },
    // });
    history.goBack();
  };

  return (
    <div className={className}>
      <div className="modal">
        {header}
        <div className="guide">
          <p>시간 및 요금을 설정해주세요</p>
          <p>*시간입력은 가이드라인에 맞게 입력해주세요(ex.14시~16시)</p>
        </div>
        <div className="part">
          {icon}
          <span>{title}</span>
        </div>
        <div className="form">
          <div>
            <label htmlFor="timeInput">시간입력</label>
            <RangePicker id="timeInput" value={[time_start, time_end]} />
          </div>
          <div>
            <label htmlFor="amountInput">기본요금</label>
            <input id="amountInput" defaultValue={amount} />
          </div>
        </div>
        <button onClick={onClick}>수정완료</button>
      </div>
    </div>
  );
};

export default styled(ModifyModal)`
  background: rgba(23, 23, 23, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  div.modal {
    display: flex;
    flex-direction: column;
    height: 485px;
    width: 320px;
    border-radius: 4px;
    overflow: hidden;
    background-color: #fff;
    div.guide {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 120px;
      padding: 12px;
      box-sizing: border-box;
      p:first-of-type {
        font-size: 0.9rem;
        line-height: 2.14;
      }
      p:last-of-type {
        font-size: 0.7rem;
        line-height: 1.67;
        color: #c6c6c6;
      }
    }
    div.part {
      display: flex;
      height: 60px;
      line-height: 40px;
      padding: 12px;
      font-family: NotoSansCJKkr-Bold;
      font-size: 14px;
      font-weight: 500;
      span {
        margin-left: 16px;
      }
    }
    div.form {
      padding: 12px;
      font-size: 12px;
      color: #707070;
      > div {
        display: flex;
        margin-bottom: 10px;
        label {
          width: 100px;
          line-height: 44px;
          vertical-align: middle;
        }
        #timeInput {
          input {
            color: #707070;
          }
        }
        input#amountInput {
          flex: 1;
          height: 44px;
          padding: 12px;
          font-size: 14px;
          color: #707070;
        }
      }
    }
    button {
      height: 48px;
      width: 100%;
      color: #fff;
      background-color: #006cb3;
    }
  }
`;
