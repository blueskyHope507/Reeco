import mock from './../mock';

const ordersDB = {
  order: {
    id: '3grt343334o1234',
    supplier: 'West vegetables & coast fruits',
    shopping_date: 'Sat, May 7',
    is_approve: false,
    products: [
      {
        id: '43dfgdfgje92',
        name: 'Beef, Ground, Free Fall, 80% Lean, Fresh Beef, Gound, Free',
        brand: 'Gordon Choice Choice',
        price: 60.67,
        quantity: 33,
        status: 0
      },
      {
        id: '34kjdgkiwe49dje92',
        name: 'Beef, Ground, Free Fall, 80% Lean, Fresh Beef, Gound, Free',
        brand: 'Gordon Choice Choice',
        price: 60.67,
        quantity: 25,
        status: 0
      },
      {
        id: '335lf94ofdlr',
        name: 'Chicken Breast Fillets, Boneless matuuamMarinated 6 Ounce Raw, Invivid',
        brand: 'Hormel Black Labelmany',
        price: 60.67,
        quantity: 0,
        status: 0
      },
      {
        id: '3434dkreiee',
        name: 'Chicken Breast Fillets, Boneless matuuamMarinated 6 Ounce Raw, Invivid',
        brand: 'Hormel Black Labelmany',
        price: 60.67,
        quantity: 13,
        status: 0
      },
      {
        id: '123dfdfe21431',
        name: 'Chicken Breast Fillets, Boneless matuuamMarinated 6 Ounce Raw, Invivid',
        brand: 'Hormel Black Labelmany',
        price: 60.67,
        quantity: 0,
        status: 0
      },
      {
        id: '543iji3i3940',
        name: 'Chicken Breast Fillets, Boneless matuuamMarinated 6 Ounce Raw, Invivid',
        brand: 'Hormel Black Labelmany',
        price: 60.67,
        quantity: 15,
        status: 0
      },
      {
        id: '4343j5i43io3',
        name: 'Chicken Breast Fillets, Boneless matuuamMarinated 6 Ounce Raw, Invivid',
        brand: 'Hormel Black Labelmany',
        price: 60.67,
        quantity: 15,
        status: 0
      },
      {
        id: '434ouj385044',
        name: 'Chicken Breast Fillets, Boneless matuuamMarinated 6 Ounce Raw, Invivid',
        brand: 'Hormel Black Labelmany',
        price: 60.67,
        quantity: 24,
        status: 0
      },
      {
        id: '3433434349dje92',
        name: 'Beef, Ground, Free Fall, 80% Lean, Fresh Beef, Gound, Free',
        brand: 'Gordon Choice Choice',
        price: 60.67,
        quantity: 15,
        status: 0
      }
    ]
  }
};

mock.onGet('/api/orders/order').reply(200, ordersDB.order);

mock.onPost('/api/orders/addProducts').reply((request) => {
  const data = JSON.parse(request.data);
  ordersDB.order.products = [...ordersDB.order.products, ...data.products];
  return [200, {}];
});

mock.onPost('/api/orders/approve').reply((request) => {
  const data = JSON.parse(request.data);
  ordersDB.order.is_approve = data.is_approve;
  return [200, {}];
});

mock.onPost('/api/orders/changeStatus').reply((request) => {
  const data = JSON.parse(request.data);
  ordersDB.order.products.forEach((product) => {
    if (data.product?.id === product.id) {
      product.status = data.product.status;
    }
  });
  return [200, {}];
});

mock.onPost('/api/orders/updateProduct').reply((request) => {
  const data = JSON.parse(request.data);
  ordersDB.order.products.forEach((product) => {
    if (data.product?.id === product.id) {
      product.quantity = data.product.quantity;
      product.price = data.product.price;
    }
  });
  return [200, {}];
});
