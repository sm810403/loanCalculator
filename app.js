const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const resultBox = document.querySelector('.result-box')
    if(resultBox.style.display === 'none'){
        resultBox.style.display = 'block';
    } else {
        resultBox.style.display = 'none';
    }
})