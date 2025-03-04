import { applicationQuestions } from '@contents/recruitInfo';
import { FormElementsType, FormValue } from '@type/recruitForm';

export const formValidation: FormElementsType<keyof FormValue> = {
  name: {
    type: 'INPUT',
    label: '이름(실명)',
    placeholder: '김구글',
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
    pattern: {
      value: /^[ㄱ-ㅎ|가-힣]/g,
      message: '한글만 입력 가능해요.',
    },
    minLength: {
      value: 2,
      message: '이름 전체를 입력해주세요.',
    },
  },
  phoneNumber: {
    type: 'INPUT',
    label: '전화번호',
    placeholder: '01012341234',
    pattern: {
      value: /^01([0|1|6|7|8|9])(\d{4})(\d{4})$/,
      message: '- 없이 입력해주세요',
    },
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
  },
  email: {
    type: 'INPUT',
    label: '이메일(gmail)',
    placeholder: 'googledev@gmail.com',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[gmail]+\.[A-Z]{3}$/i,
      message: '이메일 형식에 맞춰 입력해주세요',
    },
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
  },
  major: {
    type: 'INPUT',
    label: '학과',
    placeholder: '구글개발학과',
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
    pattern: {
      value: /^[ㄱ-ㅎ|가-힣]/g,
      message: '한글만 입력 가능해요.',
    },
    minLength: {
      value: 3,
      message: '전공을 전부 입력해주세요',
    },
  },
  studentID: {
    type: 'INPUT',
    label: '학번',
    placeholder: '20221234',
    pattern: {
      value: /^[0-9]{8}$/,
      message: '학번을 전부 입력해주세요',
    },
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
  },
  question1: {
    type: 'TEXT_AREA',
    label: applicationQuestions.question1,
    text: '* 디자이너 분들은 사용가능한 툴에 대해서 알려주세요.',
    placeholder:
      '예) Spring, Vue, Git, Github, NodeJS, Spring, Figma, Adobe XD',
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
  },
  question2: {
    type: 'TEXT_AREA',
    label: applicationQuestions.question2,
    text: ' * 프로젝트 경험이 없다면 본인이 노력해서 보람을 느낀 일에 대해서 알려주세요.',
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
  },
  question3: {
    type: 'TEXT_AREA',
    label: applicationQuestions.question3,
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
  },
  question4: {
    type: 'TEXT_AREA',
    label: applicationQuestions.question4,
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
  },
  question5: {
    type: 'TEXT_AREA',
    label: applicationQuestions.question5,
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
  },
  link0: {
    type: 'INPUT',
    label: '링크 1',
    placeholder: 'https://',
    required: {
      value: false,
      message: '',
    },
    pattern: {
      value:
        //eslint-disable-next-line
        /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z\d]+([\-\.]{1}[a-z\d]+)*\.[a-z]{2,5}(:\d{1,5})?(\/.*)?$/,
      message: 'URL 형식에 맞춰 입력해주세요',
    },
  },
  link1: {
    type: 'INPUT',
    label: '링크 2',
    placeholder: 'https://',
    required: {
      value: false,
      message: '',
    },
    pattern: {
      value:
        //eslint-disable-next-line
        /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
      message: 'URL 형식에 맞춰 입력해주세요',
    },
  },
  linkAnnounce: {
    type: 'TEXT',
    notice:
      '자신을 잘 나타낼 수 있는 개인블로그, 노션, Github링크 등을 입력해주세요.\n' +
      '*디자이너 분들은 포트폴리오가 필수사항입니다.\n' +
      '*파일 용량이 50MB를 넘어갈 경우 클라우드/드라이브에 파일을 업로드 후 공유링크를 입력해주세요.',
    required: {
      value: false,
      message: '',
    },
  },
  recommender: {
    label: '추천인',
    placeholder: 'GDSC에 추천인이 있다면 입력해주세요',
    type: 'INPUT',
    required: {
      value: false,
      message: '',
    },
  },
};
