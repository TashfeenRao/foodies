-- SELECT * from salesdata 
-- where customer_name = 'tashi';

--  it starts comparing from first character and inlude the result
-- which is greater than that character ex b > a so all name start with b will be
--  included in result
select * from salesdata
WHERE customer_name > 'company A'