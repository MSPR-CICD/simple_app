DROP TABLE achat;
DROP TABLE product;
DROP TABLE client;

CREATE TABLE client (
  id_client UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name varchar,
  created_at timestamp with time zone default now()
);

CREATE TABLE product (
  id_product UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name varchar,
  price float,
  tax float,
  created_at timestamp with time zone default now()
);

CREATE TABLE achat (
  id_client UUID,
  id_product UUID,
  created_at timestamp with time zone default now(),
  PRIMARY KEY (id_client, id_product)
);

ALTER TABLE achat ADD FOREIGN KEY (id_client) REFERENCES client (id_client);

ALTER TABLE achat ADD FOREIGN KEY (id_product) REFERENCES product (id_product);
