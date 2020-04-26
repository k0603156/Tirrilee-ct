import Axios from "axios";
export const API_ROOT = "http://localhost:3000/api/v1/";

const req = (method, url, data) =>
  Axios({
    method,
    url: API_ROOT + url,
    data,
    headers: {},
  });

export default {
  //영업일외 등 기본데이터
  get_disabled_dates(payload) {
    return req("get", "/base");
  },
  //예약장소정보리스트
  get_spaces(payload) {
    return req("get", "/spaces");
  },
  //예약타임정보수정
  patch_reservate(payload) {
    return req("patch", "/reservate", {
      dates: ["04/16/2020", "04/17/2020"],
      space_id: 21,
      reservate_detail: [
        {
          id: 1,
          time_start: "10:00",
          time_end: "19:00",
          status: true,
          amount: "100,000",
        },
        {
          id: 2,
          time_start: "19:00",
          time_end: "04:00",
          status: true,
          amount: "140,000",
        },
        {
          id: 3,
          time_start: "10:00",
          time_end: "04:00",
          status: true,
          amount: "190,000",
        },
      ],
    });
  },
};
