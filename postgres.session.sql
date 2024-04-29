CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstName TEXT,
    lastName TEXT,
    email TEXT,
    userName TEXT,
    password_hash TEXT NOT NULL,
    role TEXT,
    createdAt TIMESTAMP NOT NULL,
    createdBy INTEGER,
    updatedAt TIMESTAMP NOT NULL,
    updatedBy INTEGER
);