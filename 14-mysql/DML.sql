create table customer (
	custid CHAR(10) primary key,
    custname VARCHAR(10) NOT NULL,
    addr CHAR(10) NOT NULL,
    phone CHAR(11),
    birth date
);
desc customer;

-- INSERT 추가
insert into customer (custid, custname, addr, phone, birth) 
	values ('lucky', '강해원', '미국 뉴욕', '01022223333', '2002-03-05');
insert into customer (addr, phone, birth, custid, custname) 
	values ('대한민국 부산', '01098765432', '2007-04-28', 'wow', '이지은');
    
-- 속성을 지정하지 않는다면, 컬럼이 정의된 순서대로 입력
insert into customer values ('happy', '최시은', '일본 오키나와', '01033331234', '1970-10-31');

-- 여러 튜플 동시 추가
insert into customer values 
	 ('asdf', '강세희', '일본 오키나와', '01033331235', '1970-10-31'),
      ('sdfg', '윤지성', '일본 오키나와', '01033331236', '1970-10-31'),
       ('apple', '이재은', '일본 오키나와', '01033331277', '1970-10-31');

-- SELECT 조회
select * from customer;

-- UPDATE 수정
-- custid가 apple인 고객의 주소를 대한민국 서울로 변경
update customor set addr = '대한민국 서울' where custid = 'apple';
