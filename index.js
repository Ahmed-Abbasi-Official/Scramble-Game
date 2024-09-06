let btn = document.querySelector(".btn");
let msg = document.querySelector(".msg");
let input = document.querySelector("input");
let play = false;
let newWords;
let ranWords;
let sWords  =
[ 'C++' , 'javascript' , 'php' , 'java' , 'C#' , 'html' , 'css' , 'reactjs' , 'Angularjs' , 'swift' , 'Android' , 'SQL']
let createNewWords = ()=>{
    let randomNumber = Math.floor(Math.random()*sWords.length)
    let arr = sWords[randomNumber]
    // console.log(arr.split(""));
    return arr
}
let scrambleWords = (val)=>{
    for(let i=val.length-1;i>=0;i--)
    {
        let temp = val[i];
        let j = Math.floor(Math.random()*(i+1))
        val[i]=val[j]
        val[j]=temp
        return val
    }
}
btn.addEventListener("click",()=>{
    if(!play)
    {
        play=true;
        btn.innerText="Guess"
        input.classList.remove('hidden')
        newWords = createNewWords()
        ranWords = scrambleWords(newWords.split("")).join("")
        // console.log(ranWords.join(""));
        msg.innerHTML=`Guess The Word : ${ranWords}`
    }
    else
    {
        let tempWord = input.value;
        if(tempWord === newWords)
        {
            input.classList.add('hidden')
            console.log("correct");
            msg.innerHTML=`It's Correct Awesome ${newWords}`;
            btn.innerHTML="Start Again"
            play=false;
            let upper = input.value=""
        }
        else 
        {
            input.value=""
            console.log("incorrect");
            input.classList.add('hidden')
            msg.innerHTML=`It's Incorrect Moye Moye ${newWords}`;
            btn.innerHTML="Start Again"
            play=false;
        }
    }
})