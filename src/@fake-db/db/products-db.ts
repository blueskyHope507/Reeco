import mock from './../mock';

const productsDB = {
  products: [
    {
      id: '43dfgdfgje92',
      name: 'Beef, Ground, Free Fall, 80% Lean, Fresh Beef, Gound, Free',
      brand: 'Gordon Choice Choice',
      price: 60.67
    },
    {
      id: '34kjdgkiwe49dje92',
      name: 'Beef, Ground, Free Fall, 80% Lean, Fresh Beef, Gound, Free',
      brand: 'Gordon Choice Choice',
      price: 20.25
    },
    {
      id: '335lf94ofdlr',
      name: 'Chicken Breast Fillets, Boneless matuuamMarinated 6 Ounce Raw, Invivid',
      brand: 'Hormel Black Labelmany',
      price: 100.12
    },
    {
      id: '3434dkreiee',
      name: 'Chicken Breast Fillets, Boneless matuuamMarinated 6 Ounce Raw, Invivid',
      brand: 'Hormel Black Labelmany',
      price: 123
    },
    {
      id: '123dfdfe21431',
      name: 'Chicken Breast Fillets, Boneless matuuamMarinated 6 Ounce Raw, Invivid',
      brand: 'Hormel Black Labelmany',
      price: 102
    },
    {
      id: '543iji3i3940',
      name: 'Chicken Breast Fillets, Boneless matuuamMarinated 6 Ounce Raw, Invivid',
      brand: 'Hormel Black Labelmany',
      price: 55.55
    },
    {
      id: '4343j5i43io3',
      name: 'Chicken Breast Fillets, Boneless matuuamMarinated 6 Ounce Raw, Invivid',
      brand: 'Hormel Black Labelmany',
      price: 12.32
    },
    {
      id: '434ouj385044',
      name: 'Chicken Breast Fillets, Boneless matuuamMarinated 6 Ounce Raw, Invivid',
      brand: 'Hormel Black Labelmany',
      price: 60.67
    },
    {
      id: '3433434349dje92',
      name: 'Beef, Ground, Free Fall, 80% Lean, Fresh Beef, Gound, Free',
      brand: 'Gordon Choice Choice',
      price: 33
    }
  ]
};

mock.onGet('/api/products/filtered').reply((config) => {
  let data = productsDB.products;
  if (config.params?.filterKey) {
    data = data.filter((product) =>
      product.name.toLowerCase().includes(config.params.filterKey.toLowerCase())
    );
  }
  return [200, data];
});
