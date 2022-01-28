-- select all the rows fulfilled <= 5 days after date creation

select * from salesdata
where date_fulfilled - date_created <= 5;