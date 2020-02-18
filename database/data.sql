INSERT INTO client(id_client, name) 
VALUES 
  ('f5a632f2-ce00-40de-a7a4-4fbae5c439c2','Service Informatique'), 
  ('fab958e7-e808-41e5-b558-7e3f28ec5d53', 'Service Comptabilité'), 
  ('45be99d5-7572-4250-afd9-2d32edacb804','Service Client');

INSERT INTO product(id_product, name, price, tax) 
VALUES 
  ('c0da6e3f-4c91-4f13-ba06-3c553e3ce40c', 'Ordinateur', 1000.00, 0.20),
  ('7883d231-c4b8-46bf-b126-339fd1e0d2c2', 'Bureau', 250.00, 0.20),
  ('7266d996-4a2d-479c-97f7-aa58466e65b7', 'Clavier', 25.00, 0.15),
  ('1a0ada67-075e-4cd3-a53e-ae114ad02c70', 'Chaise de bureau', 30.00, 0.21);

INSERT INTO purchase(id_purchase, id_client, id_product)
VALUES
  ('afd4e874-50f1-437a-8ceb-a92b1c0bef69', 'f5a632f2-ce00-40de-a7a4-4fbae5c439c2', 'c0da6e3f-4c91-4f13-ba06-3c553e3ce40c'),
  ('915c8b11-f517-47f5-bfef-f2f04f4c868e', 'f5a632f2-ce00-40de-a7a4-4fbae5c439c2', 'c0da6e3f-4c91-4f13-ba06-3c553e3ce40c'),
  ('2ee8af57-6180-44ed-ad74-ad8ec6b9b10f', 'f5a632f2-ce00-40de-a7a4-4fbae5c439c2', '7266d996-4a2d-479c-97f7-aa58466e65b7'),
  ('e6e4a449-5d5a-4867-bff2-beff33dc5ed9', 'f5a632f2-ce00-40de-a7a4-4fbae5c439c2', '7266d996-4a2d-479c-97f7-aa58466e65b7'),
  ('06037843-395f-4962-82e2-b9d0e8779c57', 'f5a632f2-ce00-40de-a7a4-4fbae5c439c2', '7266d996-4a2d-479c-97f7-aa58466e65b7'),
  ('e12ec5b6-9502-4086-8d8b-1db9d468f2f7', 'fab958e7-e808-41e5-b558-7e3f28ec5d53', '7883d231-c4b8-46bf-b126-339fd1e0d2c2'),
  ('8d9a4551-57b2-4d92-ba68-cef1d060766a', 'fab958e7-e808-41e5-b558-7e3f28ec5d53', '7883d231-c4b8-46bf-b126-339fd1e0d2c2'),
  ('9478fd9a-009e-40ef-9e8c-4bc64f1a13f4', '45be99d5-7572-4250-afd9-2d32edacb804', '1a0ada67-075e-4cd3-a53e-ae114ad02c70');