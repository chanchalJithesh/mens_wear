import ProductService from "./services/ProductService";
import { UserService } from "./services/UserService";
import { PaymentService } from "./services/PaymentService";
import { OrderService } from "./services/OrderService";

(async () => {
  const productService = new ProductService();
  const userService = new UserService();
  const paymentService = new PaymentService();

  const admin = userService.registerUser({ name: "Alice", email: "alice@example.com", role: "admin" });
  const customer = userService.registerUser({ name: "Bob", email: "bob@example.com", role: "customer" });

  console.log("Admin Detail", userService.getUserDetails(admin.id))
  console.log("Customer Detail", userService.getUserDetails(customer.id))
  productService.addProduct({
    id: "p1",
    title: "Blue Shirt",
    price: 29.99,
    size: "M",
    category: "casual",
    stock: 10,
  }, admin.role);

 const orderService = new OrderService();

 const order = orderService.placeOrder("101", "user1", ["p1"], 100, 10);

  console.log(order);  
  orderService.updateStatus("101", "processing");

  console.log(orderService.getOrderLog(order)); 

  const paymentResult = await paymentService.processPayment({
    method: "upi",
    upiId: "bob@upi",
    transactionCharge: 0,
  });

  console.log(paymentResult);
})();
