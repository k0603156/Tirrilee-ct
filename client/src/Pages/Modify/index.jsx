import React, { useEffect } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import ModifyModal from "./Components/ModifyModal";
import DaytimeSmallSelect from "../../Assets/ico/DaytimeSmallSelect";
import NighttimeSmallSelect from "../../Assets/ico/NighttimeSmallSelect";
import AlldaySmallSelect from "../../Assets/ico/AlldaySmallSelect";

const ModalHeader = styled(Header)`
  position: initial;
  padding-top: 24px;
`;

const cardIcons = [
  { icon: <DaytimeSmallSelect /> },
  { icon: <NighttimeSmallSelect /> },
  { icon: <AlldaySmallSelect /> },
];

export default function Modify({ state, dispatchState }) {
  const {
    space_list,
    selected_data: { space_id },
  } = state;
  useEffect(() => {
    dispatchState({ type: "INIT_SELECTED_RESERVATE_DETAIL" });
  }, []);
  const reservateTypeList = space_list.filter(({ id }) => id === space_id)[0]
    .reservate_types;

  const reservateData = reservateTypeList.map((data, index) =>
    Object.assign(data, cardIcons[index])
  );

  return (
    <div>
      <Header state={state} />
      <Body
        state={state}
        dispatchState={dispatchState}
        reservateData={reservateData}
      />
      <Route
        path={"/modify/modal"}
        component={(props) => (
          <ModifyModal
            {...props}
            header={<ModalHeader state={state} />}
            state={state}
            dispatchState={dispatchState}
            reservateData={reservateData}
          />
        )}
      />
    </div>
  );
}
