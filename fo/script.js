document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const nicknameInputScreen = document.getElementById("nickname-input-screen");
    const mainPage = document.getElementById("main-page");
    const startButton = document.getElementById("start-button");
    const nicknameInput = document.getElementById("nickname-input");
    const nicknameSpan = document.getElementById("nickname");

    // 로컬 스토리지에서 닉네임 가져오기
    const savedNickname = localStorage.getItem("nickname");
    const savedDate = localStorage.getItem("date");

    const today = new Date().toISOString().slice(0, 10); // yyyy-mm-dd 형식

    if (savedNickname && savedDate === today) {
        // 닉네임이 이미 저장되고, 날짜가 같은 경우
        nicknameSpan.textContent = savedNickname;
        showDailyFortune(savedNickname); // 운세 고정
        loadingScreen.style.display = "none";
        mainPage.style.display = "block";
    } else {
        // 닉네임이 없거나 날짜가 다른 경우 입력 화면 표시
        setTimeout(() => {
            loadingScreen.style.display = "none";
            nicknameInputScreen.style.display = "block";
        }, 2000); // 로딩 화면 2초 후 닉네임 입력 화면으로 전환
    }

    // 시작 버튼 클릭 이벤트
    startButton.addEventListener("click", () => {
        const nickname = nicknameInput.value.trim();
        if (nickname) {
            // 닉네임과 날짜를 로컬 스토리지에 저장
            localStorage.setItem("nickname", nickname);
            localStorage.setItem("date", today);
            nicknameSpan.textContent = nickname;

            // 메인 페이지로 이동
            nicknameInputScreen.style.display = "none";
            mainPage.style.display = "block";

            // 오늘의 운세 표시
            showDailyFortune(nickname);
        } else {
            alert("닉네임을 입력해주세요!");
        }
    });
});

/**
 * 닉네임을 기반으로 오늘의 운세를 고정
 * @param {string} nickname - 사용자의 닉네임
 */
function showDailyFortune(nickname) {
    const fortunes = [
        "오늘은 행운의 날입니다!",
        "조심하세요, 시험지가 날아올 수 있어요!",
        "친구와의 우정이 더욱 깊어질 하루입니다!",
        "맛있는 음식을 먹게 될 운명입니다!",
        "작은 선물이 기다리고 있어요!"
    ];

    // 간단한 해시 생성 (닉네임을 숫자로 변환)
    const hash = Array.from(nickname).reduce((acc, char) => acc + char.charCodeAt(0), 0);

    // 운세 고정 (해시를 운세 배열 길이로 나눈 나머지 사용)
    const fortuneIndex = hash % fortunes.length;
    const fortuneMessage = fortunes[fortuneIndex];

    // 운세 표시
    document.getElementById("fortune").textContent = fortuneMessage;
}
