(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Teule tarehe ...",
		        "buttonLabel": "Click au vyombo vya habari Enter muhimu au spacebar kufungua kalenda",
		        "prevButtonLabel": "Kwenda na mwezi uliopita",
		        "nextButtonLabel": "Kwenda mwezi ujao",
		        "closeButtonTitle": "Karibu",
		        "closeButtonLabel": "Karibu kalenda",
		        "prevMonthButtonLabel": "Kwenda mwaka uliopita",
		        "prevYearButtonLabel": "Kwenda miaka ya nyuma ishirini",
		        "nextMonthButtonLabel": "Kwenda mwaka ujao",
		        "nextYearButtonLabel": "Kwenda miaka ishirini ijayo",
		        "changeMonthButtonLabel": "Click au vyombo vya habari Enter muhimu au spacebar kubadili mwezi",
		        "changeYearButtonLabel": "Click au vyombo vya habari Enter muhimu au spacebar kubadili mwaka",
		        "changeRangeButtonLabel": "Click au vyombo vya habari Enter muhimu au spacebar kwenda miaka ishirini ijayo",
		        "calendarHelp": "- Up Arrow na Mshale Chini - huenda kwa siku hiyo hiyo ya wiki katika wiki uliopita au ujao kwa mtiririko huo. Kama mwisho wa mwezi ni kufikiwa, inaendelea katika mwezi ujao au uliopita kama inafaa.\r\n- Arrow kushoto na kulia Arrow - maendeleo siku moja hadi nyingine, pia katika utoaji. Kuibua lengo ni wakiongozwa kutoka siku hadi siku na Wraps kutoka mstari kwa mstari katika gridi ya siku.\r\n- Kudhibiti + Kwanza Up - Hatua kwa tarehe hiyo mwaka uliopita.\r\n- Kudhibiti + wa Kwanza Down - Hatua kwa tarehe hiyo katika mwaka ujao.\r\n- Home - Hatua kwa siku ya kwanza ya mwezi sasa.\r\n- Mwisho - Hatua kwa siku ya mwisho ya mwezi sasa.\r\n- Kwanza Up - Hatua kwa tarehe hiyo katika mwezi uliopita.\r\n- Kwanza Down - Hatua kwa tarehe hiyo katika mwezi ujao.\r\n- Enter au Espace - kufunga kalenda, na tarehe kuchaguliwa ni inavyoonekana katika sanduku Nakala kuhusishwa.\r\n- Kutoroka - kufunga kalenda bila hatua yoyote."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "mwezi ya kwanja",
		        "mwezi ya pili",
		        "mwezi ya tatu",
		        "mwezi ya ine",
		        "mwezi ya tanu",
		        "mwezi ya sita",
		        "mwezi ya saba",
		        "mwezi ya munane",
		        "mwezi ya tisa",
		        "mwezi ya kumi",
		        "mwezi ya kumi na moya",
		        "mwezi ya kumi ya mbili"
		    ],
		    "month_names_abbreviated": [
		        "mkw",
		        "mpi",
		        "mtu",
		        "min",
		        "mtn",
		        "mst",
		        "msb",
		        "mun",
		        "mts",
		        "mku",
		        "mkm",
		        "mkb"
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
		        "siku ya yenga",
		        "siku ya kwanza",
		        "siku ya pili",
		        "siku ya tatu",
		        "siku ya ine",
		        "siku ya tanu",
		        "siku ya sita"
		    ],
		    "day_names_abbreviated": [
		        "yen",
		        "kwa",
		        "pil",
		        "tat",
		        "ine",
		        "tan",
		        "sit"
		    ],
		    "day_names_short": [
		        "Jumapili",
		        "Jumatatu",
		        "Jumanne",
		        "Jumatano",
		        "Alhamisi",
		        "Ijumaa",
		        "Jumamosi"
		    ],
		    "day_names_narrow": [
		        "S",
		        "M",
		        "T",
		        "W",
		        "T",
		        "F",
		        "S"
		    ],
		    "day_periods": {
		        "am": "ya asubuyi",
		        "noon": "PM",
		        "pm": "ya muchana"
		    },
		    "day_periods_abbreviated": {
		        "am": "ya asubuyi",
		        "noon": "PM",
		        "pm": "ya muchana"
		    },
		    "day_periods_narrow": {
		        "am": "am",
		        "noon": "PM",
		        "pm": "pm"
		    },
		    "quarter_names": [
		        "Robo ya 1",
		        "Robo ya 2",
		        "Robo ya 3",
		        "Robo ya 4"
		    ],
		    "quarter_names_abbreviated": [
		        "R1",
		        "R2",
		        "R3",
		        "R4"
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "Kabla ya Kristo",
		        "Baada ya Kristo"
		    ],
		    "era_names_abbreviated": [
		        "BC",
		        "AD"
		    ],
		    "era_names_narrow": [
		        "BC",
		        "AD"
		    ],
		    "full_format": "EEEE d MMMM y",
		    "long_format": "d MMMM y",
		    "medium_format": "d MMM y",
		    "short_format": "d/M/y",
		    "firstday_of_week": 0
		};
	}
})();