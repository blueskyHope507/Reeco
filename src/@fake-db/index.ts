import './db/orders-db';
import './db/products-db';

import mock from './mock';

mock.onAny().passThrough();
