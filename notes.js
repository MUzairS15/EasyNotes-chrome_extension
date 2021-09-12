start();

const save = document.getElementById("save").addEventListener("click",saveNote);

function show(){
  let srNo = 1;
  let numberOfNotes = localStorage.length;
  keys = Object.keys(localStorage)
    if(document.getElementsByClassName('cards')[0].innerHTML != ''){
        document.getElementsByClassName('cards')[0].innerHTML = '';
      }
   while(numberOfNotes--){
      let temp =localStorage.getItem(`note${srNo}`);
      newEle =  document.createElement('p');
      newEle.innerHTML = `${srNo + ' . '+ temp}`;
      document.getElementsByClassName("cards")[0].appendChild(newEle)
      srNo += 1;
      console.log(srNo);
    }
  }
  
function saveNote(){
    let index = localStorage.length == 0 ? 1 : localStorage.length + 1; 
    notes = document.getElementById('text').value; 
    localStorage.setItem(`note${index}`, `${notes}`);
    
    show();
}
      
function start(){
    if(localStorage.length != 0){      
      show();
    }
}