let count = 0

function increment(){
    count++;
    document.getElementById('count-el').textContent = count;
}

function save(){
    document.getElementById('previous-entries').textContent += count + ' , ';
    count = 0;
    document.getElementById('count-el').textContent = count;
}