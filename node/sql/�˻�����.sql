-- 기존 데이터 삭제
-- DELETE FROM nosell;
-- 불매 목록 가져오기
SELECT * FROM nosell;
-- name 내림차순 순서대로 목록 가져오기 
SELECT * FROM nosell 
ORDER BY name ASC;
-- 위의 결과 집합에서 상위 10
SELECT * FROM nosell 
ORDER BY name ASC LIMIT 0, 10;
-- 위에서 그다음 10개
-- (페이지 번호 - 1 )*한페이지에서 보이는 데이터개수
-- 0, 10, 20, 30, ...
SELECT * FROM nosell 
ORDER BY name ASC LIMIT 10, 10;
-- 이름 검색 : 해당 단어가 포함 되어 있으면 다 찾아라
SELECT * FROM nosell
WHERE NAME LIKE '%스파%' or chgName LIKE '%스파%' or hash LIKE '%스파%'
ORDER BY name ASC;
-- 카데고리 중복제거해서 cate명만 출력하시오
SELECT cate FROM nosell;
SELECT cate FROM nosell GROUP BY cate;
SELECT distinct cate FROM nosell;
-- 카테고리별로 데이터 보기
SELECT * FROM nosell
WHERE cate='생활'
ORDER BY name ASC;
-- 상품 번호로 상세 정보 가져오기
SELECT * FROM nosell WHERE NO=116;






