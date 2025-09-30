import { Payment } from "../models/Payment";

export class PaymentService {
  async processPayment(payment: Payment): Promise<string> {
    let charge = 0;
    switch(payment.method) {
      case "card":
        charge = payment.transactionCharge;
        break;
      case "upi":
        charge = payment.transactionCharge;
        break;
      case "cod":
        charge = 0;
        break;
    }

    console.log(`Processing payment via ${payment.method}, charge: ${charge}`);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.3
          ? resolve(`Payment successful via ${payment.method}`)
          : reject(new Error(`Payment failed via ${payment.method}`));
      }, 1000);
    });
  }
}
