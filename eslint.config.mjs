import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': ['error'],
      indent: ['error', 2], // 들여쓰기를 2칸으로 설정
      semi: ['error', 'always'], // 항상 세미콜론을 사용하도록 설정
      'comma-spacing': 'error', // 쉼표와 뒤의 공백 사이의 일관성 있는 사용을 강제
      'arrow-parens': ['error', 'always'], // 화살표 함수의 매개변수가 하나일지라도 소괄호 사용을 강제
      'no-trailing-spaces': 'error', // 줄 끝에 공백을 허용 X
      'func-call-spacing': ['error', 'never'], // 함수의 괄호 내에 공백을 허용 X
      'init-declarations': ['error', 'always'], //변수 선언 시 초기화 강제
      'key-spacing': ['error', { beforeColon: false, afterColon: true }], // 객체 리터럴에서 키와 값 사이의 일관성 있는 사용 강제
      'lines-between-class-members': [
        'error',
        'always',
        { exceptAfterSingleLine: true }
      ], //클래스 멤버 사이의 빈 줄 강제
      'no-extra-semi': 'error', // 추가적인 세미콜론 사용을 방지
      'no-mixed-spaces-and-tabs': 'error', // 공백과 탭을 혼용하는 것을 방지
      'no-multiple-empty-lines': ['error', { max: 1 }], // 연속적인 빈 줄을 방지
      'prefer-const': ['warn'] // 변수 재할당이 없는 경우 const 사용 경고
    },
    settings: {
      react: {
        version: 'detect' // React 버전 자동 감지 설정
      }
    }
  }
];
