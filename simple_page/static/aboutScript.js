let i = 0;
let title = "<h1>About Us</h1>";
let speed = 130;

window.onload = function() {supportingTextAction();typingEffect()};

function typingEffect() {
    if (i < title.length) {
        if (title.charAt(i)==="h" || title.charAt(i)==="1") {
            document.getElementById("typingEffect").innerHTML += title.charAt(i).fontcolor("darkorange");
            i++;
        } else {
            document.getElementById("typingEffect").innerHTML += title.charAt(i);
            i++;
        }
        setTimeout(typingEffect, speed);
    } else if (i === title.length) {
        document.getElementById("typingSymbol").innerHTML = "";
    }
}

function supportingTextAction() {
    var a = document.getElementsByClassName("header");
    var colors = ["mediumturquoise", "darkorange", "mediumpurple"];
    var text=["<h2>Computer science related fields have lacked in female diversity " +
        "<a href='https://www.theguardian.com/careers/2017/aug/10/how-the-tech-industry-wrote-women-out-of-history'>" +
        "starting in the 1960s.</a> Currently, women " +
        "only make up 20% of computer science professionals globally, despite computer science careers having one " +
        "of the smallest gender wage gaps and their increasing flexibility in work hours.<br><br>" +
        "This lack of diversity is seen early on within colleges and universities. Computer science introductory " +
        "courses have a high number of female students, but the number drops significantly when we look at female " +
        "students who continue onto higher level courses. The low retention rate is due to many reasons: a lack " +
        "of tech female role models, a confidence gap between genders, and the geek-programmer stereotype." +
        "<br><a id='moreInfo' href='https://www.techrepublic.com/article/the-state-of-women-in-computer-science-an-investigative-report/'>" +
        "Click for more information</a></h2>",
        "<h2>We provide workshops, both to improve technical skills and to educate our members on issues facing women in tech. " +
        "We also organize trips to tech conferences such as the <a href='https://ghc.anitab.org/'>Grace Hopper Celebration</a> and <a href='https://www.wecodeharvard.org/'>WeCode</a>. " +
        "Additionally, our members are provided with information about internships, programs, and other technical opportunities. " +
        "<a id='moreInfo' href='/calendar'><br>Check out our calendar ➤</a></h2>",
        "<h2>Contact April Dottin-Carter at adottincarter23@amherst.edu if you have any questions or would like to contribute " +
        "to our events.<br>For updates and more, join our <a href='/#mailingListLink'>mailing list</a>.</h2>"];

    for (let i = 0; i <3 ; i++) {
        a[i].onclick = function() {
            document.getElementById("supportingText").style.borderColor=colors[i];
            a[i].style.borderBottomColor="transparent";
            for (let j=0; j<3; j++) {
                if (i===j) {
                    continue;
                }
                a[j].style.borderColor=colors[j];
                a[j].style.borderBottomColor=colors[i];
            }
            document.getElementById("supportingText").innerHTML=text[i];
            return false;
        }
    }
}