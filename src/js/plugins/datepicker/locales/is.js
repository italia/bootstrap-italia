(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Velja dag ...",
		        "buttonLabel": "Smellur eða ýttu á Enter takkann eða rúm til að opna dagbókina",
		        "prevButtonLabel": "Fara á fyrri mánuði",
		        "nextButtonLabel": "Fara á næsta mánuði",
		        "closeButtonTitle": "Loka",
		        "closeButtonLabel": "Lokaðu dagatalið",
		        "prevMonthButtonLabel": "Fara á undan",
		        "prevYearButtonLabel": "Fara á fyrri tuttugu ár",
		        "nextMonthButtonLabel": "Fara á næsta ári",
		        "nextYearButtonLabel": "Fara á næstu tuttugu árum",
		        "changeMonthButtonLabel": "Smellur eða ýttu á Enter takkann eða rúm til að breyta mánaðarins",
		        "changeYearButtonLabel": "Smellur eða ýttu á Enter takkann eða rúm til að breyta á árinu",
		        "changeRangeButtonLabel": "Smellur eða ýttu á Enter takkann eða rúm til að fara á næstu tuttugu árum",
		        "calendarHelp": "- Up Arrow og Down Arrow - fer í sama vikudag í fyrri eða næstu viku sig. Ef lok mánaðarins er náð, heldur áfram inn í næsta eða fyrri mánuði sem við á.\r\n- Left Arrow og Right Arrow - framfarir einn daginn í næsta, einnig í samfellu. Sjónrænt áhersla er flutt frá degi til dags og hula úr einni röð til annarrar í rist daga.\r\n- Control + Page Up - Fer á sama degi í fyrra.\r\n- Control + Page Down - Fer á sama degi á næsta ári.\r\n- Heim - Fer fyrsta degi yfirstandandi mánuð.\r\n- End - Fer síðasta degi yfirstandandi mánuð.\r\n- Page Up - Fer frá sama tímabili í fyrra mánuði.\r\n- Page Down - Fer frá sama tímabili í næsta mánuði.\r\n- Sláðu inn eða Espace - lokar dagbók, og valið dagsetningin birtist í tengslum textareitinn.\r\n- Escape - lokar dagbók án aðgerða."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "janúar",
		        "febrúar",
		        "mars",
		        "apríl",
		        "maí",
		        "júní",
		        "júlí",
		        "ágúst",
		        "september",
		        "október",
		        "nóvember",
		        "desember"
		    ],
		    "month_names_abbreviated": [
		        "jan.",
		        "feb.",
		        "mar.",
		        "apr.",
		        "maí",
		        "jún.",
		        "júl.",
		        "ágú.",
		        "sep.",
		        "okt.",
		        "nóv.",
		        "des."
		    ],
		    "month_names_narrow": [
		        "J",
		        "F",
		        "M",
		        "A",
		        "M",
		        "J",
		        "J",
		        "Á",
		        "S",
		        "O",
		        "N",
		        "D"
		    ],
		    "day_names": [
		        "sunnudagur",
		        "mánudagur",
		        "þriðjudagur",
		        "miðvikudagur",
		        "fimmtudagur",
		        "föstudagur",
		        "laugardagur"
		    ],
		    "day_names_abbreviated": [
		        "sun.",
		        "mán.",
		        "þri.",
		        "mið.",
		        "fim.",
		        "fös.",
		        "lau."
		    ],
		    "day_names_short": [
		        "su.",
		        "má.",
		        "þr.",
		        "mi.",
		        "fi.",
		        "fö.",
		        "la."
		    ],
		    "day_names_narrow": [
		        "S",
		        "M",
		        "Þ",
		        "M",
		        "F",
		        "F",
		        "L"
		    ],
		    "day_periods": {
		        "am": "f.h.",
		        "noon": "hádegi",
		        "pm": "e.h."
		    },
		    "day_periods_abbreviated": {
		        "am": "f.h.",
		        "noon": "hádegi",
		        "pm": "e.h."
		    },
		    "day_periods_narrow": {
		        "am": "f.",
		        "noon": "h.",
		        "pm": "e."
		    },
		    "quarter_names": [
		        "1. fjórðungur",
		        "2. fjórðungur",
		        "3. fjórðungur",
		        "4. fjórðungur"
		    ],
		    "quarter_names_abbreviated": [
		        "F1",
		        "F2",
		        "F3",
		        "F4"
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "fyrir Krist",
		        "eftir Krist"
		    ],
		    "era_names_abbreviated": [
		        "f.Kr.",
		        "e.Kr."
		    ],
		    "era_names_narrow": [
		        "f.k.",
		        "e.k."
		    ],
		    "full_format": "EEEE, d. MMMM y",
		    "long_format": "d. MMMM y",
		    "medium_format": "d. MMM y",
		    "short_format": "d.M.y",
		    "firstday_of_week": 1
		};
	}
})();