import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CartList } from '../service/cart-list';
import { ProductsApi } from '../service/products-api';

declare const Swal: any;

@Component({
  selector: 'app-homepage',
  imports: [CommonModule, NgFor],
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css']
})
export class Homepage {
  constructor(private cartList:CartList,private productsApi:ProductsApi) {
  }
  async ngOnInit(){
    this.apiProducts = await this.productsApi.getApiProduct();
  }
  apiProducts: any[] = [];
  products: any[] = [
    {
      id: 10,

      name: "Iphone 16 Pro Max",
      description: "White Titanium",
      price: 1200,
      imageUrl: "https://i.pinimg.com/736x/b7/f0/61/b7f06155c88c4e753670b51d5565bbe3.jpg"
    },
    {
      id: 20,

      name: "Iphone 16 Pro Max",
      description: "Desert Titanium",
      price: 1000,
      imageUrl: "https://i.pinimg.com/736x/92/f1/a0/92f1a04e8ae4938e5ee46cdab15ca601.jpg"
    },
    {
      id: 30,

      name: "Iphone 16 Pro Max",
      description: "Black Titanium",
      price: 1231,
      imageUrl: "https://i.pinimg.com/736x/05/9f/0a/059f0ae51e7415336972a2b6957d0123.jpg"
    },
    {
      id: 40,

      name: "Iphone 16 Pro Max",
      description: "Natural Titanium",
      price: 1199,
      imageUrl: "https://i.pinimg.com/1200x/bf/c2/ca/bfc2cac88ecf55fe197e4552e3a9bdc1.jpg"
    },
    {
      id: 50,

      name: "Iphone 16 ",
      description: "Pink",
      price: 1199,
      imageUrl: "https://i.pinimg.com/736x/fb/a7/07/fba707da14ede26034c6fe6aceec46c2.jpg"
    },
    {
      id: 60,

      name: "Iphone 16 ",
      description: "Ultramarine",
      price: 1199,
      imageUrl: "https://i.pinimg.com/736x/c2/0f/e9/c20fe9c232677b819a0e5d93574a0832.jpg"
    },
    {
      id: 70,

      name: "Iphone 16 ",
      description: "Teal",
      price: 1199,
      imageUrl: "https://i.pinimg.com/736x/e8/98/8c/e8988c32511a346c9a7a9ce466548aca.jpg"
    },
    {
      id: 80,

      name: "Iphone 16 ",
      description: "White",
      price: 1199,
      imageUrl: "https://i.pinimg.com/736x/75/e5/c0/75e5c04f621fbaaa79cc91b17c2cc61a.jpg"
    }
  ];
  count = 0;
  showBtn = false;

  



  // clearAllOrders() {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!"
  //   }).then((result: any) => {
  //     if (result.isConfirmed) {
  //       this.showBtn = false;
  //       this.products.forEach(product => {
  //         product.count = 0;
  //       });
  //       Swal.fire({
  //         title: "Deleted!",
  //         text: "Your file has been deleted.",
  //         icon: "success"
  //       });
  //     }
  //   });
  // }

  onAdd(item: any) {
    // Play sound on button click
    // this.clickSound.play().catch((e) => {
    //   console.error("Failed to play sound:", e);
    // });
    this.cartList.getCart(item);

    Swal.fire({
      toast: true,
      position: 'top',
      icon: 'success',
      title: `បានទិញ ${item.name} `,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  }
}
