CREATE TABLE employers (
    company_name VARCHAR(250),
    company_address VARCHAR(250),
    -- company_revenue FLOAT(5,2) -- parenties are not neccessary; use with approximation allowed 123.12; not allowed 123.123, 12345.1
    company_revenue NUMERIC(5, 2),
    -- parenties are neccessary; used for storing exact values; allowed 123.12; not allowed 12345.1, 123.123;
    is_hiring BOOLEAN DEFAULT FALSE
);