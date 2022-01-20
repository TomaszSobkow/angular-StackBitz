export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  productPicturePath: string;
}

export const products = [
  {
    id: 1,
    name: 'iPhone XL',
    price: 799,
    description: 'A large phone with One of the best screens',
    productPicturePath: '/assets/productPictures/iPhoneXL.png'
  },
  {
    id: 2,
    name: 'iPhone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    productPicturePath: ''
  },
  {
    id: 3,
    name: 'iPhone Standard',
    price: 1299,
    description: '',
    productPicturePath: ''
  },{
    id: 4,
    name: 'iPhone 11',
    price: 499,
    description: 'My own device',
    productPicturePath: ''
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/