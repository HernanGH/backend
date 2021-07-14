
--busco el producto que comience con pro
SELECT `id`, `codigo_interno`,`codigo_producto`,`numero_recibo`,`tamanio`,`fecha`,`nombre` 
FROM `productos` where  `nombre` like 'pro%'

--busco el producto que contenga la palabra pro 
SELECT `id`, `codigo_interno`,`codigo_producto`,`numero_recibo`,`tamanio`,`fecha`,`nombre` 
FROM `productos` where  `nombre` like '%pro%'