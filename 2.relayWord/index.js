document.querySelector('#button').addEventListener('click',()=>{
    const word = document.querySelector('#word').textContent;
    const input = document.querySelector('#input').value;
    const word_last = word.charAt(word.length - 1);
    const input_first = input.charAt(0);
    // alert(input_first)
    if(word_last === input_first){
        // alert('동일')
        document.querySelector('#word').textContent = document.querySelector('#input').value;
        // input === null;
        document.querySelector('#input').value = ''
        document.querySelector('#error').textContent = ''
        document.querySelector('#input').focus();
    }else{
        // alert('다시입력')
        document.querySelector('#error').textContent = '땡'
        document.querySelector('#input').value = ''
        document.querySelector('#input').focus();
    }
    
});