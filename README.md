- 모바일에서의 관리자용 앱인 것 같다.
- 모바일에서의 사용으로 보고 먼저 새로고침에서 상태가 날아갈 상황은 일단 예외로 두고 하기로 했다.

- [ ] 1.1달력이 보여지는 방식은 단순하게 이번달 +3달 정도면 충분할 듯 하다. 미완성.

- 2.2의 팝업은 모달이아닌 하단에서 올라오는 형태를 뜻하는 것으로 보고 작업.

  - [ ] 팝업이 올라올 때 캘린더의 형태를 변경 하는 부분은 미완성.
  - [ ] 예약 불가 날짜가 연속된 경우 이어진 하나의 타원으로 표시. 미완성.
  - [ ] 팝업시 달력은 고정이 고정이 될 것 처럼 보인다. 미완성.

- 수정요청시 여러 날짜가 선택 된 경우 해당 장소의 해당 일 설정을 모두 덮어쓰는게 될 듯 하다.

- [ ] 3.3의 회색은 아마도 최초의 상태 같은데 5개의 날짜모두 예약이 막혀있다는 보장은 없으니 아마 5일중 하루라도 막혀있으면 회색 표시가 나타나는 것이 맞는 듯 하다. 미완성.

  - 그렇다면 3.3으로 넘어가면서 해당장소에서 해당 5일의 예약 가능여부를 받아와야 한다.

- [ ] 3.4 모달에서 수정완료를 누를 경우에 임시저장->모달이 닫히고 3.3으로 -> 완료를 누르면 모든 데이터를 한번에 수정요청하는 것이 좋을지 아니면 모달에서 수정완료를 누르면 해당 {해당장소,해당날짜,예약타임}의 시간범위와 요금만 수정하고 3.3으로 돌아오는게 맞을지. 미완성.

  - [ ] 모달 보이는 중에 뒷부분 스크롤 비활성화.미완성.

- 구조는 앞으로 조금 더 고민해봐야겠다.
  <img width="100%" src="https://github.com/k0603156/Tirrilee-ct/blob/master/doc/ERD.jpg">
