# Můj e-shop – cvičení pro komunikaci mezi React komponentami


## Schema komponent
```mermaid
graph TD;
    App-->Kosik;
    App-->SeznamProduktu;
    SeznamProduktu-->Produkt;
    Produkt-->Objednani;
```
