-- users 테이블 RLS 정책 수정
-- 기존 INSERT 정책 삭제
DROP POLICY IF EXISTS "Users can insert their own profile" ON users;

-- 새로운 INSERT 정책: 인증된 사용자가 자기 자신의 프로필만 생성 가능
CREATE POLICY "Users can insert their own profile" 
ON users 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = id);

-- 또는 회원가입 시에는 인증 전이므로 anon(익명) 사용자도 허용하려면:
-- DROP POLICY IF EXISTS "Users can insert their own profile" ON users;
-- CREATE POLICY "Anyone can insert user profile" 
-- ON users 
-- FOR INSERT 
-- TO anon, authenticated
-- WITH CHECK (true);

-- 정책 확인
SELECT * FROM pg_policies WHERE tablename = 'users';
