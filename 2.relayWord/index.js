document.querySelector('#button').addEventListener('click',()=>{
    const word = document.querySelector('#word').textContent
    const input = document.querySelector('#input').value
    document.write(input.charAt(0));//첫번째문자
    document.write(word.substr(str.length-1,1));//마지막문자
});