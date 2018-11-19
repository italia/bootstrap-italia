(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Select date ...",
		        "buttonLabel": "Click or press the Enter key or the spacebar to open the calendar",
		        "prevButtonLabel": "Go to previous month",
		        "nextButtonLabel": "Go to next month",
		        "closeButtonTitle": "Close",
		        "closeButtonLabel": "Close the calendar",
		        "prevMonthButtonLabel": "Go to the previous year",
		        "prevYearButtonLabel": "Go to the previous twenty years",
		        "nextMonthButtonLabel": "Go to the next year",
		        "nextYearButtonLabel": "Go to the next twenty years",
		        "changeMonthButtonLabel": "Click or press the Enter key or the spacebar to change the month",
		        "changeYearButtonLabel": "Click or press the Enter key or the spacebar to change the year",
		        "changeRangeButtonLabel": "Click or press the Enter key or the spacebar to go to the next twenty years",
		        "calendarHelp": "- Up Arrow and Down Arrow - goes to the same day of the week in the previous or next week respectively. If the end of the month is reached, continues into the next or previous month as appropriate.\r\n- Left Arrow and Right Arrow - advances one day to the next, also in a continuum. Visually focus is moved from day to day and wraps from row to row in the grid of days.\r\n- Control+Page Up - Moves to the same date in the previous year.\r\n- Control+Page Down - Moves to the same date in the next year.\r\n- Home - Moves to the first day of the current month.\r\n- End - Moves to the last day of the current month.\r\n- Page Up - Moves to the same date in the previous month.\r\n- Page Down - Moves to the same date in the next month.\r\n- Enter or Espace - closes the calendar, and the selected date is shown in the associated text box.\r\n- Escape - closes the calendar without any action."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "Sānuali",
		        "Fēpueli",
		        "Maʻasi",
		        "ʻEpeleli",
		        "Mē",
		        "Sune",
		        "Siulai",
		        "ʻAokosi",
		        "Sepitema",
		        "ʻOkatopa",
		        "Nōvema",
		        "Tīsema"
		    ],
		    "month_names_abbreviated": [
		        "Sān",
		        "Fēp",
		        "Maʻa",
		        "ʻEpe",
		        "Mē",
		        "Sun",
		        "Siu",
		        "ʻAok",
		        "Sep",
		        "ʻOka",
		        "Nōv",
		        "Tīs"
		    ],
		    "month_names_narrow": [
		        "S",
		        "F",
		        "M",
		        "E",
		        "M",
		        "S",
		        "S",
		        "A",
		        "S",
		        "O",
		        "N",
		        "T"
		    ],
		    "day_names": [
		        "Sāpate",
		        "Mōnite",
		        "Tūsite",
		        "Pulelulu",
		        "Tuʻapulelulu",
		        "Falaite",
		        "Tokonaki"
		    ],
		    "day_names_abbreviated": [
		        "Sāp",
		        "Mōn",
		        "Tūs",
		        "Pul",
		        "Tuʻa",
		        "Fal",
		        "Tok"
		    ],
		    "day_names_short": [
		        "Sāp",
		        "Mōn",
		        "Tūs",
		        "Pul",
		        "Tuʻa",
		        "Fal",
		        "Tok"
		    ],
		    "day_names_narrow": [
		        "S",
		        "M",
		        "T",
		        "P",
		        "T",
		        "F",
		        "T"
		    ],
		    "day_periods": {
		        "am": "AM",
		        "noon": "hoʻatā",
		        "pm": "PM"
		    },
		    "day_periods_abbreviated": {
		        "am": "AM",
		        "noon": "hoʻatā",
		        "pm": "PM"
		    },
		    "day_periods_narrow": {
		        "am": "AM",
		        "noon": "h",
		        "pm": "PM"
		    },
		    "quarter_names": [
		        "kuata ʻuluaki",
		        "kuata ua",
		        "kuata tolu",
		        "kuata fā"
		    ],
		    "quarter_names_abbreviated": [
		        "K1",
		        "K2",
		        "K3",
		        "K4"
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "ki muʻa",
		        "taʻu ʻo Sīsū"
		    ],
		    "era_names_abbreviated": [
		        "KM",
		        "TS"
		    ],
		    "era_names_narrow": [
		        "KāMā",
		        "TāSā"
		    ],
		    "full_format": "EEEE d MMMM y",
		    "long_format": "d MMMM y",
		    "medium_format": "d MMM y",
		    "short_format": "d/M/yy",
		    "firstday_of_week": 0
		};
	}
})();