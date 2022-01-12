-- Mysql syntax

-- ALTER TABLE users 
-- MODIFY COLUMN full_name VARCHAR(300) NOT NULL,
-- MODIFY COLUMN current_status ENUM('employed', 'unemployed', 'self-employed') NOT NULL;


-- post gres sql syntax
ALTER TABLE users 
ALTER COLUMN full_name set NOT NULL,
alter COLUMN current_status set NOT NULL;
