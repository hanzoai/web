'use server'

import { Client, Environment, type UpsertCatalogObjectRequest } from 'square'
import { randomUUID } from 'crypto'
declare global {
  interface BigInt {
    toJSON(): string;
  }
}

BigInt.prototype.toJSON = function () { return this.toString(); }

const locationId = 'L91Q5K038GFYX'
const catalogItemId = 'ZKAPXAOYXVZDHUGBIDHHR6RJ'
const subscriptionPlanId = 'IZSPX25OBDIVE76YYASKHF7U'
const subscriptionPlanVariationId = 'J2OPIJMGARAXJKUPVR4UREJG'
const customerId = 'GN1PKT966VYK2BF6N0K561D3CG'
const cardId = 'ccof:CA4SEOm2vZPYBd2jfyEsaaJRN9woAg'
const subscriptionId = 'f96aea3f-a54e-420e-ad83-516ea5371ca5'

const client = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: process.env.SQUARE_ENVIRONMENT as Environment
})

const catalogItem: UpsertCatalogObjectRequest = {
  idempotencyKey: randomUUID(),
  object: {
    type: 'ITEM',
    id: '#SubscriptionPlan#',
    itemData: {
      name: 'Hanzo Monthly Basic Plan',
      description: 'Hanzo Monthly Basic Plan',
      isTaxable: false,
      variations: [
        {
          type: 'ITEM_VARIATION',
          id: '#MonthlyPlan',
          itemVariationData: {
            name: 'Monthly',
            pricingType: 'FIXED_PRICING',
            priceMoney: {
              amount: BigInt(4900),
              currency: 'USD'
            }
          }
        }
      ]
    }
  }
}

export const createCustomer = async (email: string) => {
  try {
    const { result } = await client.customersApi.createCustomer({
      idempotencyKey: randomUUID(),
      emailAddress: email,
    })
    return result.customer?.id
  } catch (error) {
    console.error('Error creating customer:', error)
    return null
  }
}

export const createCard = async (cardToken: string, email: string, customerId: string) => {
  try {
    const response = await client.cardsApi.createCard({
      idempotencyKey: randomUUID(),
      sourceId: cardToken,
      card: {
        cardholderName: email,
        customerId: customerId,
      }
    })
    return response.result.card?.id
  } catch (error) {
    console.error('Error creating card:', error)
    return null
  }
}

export const createSubscriptionPlan = async (subscriptionPlanName: string) => {
  try {
    const { result } = await client.catalogApi.upsertCatalogObject({
      idempotencyKey: randomUUID(),
      object: {
        type: 'SUBSCRIPTION_PLAN',
        id: '#SubscriptionPlan#',
        subscriptionPlanData: {
          name: subscriptionPlanName,
        }
      }
    })
    return result.catalogObject?.id
  } catch (error) {
    console.error('Error creating subscription plan:', error)
    return null
  }
}

export const createSubscriptionPlanVariation = async (
  subscriptionIdplanId: string,
  subscriptionPlanVariationName: string,
  cadence: string,
  amount: number) => {
  try {
    const { result } = await client.catalogApi.upsertCatalogObject({
      idempotencyKey: randomUUID(),
      object: {
        type: 'SUBSCRIPTION_PLAN_VARIATION',
        id: '#1',
        subscriptionPlanVariationData: {
          name: subscriptionPlanVariationName,
          phases: [{
            cadence: cadence,
            periods: 1,
            ordinal: BigInt(0),
            pricing: { type: 'STATIC', priceMoney: { amount: BigInt(amount), currency: 'USD' } }
          }],
          subscriptionPlanId: subscriptionIdplanId
        }
      }
    });
    return result
  } catch (error) {
    console.error('Error creating subscription plan variation:', error)
    return null
  }
}

export const liststSubscriptionPlans = async () => {
  try {
    const { result } = await client.catalogApi.listCatalog(undefined, 'SUBSCRIPTION_PLAN');
    return result
  } catch (error) {
    console.error('Error listing subscription plans:', error)
    return null
  }
}

export const retrieveSubscriptionPlan = async (id: string) => {
  try {
    const { result } = await client.catalogApi.retrieveCatalogObject(id);
    return result
  } catch (error) {
    console.error('Error retrieving subscription plan:', error)
    return null
  }
}

export const createSubscriptionWithStaticPrice = async (
  subscriptionPlanVariationId: string,
  customerId: string,
  cardId: string,
) => {
  try {
    const response = await client.subscriptionsApi.createSubscription({
      idempotencyKey: randomUUID(),
      locationId: locationId,
      planVariationId: subscriptionPlanVariationId,
      customerId: customerId,
      cardId: cardId,
      startDate: new Date().toISOString().split('T')[0]
    });
    return response.result
  } catch (error) {
    console.error(error);
    return null
  }
}

export const updateSubscription = async (  
  subscriptionId: string,
  subscriptionPlanVariationId: string,
  customerId: string,
  cardId: string,) => {
  try {
    const response = await client.subscriptionsApi.updateSubscription(subscriptionId,
      {
        subscription: {
          planVariationId: subscriptionPlanVariationId,
          customerId,
          cardId,
        }
      }
    );
    return response.result
  } catch (error) {
    console.error('Error updating subscription:', error)
    return null
  }
}

export const retrieveSubscription = async (id: string) => {
  try {
    const { result } = await client.subscriptionsApi.retrieveSubscription(id);
    return result
  } catch (error) {
    console.error('Error retrieving subscription:', error)
    return null
  }
}

export const searchSubscriptions = async (locationId: string) => {
  try {
    const { result } = await client.subscriptionsApi.searchSubscriptions({
      query: {
        filter: {
          locationIds:
            [locationId]
        }
      }
    })
    return result
  } catch (error) {
    console.error('Error searching subscriptions:', error)
    return null
  }
}

export const pauseSubscription = async (id: string) => {
  try {
    const { result } = await client.subscriptionsApi.pauseSubscription(id,
      {
        pauseCycleDuration: BigInt(3),
        pauseReason: 'Injury'
      });
    return result
  } catch (error) {
    console.error('Error pausing subscription:', error)
    return null
  }
}

export const resumeSubscription = async (id: string) => {
  try {
    const { result } = await client.subscriptionsApi.resumeSubscription(
      id,
      {
        resumeEffectiveDate: '2023-06-08',
        resumeChangeTiming: 'IMMEDIATE'
      });
    return result
  } catch (error) {
    console.error('Error resuming subscription:', error)
    return null
  }
}

export const cancelSubscription = async (id: string) => {
  try {
    const { result } = await client.subscriptionsApi.cancelSubscription(id);
    return result
  } catch (error) {
    console.error('Error canceling subscription:', error)
    return null
  }
}

export const changeBillingDate = async (id: string, date: number) => {
  try {
    const { result } = await client.subscriptionsApi.changeBillingAnchorDate(id,
      {
        monthlyBillingAnchorDate: date
      });
    return result
  } catch (error) {
    console.error('Error changing subscription billing date:', error)
    return null
  }
}

export const listSubscriptionEvents = async (id: string) => {
  try {
    const { result } = await client.subscriptionsApi.listSubscriptionEvents(id);
    return result
  } catch (error) {
    console.error('Error listing subscription events:', error)
    return null
  }
}

export const bulkSwapSubscriptionPlan = async (oldId: string, newId: string, locationId: string) => {
  try {
    const response = await client.subscriptionsApi.bulkSwapPlan(
      {
        newPlanVariationId: oldId,
        oldPlanVariationId: newId,
        locationId: locationId
      }
    );
  } catch (error) {
    console.error(error);
  }
}

const processPayment = async (sourceId: string, amount: number, verificationToken: string) => {
  // Square API accepts amount in cents
  const amountInCents = amount * 100

  try {
    const { result } = await client.paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId: sourceId,
      amountMoney: {
        currency: 'USD',
        amount: BigInt(amountInCents)
      },
      verificationToken
    })
    return result
  } catch (error) {
    console.error('Error processing payment:', error)
    return null
  }
}

export {
  processPayment as default
}