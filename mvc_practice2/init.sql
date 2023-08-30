-- 데이터베이스 목록 확인
SHOW databases;

-- codingon 데이터베이스 선택
USE sessac2;

-- codingon 데이터베이스의 테이블 목록 확인
SHOW tables;

-- 이미 user 테이블이 있다면 기존 테이블 지움
DROP TABLE IF EXISTS user;

-- TODO: user 데이터베이스 생성
create table user (
	userid varchar(20) primary key,
    name varchar(20) not NULL,
    pw varchar(20) not null
);
-- user 데이블 데이터 추가
INSERT INTO user (userid, name, pw) VALUES ('sean', 'sean', '1234');
INSERT INTO user (userid, name, pw) VALUES ('test', 'test', '1234');
INSERT INTO user (userid, name, pw) VALUES ('apple', 'apple', '1234');
INSERT INTO user (userid, name, pw) VALUES ('hello', 'hello', '1234');

-- user 테이블 구조 보기
DESC user; 

-- 권한 부여
create user 'user'@'%' identified with mysql_native_password by '1234';
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;

-- user 테이블 데이터 조회
SELECT * FROM user;