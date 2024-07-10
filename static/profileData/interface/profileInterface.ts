/**
 * @crystal23733 24.07.10
 * * 팀원 데이터 형식
 */
export interface TeamMember {
  종류: '소형' | '중형' | '대형';
  이름: string;
  hp: number;
  특기명: string;
  특기설명: string;
  필살기명: string;
  필살기설명: string;
  필살기공격력: number;
  약점: string;
  내가보는나: string;
  남이보는나: string;
  뒷면프로젝트명1: string;
  뒷면프로젝트1설명: string;
  뒷면프로젝트1진행도: number;
  뒷면프로젝트명2?: string;
  뒷면프로젝트2설명?: string;
  뒷면프로젝트2진행도?: number;
  이미지: string;
}