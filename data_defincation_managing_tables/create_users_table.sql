CREATE TYPE employment_status AS ENUM('emplyed', 'unemplyed', 'self-emplyed');
-- postgres sql syntaxt
CREATE TABLE users (
    full_name VARCHAR(200),
    current_salery INT,
    current_status employment_status -- current_status ENUM('emplyed', 'unemplyed', 'self-emplyed') --  mysql syntax
);