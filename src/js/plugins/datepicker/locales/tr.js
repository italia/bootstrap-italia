(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Seçiniz tarih ...",
		        "buttonLabel": "Click or Enter tuşuna basın veya boşluk takvimi açmak için",
		        "prevButtonLabel": "Bir önceki aya git",
		        "nextButtonLabel": "Sonraki aya git",
		        "closeButtonTitle": "Kapat",
		        "closeButtonLabel": "Takvim kapatın",
		        "prevMonthButtonLabel": "Bir önceki yıla git",
		        "prevYearButtonLabel": "Önceki yirmi yıl git",
		        "nextMonthButtonLabel": "Önümüzdeki yıl git",
		        "nextYearButtonLabel": "Gelecek yirmi yıl git",
		        "changeMonthButtonLabel": "Click or Enter tuşuna basın veya boşluk ay değiştirmek için",
		        "changeYearButtonLabel": "Click or Enter tuşuna basın veya boşluk yılı değiştirmek için",
		        "changeRangeButtonLabel": "Tıklayın veya sonraki yirmi yıl gitmek için anahtar veya boşluk Enter tuşuna basın",
		        "calendarHelp": "- Yukarı Ok ve Aşağı Ok - sırasıyla önceki veya sonraki hafta haftanın aynı gününe gider. Ayın sonuna gelindiğinde ise, uygun şekilde bir sonraki veya bir önceki aya devam eder.\r\n- Sol ve Sağ Ok - aynı zamanda bir süreklilik içinde, sonraki bir gün ilerler. Görme odak günden güne taşındı ve günlerin ızgara satırdan satıra sarar edilir.\r\n- Ctrl + Page Up - bir önceki yılın aynı tarihte gider.\r\n- Ctrl + Page Down - Bir sonraki yıl aynı tarihte gider.\r\n- Ev - Geçerli ayın ilk gününe gider.\r\n- Son - Güncel ayın son gününe gider.\r\n- Page Up - önceki aya aynı tarihte gider.\r\n- Page Down - Bir sonraki ay aynı tarihte gider.\r\n- Enter veya Espace - takvim kapanır ve seçilen tarih ilişkili metin kutusuna gösterilir.\r\n- Kaçış - herhangi bir işlem yapmadan takvimi kapatır."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "Ocak",
		        "Şubat",
		        "Mart",
		        "Nisan",
		        "Mayıs",
		        "Haziran",
		        "Temmuz",
		        "Ağustos",
		        "Eylül",
		        "Ekim",
		        "Kasım",
		        "Aralık"
		    ],
		    "month_names_abbreviated": [
		        "Oca",
		        "Şub",
		        "Mar",
		        "Nis",
		        "May",
		        "Haz",
		        "Tem",
		        "Ağu",
		        "Eyl",
		        "Eki",
		        "Kas",
		        "Ara"
		    ],
		    "month_names_narrow": [
		        "O",
		        "Ş",
		        "M",
		        "N",
		        "M",
		        "H",
		        "T",
		        "A",
		        "E",
		        "E",
		        "K",
		        "A"
		    ],
		    "day_names": [
		        "Pazar",
		        "Pazartesi",
		        "Salı",
		        "Çarşamba",
		        "Perşembe",
		        "Cuma",
		        "Cumartesi"
		    ],
		    "day_names_abbreviated": [
		        "Paz",
		        "Pzt",
		        "Sal",
		        "Çar",
		        "Per",
		        "Cum",
		        "Cmt"
		    ],
		    "day_names_short": [
		        "Pa",
		        "Pt",
		        "Sa",
		        "Ça",
		        "Pe",
		        "Cu",
		        "Ct"
		    ],
		    "day_names_narrow": [
		        "P",
		        "P",
		        "S",
		        "Ç",
		        "P",
		        "C",
		        "C"
		    ],
		    "day_periods": {
		        "am": "ÖÖ",
		        "noon": "öğle",
		        "pm": "ÖS"
		    },
		    "day_periods_abbreviated": {
		        "am": "ÖÖ",
		        "noon": "öğle",
		        "pm": "ÖS"
		    },
		    "day_periods_narrow": {
		        "am": "öö",
		        "noon": "ö",
		        "pm": "ös"
		    },
		    "quarter_names": [
		        "1. çeyrek",
		        "2. çeyrek",
		        "3. çeyrek",
		        "4. çeyrek"
		    ],
		    "quarter_names_abbreviated": [
		        "Ç1",
		        "Ç2",
		        "Ç3",
		        "Ç4"
		    ],
		    "quarter_names_narrow": [
		        "1.",
		        "2.",
		        "3.",
		        "4."
		    ],
		    "era_names": [
		        "Milattan Önce",
		        "Milattan Sonra"
		    ],
		    "era_names_abbreviated": [
		        "MÖ",
		        "MS"
		    ],
		    "era_names_narrow": [
		        "MÖ",
		        "MS"
		    ],
		    "full_format": "d MMMM y EEEE",
		    "long_format": "d MMMM y",
		    "medium_format": "d MMM y",
		    "short_format": "d.MM.y",
		    "firstday_of_week": 1
		};
	}
})();