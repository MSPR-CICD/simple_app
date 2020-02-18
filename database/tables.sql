DROP TABLE purchase;
DROP TABLE product;
DROP TABLE client;

CREATE TABLE client (
  id_client UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE product (
  id_product UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL,
  price FLOAT NOT NULL,
  tax FLOAT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE purchase (
  id_purchase UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  id_client UUID NOT NULL,
  id_product UUID NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE purchase ADD FOREIGN KEY (id_client) REFERENCES client (id_client);

ALTER TABLE purchase ADD FOREIGN KEY (id_product) REFERENCES product (id_product);
