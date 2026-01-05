-- Products 테이블에 더미 데이터 삽입

INSERT INTO products (product_name, category, description, price, images)
VALUES 
  (
    '무선 블루투스 이어폰',
    '전자기기',
    '고품질 사운드와 긴 배터리 수명을 자랑하는 무선 이어폰입니다. 노이즈 캔슬링 기능 지원.',
    89000,
    ARRAY['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400', 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400']
  ),
  (
    '스마트 워치',
    '전자기기',
    '건강 모니터링과 알림 기능이 있는 최신 스마트 워치입니다.',
    250000,
    ARRAY['https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400', 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400']
  ),
  (
    '기계식 키보드',
    '전자기기',
    '타이핑이 즐거워지는 RGB 백라이트 기계식 키보드입니다.',
    120000,
    ARRAY['https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400', 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400']
  ),
  (
    '게이밍 마우스',
    '전자기기',
    '고성능 센서와 커스터마이징 가능한 버튼이 있는 게이밍 마우스입니다.',
    65000,
    ARRAY['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400', 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400']
  ),
  (
    '노트북 스탠드',
    '액세서리',
    '인체공학적 디자인의 알루미늄 노트북 스탠드입니다.',
    35000,
    ARRAY['https://images.unsplash.com/photo-1625225233840-695456021cde?w=400']
  ),
  (
    'USB-C 멀티 허브',
    '액세서리',
    'HDMI, USB 3.0, SD 카드 리더가 포함된 7-in-1 멀티 허브입니다.',
    45000,
    ARRAY['https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400']
  ),
  (
    '무선 충전 패드',
    '액세서리',
    '빠른 무선 충전을 지원하는 슬림한 디자인의 충전 패드입니다.',
    28000,
    ARRAY['https://images.unsplash.com/photo-1591290619762-c588f7e8e0a4?w=400']
  ),
  (
    '4K 웹캠',
    '전자기기',
    '화상회의와 스트리밍에 최적화된 4K 해상도 웹캠입니다.',
    95000,
    ARRAY['https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400']
  ),
  (
    '블루라이트 차단 안경',
    '액세서리',
    '장시간 스크린 작업에 적합한 블루라이트 차단 안경입니다.',
    32000,
    ARRAY['https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400']
  ),
  (
    '휴대용 SSD 1TB',
    '전자기기',
    '빠른 전송 속도의 휴대용 외장 SSD 1TB입니다.',
    135000,
    ARRAY['https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400']
  ),
  (
    '책상 정리 패드',
    '액세서리',
    '대형 사이즈의 가죽 책상 정리 패드입니다.',
    42000,
    ARRAY['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=400']
  ),
  (
    'LED 모니터 라이트',
    '액세서리',
    '눈의 피로를 줄여주는 스마트 모니터 라이트입니다.',
    58000,
    ARRAY['https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=400']
  ),
  (
    '무선 프레젠터',
    '액세서리',
    '발표에 필수적인 레이저 포인터 기능이 있는 무선 프레젠터입니다.',
    38000,
    ARRAY['https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=400']
  ),
  (
    '노트북 파우치',
    '액세서리',
    '13-15인치 노트북을 보호할 수 있는 방수 파우치입니다.',
    25000,
    ARRAY['https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=400']
  ),
  (
    '스마트폰 거치대',
    '액세서리',
    '각도 조절이 가능한 알루미늄 스마트폰 거치대입니다.',
    18000,
    ARRAY['https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400']
  );

-- 데이터 확인
SELECT product_name, category, price FROM products ORDER BY created_at DESC LIMIT 5;
