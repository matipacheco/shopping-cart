# Shopping Cart!

## Available Scripts

In the project directory, just run:
    
    json-server -p 3001 --watch src/utils/mocks/FILE_NAME.json
    yarn start (react-scripts start)
    
, and open [http://localhost:3000](http://localhost:3000) to view the app in your browser.
    
Additional commands:

    yarn build (react-scripts build)
    yarn test (react-scripts test)
    yarn eject (react-scripts eject)

## Notes

* **This is still in development!**
* To make it work in development, I used [json-server](https://github.com/typicode/json-server)
* The installation instructions shown on the link above didn't work for me. I had to install json-server using the _global_ option!
        
        yarn global add json-server

* On the _Available Scripts_ section says that there needs to exist the following file: _src/utils/mocks/FILE_NAME.json_. This file has to have the format shown bellow:

        {
          "products": [
            {
              "id": "1000",
              "Category": "Laptops",
              "MainCategory": "Computer Systems",
              "TaxTarifCode": "1",
              "SupplierName": "Very Best Screens",
              "WeightMeasure": 4.2,
              "WeightUnit": "KG",
              "Description": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
              "Name": "Notebook Basic 15",
              "DateOfSale": "2017-03-26",
              "ProductPicUrl": "test-resources/sap/ui/demokit/explored/img/1000.jpg",
              "Status": "Available",
              "Quantity": 10,
              "UoM": "PC",
              "CurrencyCode": "EUR",
              "Price": 956,
              "Width": 30,
              "Depth": 18,
              "Height": 3,
              "DimUnit": "cm"
            }
          ]
        }

## References

How did I create the app?

    npx create-react-app shopping-cart