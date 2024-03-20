- `createStockPurchase`

response body sample:

```json
{
    "user_id": "1chooo"
    "user_name": "Hugo ChunHo Lin"
    "stock_number": "00919",
    "stock_name": "TSMC",
    "stock_quantity": 1,
    "stock_purchase_cost": 855
    "security_dealer": "fuban",
    "date": "2021-01-01",
}
```

- `createStockSell`

response body sample:

```json
{
    "stock_number": "00919",
    "stock_name": "TSMC",
    "stock_quantity": 1,
    "stock_sell_cost": 869,
    "security_dealer": "fuban",
    "date": "2021-01-01",
}
```

- `getAllStockes`

request body sample:

```json
{
    "name": "Raphael Jambalos",
    "email": ""
}
```