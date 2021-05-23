


function giveage()
{
    let year=prompt('Enter your birth year!');
    // let name=prompt('Enter your name');
    // console.log(year);
    if(year){
    let yearindays=(2021-year)*365;
    // console.log(yearindays);
    let h3=document.createElement('h3');
    // console.log(h3);
    h3.innerText="You are "+yearindays+" old my friend!";
    let div=document.getElementById('age-div');
    div.appendChild(h3);
    }

}
function resetage()
{
    let div=document.getElementById('age-div');
    console.log(div.removeChild(div.childNodes[0]));
}

function catgen()
{
    let div=document.getElementById("cat-image-id");
    let img=document.createElement('img');
    img.src="geek_logo.jpg";
    img.className="cat-image";
    div.appendChild(img);
}


// challenge 3

let selectallbuttons=document.getElementsByClassName("butt-all");
// console.log(selectallbuttons);
let copybuttonclass=[];

for(let i=0;i<selectallbuttons.length;i++)
copybuttonclass.push(selectallbuttons[i].classList[3]);
// console.log(copybuttonclass);

function colorchanged(props)
{
    // console.log(props.value);
if(props.value==='blue')
convertbluebutton();
else if(props.value==='green')
convertgreenbutton();
else if(props.value==='random')
convertrandombutton();
else if(props.value==='reset')
resetcolor();
}
function convertbluebutton()
{
    for(let i=0;i<selectallbuttons.length;i++)
    {
        selectallbuttons[i].classList.remove(selectallbuttons[i].classList[3]);
        selectallbuttons[i].classList.add('btn-primary');
    }
    

}
function convertgreenbutton()
{
    for(let i=0;i<selectallbuttons.length;i++)
    {
        selectallbuttons[i].classList.remove(selectallbuttons[i].classList[3]);
        selectallbuttons[i].classList.add('btn-success');
    }
    

}
function convertrandombutton()
{
    let randomcolor=['bg-primary','bg-success','bg-danger','bg-warning'];
    
    for(let i=0;i<selectallbuttons.length;i++)
    {
        let randomindex=Math.floor(Math.random()*3);
        selectallbuttons[i].classList.remove(selectallbuttons[i].classList[3]);
        selectallbuttons[i].classList.add(randomcolor[randomindex]);
    }

}
function resetcolor()
{
    for(let i=0;i<selectallbuttons.length;i++)
    {
        selectallbuttons[i].classList.remove(selectallbuttons[i].classList[3]);
        selectallbuttons[i].classList.add(copybuttonclass[i]);
    }

}
// challenge 4

function callgamefun(props)
{
    let dictionary={
        "stone":{"stone":0.5,"paper":0,"scissior":1},
        "paper":{"stone":1,"paper":0.5,"scissior":0},
        "scissior":{"stone":0,"paper":1,"scissior":0.5}
    }

    let mychoice=props.id;
    let botchoice=returnbotchoice();
    console.log(mychoice);
    console.log(botchoice);
    
    if(dictionary[mychoice][botchoice]===1)
    {
      let mychoicepic=document.getElementById(mychoice);
    //   console.log(mychoicepic);
      let h3=document.createElement('h3');
      h3.innerHTML= "<b>You Win my Friend</b>" ;
      let botchoicepic=document.getElementById(botchoice);
      let accessthatmaindiv=document.getElementById('sps');
      accessthatmaindiv.removeChild(accessthatmaindiv.children[0]);
      accessthatmaindiv.removeChild(accessthatmaindiv.children[0]);
      accessthatmaindiv.removeChild(accessthatmaindiv.children[0]);
      accessthatmaindiv.appendChild(mychoicepic);
      accessthatmaindiv.appendChild(h3);
      accessthatmaindiv.appendChild(botchoicepic);
    }
    else if(dictionary[mychoice][botchoice]===0.5)
    {
        let mychoicepic=document.getElementById(mychoice);
        //   console.log(mychoicepic);
          let h3=document.createElement('h3');
          h3.innerHTML= "<b>!! DRAW  !! my Friend</b>" ;
          let botchoicepic=document.getElementById(botchoice);
          let accessthatmaindiv=document.getElementById('sps');
          accessthatmaindiv.removeChild(accessthatmaindiv.children[0]);
          accessthatmaindiv.removeChild(accessthatmaindiv.children[0]);
          accessthatmaindiv.removeChild(accessthatmaindiv.children[0]);
          accessthatmaindiv.appendChild(mychoicepic);
        //   console.log(accessthatmaindiv);
          accessthatmaindiv.appendChild(h3);
          accessthatmaindiv.appendChild(botchoicepic);
          
    }
    else if(dictionary[mychoice][botchoice]===0)
    {
        let mychoicepic=document.getElementById(mychoice);
        //   console.log(mychoicepic);
          let h3=document.createElement('h3');
          h3.innerHTML= "<b>You Lose my Friend</b>" ;
          let botchoicepic=document.getElementById(botchoice);
          let accessthatmaindiv=document.getElementById('sps');
          accessthatmaindiv.removeChild(accessthatmaindiv.children[0]);
          accessthatmaindiv.removeChild(accessthatmaindiv.children[0]);
          accessthatmaindiv.removeChild(accessthatmaindiv.children[0]);
          accessthatmaindiv.appendChild(mychoicepic);
          accessthatmaindiv.appendChild(h3);
          accessthatmaindiv.appendChild(botchoicepic);
    }
}



function returnbotchoice()
{
    let choicess=["stone","paper","scissior"];
   let choice= Math.floor(Math.random()*3);
   return choicess[choice];
}