//######### testo descrizione evento ###########

function writedescription() {
    alert("writedescription works");
    let description = document.getElementById("description").value;
    alert(description);
    /* xmlhttp2 = new XMLHttpRequest();

    var PageToSendTo2 = "descriinsert.php?";
    var thevaluee2 = description;
    var placeholder2 = "variableName2=";
    var UrlToSend2 = PageToSendTo2 + placeholder2 + thevaluee2;
    alert(UrlToSend2);

    xmlhttp.open("POST", UrlToSend2, false);
    xmlhttp.send(); */

    $.ajax
        ({
            url: 'descriinsert.php',
            dataType: "text",
            data: { txtdesc: description },
            type: 'POST',
            success: function () {
                console.log('success');
            }
        });



}

	//######### fine testo descrizione evento ###########
