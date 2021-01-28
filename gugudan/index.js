
    const a = document.querySelector('#first').value;
    const b = document.querySelector('#second').value;
document.querySelector('#click').addEventListener('click', () => {

    if (a) {
        if (b) {
            document.querySelector('#result').textContent = a * b;
        } else {
            document.querySelector('#result').textContent = '두번째값을 입력하세요!'
        }
    } else {
        document.querySelector('#result').textContent = '첫번째값을 입력하세요'
    }
});