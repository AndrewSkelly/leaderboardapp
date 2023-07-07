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
## Customers Mock Data
![image](https://github.com/AndrewSkelly/leaderboardapp/assets/61122579/54e055e9-efcd-4303-a63e-27cf16956c02)

## Leaderboards Mock Data
![image](https://github.com/AndrewSkelly/leaderboardapp/assets/61122579/9ff470d3-853f-4f06-bd38-188603c66405)



## When Starting the server and clicking between routes the console will display these changes!
![image](https://github.com/AndrewSkelly/leaderboardapp/assets/61122579/d452e4d2-1c24-4c2d-9103-04c43384795f)

## Route: http://localhost:3000/api/leaderboards/all
![image](https://github.com/AndrewSkelly/leaderboardapp/assets/61122579/bd204320-f954-4c6b-be13-87ea9b250d69)

## Route: http://localhost:3000/api/leaderboards/ireland
![image](https://github.com/AndrewSkelly/leaderboardapp/assets/61122579/d7003eb9-585d-43fb-bd0c-4314bf3ce9da)

## Locsl Demo
https://github.com/AndrewSkelly/leaderboardapp/assets/61122579/fd8b380b-45b3-4c21-ac3b-ba1326cd3515


