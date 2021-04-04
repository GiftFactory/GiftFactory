'use strict';

let itemPrice=0;
let clicks = 0;
let questionsArray = [
  ' flowers',
  'chocolate',
  'candeys',
  ' cosmetics',
  'Books',
  ' Unusual gifts',
];
const giftcolors = ['black' , 'white' , 'blue','green','pink','purple','red','yellow'];

const mainSection = document.getElementById('myQuestions');
const she =document.getElementById('she');


she.addEventListener('click', function(){
  const h1El = document.createElement('h1');
  mainSection.appendChild(h1El);
  h1El.textContent='Enter his/her age';
  const input2 = document.createElement('input');
  mainSection.appendChild(input2);
  input2.type='number';
  input2.min=1;
  input2.max=100;
  const br2 = document.createElement ('br');
  mainSection.appendChild(br2);
  const br3 = document.createElement ('br');
  mainSection.appendChild(br3);
  next5();

} , {once : true});



function next1 (){
  const br4 = document.createElement('br');
  mainSection.appendChild(br4);
  const br5 = document.createElement('br');
  mainSection.appendChild(br5);
  const firstNext = document.createElement('button');
  mainSection.appendChild(firstNext);
  firstNext.textContent='NEXT';
  firstNext.addEventListener('click', function(){
    const h1El = document.createElement('h1');
    mainSection.appendChild(h1El);
    h1El.textContent='Select what does he/she like';
    const form = document.createElement('form');
    mainSection.appendChild(form);
    for (let i=0; i<questionsArray.length; i++){
      const label1 = document.createElement('label');
      form.appendChild(label1);
      label1.textContent= questionsArray[i];
      const input1 = document.createElement('input');
      input1.type='checkbox';
      label1.appendChild(input1);

      const br = document.createElement('br');
      label1.appendChild(br);
      const br2 = document.createElement('br');
      label1.appendChild(br2);
    } next2();
  } , {once : true});
}

const colorsID = document.getElementById('forColors');
function next2(){
  const secondNext = document.createElement('button');
  mainSection.appendChild(secondNext);
  secondNext.textContent= 'NEXT';
  secondNext.addEventListener('click', function () {
    const h1El =document.createElement('h1');
    mainSection.appendChild(h1El);
    h1El.textContent='Now choose the color of your box gift';


    const selection = document.createElement('select');
    mainSection.appendChild(selection);
    for (let i=0; i<giftcolors.length; i++){
      const colorsEl = document.createElement('option');
      selection.appendChild(colorsEl);
      colorsEl.textContent=`${giftcolors[i]}`;
      colorsEl.value=giftcolors[i];
    }
    selection.addEventListener('change', function(event){
      if (clicks > 0) {
        colorsID.innerHTML = '';
      }
      const h1gift = document.createElement('h1');
      colorsID.appendChild(h1gift);
      h1gift.textContent=`${event.target.value} is a really good choice!`;
      console.log(event.target.value);
      const myimages = document.createElement('img');
      colorsID.appendChild(myimages);
      myimages.src= `./giftColors/${event.target.value}.png`;
      localStorageArray[1]=(`./giftColors/${event.target.value}.png`);

      myimages.height = 300;
      myimages.width = 300;
      clicks = clicks+1;
      note ();
    });

  } , {once : true});
}


const yesID = document.getElementById('yes');
const noID = document.getElementById('no');


const noteEl = document.createElement('h1');
const noteElInput = document.createElement('input');

function note (){
  const br2 = document.createElement('br');
  colorsID.appendChild(br2);
  const br1 = document.createElement('br');
  colorsID.appendChild(br1);

  const noteQues =document.createElement('h1');
  colorsID.appendChild(noteQues);
  noteQues.textContent='Would you like to add a card with the gift?';

  const yesNo = document.createElement ('button');
  colorsID.appendChild(yesNo);
  yesNo.textContent='YES';
  yesNo.addEventListener('click', function yesNoFun(){
    if (clicks >1)
    {
      yesID.innerHTML = '';
      priceID.innerHTML='';
      finalID.innerHTML='';

    }
    noID.innerHTML = '';
    yesID.appendChild(noteEl);
    noteEl.textContent='Write your note here:';

    yesID.appendChild(noteElInput);
    const br3 = document.createElement('br');
    yesID.appendChild(br3);
    clicks = clicks+1;
    price();
  });

  const noYes = document.createElement ('button');
  colorsID.appendChild(noYes);
  noYes.textContent='NO';
  noYes.addEventListener('click',function(){
    if (clicks >1)
    {
      noID.innerHTML = '';
      priceID.innerHTML='';
      finalID.innerHTML='';
    }
    yesID.innerHTML = '';
    clicks = clicks+1;
    price();
  });

}


function next5(){
  const firstNext = document.createElement('button');
  mainSection.appendChild(firstNext);
  firstNext.textContent='NEXT';
  firstNext.addEventListener('click', function(){
    const h1El = document.createElement('h1');
    mainSection.appendChild(h1El);
    h1El.textContent='What is the Occasion for the gift?';

    const inputEl = document.createElement('input');
    mainSection.appendChild(inputEl);
    next1 ();

  } , {once:true});
}




let priceID = document.getElementById('price');
function price (){
  const priceButton = document.createElement('button');
  priceID.appendChild(priceButton);
  priceButton.textContent='VIEW PRICE';
  priceButton.addEventListener('click', function(){

    // itemPrice = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
    itemPrice=Math.floor(Math.random() * (40 - 20 + 1)) + 20;
    localStorageArray[2]=(itemPrice);
    console.log(localStorageArray);
    settingItem();

    const h1El = document.createElement('h1');
    priceID.appendChild (h1El);
    h1El.textContent=`${itemPrice} JD`;
    final ();

  } ,{once:true});
}


const finalID = document.getElementById('final');
function final (){
  const ready = document.createElement('h1');
  finalID.appendChild(ready);
  ready.textContent='Now Your gift is ready to be delivered!';
  const br2 = document.createElement('br');
  finalID.appendChild(br2);
  const bagBottun = document.createElement('button');
  finalID.appendChild(bagBottun);
  bagBottun.textContent='Go to shopping Cart';
  bagBottun.addEventListener('click',cartPage);
  function cartPage(){
    bagBottun.setAttribute('onclick','location.href=\'myCart.html\'');
  }
}


// for adding a local storage:

let localStorageArray=['','','',1];

localStorageArray[0]=('RandomItem');
settingItem();
function settingItem(){
  let stringObj = JSON.stringify(localStorageArray);
  localStorage.setItem('Gift',stringObj);
}


// function gettingItem(){
//   let product = localStorage.getItem('Gift');
//   if(product) {
//     localStorageArray = JSON.parse(product);

//   }
// } gettingItem();

