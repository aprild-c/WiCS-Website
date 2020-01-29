$('#gcf-design').gCalFlow({
    calid: 'amherst.edu_bvdeelhkm2tcad3bm031gd7s68@group.calendar.google.com',
    maxitem: 10,
    daterange_formatter: function(s, e, allday_p) {
        s.ampm = "am";
        e.ampm = "am";
        s.hours = s.getHours();
        s.minutes = ":" + s.getMinutes();
        e.hours = e.getHours();
        e.minutes = ":" + e.getMinutes();
        let months = ["Jan. ", "Feb. ", "Mar. ", "Apr. ", "May ", "Jun. ", "July ", "Aug. ", "Sep. ", "Oct. ", "Nov. ", "Dec. "];

        let dateString = months[s.getMonth() + 1] + s.getDate();
        if (s.hours > 12) {
            s.ampm = "pm";
            s.hours -= 12;
        }
        if (e.hours > 12) {
            e.ampm = "pm";
            e.hours -= 12;
        }
        if (s.minutes === ":0") {
            s.minutes += "0";
        }
        if (e.minutes === ":0") {
            e.minutes += "0";
        }

        dateString += " @" + s.hours + s.minutes + s.ampm + " - ";
        if (s.getDate() === e.getDate()) {
            dateString += e.hours + e.minutes + e.ampm;
        } else {
            dateString += months[e.getMonth() + 1] + e.getDate() + " @" + e.hours + e.minutes + e.ampm;
        }
        return dateString;
    }
});

window.onload = function() {descriptionAction();};

function descriptionAction() {
    let descriptions = document.getElementsByClassName("gcf-item-description");
    let counter = -1;
    for (let index = 0; index < descriptions.length; index++) {
        if (descriptions[index].innerHTML === "No description available") {
            document.getElementsByClassName("gcf-item-body-block")[index].style.display="none";
        } else {
            let description = descriptions[index].innerHTML;
            descriptions[index].innerHTML = description.slice(0, 40) + "..." + "<a class='expandArrow'> &#8594</a>";
            counter++;
            document.getElementsByClassName('expandArrow')[counter].onclick = function() {
                descriptions[index].innerHTML = description;
                return false;
            }
        }
    }
}

