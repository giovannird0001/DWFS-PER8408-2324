INSERT INTO calculations (operation, result) VALUES ('sumar', 6);
INSERT INTO calculation_operands (calculation_id, operands) VALUES
                                                                (LAST_INSERT_ID(), 1),
                                                                (LAST_INSERT_ID(), 2),
                                                                (LAST_INSERT_ID(), 3);

INSERT INTO calculations (operation, result) VALUES ('restar', 2);
INSERT INTO calculation_operands (calculation_id, operands) VALUES
                                                                (LAST_INSERT_ID(), 9),
                                                                (LAST_INSERT_ID(), 6),
                                                                (LAST_INSERT_ID(), 1);

INSERT INTO calculations (operation, result) VALUES ('multiplicar', 8);
INSERT INTO calculation_operands (calculation_id, operands) VALUES
                                                                (LAST_INSERT_ID(), 4),
                                                                (LAST_INSERT_ID(), 2);

INSERT INTO calculations (operation, result) VALUES ('dividir', 4);
INSERT INTO calculation_operands (calculation_id, operands) VALUES
                                                                (LAST_INSERT_ID(), 8),
                                                                (LAST_INSERT_ID(), 2);

INSERT INTO calculations (operation, result) VALUES ('raiz', 3);
INSERT INTO calculation_operands (calculation_id, operands) VALUES
                                                                (LAST_INSERT_ID(), 27),
                                                                (LAST_INSERT_ID(), 3);

INSERT INTO calculations (operation, result) VALUES ('potencia', 8);
INSERT INTO calculation_operands (calculation_id, operands) VALUES
                                                                (LAST_INSERT_ID(), 2),
                                                                (LAST_INSERT_ID(), 3);
