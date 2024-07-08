import React from 'react';

interface ProgressBarProps {
  progress: number;
}
/**
 * @moonhr 24.07.08
 * * 프로젝트 진행도 시각화를 위한 컴포넌트
 * @param {number}
 * @returns progressBar
 */
const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      {/* 가변적인 움직임을 위해 div 내 style속성 추가 */}
      <div
        className="bg-blue-500 h-4 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;