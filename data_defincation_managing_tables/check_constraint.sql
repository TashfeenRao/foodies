
UPDATE users set current_salery = null WHERE full_name = 'zeeshan';
ALTER TABLE users
ADD CONSTRAINT yearly_salery_positive CHECK(current_salery > 0)