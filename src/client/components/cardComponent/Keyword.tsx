import React from "react";

/**
 * @yuxincxoi 24.07.08
 * 팀원들의 키워드들을 나타내는 컴포넌트
 */

const keywordData = [
  "고기",
  "엉뚱한생각",
  "INTP",
  "튼튼발자",
  "ENFJ",
  "포켓몬",
  "Rock",
  "수직적구조",
  "tailwind",
  "롱스톤",
  "React",
  "지뢰찾기",
  "런닝",
  "비실발자퇴출",
  "INFP",
  "장원영",
  "팽도리",
  "INTJ",
  "날거",
  "JavaScript",
  "닮은꼴",
  "자기소개",
  "CSS",
  "주먹",
  "樂",
  "내루미",
  "숨쉬기운동",
  "TypeScript",
  "네오비트",
  "음악",
  "차은우",
  "토게피",
  "락앤롤정신",
  "저작운동",
  "물리면담"
];

const Keyword: React.FC = () => {
  return (
    <div>
      {keywordData.map((keyword, idx) => (
        <span key={idx}>{keyword}</span>
      ))}
    </div>
  );
};

export default Keyword;
