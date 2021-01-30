
document.querySelector('#click').addEventListener('click', () => {

    const a = document.querySelector('#first').value;
    const b = document.querySelector('#second').value;
    const r = document.querySelector('#result');
    
    if (a) {
        if (b) {
            r.textContent = a * b;
        } else {
            r.textContent = '두번째값을 입력하세요!'
        }
    } else {
        r.textContent = '첫번째값을 입력하세요'
    }
});