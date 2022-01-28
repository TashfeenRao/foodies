-- by default it will order by ascending order meand smal value to bigger value
-- select * from salesdata
-- order by volumn;

-- it order by volumn bigger value first smallest value at end
-- select * from salesdata 
-- order by volumn DESC;

-- it will limit result to number provided
-- select * from salesdata
-- ORDER BY volumn DESC limit 10;

-- we can add condtion first to filter result to our desire than we can ORDER
-- select * from salesdata
-- where date_fulfilled is not null and is_disputed is false
-- ORDER BY volumn DESC limit 10;

-- we can add offset to skipping the rows before that offset number

select * from salesdata
ORDER by volumn desc limit 10 OFFSET 1;