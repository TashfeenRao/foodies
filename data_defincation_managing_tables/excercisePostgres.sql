-- 1 step 

CREATE DATABASE shops;

-- 2 3 step 

CREATE TABLE products (product_name VARCHAR(300), product_description TEXT,
product_price NUMERIC(10,2), product_img VARCHAR(500), stock_amount INT)

-- 4 step 

INSERT INTO products 
(product_name,product_price,product_img,stock_amount,product_description) 
VALUES 
('jacket', 120.99999,'img.jpeg',12,'this jacket is in red color with designer intake')


-- 5 step 
ALTER TABLE products 
ALTER COLUMN product_name set NOT NULL,
ALTER COLUMN product_price set NOT NULL,
add CONSTRAINT product_positve_value check(product_price > 0),

ALTER COLUMN product_img set NOT NULL,
ALTER COLUMN product_description set NOT NULL;
ADD CONSTRAINT notNegativeStockValue check(stock_amount > 0);

-- 6 step 

ALTER TABLE products 
ADD COLUMN ID serial PRIMARY key;