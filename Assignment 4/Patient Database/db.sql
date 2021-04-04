CREATE DATABASE patient;
CREATE TABLE patient.patient_details(
	id INT NOT NULL,
	p_name VARCHAR(25),
    age INT,
    gender VARCHAR(100),
    addr VARCHAR(100),
    mar VARCHAR(25),
    dov DATE,
    PRIMARY KEY(id)
);
    