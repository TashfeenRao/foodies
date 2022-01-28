-- CREATE TABLE salesData (
--    -- MY SQL id INT PRIMARY KEY AUTO_INCREMENT,
--    id SERIAL PRIMARY key,
--     product_name varchar(255) NOT NULL,
--     date_created DATE DEFAULT (CURRENT_DATE),
--     date_fulfilled DATE,
--     customer_name varchar(255) NOT NULL,
--     volumn NUMERIC NOT NULL check (volumn > 0),
--     is_recurring BOOLEAN DEFAULT FALSE,
--     is_disputed BOOLEAN DEFAULT FALSE
-- );

ALTER TABLE salesdata 
RENAME column volumn to volume;