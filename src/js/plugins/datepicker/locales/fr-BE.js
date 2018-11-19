(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Sélectionner une date ...",
		        "buttonLabel": "Cliquez ou appuyez sur la touche Entrée ou la barre d'espace pour ouvrir le calendrier",
		        "prevButtonLabel": "Aller au mois précédent",
		        "nextButtonLabel": "Aller au mois suivant",
		        "closeButtonTitle": "Fermer",
		        "closeButtonLabel": "Fermez le calendrier",
		        "prevMonthButtonLabel": "Aller à l'année précédente",
		        "prevYearButtonLabel": "Aller aux vingt années précédentes",
		        "nextMonthButtonLabel": "Aller à l'année suivante",
		        "nextYearButtonLabel": "Allez aux vingt années suivantes",
		        "changeMonthButtonLabel": "Cliquez ou appuyez sur la touche Entrée ou la barre d'espace pour changer le mois",
		        "changeYearButtonLabel": "Cliquez ou appuyez sur la touche Entrée ou la barre d'espace pour changer l'année",
		        "changeRangeButtonLabel": "Cliquez ou appuyez sur la touche ou sur la barre Entrée pour afficher les vingt années suivantes",
		        "calendarHelp": "- Flèche haut et Flèche vers le bas - va au même jour de la semaine à la semaine précédente ou suivante respectivement. Si la fin du mois est atteinte, continue dans le mois suivant ou précédent, le cas échéant.\r\n- Flèche Gauche et Droite - avance d'une journée à l'autre, également dans un continuum. Visuellement accent est déplacé au jour le jour et enroule de rangée en rangée dans la grille des jours.\r\n- Ctrl + Page Haut - Passe à la même date l'année précédente.\r\n- Ctrl + Page Down - Passe à la même date l'année suivante.\r\n- Home - Passe au premier jour du mois en cours.\r\n- End - Passe au dernier jour du mois en cours.\r\n- Page Up - Passe au même jour du mois précédent.\r\n- Page Down - Passe à la même date dans le mois prochain.\r\n- Entrée ou Espace - ferme le calendrier et la date sélectionnée apparaît dans la zone de texte associée.\r\n- Escape - ferme le calendrier sans aucune action."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "janvier",
		        "février",
		        "mars",
		        "avril",
		        "mai",
		        "juin",
		        "juillet",
		        "août",
		        "septembre",
		        "octobre",
		        "novembre",
		        "décembre"
		    ],
		    "month_names_abbreviated": [
		        "janv.",
		        "févr.",
		        "mars",
		        "avr.",
		        "mai",
		        "juin",
		        "juil.",
		        "août",
		        "sept.",
		        "oct.",
		        "nov.",
		        "déc."
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
		        "dimanche",
		        "lundi",
		        "mardi",
		        "mercredi",
		        "jeudi",
		        "vendredi",
		        "samedi"
		    ],
		    "day_names_abbreviated": [
		        "dim.",
		        "lun.",
		        "mar.",
		        "mer.",
		        "jeu.",
		        "ven.",
		        "sam."
		    ],
		    "day_names_short": [
		        "di",
		        "lu",
		        "ma",
		        "me",
		        "je",
		        "ve",
		        "sa"
		    ],
		    "day_names_narrow": [
		        "D",
		        "L",
		        "M",
		        "M",
		        "J",
		        "V",
		        "S"
		    ],
		    "day_periods": {
		        "afternoon": "après-midi",
		        "am": "AM",
		        "morning": "matin",
		        "night": "soir",
		        "noon": "midi",
		        "pm": "PM"
		    },
		    "day_periods_abbreviated": {
		        "afternoon": "après-midi",
		        "am": "AM",
		        "morning": "matin",
		        "night": "soir",
		        "noon": "midi",
		        "pm": "PM"
		    },
		    "day_periods_narrow": {
		        "am": "a",
		        "morning": "matin",
		        "night": "soir",
		        "noon": "midi",
		        "pm": "p"
		    },
		    "quarter_names": [
		        "1er trimestre",
		        "2e trimestre",
		        "3e trimestre",
		        "4e trimestre"
		    ],
		    "quarter_names_abbreviated": [
		        "T1",
		        "T2",
		        "T3",
		        "T4"
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "avant Jésus-Christ",
		        "après Jésus-Christ"
		    ],
		    "era_names_abbreviated": [
		        "av. J.-C.",
		        "ap. J.-C."
		    ],
		    "era_names_narrow": [
		        "av. J.-C.",
		        "ap. J.-C."
		    ],
		    "full_format": "EEEE d MMMM y",
		    "long_format": "d MMMM y",
		    "medium_format": "d MMM y",
		    "short_format": "d/MM/yy",
		    "firstday_of_week": 1
		};
	}
})();