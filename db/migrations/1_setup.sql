DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id serial PRIMARY KEY,
    username varchar(100) NOT NULL UNIQUE,
    email varchar(100) NOT NULL UNIQUE,
    is_verified boolean NOT NULL,
    name varchar(100) NOT NULL,
    password varchar(255) NOT NULL,
    mind_state varchar(100),
    banned boolean
);

