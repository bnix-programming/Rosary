urlp=[];
u=location.search.replace("?","").split("&").forEach(function(d){e=d.split("=");if(urlp[e[0]]==undefined){urlp[e[0]]=e[1]}else{urlp[e[0]]=urlp[e[0]]+" "+e[1]}});
document.getElementById(urlp["version"]).checked = true ;
var cMont = 1
var vDrop = ''

//Fills the opening of the rosary
function fOpening() {
    var vOpen = document.getElementById("opening");
    vDrop = ''

    vDrop = vDrop + "<button class=\"button dropdown-master\"><h3>" + extras["titleOpening"] + "</h3></button>"
    vDrop = vDrop + "<div class=\"dropdown-slave\">"
    vDrop = vDrop + "<span class=\"prayer\">" + tSignL + "</span>"
    if (urlp["extras"]=="on"){
        vDrop = vDrop + "<span class=\"prayer\">" + tOpLit + "</span>"
        vDrop = vDrop + "<span class=\"prayer\">" + tHolyS + "</span>"
        vDrop = vDrop + "<span class=\"prayer\">" + tOffer + "</span>"
    };
    if (urlp["montfort"]=="on"){
        vDrop = vDrop + "<span class=\"prayer\">" + master["montfort"]["introduction"] + "</span>"
    };
    vDrop = vDrop + "<span class=\"prayer\">" + tCreed + "</span>"
    vDrop = vDrop + "<span class=\"mary\">" + tFather + "</span>";
    vDrop = vDrop + "<span class=\"mary\">" + extras["titleMary"]["faith"]   + "<br><hr class=\"inner-hr\">" + tMary + "</span>";
    vDrop = vDrop + "<span class=\"mary\">" + extras["titleMary"]["hope"]    + "<br><hr class=\"inner-hr\">" + tMary + "</span>";
    vDrop = vDrop + "<span class=\"mary\">" + extras["titleMary"]["charity"] + "<br><hr class=\"inner-hr\">" + tMary + "</span>";
    vDrop = vDrop + "<span class=\"mary\">" + tGlory + "</span>";
    vDrop = vDrop + "<span class=\"close\"><div>X</div></span>";
    vDrop = vDrop + "</div><br>"
    vOpen.innerHTML = vOpen.innerHTML + vDrop
}

//Fills mysteries in accordance to the query
function fillMystery(sMystery,sVersion) {
    var vMystery = document.getElementById(sMystery);
    vDrop = '<hr><br>'
    for (n=1; n<=5; n++){
        vDrop = vDrop + "<button class=\"button dropdown-master\"><h3>"+ master[sMystery][n]+"</h3></button>"
        vDrop = vDrop + "<div class=\"dropdown-slave\">"
        if (urlp["CCC"]=="on") {
            vDrop = vDrop + "<span class=\"catechism\">" + catechism["header"] + catechism[sMystery][n] + "</span>"
        }
        if (urlp["montfort"]=="on") {
            vDrop = vDrop + "<span class=\"montfort\">" + master["montfort"]["oHeader"] + master["order"][cMont] + master["montfort"][sMystery]["opening"][n] + "</span>"
            cMont++
        }
        vDrop = vDrop + "<span class=\"prayer\">" + tFather + "</span>"
        if (sVersion!="trad"||urlp["mary"]=="on") {
            for (o=1; o<=10; o++){
                if (sVersion!="trad"){
                    vDrop = vDrop + "<span class=\"verse\">" + o + ". " + eval(sVersion)[sMystery][n][o] + "</span>";
                };
                if (urlp["mary"]=="on"){
                    vDrop = vDrop + "<span class=\"mary\">" + extras["titleMary"]["normal"] + "<br><hr class=\"inner-hr\">" + tMary + "</span>";
                }
            }
        }
        vDrop = vDrop + "<span class=\"prayer\">" + tGlory + "</span>"
        vDrop = vDrop + "<span class=\"prayer\">" + tFatima + "</span>" 
        if (urlp["extras"]=="on"){
            vDrop = vDrop + "<span class=\"prayer\">" + tFlame + "</span>" 
            vDrop = vDrop + "<span class=\"prayer\">" + tJesus + "</span>" 
        }
        if (urlp["montfort"]=="on"){
            vDrop = vDrop + "<span class=\"montfort\">" + master["montfort"]["cHeader"] + master["montfort"][sMystery]["closing"][n] + "</span>"
        }
        vDrop = vDrop + "<span class=\"close\"><div>X</div></span>";
        vDrop = vDrop + "</div><br>"
        vMystery.innerHTML = vMystery.innerHTML + vDrop
        vDrop = ''
    }
}

//Fills the opening of the rosary
function fClosing() {
    var vClose = document.getElementById("closing");
    vDrop = '<hr><br>'

    vDrop = vDrop + "<button class=\"button dropdown-master\"><h3>" + extras["titleClosing"] + "</h3></button>"
    vDrop = vDrop + "<div class=\"dropdown-slave\">"
    if (urlp["extras"]=="on"){
        vDrop = vDrop + "<span class=\"prayer\">" + tThank + "</span>"
    };
    vDrop = vDrop + "<span class=\"prayer\">" + tHHQ + "</span>"
    vDrop = vDrop + "<span class=\"prayer\">" + tFinal + "</span>"
    if (urlp["montfort"]=="on"){
        vDrop = vDrop + "<span class=\"prayer\">" + master["montfort"]["conclusion"] + "</span>"
    };
    if (urlp["extras"]=="on"){
        vDrop = vDrop + "<span class=\"prayer\">" + tClLit + "</span>"
    }
    vDrop = vDrop + "<span class=\"prayer\">" + tSignS + "</span>"
    vDrop = vDrop + "<span class=\"prayer\">" + tReign + "</span>"
    vDrop = vDrop + "<span class=\"close\"><div>X</div></span>";
    vDrop = vDrop + "</div><br>"
    vClose.innerHTML = vClose.innerHTML + vDrop
}

//Builds the mysteries given they are selected
function fMystery () {
    if (urlp["mystery"]!= undefined){
        var aMysteries = urlp["mystery"].split(" ");
        for (i=0; i<aMysteries.length; i++) {
            switch (aMysteries[i]) {
                case "joyful":
                    document.getElementById("check-joyful").checked = true
                    fillMystery(aMysteries[i], urlp["version"])
                    break;
                
                case "sorrowful":
                    document.getElementById("check-sorrowful").checked = true
                    fillMystery(aMysteries[i], urlp["version"])
                    break;
                case "glorious":
                    document.getElementById("check-glorious").checked = true
                    fillMystery(aMysteries[i], urlp["version"])
                    break;
                default :
                    break;
            }
        }
    }
}

//Toggles visibility status for the form radio buttons
function fVisibility() {
    //For Hail Mary
    if (urlp["mary"] == "on") {
        document.getElementById("mary-on").checked = true
    }
    else {
        document.getElementById("mary-off").checked = true
    };
    //For Catechism
    /* if (urlp["CCC"] == "on") {
        document.getElementById("CCC-on").checked = true
    }
    else {
        document.getElementById("CCC-off").checked = true
    }; */
    //For Montfort
    /* if (urlp["montfort"]=="on"){
        document.getElementById("mont-on").checked = true
    }
    else {
        document.getElementById("mont-off").checked = true
    } */
    //For extras
    if (urlp["extras"]=="on"){
        document.getElementById("extras-on").checked = true
    }
    else {
        document.getElementById("extras-off").checked = true
    }
}

fVisibility();
fOpening();
fClosing();
fMystery();

/*Begin collapsable container declarations*/
var coll   = document.getElementsByClassName("dropdown-master");
var aClose = document.getElementsByClassName("close");
var i;
/*End collapsable container declarations*/

/*Begin collapsable function calls*/
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("dropdown-active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.overflow = "hidden";
            content.style.visibility = "hidden";
            content.style.maxHeight = null;
            content.style.height = "0px";
            content.style.padding = "0px";
        } else {
            content.style.maxHeight = "inherit";
            content.style.height = "inherit";
            content.style.visibility = "visible ";
            content.style.overflow = "visible";
            content.style.padding = "1em 1em 0 1em";
        }
    });

    //Toggles off the slave and the class when the close button is pressed
    aClose[i].addEventListener("click", function(){
        var vSlave = this.parentNode;
        this.parentNode.previousSibling.classList.toggle("dropdown-active");
        this.parentNode.previousSibling.classList.add("dropdown-read");
        if (vSlave.style.maxHeight) {
            vSlave.style.overflow = "hidden";
            vSlave.style.visibility = "hidden";
            vSlave.style.maxHeight = null;
            vSlave.style.height = "0px";
            vSlave.style.padding = "0px";
        }
    });
};
/*End collapsable function calls*/