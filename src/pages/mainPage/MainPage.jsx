import styles from './mainPage.module.css';
import { useEffect, useState } from 'react';

import { movieList } from '../../apis/movie';

import PosterCard from '../../components/posterCard/PosterCard';
import searchGlass from '../../assets/pic/search_glass.svg';

const MainPage = () => {
  const [movies, setMovies] = useState([]);
  const data = [
    {
      'title_kor': '외계인 1부',
      'title_eng': '외계인 1부',
      'poster_url': 'https://image.tmdb.org/t/p/original/ynyN9hdxL5vq7GnSX8Fdz3TfoTE.jpg',
      'genre': 'SF, 액션, 판타지, 모험',
      'showtime': '142',
      'release_date': '2022-07-20',
      'plot':
        '2022년 현재, 가드와 썬더는 인간의 몸에 가두어진 외계인 죄수를 관리하며 지구에 살고 있다. 어느 날, 서울 상공에 우주선이 나타나고 형사 문도석은 기이한 광경을 목격하게 되는데.. 한편, 630년 전 고려시대 얼치기 도사 무륵과 천둥 쏘는 처자 이안이 엄청난 현상금이 걸린 신검을 차지하기 위해 서로를 속고 속이는 가운데 신검의 비밀을 찾는 두 신선 흑설과 청운, 가면 속의 자장도 신검 쟁탈전에 나선다. 그리고 우주선이 깊은 계곡에서 빛을 내며 떠오르는데…',
      'rating': '6.887',
      'director_name': '최동훈',
      'director_image_url': 'https://image.tmdb.org/t/p/original/sn3f2zwi0BCaV0hWeD4aRWqNX5l.jpg',
      'actors': [
        {
          'name': '류준열',
          'character': 'Muruk',
          'image_url': 'https://image.tmdb.org/t/p/original/5CYYuEiAocVRRhmrvUrithsCpil.jpg',
        },
        {
          'name': '김태리',
          'character': 'Ean',
          'image_url': 'https://image.tmdb.org/t/p/original/gFofVUeVlIvBJMUv7maHQwWdfsk.jpg',
        },
        {
          'name': '김우빈',
          'character': 'Guard / Thunder',
          'image_url': 'https://image.tmdb.org/t/p/original/AjMMxxWbTNdafyWuY41xAHFPVou.jpg',
        },
        {
          'name': '이하늬',
          'character': 'Min Gaelin',
          'image_url': 'https://image.tmdb.org/t/p/original/yayAwtzM4ucEzakcVL0MGchesoc.jpg',
        },
        {
          'name': '염정아',
          'character': 'Madam Black',
          'image_url': 'https://image.tmdb.org/t/p/original/5qIkgP0VcfF0YhO3bixzBtA1jH2.jpg',
        },
        {
          'name': '조우진',
          'character': 'Mr. Blue',
          'image_url': 'https://image.tmdb.org/t/p/original/7yoOqi1yV4q9MBLOLMfQDFqbYc7.jpg',
        },
        {
          'name': '김의성',
          'character': 'Jajang / Doctor',
          'image_url': 'https://image.tmdb.org/t/p/original/y7T2LJyorTK2NDk10yeTINWKrWR.jpg',
        },
        {
          'name': '소지섭',
          'character': 'Moon Do-seok',
          'image_url': 'https://image.tmdb.org/t/p/original/oEdXNo3ohtldtIW6DMFPpvMYW4g.jpg',
        },
      ],
    },
    {
      'title_kor': '탄생/재탄생',
      'title_eng': 'Birth/Rebirth',
      'poster_url': 'https://image.tmdb.org/t/p/original/zlEhsNfOKhbnfs5NTJ6zOZtoLBb.jpg',
      'genre': '공포, 미스터리, 스릴러, 드라마, SF',
      'showtime': '99',
      'release_date': '2023-08-18',
      'plot':
        '타인과의 교류 없이 혼자만의 삶을 살아가는 로즈는 주로 시체를 다루는 병리학 의사이다. 그녀에겐 오랫동안 남몰래 집착해 온 일이 있다. 바로 의학적으로 죽은 사람을 되살리는 것. 한편 여섯 살 난 딸만 바라보고 사는 산부인과 간호사 세실에게 그녀가 애지중지하던 딸이 사고로 사망하는 감당하기 힘든 불행이 닥친다. 그녀의 깊은 슬픔도 잠시, 병원에서 딸의 시신이 사라진 것을 알게 된 세실은 백방으로 죽은 딸을 찾아 다니다가 로즈를 만나게 된다. 당황한 로즈를 추궁하기 시작한 세실은 로즈가 딸의 시신을 자신의 집에 숨겨 놓고 있다는 것과 죽은 줄 알고 있던 딸이 살아 있다는 충격적인 사실을 알게 되는데...',
      'rating': '6.463',
      'director_name': 'Laura Moss',
      'director_image_url': 'https://image.tmdb.org/t/p/original/mWIDkjS5x5QeID94vFuBB40iTAW.jpg',
      'actors': [
        {
          'name': 'Marin Ireland',
          'character': 'Dr. Rose Casper',
          'image_url': 'https://image.tmdb.org/t/p/original/eIjze73FLJ0vVB3pTC3K9r3RA5i.jpg',
        },
        {
          'name': 'Judy Reyes',
          'character': 'Celie Morales',
          'image_url': 'https://image.tmdb.org/t/p/original/DQ8kIRHru9Zzy6CftVryHmIOJs.jpg',
        },
        {
          'name': 'A.J. Lister',
          'character': 'Lila Morales',
          'image_url': 'https://image.tmdb.org/t/p/original/mQkwj4gvClqXZHf3bQBRUkHz9ur.jpg',
        },
        {
          'name': 'Breeda Wool',
          'character': 'Emily Parker',
          'image_url': 'https://image.tmdb.org/t/p/original/hR8n5UMjxkYAm99fdyIoTd0GiHe.jpg',
        },
        {
          'name': '모니크 커넨',
          'character': 'Rita',
          'image_url': 'https://image.tmdb.org/t/p/original/lJgLQs7cfM49m8VzVviwxIByz76.jpg',
        },
        {
          'name': 'LaChanze',
          'character': 'Colleen',
          'image_url': 'https://image.tmdb.org/t/p/original/u1JSaJ3joDqiNXXa1Dy73PSwpqv.jpg',
        },
        {
          'name': 'Bryant Carroll',
          'character': 'Patron',
          'image_url': 'https://image.tmdb.org/t/p/original/8D6YiRSYdBl4q3JA8a7fnsZ0cpq.jpg',
        },
        {
          'name': 'Rachel Zeiger-Haag',
          'character': 'ER Doctor',
          'image_url': 'https://image.tmdb.org/t/p/original/wiWMXEHfy1mkra3itCCt5LODfe.jpg',
        },
      ],
    },
    {
      'title_kor': '그대들은 어떻게 살 것인가',
      'title_eng': '君たちはどう生きるか',
      'poster_url': 'https://image.tmdb.org/t/p/original/kmoScy628A6JWv8mmd2ofrYv16T.jpg',
      'genre': '애니메이션, 모험, 판타지',
      'showtime': '124',
      'release_date': '2023-07-14',
      'plot':
        '화재로 어머니를 잃은 11살 소년 ‘마히토’는 아버지와 함께 어머니의 고향으로 간다. 어머니에 대한 그리움과 새로운 보금자리에 적응하느라 힘들어하던 ‘마히토’ 앞에 정체를 알 수 없는 왜가리 한 마리가 나타나고, 저택에서 일하는 일곱 할멈으로부터 왜가리가 살고 있는 탑에 대한 신비로운 이야기를 듣게 된다. 그러던 어느 날, ‘마히토’는 사라져버린 새엄마 ‘나츠코’를 찾기 위해 탑으로 들어가고, 왜가리가 안내하는 대로 이세계(異世界)의 문을 통과하는데…!',
      'rating': '7.492',
      'director_name': '미야자키 하야오',
      'director_image_url': 'https://image.tmdb.org/t/p/original/ouhjt9KugzhWtdEyBPipihB3ic8.jpg',
      'actors': [
        {
          'name': 'Soma Santoki',
          'character': 'Mahito Maki (voice)',
          'image_url': 'https://image.tmdb.org/t/p/original/g4I9g3IRcbxqTqDuOtgG9QicvfB.jpg',
        },
        {
          'name': '스다 마사키',
          'character': 'Gray Heron (voice)',
          'image_url': 'https://image.tmdb.org/t/p/original/dYSUOemkmEfwDY2zIMNf2CaXr4q.jpg',
        },
        {
          'name': '시바사키 코우',
          'character': 'Kiriko (voice)',
          'image_url': 'https://image.tmdb.org/t/p/original/gcuJz8dbYjtgsL8CAWMjVd5R7B9.jpg',
        },
        {
          'name': '아이묭',
          'character': 'Lady Himi (voice)',
          'image_url': 'https://image.tmdb.org/t/p/original/e1KXoFxJREP3a09C5jpyShjrExT.jpg',
        },
        {
          'name': 'Yoshino Kimura',
          'character': 'Natsuko (voice)',
          'image_url': 'https://image.tmdb.org/t/p/original/fI0ALURUC3CO96fEb33f4iijlF.jpg',
        },
        {
          'name': '기무라 타쿠야',
          'character': 'Shoichi Maki (voice)',
          'image_url': 'https://image.tmdb.org/t/p/original/sswCg8kvFsgSaVJwcIKKe4K7jOe.jpg',
        },
        {
          'name': 'Keiko Takeshita',
          'character': 'Izumi (voice)',
          'image_url': 'https://image.tmdb.org/t/p/original/eEZHjyUzzoI1DKxeAennDJKUgWh.jpg',
        },
        {
          'name': '風吹ジュン',
          'character': 'Utako (voice)',
          'image_url': 'https://image.tmdb.org/t/p/original/nKGf08qfeng3KjssqcZU0nxMHtM.jpg',
        },
      ],
    },
    {
      'title_kor': '스페이스 커뎃',
      'title_eng': 'Space Cadet',
      'poster_url': 'https://image.tmdb.org/t/p/original/7rda0SRuIGA8BDC8FTYHAOyXaRj.jpg',
      'genre': '코미디, 로맨스',
      'showtime': '110',
      'release_date': '2024-07-04',
      'plot':
        "플로리다주에 사는 파티걸 렉스(로버츠)는 우연히 나사 우주 프로그램 훈련에 참가한다. 다른 지원자들보다 똑똑하진 않지만 진심과 용기만은 뒤지지 않는 렉스는 결국 나사 우주 프로그램의 유일한 희망이 되어 버린다. 티퍼니 '렉스' 심슨(엠마 로버츠)은 늘 우주여행을 꿈꿔 왔다. 그녀의 '조작된' 지원서가 치열한 경쟁을 자랑하는 나사의 우주 비행사훈련 프로그램에 전달된다. 벅찬 상황에서 빠른 눈치와 용기, 그리고 최고 우수생이 되겠다는 의지에 의존할 수밖에 없는 이 플로리다 걸이 들키지 않고 무사히 훈련을 마친 후 우주에 나갈 수 있을까?",
      'rating': '5.16',
      'director_name': '에마 로버츠',
      'director_image_url': 'https://image.tmdb.org/t/p/original/uywAcH9PkPgEF1tOBlNPqeqhVZL.jpg',
      'actors': [
        {
          'name': '에마 로버츠',
          'character': 'Rex Simpson',
          'image_url': 'https://image.tmdb.org/t/p/original/uywAcH9PkPgEF1tOBlNPqeqhVZL.jpg',
        },
        {
          'name': 'Tom Hopper',
          'character': "Logan O'Leary",
          'image_url': 'https://image.tmdb.org/t/p/original/qS8F31xn6ZoNBTOvcXZfWewgma2.jpg',
        },
        {
          'name': 'Poppy Liu',
          'character': 'Nadine Cai',
          'image_url': 'https://image.tmdb.org/t/p/original/i36QkUChZN7K8BQa1ReaZHes6L4.jpg',
        },
        {
          'name': '가브리엘 유니온',
          'character': 'Pam Proctor',
          'image_url': 'https://image.tmdb.org/t/p/original/toeSCybsYufRKfgz77AKy4C8axD.jpg',
        },
        {
          'name': 'Kuhoo Verma',
          'character': 'Violet Marie Vislawski',
          'image_url': 'https://image.tmdb.org/t/p/original/bQS0RGeUCj705uaeIUa5EDZR0zZ.jpg',
        },
        {
          'name': 'Desi Lydic',
          'character': 'Dr. Stacy Kellogg',
          'image_url': 'https://image.tmdb.org/t/p/original/7Q2GJgsu6P4S0EIHxANpE4mW148.jpg',
        },
        {
          'name': 'Sebastián Yatra',
          'character': 'Toddrick Spencer',
          'image_url': 'https://image.tmdb.org/t/p/original/697bOlx0W0jf3lOVNVoAQJwNST.jpg',
        },
        {
          'name': 'Sam Robards',
          'character': "Rex's Dad (Calvin Simpson)",
          'image_url': 'https://image.tmdb.org/t/p/original/AqYRpRgNqQopOU5YGfSFVSuIyl9.jpg',
        },
      ],
    },
    {
      'title_kor': '존 윅 4',
      'title_eng': 'John Wick: Chapter 4',
      'poster_url': 'https://image.tmdb.org/t/p/original/h3LsdSBzhRnBebz4BTpAhh63PD3.jpg',
      'genre': '액션, 스릴러, 범죄',
      'showtime': '170',
      'release_date': '2023-03-22',
      'plot':
        '죽을 위기에서 살아난 존 윅은 최고 회의를 쓰러트릴 방법을 찾아낸다. 비로소 완전한 자유의 희망을 보지만, 빌런 그라몽 후작과 전 세계의 최강 연합은 존 윅의 오랜 친구까지 적으로 만들어 버리고, 새로운 위기에 놓인 존 윅은 최후의 반격을 준비하는데...',
      'rating': '7.742',
      'director_name': 'Derek Kolstad',
      'director_image_url': 'https://image.tmdb.org/t/p/original/mi6jxGxkIPjEKNSu9BquWoFMTZy.jpg',
      'actors': [
        {
          'name': '키아누 리브스',
          'character': 'John Wick',
          'image_url': 'https://image.tmdb.org/t/p/original/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg',
        },
        {
          'name': '견자단',
          'character': 'Caine',
          'image_url': 'https://image.tmdb.org/t/p/original/hTlhrrZMj8hZVvD17j4KyAFWBHc.jpg',
        },
        {
          'name': '빌 스카스가드',
          'character': 'Marquis',
          'image_url': 'https://image.tmdb.org/t/p/original/7PSShz1Ht0qK2kqzC0jC31ktKPI.jpg',
        },
        {
          'name': '이언 맥셰인',
          'character': 'Winston',
          'image_url': 'https://image.tmdb.org/t/p/original/rteBJYNgD1yGsHg2HGZAIrYHz1t.jpg',
        },
        {
          'name': '로렌스 피시번',
          'character': 'Bowery King',
          'image_url': 'https://image.tmdb.org/t/p/original/iwx7h0AfWMm9K4sMmhru3ShSra.jpg',
        },
        {
          'name': '랜스 레딕',
          'character': 'Charon',
          'image_url': 'https://image.tmdb.org/t/p/original/22mVtEXZbpt0J7S0LhIhdkfRrZV.jpg',
        },
        {
          'name': '클랜시 브라운',
          'character': 'Harbinger',
          'image_url': 'https://image.tmdb.org/t/p/original/9RgzFqbmWBLVfq9wvyDo5UW8VT1.jpg',
        },
        {
          'name': '사나다 히로유키',
          'character': 'Shimazu',
          'image_url': 'https://image.tmdb.org/t/p/original/SOwDxhGnRccP2lAtssQ7TxCzOe.jpg',
        },
      ],
    },
    {
      'title_kor': '나쁜 녀석들',
      'title_eng': 'Bad Boys',
      'poster_url': 'https://image.tmdb.org/t/p/original/kNwqxVmtylfpnrcIjJuEuVwIHQC.jpg',
      'genre': '액션, 코미디, 범죄, 스릴러',
      'showtime': '119',
      'release_date': '1995-04-07',
      'plot':
        '멋쟁이 총각 마이크 라우리(윌 스미스)와 공처가이며 세 아이 아버지인 마커스 버넷(마틴 로렌스)은 마이애미의 마약수사반 경찰이다. 각각 바람둥이와 착실한 가장인 이들은 서로 대조적인 성격이지만 손발이 잘 맞는 파트너이다. 그러던 중 72시간 안에 경찰서 증거물 보관 창고에서 도둑 맞은 헤로인을 찾아오라는 마약반 반장의 명령을 받은 이들에게 전화 한 통이 걸려 온다. 전화를 건 여자가 원하는 사람은 라우리였지만 대신 버젯이 라우리인 척 전화를 받고 라우리 행세를 한다. 이 때부터 사건이 꼬이기 시작하는데, 경찰서 증거물 보관창고에서 헤로인이 사라진 사건 이후 섹시한 목격자가 나타나면서 사건의 꼬임은 더욱 심화된다.',
      'rating': '6.809',
      'director_name': 'Lucas Foster',
      'director_image_url': 'https://image.tmdb.org/t/p/original/u29VrA7oJKqUdp5gfPSDxTHnfH2.jpg',
      'actors': [
        {
          'name': '윌 스미스',
          'character': 'Mike Lowrey',
          'image_url': 'https://image.tmdb.org/t/p/original/5vtHreCntxLx5uC36ZA5ZXwfTjL.jpg',
        },
        {
          'name': '마틴 로런스',
          'character': 'Marcus Burnett',
          'image_url': 'https://image.tmdb.org/t/p/original/kE78jD0UC3PvJvPlqbbHLuUUVr5.jpg',
        },
        {
          'name': '테아 레오니',
          'character': 'Julie Mott',
          'image_url': 'https://image.tmdb.org/t/p/original/1Jb6J8Q6zW8IAWMjrCd3c0NIlKL.jpg',
        },
        {
          'name': 'Tchéky Karyo',
          'character': 'Fouchet',
          'image_url': 'https://image.tmdb.org/t/p/original/jrtGiLYaALwDZgF39Hlgb8O1XZ1.jpg',
        },
        {
          'name': '조 판톨리아노',
          'character': 'Captain Howard',
          'image_url': 'https://image.tmdb.org/t/p/original/cXMOad9KKVBK1lg8EjEbcNPn1OT.jpg',
        },
        {
          'name': 'Theresa Randle',
          'character': 'Theresa Burnett',
          'image_url': 'https://image.tmdb.org/t/p/original/myBU9qG6wXHJfYF9cl07rvQmhUB.jpg',
        },
        {
          'name': 'Marg Helgenberger',
          'character': 'Alison Sinclair',
          'image_url': 'https://image.tmdb.org/t/p/original/wPfXSAsk1l9Ry2sqN1Ei8GwjI9E.jpg',
        },
        {
          'name': 'Nestor Serrano',
          'character': 'Detective Sanchez',
          'image_url': 'https://image.tmdb.org/t/p/original/eHc35FzO1EfoyqYa1YQ67snfEnR.jpg',
        },
      ],
    },
    {
      'title_kor': '고스트버스터즈: 오싹한 뉴욕',
      'title_eng': 'Ghostbusters: Frozen Empire',
      'poster_url': 'https://image.tmdb.org/t/p/original/mGzSIfzmcf9H91DS06cnka1SYrP.jpg',
      'genre': '판타지, 모험, 코미디',
      'showtime': '115',
      'release_date': '2024-03-20',
      'plot':
        '무더운 여름의 뉴욕의 어느 날, 고대 유물 속 깨어난 데스칠로 인해 정체불명의 냉기가 몰려오고 마침내 도시는 얼어붙고 만다. 유령을 퇴치하는 그루버슨과 라이즈 버스터즈 멤버들은 얼어붙은 세상을 깨부수기 위해 유령 군단을 쫓기 시작하는데…',
      'rating': '6.689',
      'director_name': '제이슨 라이트만',
      'director_image_url': 'https://image.tmdb.org/t/p/original/eNNN1dwfB6b6p2hoEG1xyoa7H2p.jpg',
      'actors': [
        {
          'name': '맥케나 그레이스',
          'character': 'Phoebe Spengler',
          'image_url': 'https://image.tmdb.org/t/p/original/olgpCsT5HcSUu56Oyl8YOSXAjsA.jpg',
        },
        {
          'name': '폴 러드',
          'character': 'Gary Grooberson',
          'image_url': 'https://image.tmdb.org/t/p/original/6jtwNOLKy0LdsRAKwZqgYMAfd5n.jpg',
        },
        {
          'name': '캐리 쿤',
          'character': 'Callie Spengler',
          'image_url': 'https://image.tmdb.org/t/p/original/kbuScim9S6q2UKP1jCpp5UZB0P5.jpg',
        },
        {
          'name': '핀 울프하드',
          'character': 'Trevor Spengler',
          'image_url': 'https://image.tmdb.org/t/p/original/9uoEc9p5fPMSjZgW5hMxPK6L2eX.jpg',
        },
        {
          'name': '댄 애크로이드',
          'character': 'Ray Stantz',
          'image_url': 'https://image.tmdb.org/t/p/original/iVMmeVJx8IpCEjlGBZWzIWvX5Qo.jpg',
        },
        {
          'name': '쿠마일 난지아니',
          'character': 'Nadeem Razmaadi',
          'image_url': 'https://image.tmdb.org/t/p/original/9EyrK1Cv7ey1h1GgmsVAOn45w6G.jpg',
        },
        {
          'name': '패튼 오즈월트',
          'character': 'Dr. Hubert Wartzki',
          'image_url': 'https://image.tmdb.org/t/p/original/ljQvjbPmcIAl205Lb2Mu4CW8WO7.jpg',
        },
        {
          'name': '셀레스트 오코너',
          'character': 'Lucky Domingo',
          'image_url': 'https://image.tmdb.org/t/p/original/jI3pNOhj9Gr7ym9cUcv8vsI0lCF.jpg',
        },
      ],
    },
  ];

  useEffect(() => {
    setMovies(data);
  }, []);

  return (
    <div className={styles.main__wrapper}>
      <div className={styles.searchContainer}>
        <input type="text" className={styles.main__input} placeholder="보고 싶은 영화를 검색하세요"/>
        <div className={styles.searchIcon}>
          <img src={searchGlass} alt="Search" />
        </div>
      </div>
      <h1>금주의 영화</h1>
      <section className={styles.main__items}>
        {movies.map((items) => (
          <PosterCard props={items} />
        ))}
      </section>
    </div>
  );
};

export default MainPage;