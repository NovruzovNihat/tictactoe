let say = 1;
let o = "O";
let x = "X"
let M = [];
let score1 = 0;
let score2 = 0;

onload = function () {
    document.getElementById("sss").innerHTML = prompt("Oyuncu1");
    document.getElementById("sss1").innerHTML = prompt("Oyuncu2");
    arr();
    cedvel();
}
function arr() {
    for (let i = 0; i < 3; i++) {
        M[i] = [];
    }
}

function cedvel() {
    let x = "";
    for (let i = 0; i < 3; i++) {
        x += `<tr>`;
        for (let j = 0; j < 3; j++) {
            M[i][j] = M[i][j] == undefined ? "" : M[i][j];
            x += `<td onclick = "Click(${i},${j})">${M[i][j]}</td>`;
        }
        x += `</tr>`
    }
    document.getElementsByTagName("table")[0].innerHTML = x;
}

function Click(i, j) {
    if (M[i][j] == "") {
        if (say % 2 == 0) {
            M[i][j] = o;
        }
        else {
            M[i][j] = x;
        }
        say++;
        cedvel();
        setTimeout(yoxla, 600);
    }
}

function yoxla() {

    if (M[0][0] == M[1][1] && M[1][1] == M[2][2] && M[0][0] != "") {
        alert(M[0][0] + " - " + "Qalib");
        if (M[0][0] == x) {
            score1++;
            document.getElementById("inp1").value = score1;
            say = 1;
        }
        else {
            score2++;
            document.getElementById("inp2").value = score2;
            say = 1;
        }
        arr();
        cedvel();


    }
    if (M[0][2] == M[1][1] && M[1][1] == M[2][0] && M[0][2] != "") {
        alert(M[0][2] + " - " + "Qalib");
        if (M[0][2] == x) {
            score1++;
            document.getElementById("inp1").value = score1;
            say = 1;
        }
        else {
            score2++;
            document.getElementById("inp2").value = score2;
            say = 1;
        }
        arr();
        cedvel();

    }
    for (let i = 0; i < 3; i++) {
        if (M[i][0] == M[i][1] && M[i][1] == M[i][2] && M[i][0] != "") {
            alert(M[i][0] + " - " + "Qalib");
            if (M[i][0] == x) {
                score1++;
                document.getElementById("inp1").value = score1;
                say = 1;
            }
            else {
                score2++;
                document.getElementById("inp2").value = score2;
                say = 1;

            }
            arr();
            cedvel();
        }
    }
    for (let i = 0; i < 3; i++) {
        if (M[0][i] == M[1][i] && M[1][i] == M[2][i] && M[0][i] != "") {
            alert(M[0][i] + " - " + "Qalib");
            if (M[0][i] == x) {
                score1++;
                document.getElementById("inp1").value = score1;
                say = 1;

            }
            else {
                score2++;
                document.getElementById("inp2").value = score2;
                say = 1;

            }
            arr();
            cedvel();
        }
    }
    if (say % 10 == 0) {
        alert("Bərabər!");
        say=1;
        arr();
        cedvel();
      }
 


}
function Equal() {
    document.getElementById("inp2").value = 0;
    document.getElementById("inp1").value = 0;
    arr();
    cedvel();
}
