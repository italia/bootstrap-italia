(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Pumili ng petsa ...",
		        "buttonLabel": "I-click o pindutin ang Enter key o ang spacebar upang buksan ang kalendaryo",
		        "prevButtonLabel": "Pumunta sa nakaraang buwan",
		        "nextButtonLabel": "Pumunta sa susunod na buwan",
		        "closeButtonTitle": "Malapit",
		        "closeButtonLabel": "Isara ang calendar",
		        "prevMonthButtonLabel": "Pumunta sa nakaraang taon",
		        "prevYearButtonLabel": "Pumunta sa nakaraang dalawampung taon",
		        "nextMonthButtonLabel": "Pumunta sa susunod na taon",
		        "nextYearButtonLabel": "Pumunta sa susunod na dalawampung taon",
		        "changeMonthButtonLabel": "I-click o pindutin ang Enter key o ang spacebar upang baguhin ang buwan",
		        "changeYearButtonLabel": "I-click o pindutin ang Enter key o ang spacebar upang baguhin ang taon",
		        "changeRangeButtonLabel": "I-click o pindutin ang Enter key o ang spacebar upang pumunta sa susunod na dalawampung taon",
		        "calendarHelp": "- Pataas na Arrow at Down Arrow - napupunta sa parehong araw ng linggo sa nakaraang o sa susunod na linggo ayon sa pagkakabanggit. Kung ang katapusan ng buwan ay naabot, magpapatuloy sa susunod o nakaraang buwan ayon sa naaangkop.\r\n- Kaliwang Arrow at Kanang Arrow - paglago ng isang araw hanggang sa susunod, pati na rin sa isang continuum. Biswal na pokus ay inilipat sa araw-araw at bumabalot sa bawat hanay sa grid ng mga araw.\r\n- Control Page Up + - Inililipat sa parehong petsa sa nakaraang taon.\r\n- Control + Page Down - Mga Paggalaw sa parehong petsa sa susunod na taon.\r\n- Home - Mga Paggalaw sa unang araw ng kasalukuyang buwan.\r\n- End - Inililipat hanggang sa huling araw ng kasalukuyang buwan.\r\n- Page Up - Mga Paggalaw sa parehong petsa sa nakaraang buwan.\r\n- Page Down - Mga Paggalaw sa parehong petsa sa susunod na buwan.\r\n- Ipasok o Espace - nagsasara ang calendar, at ang mga napiling petsa ay ipinapakita sa mga kaugnay text box.\r\n- Escape - nagsasara ang kalendaryo nang walang anumang aksyon."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "Enero",
		        "Pebrero",
		        "Marso",
		        "Abril",
		        "Mayo",
		        "Hunyo",
		        "Hulyo",
		        "Agosto",
		        "Setyembre",
		        "Oktubre",
		        "Nobyembre",
		        "Disyembre"
		    ],
		    "month_names_abbreviated": [
		        "Ene",
		        "Peb",
		        "Mar",
		        "Abr",
		        "May",
		        "Hun",
		        "Hul",
		        "Ago",
		        "Set",
		        "Okt",
		        "Nob",
		        "Dis"
		    ],
		    "month_names_narrow": [
		        "E",
		        "P",
		        "M",
		        "A",
		        "M",
		        "H",
		        "H",
		        "A",
		        "S",
		        "O",
		        "N",
		        "D"
		    ],
		    "day_names": [
		        "Linggo",
		        "Lunes",
		        "Martes",
		        "Miyerkules",
		        "Huwebes",
		        "Biyernes",
		        "Sabado"
		    ],
		    "day_names_abbreviated": [
		        "Lin",
		        "Lun",
		        "Mar",
		        "Miy",
		        "Huw",
		        "Biy",
		        "Sab"
		    ],
		    "day_names_short": [
		        "Li",
		        "Lu",
		        "Ma",
		        "Mi",
		        "Hu",
		        "Bi",
		        "Sa"
		    ],
		    "day_names_narrow": [
		        "L",
		        "L",
		        "M",
		        "M",
		        "H",
		        "B",
		        "S"
		    ],
		    "day_periods": {
		        "am": "AM",
		        "noon": "tanghali",
		        "pm": "PM"
		    },
		    "day_periods_abbreviated": {
		        "am": "AM",
		        "noon": "tanghali",
		        "pm": "PM"
		    },
		    "day_periods_narrow": {
		        "am": "a",
		        "noon": "tanghali",
		        "pm": "p"
		    },
		    "quarter_names": [
		        "ika-1 quarter",
		        "ika-2 quarter",
		        "ika-3 quarter",
		        "ika-4 na quarter"
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
		        "BC",
		        "AD"
		    ],
		    "era_names_abbreviated": [
		        "BC",
		        "AD"
		    ],
		    "era_names_narrow": [
		        "BC",
		        "AD"
		    ],
		    "full_format": "EEEE, MMMM d, y",
		    "long_format": "MMMM d, y",
		    "medium_format": "MMM d, y",
		    "short_format": "M/d/yy",
		    "firstday_of_week": 0
		};
	}
})();