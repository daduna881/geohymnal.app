var display = document.querySelector('#inp');

var buttons = Array.from(document.querySelectorAll('.btn'));

buttons.map(function(button){
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'წაშლა':
                display.value = '';
                break;
            case 'პოვნა':
                display.value = '';
                break
            default:
                //console.log(display.value)
                display.value += e.target.innerText;
        }
    })
})

function numRange(){
    if(display.value === ''){
        alert('შეიყვანეთ ჰიმნის ნომერი')
    }
}




var find = document.querySelector('.btn1')

function findSong(){
    if(display.value === ''){
        alert('შეიყვანეთ ჰიმნის ნომერი')
    } else if (display.value > 800 || display.value <= 0 || display.value[0] == 0){
        alert('მოცემულ ნომერზე ჰიმნი არ არსებობს')
        display.value = ''
    } else {
    window.open('hymns/hymns.html#' + display.value, '_self')
    }
}

find.addEventListener('click', findSong)


function isNumber(key){
    var char = String.fromCharCode(key.which);
    if(!(/[0-9]/.test(char))){
        key.preventDefault();
    }
}






