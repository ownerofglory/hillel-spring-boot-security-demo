CREATE TABLE t_category (
  id bigint NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE t_customer (
  id bigint NOT NULL AUTO_INCREMENT,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  name varchar(255) DEFAULT NULL,
PRIMARY KEY (id)
);

CREATE TABLE t_product (
  price double DEFAULT NULL,
  quantity int DEFAULT NULL,
  category_id bigint DEFAULT NULL,
  id bigint NOT NULL AUTO_INCREMENT,
  description varchar(255) DEFAULT NULL,
  image_url varchar(255) DEFAULT NULL,
  title varchar(255) NOT NULL,
  PRIMARY KEY (id),
CONSTRAINT FK_category_product FOREIGN KEY (category_id) REFERENCES t_category (id)
);

CREATE TABLE t_cart (
  customer_id bigint DEFAULT NULL,
  id bigint NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
UNIQUE (customer_id),
CONSTRAINT FK_customer_cart FOREIGN KEY (customer_id) REFERENCES t_customer (id)
);

CREATE TABLE t_order (
  customer_id bigint NOT NULL,
  id bigint NOT NULL AUTO_INCREMENT,
  order_data timestamp DEFAULT NULL,
  PRIMARY KEY (id),
CONSTRAINT FK_customer_order FOREIGN KEY (customer_id) REFERENCES t_customer (id)
);

CREATE TABLE t_cart_item (
  quantity int DEFAULT NULL,
  total_price double DEFAULT NULL,
  cart_id bigint NOT NULL,
  product_id bigint NOT NULL,
  PRIMARY KEY (cart_id, product_id),
CONSTRAINT FK_product_cart_item FOREIGN KEY (product_id) REFERENCES t_product (id),
CONSTRAINT FK_cart_cart_item FOREIGN KEY (cart_id) REFERENCES t_cart (id)
);

CREATE TABLE t_order_item (
  quantity int NOT NULL,
  order_id bigint NOT NULL,
  product_id bigint NOT NULL,
  PRIMARY KEY (order_id, product_id),
CONSTRAINT FK_order_order_item FOREIGN KEY (order_id) REFERENCES t_order (id),
CONSTRAINT FK_product_order_item FOREIGN KEY (product_id) REFERENCES t_product (id)
);
