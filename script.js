// script.js
window.addEventListener('load', () => {
    // 로딩 화면 유지
    const loadingScreen = document.getElementById('loading-screen');
    const nicknameInputScreen = document.getElementById('nickname-input-screen');
    const mainPage = document.getElementById('main-page');
    const nicknameDisplay = document.getElementById('nickname');
    const nicknameInput = document.getElementById('nickname-input');
    const startButton = document.getElementById('start-button');

    setTimeout(() => {
        loadingScreen.style.display = 'none';
        nicknameInputScreen.style.display = 'block';
    }, 3000); // 3초 후 로딩 화면 종료

    // 닉네임 입력 후 시작
    startButton.addEventListener('click', () => {
        const nickname = nicknameInput.value.trim();
        if (nickname) {
            nicknameDisplay.textContent = nickname;
            nicknameInputScreen.style.display = 'none';
            mainPage.style.display = 'block';
        } else {
            alert('닉네임을 입력하세요.');
        }
    });
});
