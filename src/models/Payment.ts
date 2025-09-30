interface Card {
  method: "card";
  cardNumber: string;
  transactionCharge: number;
}

interface UPI {
  method: "upi";
  upiId: string;
  transactionCharge: number;
}

interface COD {
  method: "cod";
  transactionCharge: 0;
}

export type Payment = Card | UPI | COD;
