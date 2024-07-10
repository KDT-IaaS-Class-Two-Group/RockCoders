import path from "node:path";

/**
 * @eonduck2 24.07.10
 * * 지정된 경로를 합쳐주는 모듈
 * @param { string } paths 문자열 형식의 리터럴 eg) "test1", "test2", "test3", ...
 * @returns { string } 조립된 상대 경로
 */
export default (...paths: string[]) => path.resolve(...paths);
