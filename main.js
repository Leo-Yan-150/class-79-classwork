var names = [];
function submit(){

    var name1 = document.getElementById("name-1").value;
    var name2 = document.getElementById("name-2").value;
    var name3 = document.getElementById("name-3").value;
    var name4 = document.getElementById("name-4").value;

    names.push(name1);
    names.push(name2);
    names.push(name3);
    names.push(name4);

    console.log(names);

    document.getElementById("display_name").innerHTML = names;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
    document.getElementById("delete_button").style.display = "inline-block";

}

function sorting(){

    names.sort();
    console.log(names);
    document.getElementById("display_name").innerHTML = names;

}

function deleteit(){

    name1 = "";
    name2 = "";
    name3 = "";
    name4 = "";
    names = [];
    document.getElementById("display_name").innerHTML = names;
    document.getElementById("name-1").value = name1;
    document.getElementById("name-2").value = name2;
    document.getElementById("name-3").value = name3;
    document.getElementById("name-4").value = name4;
    document.getElementById("submit_button").style.display = "inline-block";
    document.getElementById("sort_button").style.display = "none";
    document.getElementById("delete_button").style.display = "none";

}