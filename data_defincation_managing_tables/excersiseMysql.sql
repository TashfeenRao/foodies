-- 1 step
CREATE DATABASE shops;

-- 2 3 step

CREATE TABLE products (
    product_name VARCHAR(300),
    product_price NUMERIC,
    product_description TEXT,
    product_img VARCHAR(500),
    stock_ammount INT
);

-- 4 step

INSERT INTO products (product_name, product_price, product_description,
product_img,stock_ammount) VALUES (
    'shoe2', 23.432, 'this shoe is made of leather', 'img.png', 32
);

-- 5 step 

ALTER TABLE products 
MODIFY COLUMN product_name VARCHAR(300) NOT NULL,
MODIFY COLUMN product_price NUMERIC(10,2) NOT NULL CHECK(product_price > 0),
MODIFY COLUMN product_description TEXT NOT NULL,
MODIFY COLUMN product_img VARCHAR(500) NOT NULL;
modify COLUMN stock_ammount int NOT NULL,
ADD CONSTRAINT NOTNEGATIVESTOCK CHECK(stock_ammount > 0);

-- 6 step 

ALTER TABLE products 
ADD COLUMN id INT PRIMARY KEY AUTO_INCREMENT;