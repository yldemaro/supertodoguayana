import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder', icon: 'mail' },
    { title: 'Categorias', url: '/categories', icon: 'list' },
    { title: 'Tienda', url: '/shop', icon: 'cart' },
    { title: 'Producto Individual', url: '/product-single', icon: 'arrow-forward' },
    { title: 'Carrito', url: '/cart', icon: 'cart' },
    { title: 'Verificar Pago', url: '/checkout', icon: 'card' },
    { title: 'Perfil', url: '/profile', icon: 'person' },
    { title: 'Dirección', url: '/address', icon: 'navigate' },
    { title: 'Lista de Orden', url: '/order-list', icon: 'create' },
    { title: 'Error de Pagina', url: '/error404', icon: 'sad' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
