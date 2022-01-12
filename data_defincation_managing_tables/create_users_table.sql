CREATE TYPE estatus AS ENUM('employed', 'unemployed', 'self-employed');
-- postgres sql syntaxt
CREATE TABLE users (
    full_name VARCHAR(200),
    current_salery INT,
    current_status estatus -- current_status ENUM('emplyed', 'unemplyed', 'self-emplyed') --  mysql syntax
);