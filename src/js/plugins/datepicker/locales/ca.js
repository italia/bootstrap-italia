(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Seleccioneu la data ...",
		        "buttonLabel": "Feu clic o premeu la tecla Retorn o la barra d'espai per obrir el calendari",
		        "prevButtonLabel": "Anar al mes anterior",
		        "nextButtonLabel": "Anar al següent mes",
		        "closeButtonTitle": "A prop",
		        "closeButtonLabel": "Tanqueu el calendari",
		        "prevMonthButtonLabel": "Anar a l'any anterior",
		        "prevYearButtonLabel": "Anar als vint anys anteriors",
		        "nextMonthButtonLabel": "Anar al següent any",
		        "nextYearButtonLabel": "Vés als propers vint anys",
		        "changeMonthButtonLabel": "Feu clic o premeu la tecla Retorn o la barra d'espai per canviar el mes",
		        "changeYearButtonLabel": "Feu clic o premeu la tecla Retorn o la barra d'espai per canviar l'any",
		        "changeRangeButtonLabel": "Feu clic o premeu la tecla Retorn o la barra d'espai per anar als propers vint anys",
		        "calendarHelp": "- Fletxa Amunt i avall - va per al mateix dia de la setmana en la setmana anterior o següent, respectivament. Si s'arriba al final del mes, continua al mes següent o anterior, segons correspongui.\r\n- Fletxa esquerra i Fletxa dreta - avança un dia al següent, també en un continu. Enfocament Visualment es mou dia a dia i s'embolica de fila en fila a la graella de dies.\r\n- Control + Re Pàg - Es mou a la mateixa data de l'any anterior.\r\n- Control + Page Down - Es mou a la mateixa data en el pròxim any.\r\n- Inici - Es desplaça al primer dia del mes en curs.\r\n- End - Es desplaça a l'últim dia del mes en curs.\r\n- Page Up - Es mou a la mateixa data en el mes anterior.\r\n- Page Down - Es mou a la mateixa data en el pròxim mes.\r\n- Introduir o Espace - tanca el calendari i la data seleccionada es mostra en el quadre de text associat.\r\n- Escape - tanca el calendari sense cap acció."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "de gener",
		        "de febrer",
		        "de març",
		        "d’abril",
		        "de maig",
		        "de juny",
		        "de juliol",
		        "d’agost",
		        "de setembre",
		        "d’octubre",
		        "de novembre",
		        "de desembre"
		    ],
		    "month_names_abbreviated": [
		        "gen.",
		        "febr.",
		        "març",
		        "abr.",
		        "maig",
		        "juny",
		        "jul.",
		        "ag.",
		        "set.",
		        "oct.",
		        "nov.",
		        "des."
		    ],
		    "month_names_narrow": [
		        "GN",
		        "FB",
		        "MÇ",
		        "AB",
		        "MG",
		        "JN",
		        "JL",
		        "AG",
		        "ST",
		        "OC",
		        "NV",
		        "DS"
		    ],
		    "day_names": [
		        "diumenge",
		        "dilluns",
		        "dimarts",
		        "dimecres",
		        "dijous",
		        "divendres",
		        "dissabte"
		    ],
		    "day_names_abbreviated": [
		        "dg.",
		        "dl.",
		        "dt.",
		        "dc.",
		        "dj.",
		        "dv.",
		        "ds."
		    ],
		    "day_names_short": [
		        "dg.",
		        "dl.",
		        "dt.",
		        "dc.",
		        "dj.",
		        "dv.",
		        "ds."
		    ],
		    "day_names_narrow": [
		        "dg",
		        "dl",
		        "dt",
		        "dc",
		        "dj",
		        "dv",
		        "ds"
		    ],
		    "day_periods": {
		        "am": "a. m.",
		        "noon": "migdia",
		        "pm": "p. m."
		    },
		    "day_periods_abbreviated": {
		        "am": "a. m.",
		        "noon": "migdia",
		        "pm": "p. m."
		    },
		    "day_periods_narrow": {
		        "am": "a.m.",
		        "noon": "md",
		        "pm": "p.m."
		    },
		    "quarter_names": [
		        "1r trimestre",
		        "2n trimestre",
		        "3r trimestre",
		        "4t trimestre"
		    ],
		    "quarter_names_abbreviated": [
		        "1T",
		        "2T",
		        "3T",
		        "4T"
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "abans de Crist",
		        "després de Crist"
		    ],
		    "era_names_abbreviated": [
		        "aC",
		        "dC"
		    ],
		    "era_names_narrow": [
		        "aC",
		        "dC"
		    ],
		    "full_format": "EEEE, d MMMM 'de' y",
		    "long_format": "d MMMM 'de' y",
		    "medium_format": "d MMM y",
		    "short_format": "d/M/yy",
		    "firstday_of_week": 0
		};
	}
})();