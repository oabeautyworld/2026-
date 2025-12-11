// [1] 질문 데이터 (이미지 파일명은 images 폴더 기준)
const questions = [
    {
        title: "1. 생명선(엄지 옆) 모양은?",
        imgA: "images/q1_a.png", textA: "길고 진하게 뻗음",
        imgB: "images/q1_b.png", textB: "짧거나 흐릿함"
    },
    {
        title: "2. 두뇌선(가운데) 방향은?",
        imgA: "images/q2_a.png", textA: "직선으로 곧게",
        imgB: "images/q2_b.png", textB: "곡선으로 휘어짐"
    },
    {
        title: "3. 손가락 사이 틈은?",
        imgA: "images/q3_a.png", textA: "빈틈없이 붙음",
        imgB: "images/q3_b.png", textB: "사이사이가 벌어짐"
    }
];

// [2] 결과 데이터
const resultData = {
    typeA: {
        title: "🔥 파워풀한 리더형",
        desc: "당신은 목표를 향해 직진하는 불도저 같은 사람입니다. 추진력이 좋지만, 그만큼 어깨와 손목에 힘이 많이 들어가는 편이군요. 평소 무거운 짐을 자주 들진 않나요?"
    },
    typeB: {
        title: "🎨 섬세한 아티스트형",
        desc: "감수성이 풍부하고 디테일에 강한 사람입니다. 작은 불편함도 예민하게 느끼는 당신의 소중한 손목, 아무거나 들게 할 순 없죠. 가벼움이 필수입니다."
    }
};

let currentStep = 0;
let scoreA = 0; // A를 선택한 횟수

function startTest() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("question-screen").style.display = "block";
    updateQuestion();
}

function updateQuestion() {
    const q = questions[currentStep];
    
    // 텍스트 업데이트
    document.getElementById("question-title").innerText = q.title;
    document.getElementById("text-a").innerText = q.textA;
    document.getElementById("text-b").innerText = q.textB;
    
    // 이미지 업데이트
    document.getElementById("img-a").src = q.imgA;
    document.getElementById("img-b").src = q.imgB;

    // 진행바 업데이트
    const progressPercent = ((currentStep + 1) / questions.length) * 100;
    document.getElementById("progress-bar").style.width = `${progressPercent}%`;
    document.getElementById("page-count").innerText = `${currentStep + 1} / ${questions.length}`;
}

function nextQuestion(type) {
    if (type === 'A') scoreA++;
    
    currentStep++;
    
    if (currentStep < questions.length) {
        updateQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("question-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";

    // 결과 계산: A가 2개 이상이면 typeA, 아니면 typeB
    const finalType = scoreA >= 2 ? resultData.typeA : resultData.typeB;

    document.getElementById("result-title").innerText = finalType.title;
    document.getElementById("result-desc").innerText = finalType.desc;
}
