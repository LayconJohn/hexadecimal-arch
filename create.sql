drop table laycon.card_transaction
create table laycon.card_transaction (
    card_number text,
    description text,
    amount numeric,
    currency text,
    date timestamp
)

insert into laycon.card_transaction (card_number, description, amount, currency, date) values ("1234", "Mercado Livre", 100, "BRL", "2025-11-23T13:00:00Z");
insert into laycon.card_transaction (card_number, description, amount, currency, date) values ("1234", "Amazon", 90, "USD", "2025-11-10T10:00:00Z");
insert into laycon.card_transaction (card_number, description, amount, currency, date) values ("1234", "Shein", 60, "BRL", "2025-11-03T13:00:00Z");
insert into laycon.card_transaction (card_number, description, amount, currency, date) values ("1234", "Shoppee", 130, "BRL", "2025-11-20T13:00:00Z");
insert into laycon.card_transaction (card_number, description, amount, currency, date) values ("1234", "Submarino", 10, "BRL", "2025-10-22T13:00:00Z");
insert into laycon.card_transaction (card_number, description, amount, currency, date) values ("1234", "Google One", 10, "USD", "2025-10-23T13:00:00Z")