-- select * from salesdata where volumn > 1000;

-- SELECT * from salesdata
-- where is_recurring is FALSE;

-- combine condtions
-- SELECT * from salesdata
-- WHERE is_disputed is TRUE and volumn > 4000;


-- handling ranges

-- SELECT * from salesdata
-- WHERE date_created > '2021-10-01';

-- SELECT * from salesdata 
-- WHERE date_created > '2021-11-01' AND date_created < '2022-12-31'

-- SELECT * from salesdata
-- where date_created BETWEEN '2021-11-01' AND '2022-12-31';

-- SELECT * from salesdata
-- WHERE (date_created BETWEEN '2021-11-10' and '2022-09-09')
--  and (date_fulfilled BETWEEN '2021-11-10' and '2022-11-11'); 