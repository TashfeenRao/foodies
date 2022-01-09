CREATE TABLE conversations (
    users_name VARCHAR(200),
    employer VARCHAR(250),
    message TEXT,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)