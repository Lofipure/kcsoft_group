create database kcsoft charset=utf8;

/*用户表设计*/
create table user_table (
    /*象征性主键*/
    id int primary key auto_increment not null ,
    name varchar(32) not null ,
    student_id varchar(11) not null ,
    telephone_number varchar(11) not null ,
    college_number int not null ,
    major_number int not null ,
    class_number int not null ,
    group_selection int not null
) charset = utf8 , engine = InnoDB;

/*学院表设计*/
create table college_table (
    /*象征性主键*/
    college_id int primary key auto_increment not null ,
    college_code int not null ,
    college_name varchar(32) not null
)charset = utf8 , engine = InnoDB;

/*专业表设计*/
create table major_table(
    /*象征性主键*/
    major_id int primary key auto_increment not null ,
    major_code int not null ,
    major_name varchar(32) not null ,
    belong_college_code int not null
    /*
    belong_college_code代表该专业所属学院。
    与college_table中的college_code对应。
    */
)charset = utf8 , engine = InnoDB;

insert into college_table values (1,1,'计算机科学与技术学院'),(2,2,'通信与信息工程学院');

insert into major_table values (1,1,'软件工程',1),
                               (2,2,'计算机科学与技术',1),
                               (3,3,'网络工程',1),
                               (4,4,'数据与大数据',1),
                               (5,5,'信计',1),
                               (6,6,'物联网工程',2),
                               (7,7,'通信工程',2),
                               (8,8,'电子信息工程',2),
                               (9,9,'电子科学与技术',2),
                               (10,10,'智能科学与技术',2);
