-- DROP table users;
-- DROP table conversations;
-- DROP table employers;



CREATE table users (
    id serial primary key,
    -- id INT PRIMARY KEY AUTO_INCREMENT, -- Mysql
    full_name varchar(300) NOT NULL,
    yearly_salery INT CHECK(yearly_salery > 0),
    current_status estatus NOT null
);

CREATE TABLE employers (
    id serial primary key,
    -- id INT PRIMARY KEY AUTO_INCREMENT, mysql
    company_name varchar(300) NOT NULL,
    company_address varchar(300) NOT NULL,
    company_revenue float check(company_revenue > 0),
    is_hiring BOOLEAN Default FALSE
);

CREATE table converstations (
    id serial primary key,
    -- id INT PRIMARY KEY AUTO_INCREMENT,
    user_id int,
    employer_id int,
    message text NOT NULL,
    date timestamp Default CURRENT_TIMESTAMP
);