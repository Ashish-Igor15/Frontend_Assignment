import { Component , OnInit} from '@angular/core';
const navbar = [
  { name: 'HOME', id: 'home' },
  { name: 'ABOUT', id: 'about' },
  {
    name: 'OUR PRODUCTS',
    id: 'product',
    child: [
      { name: 'Product 1', id: 'p1' },
      { name: 'Product 2', id: 'p2' },
      { name: 'Product 3', id: 'p3' },
      { name: 'Product 4', id: 'p4' },
    ],
  },
  { name: 'CONTACT US', id: 'contact' },
];

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  navbarItems = navbar;

  constructor() {}

  ngOnInit(): void {}
}
