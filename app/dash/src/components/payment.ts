"use server";

import { Client, Environment } from "square";
import { randomUUID } from "crypto";

(BigInt.prototype as any).toJSON = function () {
    return this.toString();
};

const { paymentsApi } = new Client({
    bearerAuthCredentials: {
        accessToken: 'EAAAl8xnbv6aSxiFuxdWQRHopBglNgIxgVXqYdAi2wUmVeabb5zOcpZtSX-wlVe2'
      },
    environment: Environment.Sandbox,
})

export async function submitPayment(sourceId: string) {
    try {
        const { result } = await paymentsApi.createPayment({
            idempotencyKey: randomUUID(),
            sourceId,
            amountMoney: {
                currency: "USD",
                amount: 100 as any,
            },
        });
        return result;
    } catch (error) {
        console.log(error);
    }
}