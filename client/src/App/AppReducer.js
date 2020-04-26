export const initialUserState = {
  month_array: [new Date("2020-06"), new Date("2020-05"), new Date("2020-04")],
  disabled_dates: [
    "06/01/2020",
    "05/31/2020",
    "04/16/2020",
    "04/17/2020",
    "04/18/2020",
  ],
  selected_data: {
    selected_dates: [],
    space_id: 21,
    reservate_id: 1,
    reservate_detail: [],
  },
  space_list: [
    {
      id: 21,
      image: "/imgs/accommodation_img1.jpg",
      title: "티릴리 파티룸",
      location: "용산구 이태원동",
      reservate_types: [
        {
          id: 1,
          title: "낮타임",
          time_start: "10:00",
          time_end: "19:00",
          status: true,
          amount: "100,000",
        },
        {
          id: 2,
          title: "밤타임",
          time_start: "19:00",
          time_end: "04:00",
          status: true,
          amount: "120,000",
        },
        {
          id: 3,
          title: "올데이",
          time_start: "10:00",
          time_end: "04:00",
          status: false,
          amount: "120,000",
        },
      ],
    },
    {
      id: 55,
      image: "/imgs/accommodation_img2.jpg",
      title: "티릴리 파티룸2",
      location: "마포구 성산동",
      reservate_types: [
        {
          id: 1,
          title: "낮타임",
          time_start: "10:00",
          time_end: "19:00",
          status: true,
          amount: "100,000",
        },
        {
          id: 2,
          title: "밤타임",
          time_start: "19:00",
          time_end: "04:00",
          status: true,
          amount: "140,000",
        },
        {
          id: 3,
          title: "올데이",
          time_start: "10:00",
          time_end: "04:00",
          status: false,
          amount: "170,000",
        },
      ],
    },
    {
      id: 76,
      image: "/imgs/accommodation_img1.jpg",
      title: "티릴리 파티룸3",
      location: "용산구 이태원동",
      reservate_types: [
        {
          id: 1,
          title: "낮타임",
          time_start: "10:00",
          time_end: "19:00",
          status: true,
          amount: "100,000",
        },
        {
          id: 2,
          title: "밤타임",
          time_start: "19:00",
          time_end: "04:00",
          status: true,
          amount: "140,000",
        },
        {
          id: 3,
          title: "올데이",
          time_start: "10:00",
          time_end: "04:00",
          status: false,
          amount: "190,000",
        },
      ],
    },
  ],
  error: {
    status: false,
    type: "",
  },
};

export default (state, action) => {
  switch (action.type) {
    case "SET_SELECTED_DATE": {
      if (state.selected_data.selected_dates.includes(action.payload)) {
        return {
          ...state,
          selected_data: {
            ...state.selected_data,
            selected_dates: state.selected_data.selected_dates.filter(
              (date) => date !== action.payload
            ),
          },
        };
      } else {
        return {
          ...state,
          selected_data: {
            ...state.selected_data,
            selected_dates: [
              ...state.selected_data.selected_dates,
              action.payload,
            ],
          },
        };
      }
    }
    case "SET_SELECTED_SPACE": {
      return {
        ...state,
        selected_data: {
          ...state.selected_data,
          space_id: Number(action.payload),
        },
      };
    }
    case "SET_SELECTED_RESERVATE_TYPE": {
      return {
        ...state,
        selected_data: {
          ...state.selected_data,
          reservate_id: Number(action.payload),
        },
      };
    }
    case "SET_SELECTED_RESERVATE_DETAIL": {
      return {
        ...state,
        selected_data: {
          ...state.selected_data,
          reservate_detail: [
            ...state.selected_data.reservate_detail.map((detail) =>
              detail.id === Number(action.payload.index)
                ? {
                    ...detail,
                    [action.payload.key]: action.payload.value,
                  }
                : detail
            ),
          ],
        },
      };
    }
    case "INIT_SELECTED_RESERVATE_DETAIL": {
      return {
        ...state,
        selected_data: {
          ...state.selected_data,
          reservate_detail: state.space_list.filter(
            ({ id }) => state.selected_data.space_id === id
          )[0].reservate_types,
        },
      };
    }
    case "CLEAR_SELECTED": {
      return {
        ...state,
        selected_data: initialUserState.selected_data,
      };
    }
    case "SET_ERROR": {
      return {
        ...state,
        error: {
          status: action.payload.status,
          type: action.payload.type,
        },
      };
    }
    default: {
      throw new Error(`unexpected action.type: ${action.type}`);
    }
  }
};
