create table member (
    id VARCHAR(20) PRIMARY KEY,
    name VARCHAR(5) not NULL,
    age int,
    gender VARCHAR(2) not NULL,
    email VARCHAR(50),
    promotion VARCHAR(2) DEFAULT 'x'
)

desc member;

ALTER Table member MODIFY id VARCHAR(10);
ALTER Table member drop age;
ALTER Table member add interest varchar(100);

CREATE Table user (
    id VARCHAR(10) not null PRIMARY KEY,
    pw VARCHAR(20) not NULL,
    name VARCHAR(5) not NULL,
    gender ENUM('F', 'M', '') DEFAULT '',
    birthday Date not null,
    age int(3) not null DEFAULT 0
 );

insert into user values
    ('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33),
    ('sexysung','87awjkdf','성춘향','F','1992-03-31',31),
    ('power70','qxur8sda','변사또','M','1970-05-02',53),
    ('hanjo','jk48fn4','한조','M','1984-10-18',39),
    ('widowmaker','38ewifh3','위도우','F','1976-06-27',47),
    ('davadva','k3f3ah','송하나','F','2001-06-03',22),
    ('jungkrat','4ifha7f','정크랫','M','1999-11-11',24);

select * from user;

select * from user ORDER BY birthday asc;
select * from user where gender like "M"  ORDER BY name desc;
select id, name from user where birthday BETWEEN '1990-01-01' and '1999-12-31';
select * from user where birthday like '____-06%' ORDER BY birthday asc;
select * from user where gender like 'M' and birthday BETWEEN '1970-01-01' and '1979-12-31';
select * from user ORDER BY age desc LIMIT 3;
select * from user where age >= 25 and age <= 50;
update user set pw = '12345678' where id like 'hong1234';
delete from user where id like 'jungkrat';