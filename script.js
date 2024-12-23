// 로딩 화면 처리
document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const nicknameInputScreen = document.getElementById("nickname-input-screen");
    const mainPage = document.getElementById("main-page");
    const startButton = document.getElementById("start-button");
    const nicknameInput = document.getElementById("nickname-input");
    const nicknameSpan = document.getElementById("nickname");

    // 로컬 스토리지에서 닉네임 가져오기
    const savedNickname = localStorage.getItem("nickname");

    if (savedNickname) {
        // 닉네임이 이미 저장된 경우 바로 메인 페이지로 이동
        nicknameSpan.textContent = savedNickname;
        loadingScreen.style.display = "none";
        mainPage.style.display = "block";
    } else {
        // 닉네임이 없는 경우 입력 화면 표시
        setTimeout(() => {
            loadingScreen.style.display = "none";
            nicknameInputScreen.style.display = "block";
        }, 2000); // 로딩 화면 2초 후 닉네임 입력 화면으로 전환
    }

    // 시작 버튼 클릭 이벤트
    startButton.addEventListener("click", () => {
        const nickname = nicknameInput.value.trim();
        if (nickname) {
            // 닉네임을 로컬 스토리지에 저장
            localStorage.setItem("nickname", nickname);
            nicknameSpan.textContent = nickname;

            // 메인 페이지로 이동
            nicknameInputScreen.style.display = "none";
            mainPage.style.display = "block";
        } else {
            alert("닉네임을 입력해주세요!");
        }
    });
});
