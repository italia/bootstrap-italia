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
		        "ጃንዩወሪ",
		        "ፌብሩወሪ",
		        "ማርች",
		        "ኤፕሪል",
		        "ሜይ",
		        "ጁን",
		        "ጁላይ",
		        "ኦገስት",
		        "ሴፕቴምበር",
		        "ኦክቶበር",
		        "ኖቬምበር",
		        "ዲሴምበር"
		    ],
		    "month_names_abbreviated": [
		        "ጃንዩ",
		        "ፌብሩ",
		        "ማርች",
		        "ኤፕሪ",
		        "ሜይ",
		        "ጁን",
		        "ጁላይ",
		        "ኦገስ",
		        "ሴፕቴ",
		        "ኦክቶ",
		        "ኖቬም",
		        "ዲሴም"
		    ],
		    "month_names_narrow": [
		        "ጃ",
		        "ፌ",
		        "ማ",
		        "ኤ",
		        "ሜ",
		        "ጁ",
		        "ጁ",
		        "ኦ",
		        "ሴ",
		        "ኦ",
		        "ኖ",
		        "ዲ"
		    ],
		    "day_names": [
		        "እሑድ",
		        "ሰኞ",
		        "ማክሰኞ",
		        "ረቡዕ",
		        "ሐሙስ",
		        "ዓርብ",
		        "ቅዳሜ"
		    ],
		    "day_names_abbreviated": [
		        "እሑድ",
		        "ሰኞ",
		        "ማክሰ",
		        "ረቡዕ",
		        "ሐሙስ",
		        "ዓርብ",
		        "ቅዳሜ"
		    ],
		    "day_names_short": [
		        "እ",
		        "ሰ",
		        "ማ",
		        "ረ",
		        "ሐ",
		        "ዓ",
		        "ቅ"
		    ],
		    "day_names_narrow": [
		        "እ",
		        "ሰ",
		        "ማ",
		        "ረ",
		        "ሐ",
		        "ዓ",
		        "ቅ"
		    ],
		    "day_periods": {
		        "am": "ጥዋት",
		        "noon": "ቀትር",
		        "pm": "ከሰዓት"
		    },
		    "day_periods_abbreviated": {
		        "am": "ጥዋት",
		        "noon": "ቀትር",
		        "pm": "ከሰዓት"
		    },
		    "day_periods_narrow": {
		        "am": "ጠ",
		        "noon": "ቀ",
		        "pm": "ከ"
		    },
		    "quarter_names": [
		        "1ኛው ሩብ",
		        "ሁለተኛው ሩብ",
		        "3ኛው ሩብ",
		        "4ኛው ሩብ"
		    ],
		    "quarter_names_abbreviated": [
		        "ሩብ1",
		        "ሩብ2",
		        "ሩብ3",
		        "ሩብ4"
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "ዓመተ ዓለም",
		        "ዓመተ ምሕረት"
		    ],
		    "era_names_abbreviated": [
		        "ዓ/ዓ",
		        "ዓ/ም"
		    ],
		    "era_names_narrow": [
		        "ዓ/ዓ",
		        "ዓ/ም"
		    ],
		    "full_format": "EEEE, d MMMM y",
		    "long_format": "d MMMM y",
		    "medium_format": "d MMM y",
		    "short_format": "dd/MM/y",
		    "firstday_of_week": 1
		};
	}
})();