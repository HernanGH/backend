CREATE TABLE `eventos`.`usuarios`
( `id` INT NOT NULL AUTO_INCREMENT ,  `nombre` VARCHAR(255) NOT NULL ,  `apellido` VARCHAR(255) NOT NULL ,  `edad` INT NOT NULL ,  `estado_civil` VARCHAR(255) NOT NULL ,    PRIMARY KEY  (`id`))
 ENGINE = InnoDB;

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `edad`, `estado_civil`)
  VALUES (NULL, 'carlos', 'gimenez', '22', 'soltero');

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `edad`, `estado_civil`)
  VALUES (NULL, 'marcos', 'nuin', '37', 'casado');

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `edad`, `estado_civil`)
  VALUES (NULL, 'jimena', 'sanchez', '25', 'soltera');

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `edad`, `estado_civil`)
  VALUES (NULL, 'mirta', 'guzman', '68', 'divorciada');

10 personas mayores de 18, casadas, con mail terminado con '@google.com'

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `edad`, `estado_civil`)
  VALUES (NULL, 'hernan', 'condori', '68', 'casado');

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `edad`, `estado_civil`)
  VALUES (NULL, 'annabel', 'reyes', '45', 'casada');

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `edad`, `estado_civil`)
  VALUES (NULL, 'daniel', 'betancur', '50', 'casado');

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `edad`, `estado_civil`)
  VALUES (NULL, 'esteban', 'quito', '37', 'casado');

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `edad`, `estado_civil`)
  VALUES (NULL, 'facundo', 'arce', '28', 'casado');

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `edad`, `estado_civil`)
  VALUES (NULL, 'fernando', 'garcia', '46', 'casado');

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `edad`, `estado_civil`)
  VALUES (NULL, 'patricia', 'carmona', '29', 'casada');

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `edad`, `estado_civil`)
  VALUES (NULL, 'sergio', 'centioni', '32', 'casado');

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `edad`, `estado_civil`)
  VALUES (NULL, 'santiago', 'arboleda', '46', 'casado');

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `edad`, `estado_civil`)
  VALUES (NULL, 'sebastian', 'zambrano', '26', 'casado');