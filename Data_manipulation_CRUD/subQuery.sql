-- using previous query result as table for next query resul
-- select is_disputed, is_recurring from (select * from salesdata
-- where volumn > 1000) as base_result

-- multple subquery

-- select is_disputed from (select is_disputed, is_recurring from (select * from salesdata
-- where volumn > 1000) as base_result) as base_2

-- creating a view for query result than use it to query to get more related information
--create VIEW base_result as select * from salesdata where volumn > 1000;

select * from base_result;