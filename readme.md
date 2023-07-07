# Express App

Created by Andrew Skelly

## Technology Used
+ Express
+ Pug Template Engine
+ Tailwind CSS
+ Postgres
+ Colours Package for Console Styling

## Get Started
Make sure to install dependencies first.
```bash
npm install
```

To start the development server run the following command.
```bash
npm run dev
```

```SQL
-- Table: public.customers

-- DROP TABLE public.customers;

CREATE TABLE IF NOT EXISTS public.customers
(
    cust_id integer NOT NULL DEFAULT nextval('"Customers_ID_seq"'::regclass),
    cust_fname character varying COLLATE pg_catalog."default" NOT NULL,
    cust_lname character varying COLLATE pg_catalog."default" NOT NULL,
    cust_country character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Customers_pkey" PRIMARY KEY (cust_id)
)

TABLESPACE pg_default;

ALTER TABLE public.customers
    OWNER to postgres;
```

```SQL
-- Table: public.leaderboards

-- DROP TABLE public.leaderboards;

CREATE TABLE IF NOT EXISTS public.leaderboards
(
    lead_id integer NOT NULL DEFAULT nextval('"Leaderboards_Leader ID_seq"'::regclass),
    lead_best numeric NOT NULL,
    CONSTRAINT "Leaderboards_pkey" PRIMARY KEY (lead_id),
    CONSTRAINT "ID" FOREIGN KEY (lead_id)
        REFERENCES public.customers (cust_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE public.leaderboards
    OWNER to postgres;
```

When Starting the server and clicking between routes the console will display these changes!