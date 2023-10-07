import { Component } from '@angular/core';
import {Model} from "../model";



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  cardArray : Model[] = [
    new Model("https://cdn.shopify.com/shopifycloud/brochure/assets/free-trial/icons/template2-b5046e879e5b48d1cd95d1bdb18920d52309a1a17ce8255d3b5d9c295f69236c.svg", "Customizable templates", "Free website designs to launch your store quickly and easily."),
    new Model("https://cdn.shopify.com/shopifycloud/brochure/assets/free-trial/icons/box2-effe369359f293039eecbac0bf07622de2435381bdfb36be0b54fc918bd6398f.svg", "All in one", "Shopify takes care of everything from marketing and payments to secure transactions and shipping."),
    new Model("https://cdn.shopify.com/shopifycloud/brochure/assets/free-trial/icons/lock2-d8b10d2f1f364887c8d4cfdedadaf151a9f2f4a775fbb03f6e05cd74a031675c.svg", "A safe and efficient platform", "Millions of users trust Shopify to manage their online stores.\n")
  ];
}
