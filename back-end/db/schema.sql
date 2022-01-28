DROP DATABASE IF EXISTS to_do_list_db;
CREATE DATABASE to_do_list_db;

\c to_do_list_db;

DROP TABLE IF EXISTS tasks;
CREATE TABLE tasks (
    task_id serial PRIMARY KEY NOT NULL,
    task_importance numeric(1),
    task_title text,
    task_owner varchar(20),
    task_complete boolean
);

\i /Users/HankMoore/Desktop/react-apps/to-do-list/back-end/db/seed.sql