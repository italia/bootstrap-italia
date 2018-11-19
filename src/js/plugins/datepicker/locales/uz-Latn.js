(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Tanlang sana ...",
		        "buttonLabel": "Bosing yoki Enter tugmasini bosing, yoki bo'sh satriga taqvim ochish uchun",
		        "prevButtonLabel": "Avvalgi oyga borib",
		        "nextButtonLabel": "Keyingi oyga borib",
		        "closeButtonTitle": "Yaqin",
		        "closeButtonLabel": "Taqvim yoping",
		        "prevMonthButtonLabel": "O'tgan yilga borib",
		        "prevYearButtonLabel": "Oldingi yigirma yilgacha borib",
		        "nextMonthButtonLabel": "Keyingi yilga borib",
		        "nextYearButtonLabel": "Keyingi yigirma yil borib,",
		        "changeMonthButtonLabel": "Bosing yoki Enter tugmasini bosing, yoki bo'sh satriga oy o'zgartirish",
		        "changeYearButtonLabel": "Bosing yoki Enter tugmasini bosing, yoki bo'sh satriga yil o'zgartirish uchun",
		        "changeRangeButtonLabel": "Bosing yoki keyingi yigirma yil borish uchun kalit yoki bo'sh joy Enter ni bosing",
		        "calendarHelp": "- Up va pastga o'q - mos ravishda oldingi yoki keyingi haftada haftaning shu kuni ketadi. Oyning oxiri erishilgan bo'lsa, tegishli bo'lib, keyingi yoki oldingi oyning kirib davom etmoqda.\r\n- Chap o'q va o'ng o'q - ham bir uzluksiz, keyingi bir kunni yutuqlar. Ingl markazida kundan-kunga ko'chib va ​​kun panjara satırlarının o'rar qilinadi.\r\n- Control + Page Up - avvalgi yilning shu kunga qadar ketadi.\r\n- Control + Page Down - keyingi yilning shu kunga qadar ketadi.\r\n- Bosh sahifa - joriy oyning birinchi kuni uchun ketadi.\r\n- End - joriy oyning oxirgi kuniga qadar ketadi.\r\n- Page Up - avvalgi oyda bir xil sana ketadi.\r\n- Page Down - keyingi oyda bir xil sana ketadi.\r\n- Kiriting yoki Espace - kalendar yopiladi, va tanlangan sana bog'liq matn maydoniga ko'rsatilgan.\r\n- Escape - har qanday harakat qilmasdan taqvim yumadi."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "Yanvar",
		        "Fevral",
		        "Mart",
		        "Aprel",
		        "May",
		        "Iyun",
		        "Iyul",
		        "Avgust",
		        "Sentabr",
		        "Oktabr",
		        "Noyabr",
		        "Dekabr"
		    ],
		    "month_names_abbreviated": [
		        "Yanv",
		        "Fev",
		        "Mar",
		        "Apr",
		        "May",
		        "Iyun",
		        "Iyul",
		        "Avg",
		        "Sen",
		        "Okt",
		        "Noya",
		        "Dek"
		    ],
		    "month_names_narrow": [
		        "Y",
		        "F",
		        "M",
		        "A",
		        "M",
		        "I",
		        "I",
		        "A",
		        "S",
		        "O",
		        "N",
		        "D"
		    ],
		    "day_names": [
		        "yakshanba",
		        "dushanba",
		        "seshanba",
		        "chorshanba",
		        "payshanba",
		        "juma",
		        "shanba"
		    ],
		    "day_names_abbreviated": [
		        "Yaksh",
		        "Dush",
		        "Sesh",
		        "Chor",
		        "Pay",
		        "Jum",
		        "Shan"
		    ],
		    "day_names_short": [
		        "Yaksh",
		        "Dush",
		        "Sesh",
		        "Chor",
		        "Pay",
		        "Jum",
		        "Shan"
		    ],
		    "day_names_narrow": [
		        "Y",
		        "D",
		        "S",
		        "C",
		        "P",
		        "J",
		        "S"
		    ],
		    "day_periods": {
		        "am": "TO",
		        "noon": "tush payti",
		        "pm": "TK"
		    },
		    "day_periods_abbreviated": {
		        "am": "TO",
		        "noon": "tush payti",
		        "pm": "TK"
		    },
		    "day_periods_narrow": {
		        "am": "o",
		        "noon": "t.p.",
		        "pm": "k"
		    },
		    "quarter_names": [
		        "1-chorak",
		        "2-chorak",
		        "3-chorak",
		        "4-chorak"
		    ],
		    "quarter_names_abbreviated": [
		        "1-ch",
		        "2-ch",
		        "3-ch",
		        "4-ch"
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "M.A.",
		        "E"
		    ],
		    "era_names_abbreviated": [
		        "M.A.",
		        "E"
		    ],
		    "era_names_narrow": [
		        "M.A.",
		        "E"
		    ],
		    "full_format": "EEEE, y MMMM dd",
		    "long_format": "y MMMM d",
		    "medium_format": "y MMM d",
		    "short_format": "yy/MM/dd",
		    "firstday_of_week": 1
		};
	}
})();