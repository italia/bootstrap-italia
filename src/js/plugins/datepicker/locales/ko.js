(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "날짜 선택 ...",
		        "buttonLabel": "클릭하거나 Enter 키를 누르거나 스페이스 바를 달력을 엽니 다",
		        "prevButtonLabel": "이전 달로 이동",
		        "nextButtonLabel": "다음달로 이동",
		        "closeButtonTitle": "닫기",
		        "closeButtonLabel": "달력을 닫습니다",
		        "prevMonthButtonLabel": "전년로 이동",
		        "prevYearButtonLabel": "이전 이십년로 이동",
		        "nextMonthButtonLabel": "다음 해로 이동",
		        "nextYearButtonLabel": "다음 이십년로 이동",
		        "changeMonthButtonLabel": "클릭하거나 Enter 키를 누르거나 스페이스 바를 월 변경",
		        "changeYearButtonLabel": "클릭하거나 Enter 키를 누르거나 스페이스 바를 년 변경",
		        "changeRangeButtonLabel": "클릭하거나 다음 이십년로 이동 키 또는 스페이스 바를 입력 키를 누릅니다",
		        "calendarHelp": "- 위쪽 화살표 및 아래쪽 화살표 - 각각 이전 또는 다음 주 같은 요일로 이동합니다. 개월의 끝에 도달하면, 적절한 다음 또는 이전 달로 계속된다.\r\n- 왼쪽 화살표 및 오른쪽 화살표 - 또한 연속에, 다음에 어느 날 진행된다. 시각적 초점은 매일 매일 이동과 일의 표에서 행에 행에서 랩됩니다.\r\n- 컨트롤 + 페이지 업 - 전년 같은 날짜로 이동합니다.\r\n- 컨트롤 + 페이지 아래로 - 다음 해에 같은 날짜로 이동합니다.\r\n- 홈 - 현재 달의 첫날로 이동합니다.\r\n- 끝 - 현재 달의 마지막 날로 이동합니다.\r\n- 이전 페이지 - 이전 달 같은 날짜로 이동합니다.\r\n- 페이지 아래로 - 다음 달의 같은 날짜로 이동합니다.\r\n- 입력하거나 에스 파스는 - 달력을 닫고, 선택한 날짜는 관련 텍스트 상자에 표시됩니다.\r\n- 탈출 - 조치없이 달력을 닫습니다."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "1월",
		        "2월",
		        "3월",
		        "4월",
		        "5월",
		        "6월",
		        "7월",
		        "8월",
		        "9월",
		        "10월",
		        "11월",
		        "12월"
		    ],
		    "month_names_abbreviated": [
		        "1월",
		        "2월",
		        "3월",
		        "4월",
		        "5월",
		        "6월",
		        "7월",
		        "8월",
		        "9월",
		        "10월",
		        "11월",
		        "12월"
		    ],
		    "month_names_narrow": [
		        "1월",
		        "2월",
		        "3월",
		        "4월",
		        "5월",
		        "6월",
		        "7월",
		        "8월",
		        "9월",
		        "10월",
		        "11월",
		        "12월"
		    ],
		    "day_names": [
		        "일요일",
		        "월요일",
		        "화요일",
		        "수요일",
		        "목요일",
		        "금요일",
		        "토요일"
		    ],
		    "day_names_abbreviated": [
		        "일",
		        "월",
		        "화",
		        "수",
		        "목",
		        "금",
		        "토"
		    ],
		    "day_names_short": [
		        "일",
		        "월",
		        "화",
		        "수",
		        "목",
		        "금",
		        "토"
		    ],
		    "day_names_narrow": [
		        "일",
		        "월",
		        "화",
		        "수",
		        "목",
		        "금",
		        "토"
		    ],
		    "day_periods": {
		        "am": "오전",
		        "noon": "정오",
		        "pm": "오후"
		    },
		    "day_periods_abbreviated": {
		        "am": "오전",
		        "noon": "정오",
		        "pm": "오후"
		    },
		    "day_periods_narrow": {
		        "am": "오전",
		        "noon": "정오",
		        "pm": "오후"
		    },
		    "quarter_names": [
		        "제 1/4분기",
		        "제 2/4분기",
		        "제 3/4분기",
		        "제 4/4분기"
		    ],
		    "quarter_names_abbreviated": [
		        "1분기",
		        "2분기",
		        "3분기",
		        "4분기"
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "기원전",
		        "서기"
		    ],
		    "era_names_abbreviated": [
		        "기원전",
		        "서기"
		    ],
		    "era_names_narrow": [
		        "기원전",
		        "서기"
		    ],
		    "full_format": "y년 M월 d일 EEEE",
		    "long_format": "y년 M월 d일",
		    "medium_format": "y. M. d.",
		    "short_format": "yy. M. d.",
		    "firstday_of_week": 0
		};
	}
})();