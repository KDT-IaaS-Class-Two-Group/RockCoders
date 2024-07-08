import React from "react";
import "./keyword.css";

/**
 * @yuxincxoi 24.07.08
 * 팀원들의 키워드들을 나타내는 컴포넌트
 */

// * keyword 정적 할당
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

// * 각 줄의 키워드 개수 지정
const rowLength = [4, 5, 6, 5, 6, 5, 4];

// * 각 줄의 키워드를 개수별로 배열에 담아내기
const getRows = (keywordData: string[], rowLength: number[]): string[][] => {
  const rows: string[][] = [];
  let i = 0;

  rowLength.forEach((length) => {
    rows.push(keywordData.slice(i, i + length));
    i += length;
  });
  return rows;
};

const rows = getRows(keywordData, rowLength);

// * Keyword 컴포넌트
const Keyword: React.FC = () => {
  return (
    <div className="keyword-container">
      {rows.map((row, rowIdx) => (
        <div key={rowIdx} className="keyword-row">
          {row.map((keyword, idx) => (
            <span key={idx}>{keyword}</span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyword;
