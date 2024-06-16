# Bullion Data and Data generation

#### The Lux Bullion products are specified [here](https://docs.google.com/document/d/1d-aWwd2ijz8o6UT2MxtFY_RRfR18CjbSgdIKhN0qdV8)

This document species the way SKUs correspond to those products so that
the commerce ui can set up searches by categories. 

The Hanzo SKUs are correspond as follows.  This allows for 
easy implementation of search categories.

### SKU Tokens for Bullion

Category: 'All'
```
First token:
LXB       'Lux Bullion'  
```

Category: 'Type'
```
Second token:
AU        'Lux Gold Bullion'
AG        'Lux Silver Bullion'
PD        'Lux Palladium Bullion'
PT        'Lux Platinum Bullion'
```

Category: 'Form'
``` 
third token:
B         'Minted Bar'
C         'Coin'
CB        'Cast bar'
```

Category: 'Size'
```
forth / last token:
<integer | decimal>_<unit> 
eg: 100_OZ    '100oz'
eg: 2.5_G = '2.5g'
```

Full examples:
```
LXB-AU-B-50_G     'Lux Gold Bullion, 50g Minted Bar'           
LXB-AU-B-2.5_G    'Lux Gold Bullion, 2.5g Minted Bar'
LXB-AU-B-10_OZ    'Lux Gold Bullion, 10oz Minted Bar'
LXB-AG-CB-500_G   'Lux Silver Bullion, 500g Cast Bar'
LXB-PT-C-1_OZ     'Lux Platinum Bullion, 1oz Minted Coin'
```

