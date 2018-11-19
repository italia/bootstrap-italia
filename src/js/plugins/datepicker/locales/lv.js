(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Select date ...",
		        "buttonLabel": "Click or press the Enter key or the spacebar to open the calendar",
		        "prevButtonLabel": "Go to previous month",
		        "prevMonthButtonLabel": "Go to the previous year",
		        "prevYearButtonLabel": "Go to the previous twenty years",
		        "nextButtonLabel": "Go to next month",
		        "nextMonthButtonLabel": "Go to the next year",
		        "nextYearButtonLabel": "Go to the next twenty years",
		        "changeMonthButtonLabel": "Click or press the Enter key or the spacebar to change the month",
		        "changeYearButtonLabel": "Click or press the Enter key or the spacebar to change the year",
		        "changeRangeButtonLabel": "Click or press the Enter key or the spacebar to go to the next twenty years",
		        "closeButtonTitle": "Close",
		        "closeButtonLabel": "Close the calendar",
		        "calendarHelp": "- Up Arrow and Down Arrow - goes to the same day of the week in the previous or next week respectively. If the end of the month is reached, continues into the next or previous month as appropriate.\r\n- Left Arrow and Right Arrow - advances one day to the next, also in a continuum. Visually focus is moved from day to day and wraps from row to row in the grid of days.\r\n- Control+Page Up - Moves to the same date in the previous year.\r\n- Control+Page Down - Moves to the same date in the next year.\r\n- Home - Moves to the first day of the current month.\r\n- End - Moves to the last day of the current month.\r\n- Page Up - Moves to the same date in the previous month.\r\n- Page Down - Moves to the same date in the next month.\r\n- Enter or Espace - closes the calendar, and the selected date is shown in the associated text box.\r\n- Escape - closes the calendar without any action."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "janvāris",
		        "februāris",
		        "marts",
		        "aprīlis",
		        "maijs",
		        "jūnijs",
		        "jūlijs",
		        "augusts",
		        "septembris",
		        "oktobris",
		        "novembris",
		        "decembris"
		    ],
		    "month_names_abbreviated": [
		        "janv.",
		        "febr.",
		        "marts",
		        "apr.",
		        "maijs",
		        "jūn.",
		        "jūl.",
		        "aug.",
		        "sept.",
		        "okt.",
		        "nov.",
		        "dec."
		    ],
		    "month_names_narrow": [
		        "J",
		        "F",
		        "M",
		        "A",
		        "M",
		        "J",
		        "J",
		        "A",
		        "S",
		        "O",
		        "N",
		        "D"
		    ],
		    "day_names": [
		        "svētdiena",
		        "pirmdiena",
		        "otrdiena",
		        "trešdiena",
		        "ceturtdiena",
		        "piektdiena",
		        "sestdiena"
		    ],
		    "day_names_abbreviated": [
		        "Sv",
		        "Pr",
		        "Ot",
		        "Tr",
		        "Ce",
		        "Pk",
		        "Se"
		    ],
		    "day_names_short": [
		        "Sv",
		        "Pr",
		        "Ot",
		        "Tr",
		        "Ce",
		        "Pk",
		        "Se"
		    ],
		    "day_names_narrow": [
		        "S",
		        "P",
		        "O",
		        "T",
		        "C",
		        "P",
		        "S"
		    ],
		    "day_periods": {
		        "am": "priekšpusdienā",
		        "noon": "pusdienlaikā",
		        "pm": "pēcpusdienā"
		    },
		    "day_periods_abbreviated": {
		        "am": "priekšpusdienā",
		        "noon": "pusdienlaikā",
		        "pm": "pēcpusdienā"
		    },
		    "day_periods_narrow": {
		        "am": "priekšp.",
		        "noon": "pusd.",
		        "pm": "pēcp."
		    },
		    "quarter_names": [
		        "1. ceturksnis",
		        "2. ceturksnis",
		        "3. ceturksnis",
		        "4. ceturksnis"
		    ],
		    "quarter_names_abbreviated": [
		        "1. cet.",
		        "2. cet.",
		        "3. cet.",
		        "4. cet."
		    ],
		    "quarter_names_narrow": [
		        "1.",
		        "2.",
		        "3.",
		        "4."
		    ],
		    "era_names": [
		        "pirms mūsu ēras",
		        "mūsu ērā"
		    ],
		    "era_names_abbreviated": [
		        "p.m.ē.",
		        "m.ē."
		    ],
		    "era_names_narrow": [
		        "p.m.ē.",
		        "m.ē."
		    ],
		    "full_format": "EEEE, y. 'gada' d. MMMM",
		    "long_format": "y. 'gada' d. MMMM",
		    "medium_format": "y. 'gada' d. MMM",
		    "short_format": "dd.MM.yy",
		    "firstday_of_week": 1
		};
	}
})();