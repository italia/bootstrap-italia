(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "תאריך בחר ...",
		        "buttonLabel": "לחץ או הקש על מקש Enter או על מקש הרווח כדי לפתוח את לוח השנה",
		        "prevButtonLabel": "עבור לחודש הקודם",
		        "nextButtonLabel": "עבור לחודש הבא",
		        "closeButtonTitle": "לסגור",
		        "closeButtonLabel": "סגור את לוח השנה",
		        "prevMonthButtonLabel": "עבור לשנה הקודמת",
		        "prevYearButtonLabel": "עבור לעשרים השנה הקודמת",
		        "nextMonthButtonLabel": "עבור לשנה הבאה",
		        "nextYearButtonLabel": "עבור לעשרים השנים הבאות",
		        "changeMonthButtonLabel": "לחץ או הקש על מקש Enter או על מקש הרווח כדי לשנות את החודש",
		        "changeYearButtonLabel": "לחץ או הקש על מקש Enter או על מקש הרווח כדי לשנות את השנה",
		        "changeRangeButtonLabel": "לחץ או הקש על מקש Enter או על מקש הרווח כדי ללכת לעשרים השנים הבאות",
		        "calendarHelp": "- חץ למעלה וחץ למטה - הולכים לאותו יום בשבוע בשבוע הבא או הקודם, בהתאמה. אם הגיע לסוף החודש, ממשיך לחודש הבא או קודם כמתאים.\r\n- חץ שמאלה וחץ ימינה - מקדם יום אחד למשנהו, גם ברצף. מוקד חזותי מועבר מיום ליום ועוטף משורה לחתור ברשת של ימים.\r\n- Control + Page Up - עובר לאותו מועד בשנה הקודמת.\r\n- Control + Page Down - עובר לאותו מועד בשנה הבאה.\r\n- דף הבית - עובר ליום הראשון של החודש הנוכחי.\r\n- הסוף - עובר ליום האחרון של החודש הנוכחי.\r\n- Page Up - עובר לאותו המועד בחודש הקודם.\r\n- Page Down - עובר לאותו המועד בחודש הבא.\r\n- הזן או Espace - סוגר את לוח השנה, והתאריך שנבחר מוצג בתיבת הטקסט הנלווית.\r\n- בריחה - סוגרת את לוח השנה ללא כל פעולה."
		    },
		    "directionality": "RTL",
		    "month_names": [
		        "ינואר",
		        "פברואר",
		        "מרץ",
		        "אפריל",
		        "מאי",
		        "יוני",
		        "יולי",
		        "אוגוסט",
		        "ספטמבר",
		        "אוקטובר",
		        "נובמבר",
		        "דצמבר"
		    ],
		    "month_names_abbreviated": [
		        "ינו׳",
		        "פבר׳",
		        "מרץ",
		        "אפר׳",
		        "מאי",
		        "יוני",
		        "יולי",
		        "אוג׳",
		        "ספט׳",
		        "אוק׳",
		        "נוב׳",
		        "דצמ׳"
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
		        "יום ראשון",
		        "יום שני",
		        "יום שלישי",
		        "יום רביעי",
		        "יום חמישי",
		        "יום שישי",
		        "יום שבת"
		    ],
		    "day_names_abbreviated": [
		        "יום א׳",
		        "יום ב׳",
		        "יום ג׳",
		        "יום ד׳",
		        "יום ה׳",
		        "יום ו׳",
		        "שבת"
		    ],
		    "day_names_short": [
		        "א׳",
		        "ב׳",
		        "ג׳",
		        "ד׳",
		        "ה׳",
		        "ו׳",
		        "ש׳"
		    ],
		    "day_names_narrow": [
		        "א׳",
		        "ב׳",
		        "ג׳",
		        "ד׳",
		        "ה׳",
		        "ו׳",
		        "ש׳"
		    ],
		    "day_periods": {
		        "am": "לפנה״צ",
		        "noon": "בצהריים",
		        "pm": "אחה״צ"
		    },
		    "day_periods_abbreviated": {
		        "am": "לפנה״צ",
		        "noon": "בצהריים",
		        "pm": "אחה״צ"
		    },
		    "day_periods_narrow": {
		        "am": "לפנה״צ",
		        "noon": "בצהריים",
		        "pm": "אחה״צ"
		    },
		    "quarter_names": [
		        "רבעון 1",
		        "רבעון 2",
		        "רבעון 3",
		        "רבעון 4"
		    ],
		    "quarter_names_abbreviated": [
		        "רבעון 1",
		        "רבעון 2",
		        "רבעון 3",
		        "רבעון 4"
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "לפני הספירה",
		        "לספירה"
		    ],
		    "era_names_abbreviated": [
		        "לפנה״ס",
		        "לספירה"
		    ],
		    "era_names_narrow": [
		        "לפנה״ס",
		        "לספירה"
		    ],
		    "full_format": "EEEE, d בMMMM y",
		    "long_format": "d בMMMM y",
		    "medium_format": "d בMMM y",
		    "short_format": "d.M.y",
		    "firstday_of_week": 0
		};
	}
})();