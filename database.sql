create TABLE person (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  surname VARCHAR (255),
  email VARCHAR (255),
  number VARCHAR (255),
  role VARCHAR (255)
);

create TABLE post (
  id SERIAL PRIMARY KEY,
  img VARCHAR (255),
  title VARCHAR(255),
  razmer INTEGER,
  content VARCHAR (255),
  price INTEGER,
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES person (id)
);