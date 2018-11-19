(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Wybierz datę ...",
		        "buttonLabel": "Kliknij lub naciśnij klawisz Enter lub klawisz spacji, aby otworzyć kalendarz",
		        "prevButtonLabel": "Idź do poprzedniego miesiąca",
		        "nextButtonLabel": "Przejdź do następnego miesiąca",
		        "closeButtonTitle": "Blisko",
		        "closeButtonLabel": "Zamknij kalendarz",
		        "prevMonthButtonLabel": "Przejdź do poprzedniego roku",
		        "prevYearButtonLabel": "Idź do poprzednich dwudziestu lat",
		        "nextMonthButtonLabel": "Przejdź do następnego roku",
		        "nextYearButtonLabel": "Przejdź na następne dwadzieścia lat",
		        "changeMonthButtonLabel": "Kliknij lub naciśnij klawisz Enter lub klawisz spacji, aby zmienić miesiąc",
		        "changeYearButtonLabel": "Kliknij lub naciśnij klawisz Enter lub klawisz spacji, aby zmienić rok",
		        "changeRangeButtonLabel": "Kliknij lub naciśnij klawisz lub klawisz spacji, Enter, aby przejść do następnych dwudziestu lat",
		        "calendarHelp": "- Strzałka w górę i Strzałka w dół - idzie do tego samego dnia tygodnia w poprzednim lub następnym tygodniu odpowiednio. Jeśli dojdzie do końca miesiąca, trwa do następnego lub poprzedniego miesiąca odpowiednio.\r\n- Strzałka w lewo i Strzałka w prawo - przesuwa jeden dzień następny, również w kontinuum. Wizualnie nacisk zostanie przeniesiony z dnia na dzień i zawija z rzędu do rzędu w siatce dni.\r\n- Ctrl + Page Up - Przenosi do tego samego dnia w roku poprzednim.\r\n- Control + Page Down - Przejście do tego samego dnia w następnym roku.\r\n- Strona główna - Przechodzi do pierwszego dnia bieżącego miesiąca.\r\n- Koniec - Przechodzi do ostatniego dnia bieżącego miesiąca.\r\n- Page Up - Przenosi do tego samego dnia w poprzednim miesiącu.\r\n- Page Down - Przejście do tego samego dnia w następnym miesiącu.\r\n- Wprowadź lub Espace - zamyka kalendarz, a wybrana data jest wyświetlany w polu tekstowym powiązanym.\r\n- Ucieczka - zamyka kalendarz bez jakiegokolwiek działania."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "stycznia",
		        "lutego",
		        "marca",
		        "kwietnia",
		        "maja",
		        "czerwca",
		        "lipca",
		        "sierpnia",
		        "września",
		        "października",
		        "listopada",
		        "grudnia"
		    ],
		    "month_names_abbreviated": [
		        "sty",
		        "lut",
		        "mar",
		        "kwi",
		        "maj",
		        "cze",
		        "lip",
		        "sie",
		        "wrz",
		        "paź",
		        "lis",
		        "gru"
		    ],
		    "month_names_narrow": [
		        "s",
		        "l",
		        "m",
		        "k",
		        "m",
		        "c",
		        "l",
		        "s",
		        "w",
		        "p",
		        "l",
		        "g"
		    ],
		    "day_names": [
		        "niedziela",
		        "poniedziałek",
		        "wtorek",
		        "środa",
		        "czwartek",
		        "piątek",
		        "sobota"
		    ],
		    "day_names_abbreviated": [
		        "niedz.",
		        "pon.",
		        "wt.",
		        "śr.",
		        "czw.",
		        "pt.",
		        "sob."
		    ],
		    "day_names_short": [
		        "niedz.",
		        "pon.",
		        "wt.",
		        "śr.",
		        "czw.",
		        "pt.",
		        "sob."
		    ],
		    "day_names_narrow": [
		        "N",
		        "P",
		        "W",
		        "Ś",
		        "C",
		        "P",
		        "S"
		    ],
		    "day_periods": {
		        "afternoon": "po południu",
		        "am": "AM",
		        "earlyMorning": "nad ranem",
		        "evening": "wieczorem",
		        "lateMorning": "przed południem",
		        "morning": "rano",
		        "night": "w nocy",
		        "noon": "w południe",
		        "pm": "PM"
		    },
		    "day_periods_abbreviated": {
		        "afternoon": "po południu",
		        "am": "AM",
		        "earlyMorning": "nad ranem",
		        "evening": "wieczorem",
		        "lateMorning": "przed południem",
		        "morning": "rano",
		        "night": "w nocy",
		        "noon": "w południe",
		        "pm": "PM"
		    },
		    "day_periods_narrow": {
		        "am": "a",
		        "noon": "n",
		        "pm": "p"
		    },
		    "quarter_names": [
		        "I kwartał",
		        "II kwartał",
		        "III kwartał",
		        "IV kwartał"
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
		        "p.n.e.",
		        "n.e."
		    ],
		    "era_names_abbreviated": [
		        "p.n.e.",
		        "n.e."
		    ],
		    "era_names_narrow": [
		        "p.n.e.",
		        "n.e."
		    ],
		    "full_format": "EEEE, d MMMM y",
		    "long_format": "d MMMM y",
		    "medium_format": "dd.MM.y",
		    "short_format": "dd.MM.y",
		    "firstday_of_week": 1
		};
	}
})();