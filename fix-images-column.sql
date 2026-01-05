-- images 컬럼을 text에서 text[] (배열)로 변경

ALTER TABLE products 
ALTER COLUMN images TYPE text[] USING string_to_array(images, ',');

-- 또는 기존 데이터를 모두 삭제하고 새로 시작하려면:
-- DELETE FROM products;
-- ALTER TABLE products ALTER COLUMN images TYPE text[];

-- 변경 확인
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'products' AND column_name = 'images';
