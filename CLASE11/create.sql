CREATE TABLE productos (
  id int(11) NOT NULL,
  codigo_interno tinyint(4) NOT NULL,
  codigo_producto smallint(6) NOT NULL,
  numero_recibo mediumint(9) NOT NULL,
  numero_orden bigint(20) NOT NULL,
  tamanio float(6,2) NOT NULL,
  valor double(5,2) NOT NULL,
  fecha date NOT NULL,
  salida datetime NOT NULL,
  hora time NOT NULL,
  ano year(4) NOT NULL,
  ncode char(4) NOT NULL,
  nombre varchar(255) NOT NULL,
  numero tinyblob NOT NULL,
  descripcion text NOT NULL,
  code_text mediumblob NOT NULL,
  textocorto mediumtext NOT NULL,
  textolargo longtext NOT NULL,
  en_deposito enum('si','no') NOT NULL,
  entregado set('si','no') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--Selecciono la clave primaria
ALTER TABLE productos
  ADD PRIMARY KEY (id);

--Hago que el campo id sea auto incrementable
ALTER TABLE productos
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;
  
COMMIT;