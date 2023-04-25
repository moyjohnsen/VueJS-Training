var dayList = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];

var monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

var array = ['2023-04-19', '2023-04-05', '2023-03-15', '2023-02-08', '2023-02-02'];

function generateYearRange(start, end) {
    var years = "";
    for (let year = start; year <= end; year++) {
        years += "<option value = '" + year + "'>" + year + "</option>";
    }
    return years;
}

let createYear = generateYearRange(2022, 2023);

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

let selectYear = document.getElementById('year');
let selectMonth = document.getElementById('month');

selectYear.innerHTML = createYear

// let calendar = document.getElementById('calendar');

let dataHead = "<tr>";
for (dhead in dayList) {
    dataHead += "<th data-days= '" + dayList[dhead] + "'>" + dayList[dhead] + "</th>";
}
dataHead += "</tr>"

document.getElementById('thead-month').innerHTML = dataHead;

let MY = document.getElementById('MY');

showCalendar(currentMonth, currentYear);

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    var firstDay = (new Date(year, month)).getDay();

    tbl = document.getElementById('cal-body');

    tbl.innerHTML = '';

    MY.innerHTML = monthList[month] + " " + year
    selectMonth.value = month;
    selectYear.value = year;

    var date = 1;
    for (var i = 0; i < 6; i++) {

        var row = document.createElement("tr");

        for (var j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                cell = document.createElement("td");
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > daysInMonth(month, year)) {
                break;
            } else {
                cell = document.createElement("td");
                cell.setAttribute("data-date", date);
                cell.setAttribute("data-month", month + 1);
                cell.setAttribute("data-year", year);
                cell.className = "cal-number";
                cell.innerHTML = "<span>" + date + "</span>";

                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.className = "cal-number current";
                }
                for(dayss in array){
                    var dateNew = new Date(array[dayss])
                    if(date === dateNew.getDate() && year === dateNew.getFullYear() && month === dateNew.getMonth()){
                        cell.className = "cal-number current";
                    }
                }
                row.appendChild(cell);
                date++;
            }
        }
        tbl.appendChild(row);
    }
}

function daysInMonth(imonth, iyear) {
    return 32 - new Date(iyear, imonth, 32).getDate();
}
