(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Chọn ngày ...",
		        "buttonLabel": "Nhấn vào đây hoặc bấm phím Enter hoặc phím cách để mở lịch",
		        "prevButtonLabel": "Tới tháng trước",
		        "nextButtonLabel": "Tới tháng tới",
		        "closeButtonTitle": "Gần",
		        "closeButtonLabel": "Đóng lịch",
		        "prevMonthButtonLabel": "Tới năm trước",
		        "prevYearButtonLabel": "Đi đến hai mươi năm trước",
		        "nextMonthButtonLabel": "Tới những năm tiếp theo",
		        "nextYearButtonLabel": "Đi đến hai mươi năm tiếp theo",
		        "changeMonthButtonLabel": "Nhấn vào đây hoặc bấm phím Enter hoặc phím cách để thay đổi tháng",
		        "changeYearButtonLabel": "Nhấn vào đây hoặc bấm phím Enter hoặc phím cách để thay đổi năm",
		        "changeRangeButtonLabel": "Nhấn vào đây hoặc bấm phím Enter hoặc phím cách để đi đến hai mươi năm tiếp theo",
		        "calendarHelp": "- Mũi tên lên và mũi tên xuống - đi vào cùng một ngày trong tuần trong các tuần trước đó hoặc tiếp theo tương ứng. Nếu cuối tháng là đạt, tiếp tục vào các tháng tiếp theo hoặc trước đó cho phù hợp.\r\n- Mũi tên trái và mũi tên bên phải - tiến một ngày đến ngày hôm sau, cũng trong một sự liên tục. Tập trung thị giác được chuyển từ ngày này sang ngày khác và kết thúc tốt đẹp từ hàng cách hàng trong lưới của ngày.\r\n- Control + Page Up - Di chuyển đến cùng một ngày trong năm trước đó.\r\n- Control + Page Down - Di chuyển đến cùng một ngày trong năm tiếp theo.\r\n- Trang chủ - Di chuyển đến ngày đầu tiên của tháng hiện tại.\r\n- End - Di chuyển đến ngày cuối cùng của tháng hiện tại.\r\n- Page Up - Di chuyển đến cùng một ngày trong tháng trước đó.\r\n- Page Down - Di chuyển đến cùng một ngày trong tháng tới.\r\n- Nhập hoặc Espace - đóng lịch, và ngày đã chọn được hiển thị trong hộp văn bản liên quan.\r\n- Escape - đóng lịch mà không có bất kỳ hành động."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "tháng 1",
		        "tháng 2",
		        "tháng 3",
		        "tháng 4",
		        "tháng 5",
		        "tháng 6",
		        "tháng 7",
		        "tháng 8",
		        "tháng 9",
		        "tháng 10",
		        "tháng 11",
		        "tháng 12"
		    ],
		    "month_names_abbreviated": [
		        "thg 1",
		        "thg 2",
		        "thg 3",
		        "thg 4",
		        "thg 5",
		        "thg 6",
		        "thg 7",
		        "thg 8",
		        "thg 9",
		        "thg 10",
		        "thg 11",
		        "thg 12"
		    ],
		    "month_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4",
		        "5",
		        "6",
		        "7",
		        "8",
		        "9",
		        "10",
		        "11",
		        "12"
		    ],
		    "day_names": [
		        "Chủ Nhật",
		        "Thứ Hai",
		        "Thứ Ba",
		        "Thứ Tư",
		        "Thứ Năm",
		        "Thứ Sáu",
		        "Thứ Bảy"
		    ],
		    "day_names_abbreviated": [
		        "CN",
		        "Th 2",
		        "Th 3",
		        "Th 4",
		        "Th 5",
		        "Th 6",
		        "Th 7"
		    ],
		    "day_names_short": [
		        "CN",
		        "T2",
		        "T3",
		        "T4",
		        "T5",
		        "T6",
		        "T7"
		    ],
		    "day_names_narrow": [
		        "CN",
		        "T2",
		        "T3",
		        "T4",
		        "T5",
		        "T6",
		        "T7"
		    ],
		    "day_periods": {
		        "am": "SA",
		        "noon": "TR",
		        "pm": "CH"
		    },
		    "day_periods_abbreviated": {
		        "am": "SA",
		        "noon": "TR",
		        "pm": "CH"
		    },
		    "day_periods_narrow": {
		        "am": "s",
		        "noon": "tr",
		        "pm": "c"
		    },
		    "quarter_names": [
		        "Quý 1",
		        "Quý 2",
		        "Quý 3",
		        "Quý 4"
		    ],
		    "quarter_names_abbreviated": [
		        "Q1",
		        "Q2",
		        "Q3",
		        "Q4"
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "tr. CN",
		        "sau CN"
		    ],
		    "era_names_abbreviated": [
		        "tr. CN",
		        "sau CN"
		    ],
		    "era_names_narrow": [
		        "tr. CN",
		        "sau CN"
		    ],
		    "full_format": "EEEE, 'ngày' dd MMMM 'năm' y",
		    "long_format": "'Ngày' dd 'tháng' MM 'năm' y",
		    "medium_format": "dd-MM-y",
		    "short_format": "dd/MM/y",
		    "firstday_of_week": 0
		};
	}
})();