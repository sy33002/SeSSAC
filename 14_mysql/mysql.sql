-- Active: 1692936461453@@127.0.0.1@3306@sessac2
create DATABASE sessac2 character set utf8mb4 collate utf8mb4_unicode_ci;
use sessac2;
drop table visitor;
create table visitor (
	id int primary key auto_increment,
    name VARCHAR(10) NOT NULL,
    comment VARCHAR(20) NOT NULL,
);
desc visitor;

insert into visitor values(null, 's', 's');

insert into visitor values (1, 'aefgaeg', '안유진');
insert into visitor values (2, 'asdfasdf', '장원영');
insert into visitor values (3, 'banan', '리즈');
SELECT * from visitor;

-- user라는 새로운 계정(mysql에 접속 가능한 계정) 생성
create user 'user'@'%' identified with mysql_native_password by '1234';

--user 계정에 대해서 모든 권한 부여 = (DCL 중에서 grant)
-- *.* 모든 데이터베이스의 모든 테이블이라는 뜻
grant all privileges on *.* to 'user'@'%' with grant option;

-- mysql 캐시 새로고침
flush PRIVILEGES;



