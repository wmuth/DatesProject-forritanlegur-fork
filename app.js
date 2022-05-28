function writeDayFunction(lang)
{
	//Get current date
	let now = new Date();
	let currentDate = now.getDate();
	let currentYear = now.getFullYear();
	let currentDay = lang.days[now.getDay()];
	let currentMonth = lang.months[now.getMonth()];
	
	//Print to screen
	document.getElementById("languages").innerHTML += `${lang.lang}/`;
	if(lang.lang === "Dǫnsk tunga")
	{
		document.getElementById("output").innerHTML += `<br /><br />${lang.output[0]} ${currentDay} ${lang.output[1]} ${currentDate}, ${lang.output[2]} ${currentYear}. ${lang.output[3]} ${currentMonth} ${lang.output[4]}`;
	}
	else
	{
		document.getElementById("output").innerHTML += `<br /><br />${lang.output[0]} ${currentDay} ${lang.output[1]} ${currentDate} ${lang.output[2]} ${currentMonth} ${lang.output[3]} ${currentYear} ${lang.output[4]}`;
	}
}

function languageObj(days, months, output, lang)
{
	this.days = days;
	this.months = months;
	this.output = output;
	this.lang = lang;
	languageObj.allInstances.push(this);
}

//Keep track of all instances
languageObj.allInstances = [];

//----  SME  ----
let daysArray = ["sotnabeaivi", "mánnodat", "disdat", "gaskavahkku", "duorastat", "bearjadat", "lávvordat"];
let monthsArray = [ "ođđajagemánnu", "guovvamánnu", "njukčamánnu", "cuoŋománnu", "miessemánnu", "geassemánnu", "suoidnemánnu", "borgemánnu", "čakčamánnu", "golggotmánnu", "skábmamánnu", "juovlamánnu" ];
let outputArray = ["Bures! Odne lea" , "", "", "", "!"];
sme = new languageObj(daysArray, monthsArray, outputArray, "Davvisámegiella");

//----  ON  ----
daysArray = ["sunnudagr", "mánadagr", "tísdagr", "óðinsdagr", "þórsdagr", "frjádagr", "laugardagr"];
monthsArray = ["miðjum vetr", "vetr", "vár", "miðvár", "vár", "sumar", "miðsumar", "sumar", "haust", "miðhaust", "vetr", "jól"];
outputArray = ["Hei! Þat er " , "hin", "árit", "Árstíðin er", "!"];
on = new languageObj(daysArray, monthsArray, outputArray, "Dǫnsk tunga");

//----  SV  ----
daysArray = ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"];
monthsArray = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];
outputArray = ["Hej! Det är" , "den", "", "", "!"];
sv = new languageObj(daysArray, monthsArray, outputArray, "Svenska");

//----  DE  -----
daysArray = ["sonntag", "montag", "dienstag", "mittwoch", "donnestag", "freitag", "samstag"];
monthsArray = ["januar", "februar", "märz", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "dezember"];
outputArray = ["Hallo! Heute ist" , "", "", "", "!"];
de = new languageObj(daysArray, monthsArray, outputArray, "Deutsch");

//----  FR  -----
daysArray = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
monthsArray = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "décembre"];
outputArray = ["Bonjour! Aujourd'hui, c'est" , "", "", "", "!"];
fr = new languageObj(daysArray, monthsArray, outputArray, "Français");

//---- Print it all ----
languageObj.allInstances.forEach(writeDayFunction);