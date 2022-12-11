let r = document.getElementById("r");
let p = document.getElementById("p");
let s = document.getElementById("s");
let userScoreVal = document.getElementById("userScoreVal");
let compScoreVal = document.getElementById("compScoreVal");
let userOp = document.getElementById("result-user-stat")
let compOp = document.getElementById("result-comp-stat")
let winnerOp = document.getElementById("result-final-stat")
let tools = ["Rock","Paper","Scissors"];

r.addEventListener("click",()=>{
    setDefault();
    userOp.innerText = userOp.innerText.concat(" Rock")
    let cop= computerOp();
    compOp.innerText = compOp.innerText.concat(" "+cop)
    winnerOp.innerText = winnerOp.innerText.concat(winner("Rock", cop))
    if(winner("Rock", cop) == " User") (userScoreVal.innerText)++;
    if(winner("Rock", cop) == " Computer")  (compScoreVal.innerText)++;
})
p.addEventListener("click",()=>{
    setDefault();
    userOp.innerText = userOp.innerText.concat(" Paper")
    let cop= computerOp();
    compOp.innerText = compOp.innerText.concat(" "+cop)
    winnerOp.innerText = winnerOp.innerText.concat(winner("Paper", cop))
    if(winner("Rock", cop) == " User") (userScoreVal.innerText)++;
    if(winner("Rock", cop) == " Computer")  (compScoreVal.innerText)++;
})
s.addEventListener("click",()=>{
    setDefault();
    userOp.innerText = userOp.innerText.concat(" Scissors")
    let cop= computerOp();
    compOp.innerText = compOp.innerText.concat(" "+cop)
    winnerOp.innerText = winnerOp.innerText.concat(winner("Scissors", cop))
    if(winner("Rock", cop) == " User") (userScoreVal.innerText)++;
    if(winner("Rock", cop) == " Computer")  (compScoreVal.innerText)++;
})

let computerOp=()=>{
    let x=Math.floor(Math.random()*3);
    return (tools[x]);
}

let winner=(u,c)=>{
    u=u.trim()
    c=c.trim()
    if(u==c) return " Tie"
    if(u!=c)
    {
        if(u=="Rock")
        {
            if(c=="Paper") return " Computer";
            else return " User";
        }
        if(u=="Paper")
        {
            if(c=="Scissors") return " Computer";
            else return " User"
        }
        if(u=="Scissors")
        {
            if(c=="Rock") return " Computer";
            else return " User"
        }
    }
    else  return "Tie";
}

function setDefault(){
    userOp.innerText ="User:"
    compOp.innerText ="Computer: "
    winnerOp.innerText ="Winner: "

}