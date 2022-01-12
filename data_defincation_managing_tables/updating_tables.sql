-- mysql update table syntax
ALTER TABLE employers
MODIFY COLUMN company_revenue float;
ALTER TABLE users
MODIFY COLUMN full_name varchar(300) -- mysql syntax
ALTER TABLE conversations
MODIFY COLUMN users_name varchar(300)

-- postgres sql syntax
alter table conversations
alter COLUMN users_name
set data type varchar(300);
ALTER TABLE employers
ALTER COLUMN company_revenue
set DATA type float;
ALTER TABLE users
alter COLUMN full_name
set data type varchar(300);