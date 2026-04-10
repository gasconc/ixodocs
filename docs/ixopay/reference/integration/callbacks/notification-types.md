Send Feedback
  * [](https://documentation.ixopay.com/)
  * [Integration](https://documentation.ixopay.com/docs/reference/integration)
  * [Callbacks](https://documentation.ixopay.com/docs/reference/integration/callbacks)
  * Notification types


On this page
# Notification types
This guide provides an overview of the various notification types you can receive from the [IXOPAY platform](https://www.ixopay.com) payment processing platform. These notifications deliver updates about transaction outcomes and related information.
Understanding notification types is important for effectively managing payment processing in your integration with IXOPAY platform. This documentation explores each notification type, its structure, and the key information it contains.
To further enhance your understanding of callback handling in IXOPAY platform, explore the following articles:
  * [Response handling](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling): Best practices for handling callback responses.
  * [Callback data](https://documentation.ixopay.com/docs/reference/integration/callbacks/callback-data): Detailed information on the structure and format of callback data.


## Success notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#success-notification "Direct link to Success notification")
When a transaction reaches its final state and is successful, the `result` field in the notification will contain the value `OK`. You can rely on this indication to confirm that the transaction has been successfully processed.
Here's an example of a success notification:

```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "your-unique-identifier",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "DirectDebit",  
  "amount": "9.99",  
  "currency": "EUR",  
  "customer": {  
    "firstName": "Alex",  
    "lastName": "Smith",  
    "emailVerified": "false"  
  },  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  }  
}  

```

## Error notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#error-notification "Direct link to Error notification")
In the case of a failed transaction, the `result` field will contain the value `ERROR`. Depending on the specific error, you may find useful information in the `message` and `code` fields or in the `adapterMessage` and `adapterCode` fields, which provide errors returned by the corresponding adapter.
Here's an example of an error notification:

```
{  
  "result": "ERROR",  
  "message": "STOLEN_CARD",  
  "code": "2016",  
  "adapterMessage": "Transaction was rejected",  
  "adapterCode": "1234",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "your-unique-identifier",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "DirectDebit",  
  "amount": "9.99",  
  "currency": "EUR",  
  "customer": {  
    "firstName": "Alex",  
    "lastName": "Smith",  
    "emailVerified": "false"  
  },  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT"  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  }  
}  

```

## Chargeback notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#chargeback-notification "Direct link to Chargeback notification")
When a chargeback occurs, you will receive a notification containing relevant information in the `chargebackData` field. This information provides details about the chargeback transaction.
Here's an example of a chargeback notification:

```
{  
  "result": "OK",  
  "uuid": "313f381aef908f4558e3",  
  "merchantTransactionId": "auto-313f381aef908f4558e3",  
  "purchaseId": "20260409-313f381aef908f4558e3",  
  "transactionType": "CHARGEBACK",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "chargebackData": {  
    "originalUuid": "afb7d03c447abb5a2628",  
    "originalMerchantTransactionId": "original-merchant-identifier",  
    "amount": 9.99,  
    "currency": "EUR",  
    "reason": "Unauthorized payment",  
    "chargebackDateTime": "2026-04-11T08:52:36Z"  
  }  
}  

```

## Chargeback-reversal notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#chargeback-reversal-notification "Direct link to Chargeback-reversal notification")
When a chargeback reversal occurs, you will receive a notification containing relevant information in the `chargebackReversalData` field. This information provides details about the reversal of a previous chargeback transaction.
Here's an example of a chargeback reversal notification:

```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "CHARGEBACK-REVERSAL",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "chargebackReversalData": {  
    "originalUuid": "afb7d03c447abb5a2628",  
    "originalMerchantTransactionId": "original-merchant-identifier",  
    "chargebackUuid": "313f381aef908f4558e3",  
    "amount": "9.99",  
    "currency": "EUR",  
    "reason": "Chargeback reversed",  
    "reversalDateTime": "2026-04-10T08:52:36Z"  
  }  
}  

```

## Account updater notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#account-updater-notification "Direct link to Account updater notification")
If your merchant account has the Account Updater feature enabled, you will receive notifications when a stored card of a customer gets updated. These notifications provide information about changes made to the card.
The account updater notification can result in the following outcomes:
  * `updated`: The card number and expiry date were updated.
  * `closed`: The card is closed and no longer valid.
  * `new_expiry`: The card expiry date was updated.
  * `contact`: Contact the cardholder for updated information.


The results of the account updater process will be reported as `extraData` in the notification payload. This allows you to retrieve the specific result of the update.
Here's an example of an account updater notification:

```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "REGISTER",  
  "paymentMethod": "Creditcard",  
  "extraData": {  
    "lastCardUpdateDate": "2021-04-01",  
    "lastCardUpdateResult": "updated"  
  },  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  }  
}  

```

In the example, the notification indicates that the last card update occurred on `April 1st, 2021`, and the result of the update was `updated`. The `returnData` field of type `cardData` contains the updated card information, such as the card type, cardholder name, expiry date, BIN details, and more.
With account updater notifications, you can stay informed about changes to your customers' stored cards, enabling you to maintain up-to-date payment information and provide seamless transaction experiences.
## Network token notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#network-token-notification "Direct link to Network token notification")
When a network token is created, you will receive notifications for any updates related to that token. These notifications are important for staying up-to-date with changes to your network tokens.
You will receive notifications under the following circumstances:
  * **Asynchronous Tokenization** : You will be notified when the tokenization process is completed, and the token has been successfully created.
  * **Synchronous Tokenization** : In the case of synchronous tokenization, the token information will be available both in the API response and within the notification.


The token's status and any associated metadata, such as card art, are reported within the `extraData` field of the notification payload:
  * `extraData.networkTokenStatus` (string enum): Current status of the token. Possible values are:
    * `active`: Token is active and can be used.
    * `inactive`: The token is not yet active.
    * `suspended`: The token has been suspended and cannot be used at the moment.
    * `deactivated`: The token is disabled and cannot be used anymore.
    * `pending`: Tokenization is in progress.
    * `error`: Error occurred during tokenization.
  * `extraData.networkTokenMetadata.assets` (object, optional): An object that contains metadata assets if available. Each **key** represents an asset type and each **value** is the asset's identifier.
    * **Keys** (string): Name or type of the asset (e.g., "cardArt", "otherArt"). These keys are dynamic and depend on the available assets.
    * **Values** (string): The unique identifier of the asset.
  * `extraData.lastNetworkTokenUpdateDate` (string, optional): Date of the most recent update notification.
  * `extraData.lastNetworkTokenUpdateResult` (string enum, optional): In the case of a token update, this field indicates the result. Possible values include:
    * `pan_changed`: PAN has changed.
    * `pan_expiry_changed`: PAN expiry has changed.
    * `token_expiry_changed`: Token expiry has changed.
    * `active`: Token is active and can be used.
    * `inactive`: The token is not yet active.
    * `suspended`: The token has been suspended and cannot be used at the moment.
    * `deactivated`: The token is disabled and cannot be used anymore.
    * `error`: Error occurred during tokenization.


Here are examples of network notifications:
  * Initial notification
  * Update without changing state
  * Update that changes state



```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  },  
  "extraData": {  
    "networkTokenStatus": "active",  
    "networkTokenMetadata": {  
      "assets": {  
        "cardSymbol": "aaaa1111bbbb2222cccc3333dddd4444",  
        "digitalCardArt": "eeee5555ffff6666gggg7777hhhh8888"  
      }  
    }  
  }  
}  

```


```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  },  
  "extraData": {  
    "networkTokenStatus": "active",  
    "lastNetworkTokenUpdateDate": "2026-04-10T08:52:36Z",  
    "lastNetworkTokenUpdateResult": "pan_expiry_changed"  
  }  
}  

```


```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  },  
  "extraData": {  
    "networkTokenStatus": "suspended",  
    "lastNetworkTokenUpdateDate": "2026-04-10T08:52:36Z",  
    "lastNetworkTokenUpdateResult": "suspended"  
  }  
}  

```

Last updated on **Apr 10, 2026**
# Notification types
This guide provides an overview of the various notification types you can receive from the [IXOPAY platform](https://www.ixopay.com) payment processing platform. These notifications deliver updates about transaction outcomes and related information.
Understanding notification types is important for effectively managing payment processing in your integration with IXOPAY platform. This documentation explores each notification type, its structure, and the key information it contains.
To further enhance your understanding of callback handling in IXOPAY platform, explore the following articles:
  * [Response handling](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling): Best practices for handling callback responses.
  * [Callback data](https://documentation.ixopay.com/docs/reference/integration/callbacks/callback-data): Detailed information on the structure and format of callback data.


## Success notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#success-notification "Direct link to Success notification")
When a transaction reaches its final state and is successful, the `result` field in the notification will contain the value `OK`. You can rely on this indication to confirm that the transaction has been successfully processed.
Here's an example of a success notification:

```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "your-unique-identifier",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "DirectDebit",  
  "amount": "9.99",  
  "currency": "EUR",  
  "customer": {  
    "firstName": "Alex",  
    "lastName": "Smith",  
    "emailVerified": "false"  
  },  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  }  
}  

```

## Error notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#error-notification "Direct link to Error notification")
In the case of a failed transaction, the `result` field will contain the value `ERROR`. Depending on the specific error, you may find useful information in the `message` and `code` fields or in the `adapterMessage` and `adapterCode` fields, which provide errors returned by the corresponding adapter.
Here's an example of an error notification:

```
{  
  "result": "ERROR",  
  "message": "STOLEN_CARD",  
  "code": "2016",  
  "adapterMessage": "Transaction was rejected",  
  "adapterCode": "1234",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "your-unique-identifier",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "DirectDebit",  
  "amount": "9.99",  
  "currency": "EUR",  
  "customer": {  
    "firstName": "Alex",  
    "lastName": "Smith",  
    "emailVerified": "false"  
  },  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT"  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  }  
}  

```

## Chargeback notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#chargeback-notification "Direct link to Chargeback notification")
When a chargeback occurs, you will receive a notification containing relevant information in the `chargebackData` field. This information provides details about the chargeback transaction.
Here's an example of a chargeback notification:

```
{  
  "result": "OK",  
  "uuid": "313f381aef908f4558e3",  
  "merchantTransactionId": "auto-313f381aef908f4558e3",  
  "purchaseId": "20260409-313f381aef908f4558e3",  
  "transactionType": "CHARGEBACK",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "chargebackData": {  
    "originalUuid": "afb7d03c447abb5a2628",  
    "originalMerchantTransactionId": "original-merchant-identifier",  
    "amount": 9.99,  
    "currency": "EUR",  
    "reason": "Unauthorized payment",  
    "chargebackDateTime": "2026-04-11T08:52:36Z"  
  }  
}  

```

## Chargeback-reversal notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#chargeback-reversal-notification "Direct link to Chargeback-reversal notification")
When a chargeback reversal occurs, you will receive a notification containing relevant information in the `chargebackReversalData` field. This information provides details about the reversal of a previous chargeback transaction.
Here's an example of a chargeback reversal notification:

```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "CHARGEBACK-REVERSAL",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "chargebackReversalData": {  
    "originalUuid": "afb7d03c447abb5a2628",  
    "originalMerchantTransactionId": "original-merchant-identifier",  
    "chargebackUuid": "313f381aef908f4558e3",  
    "amount": "9.99",  
    "currency": "EUR",  
    "reason": "Chargeback reversed",  
    "reversalDateTime": "2026-04-10T08:52:36Z"  
  }  
}  

```

## Account updater notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#account-updater-notification "Direct link to Account updater notification")
If your merchant account has the Account Updater feature enabled, you will receive notifications when a stored card of a customer gets updated. These notifications provide information about changes made to the card.
The account updater notification can result in the following outcomes:
  * `updated`: The card number and expiry date were updated.
  * `closed`: The card is closed and no longer valid.
  * `new_expiry`: The card expiry date was updated.
  * `contact`: Contact the cardholder for updated information.


The results of the account updater process will be reported as `extraData` in the notification payload. This allows you to retrieve the specific result of the update.
Here's an example of an account updater notification:

```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "REGISTER",  
  "paymentMethod": "Creditcard",  
  "extraData": {  
    "lastCardUpdateDate": "2021-04-01",  
    "lastCardUpdateResult": "updated"  
  },  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  }  
}  

```

In the example, the notification indicates that the last card update occurred on `April 1st, 2021`, and the result of the update was `updated`. The `returnData` field of type `cardData` contains the updated card information, such as the card type, cardholder name, expiry date, BIN details, and more.
With account updater notifications, you can stay informed about changes to your customers' stored cards, enabling you to maintain up-to-date payment information and provide seamless transaction experiences.
## Network token notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#network-token-notification "Direct link to Network token notification")
When a network token is created, you will receive notifications for any updates related to that token. These notifications are important for staying up-to-date with changes to your network tokens.
You will receive notifications under the following circumstances:
  * **Asynchronous Tokenization** : You will be notified when the tokenization process is completed, and the token has been successfully created.
  * **Synchronous Tokenization** : In the case of synchronous tokenization, the token information will be available both in the API response and within the notification.


The token's status and any associated metadata, such as card art, are reported within the `extraData` field of the notification payload:
  * `extraData.networkTokenStatus` (string enum): Current status of the token. Possible values are:
    * `active`: Token is active and can be used.
    * `inactive`: The token is not yet active.
    * `suspended`: The token has been suspended and cannot be used at the moment.
    * `deactivated`: The token is disabled and cannot be used anymore.
    * `pending`: Tokenization is in progress.
    * `error`: Error occurred during tokenization.
  * `extraData.networkTokenMetadata.assets` (object, optional): An object that contains metadata assets if available. Each **key** represents an asset type and each **value** is the asset's identifier.
    * **Keys** (string): Name or type of the asset (e.g., "cardArt", "otherArt"). These keys are dynamic and depend on the available assets.
    * **Values** (string): The unique identifier of the asset.
  * `extraData.lastNetworkTokenUpdateDate` (string, optional): Date of the most recent update notification.
  * `extraData.lastNetworkTokenUpdateResult` (string enum, optional): In the case of a token update, this field indicates the result. Possible values include:
    * `pan_changed`: PAN has changed.
    * `pan_expiry_changed`: PAN expiry has changed.
    * `token_expiry_changed`: Token expiry has changed.
    * `active`: Token is active and can be used.
    * `inactive`: The token is not yet active.
    * `suspended`: The token has been suspended and cannot be used at the moment.
    * `deactivated`: The token is disabled and cannot be used anymore.
    * `error`: Error occurred during tokenization.


Here are examples of network notifications:
  * Initial notification
  * Update without changing state
  * Update that changes state



```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  },  
  "extraData": {  
    "networkTokenStatus": "active",  
    "networkTokenMetadata": {  
      "assets": {  
        "cardSymbol": "aaaa1111bbbb2222cccc3333dddd4444",  
        "digitalCardArt": "eeee5555ffff6666gggg7777hhhh8888"  
      }  
    }  
  }  
}  

```


```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  },  
  "extraData": {  
    "networkTokenStatus": "active",  
    "lastNetworkTokenUpdateDate": "2026-04-10T08:52:36Z",  
    "lastNetworkTokenUpdateResult": "pan_expiry_changed"  
  }  
}  

```


```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  },  
  "extraData": {  
    "networkTokenStatus": "suspended",  
    "lastNetworkTokenUpdateDate": "2026-04-10T08:52:36Z",  
    "lastNetworkTokenUpdateResult": "suspended"  
  }  
}  

```

# Notification types
This guide provides an overview of the various notification types you can receive from the [IXOPAY platform](https://www.ixopay.com) payment processing platform. These notifications deliver updates about transaction outcomes and related information.
Understanding notification types is important for effectively managing payment processing in your integration with IXOPAY platform. This documentation explores each notification type, its structure, and the key information it contains.
To further enhance your understanding of callback handling in IXOPAY platform, explore the following articles:
  * [Response handling](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling): Best practices for handling callback responses.
  * [Callback data](https://documentation.ixopay.com/docs/reference/integration/callbacks/callback-data): Detailed information on the structure and format of callback data.


## Success notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#success-notification "Direct link to Success notification")
When a transaction reaches its final state and is successful, the `result` field in the notification will contain the value `OK`. You can rely on this indication to confirm that the transaction has been successfully processed.
Here's an example of a success notification:

```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "your-unique-identifier",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "DirectDebit",  
  "amount": "9.99",  
  "currency": "EUR",  
  "customer": {  
    "firstName": "Alex",  
    "lastName": "Smith",  
    "emailVerified": "false"  
  },  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  }  
}  

```

## Error notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#error-notification "Direct link to Error notification")
In the case of a failed transaction, the `result` field will contain the value `ERROR`. Depending on the specific error, you may find useful information in the `message` and `code` fields or in the `adapterMessage` and `adapterCode` fields, which provide errors returned by the corresponding adapter.
Here's an example of an error notification:

```
{  
  "result": "ERROR",  
  "message": "STOLEN_CARD",  
  "code": "2016",  
  "adapterMessage": "Transaction was rejected",  
  "adapterCode": "1234",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "your-unique-identifier",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "DirectDebit",  
  "amount": "9.99",  
  "currency": "EUR",  
  "customer": {  
    "firstName": "Alex",  
    "lastName": "Smith",  
    "emailVerified": "false"  
  },  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT"  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  }  
}  

```

## Chargeback notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#chargeback-notification "Direct link to Chargeback notification")
When a chargeback occurs, you will receive a notification containing relevant information in the `chargebackData` field. This information provides details about the chargeback transaction.
Here's an example of a chargeback notification:

```
{  
  "result": "OK",  
  "uuid": "313f381aef908f4558e3",  
  "merchantTransactionId": "auto-313f381aef908f4558e3",  
  "purchaseId": "20260409-313f381aef908f4558e3",  
  "transactionType": "CHARGEBACK",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "chargebackData": {  
    "originalUuid": "afb7d03c447abb5a2628",  
    "originalMerchantTransactionId": "original-merchant-identifier",  
    "amount": 9.99,  
    "currency": "EUR",  
    "reason": "Unauthorized payment",  
    "chargebackDateTime": "2026-04-11T08:52:36Z"  
  }  
}  

```

## Chargeback-reversal notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#chargeback-reversal-notification "Direct link to Chargeback-reversal notification")
When a chargeback reversal occurs, you will receive a notification containing relevant information in the `chargebackReversalData` field. This information provides details about the reversal of a previous chargeback transaction.
Here's an example of a chargeback reversal notification:

```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "CHARGEBACK-REVERSAL",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "chargebackReversalData": {  
    "originalUuid": "afb7d03c447abb5a2628",  
    "originalMerchantTransactionId": "original-merchant-identifier",  
    "chargebackUuid": "313f381aef908f4558e3",  
    "amount": "9.99",  
    "currency": "EUR",  
    "reason": "Chargeback reversed",  
    "reversalDateTime": "2026-04-10T08:52:36Z"  
  }  
}  

```

## Account updater notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#account-updater-notification "Direct link to Account updater notification")
If your merchant account has the Account Updater feature enabled, you will receive notifications when a stored card of a customer gets updated. These notifications provide information about changes made to the card.
The account updater notification can result in the following outcomes:
  * `updated`: The card number and expiry date were updated.
  * `closed`: The card is closed and no longer valid.
  * `new_expiry`: The card expiry date was updated.
  * `contact`: Contact the cardholder for updated information.


The results of the account updater process will be reported as `extraData` in the notification payload. This allows you to retrieve the specific result of the update.
Here's an example of an account updater notification:

```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "REGISTER",  
  "paymentMethod": "Creditcard",  
  "extraData": {  
    "lastCardUpdateDate": "2021-04-01",  
    "lastCardUpdateResult": "updated"  
  },  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  }  
}  

```

In the example, the notification indicates that the last card update occurred on `April 1st, 2021`, and the result of the update was `updated`. The `returnData` field of type `cardData` contains the updated card information, such as the card type, cardholder name, expiry date, BIN details, and more.
With account updater notifications, you can stay informed about changes to your customers' stored cards, enabling you to maintain up-to-date payment information and provide seamless transaction experiences.
## Network token notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#network-token-notification "Direct link to Network token notification")
When a network token is created, you will receive notifications for any updates related to that token. These notifications are important for staying up-to-date with changes to your network tokens.
You will receive notifications under the following circumstances:
  * **Asynchronous Tokenization** : You will be notified when the tokenization process is completed, and the token has been successfully created.
  * **Synchronous Tokenization** : In the case of synchronous tokenization, the token information will be available both in the API response and within the notification.


The token's status and any associated metadata, such as card art, are reported within the `extraData` field of the notification payload:
  * `extraData.networkTokenStatus` (string enum): Current status of the token. Possible values are:
    * `active`: Token is active and can be used.
    * `inactive`: The token is not yet active.
    * `suspended`: The token has been suspended and cannot be used at the moment.
    * `deactivated`: The token is disabled and cannot be used anymore.
    * `pending`: Tokenization is in progress.
    * `error`: Error occurred during tokenization.
  * `extraData.networkTokenMetadata.assets` (object, optional): An object that contains metadata assets if available. Each **key** represents an asset type and each **value** is the asset's identifier.
    * **Keys** (string): Name or type of the asset (e.g., "cardArt", "otherArt"). These keys are dynamic and depend on the available assets.
    * **Values** (string): The unique identifier of the asset.
  * `extraData.lastNetworkTokenUpdateDate` (string, optional): Date of the most recent update notification.
  * `extraData.lastNetworkTokenUpdateResult` (string enum, optional): In the case of a token update, this field indicates the result. Possible values include:
    * `pan_changed`: PAN has changed.
    * `pan_expiry_changed`: PAN expiry has changed.
    * `token_expiry_changed`: Token expiry has changed.
    * `active`: Token is active and can be used.
    * `inactive`: The token is not yet active.
    * `suspended`: The token has been suspended and cannot be used at the moment.
    * `deactivated`: The token is disabled and cannot be used anymore.
    * `error`: Error occurred during tokenization.


Here are examples of network notifications:
  * Initial notification
  * Update without changing state
  * Update that changes state



```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  },  
  "extraData": {  
    "networkTokenStatus": "active",  
    "networkTokenMetadata": {  
      "assets": {  
        "cardSymbol": "aaaa1111bbbb2222cccc3333dddd4444",  
        "digitalCardArt": "eeee5555ffff6666gggg7777hhhh8888"  
      }  
    }  
  }  
}  

```


```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  },  
  "extraData": {  
    "networkTokenStatus": "active",  
    "lastNetworkTokenUpdateDate": "2026-04-10T08:52:36Z",  
    "lastNetworkTokenUpdateResult": "pan_expiry_changed"  
  }  
}  

```


```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  },  
  "extraData": {  
    "networkTokenStatus": "suspended",  
    "lastNetworkTokenUpdateDate": "2026-04-10T08:52:36Z",  
    "lastNetworkTokenUpdateResult": "suspended"  
  }  
}  

```

Send Feedback
  * [](https://documentation.ixopay.com/)
  * [Integration](https://documentation.ixopay.com/docs/reference/integration)
  * [Callbacks](https://documentation.ixopay.com/docs/reference/integration/callbacks)
  * Notification types


On this page
# Notification types
This guide provides an overview of the various notification types you can receive from the [IXOPAY platform](https://www.ixopay.com) payment processing platform. These notifications deliver updates about transaction outcomes and related information.
Understanding notification types is important for effectively managing payment processing in your integration with IXOPAY platform. This documentation explores each notification type, its structure, and the key information it contains.
To further enhance your understanding of callback handling in IXOPAY platform, explore the following articles:
  * [Response handling](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling): Best practices for handling callback responses.
  * [Callback data](https://documentation.ixopay.com/docs/reference/integration/callbacks/callback-data): Detailed information on the structure and format of callback data.


## Success notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#success-notification "Direct link to Success notification")
When a transaction reaches its final state and is successful, the `result` field in the notification will contain the value `OK`. You can rely on this indication to confirm that the transaction has been successfully processed.
Here's an example of a success notification:

```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "your-unique-identifier",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "DirectDebit",  
  "amount": "9.99",  
  "currency": "EUR",  
  "customer": {  
    "firstName": "Alex",  
    "lastName": "Smith",  
    "emailVerified": "false"  
  },  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  }  
}  

```

## Error notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#error-notification "Direct link to Error notification")
In the case of a failed transaction, the `result` field will contain the value `ERROR`. Depending on the specific error, you may find useful information in the `message` and `code` fields or in the `adapterMessage` and `adapterCode` fields, which provide errors returned by the corresponding adapter.
Here's an example of an error notification:

```
{  
  "result": "ERROR",  
  "message": "STOLEN_CARD",  
  "code": "2016",  
  "adapterMessage": "Transaction was rejected",  
  "adapterCode": "1234",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "your-unique-identifier",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "DirectDebit",  
  "amount": "9.99",  
  "currency": "EUR",  
  "customer": {  
    "firstName": "Alex",  
    "lastName": "Smith",  
    "emailVerified": "false"  
  },  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT"  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  }  
}  

```

## Chargeback notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#chargeback-notification "Direct link to Chargeback notification")
When a chargeback occurs, you will receive a notification containing relevant information in the `chargebackData` field. This information provides details about the chargeback transaction.
Here's an example of a chargeback notification:

```
{  
  "result": "OK",  
  "uuid": "313f381aef908f4558e3",  
  "merchantTransactionId": "auto-313f381aef908f4558e3",  
  "purchaseId": "20260409-313f381aef908f4558e3",  
  "transactionType": "CHARGEBACK",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "chargebackData": {  
    "originalUuid": "afb7d03c447abb5a2628",  
    "originalMerchantTransactionId": "original-merchant-identifier",  
    "amount": 9.99,  
    "currency": "EUR",  
    "reason": "Unauthorized payment",  
    "chargebackDateTime": "2026-04-11T08:52:36Z"  
  }  
}  

```

## Chargeback-reversal notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#chargeback-reversal-notification "Direct link to Chargeback-reversal notification")
When a chargeback reversal occurs, you will receive a notification containing relevant information in the `chargebackReversalData` field. This information provides details about the reversal of a previous chargeback transaction.
Here's an example of a chargeback reversal notification:

```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "CHARGEBACK-REVERSAL",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "chargebackReversalData": {  
    "originalUuid": "afb7d03c447abb5a2628",  
    "originalMerchantTransactionId": "original-merchant-identifier",  
    "chargebackUuid": "313f381aef908f4558e3",  
    "amount": "9.99",  
    "currency": "EUR",  
    "reason": "Chargeback reversed",  
    "reversalDateTime": "2026-04-10T08:52:36Z"  
  }  
}  

```

## Account updater notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#account-updater-notification "Direct link to Account updater notification")
If your merchant account has the Account Updater feature enabled, you will receive notifications when a stored card of a customer gets updated. These notifications provide information about changes made to the card.
The account updater notification can result in the following outcomes:
  * `updated`: The card number and expiry date were updated.
  * `closed`: The card is closed and no longer valid.
  * `new_expiry`: The card expiry date was updated.
  * `contact`: Contact the cardholder for updated information.


The results of the account updater process will be reported as `extraData` in the notification payload. This allows you to retrieve the specific result of the update.
Here's an example of an account updater notification:

```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "REGISTER",  
  "paymentMethod": "Creditcard",  
  "extraData": {  
    "lastCardUpdateDate": "2021-04-01",  
    "lastCardUpdateResult": "updated"  
  },  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  }  
}  

```

In the example, the notification indicates that the last card update occurred on `April 1st, 2021`, and the result of the update was `updated`. The `returnData` field of type `cardData` contains the updated card information, such as the card type, cardholder name, expiry date, BIN details, and more.
With account updater notifications, you can stay informed about changes to your customers' stored cards, enabling you to maintain up-to-date payment information and provide seamless transaction experiences.
## Network token notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#network-token-notification "Direct link to Network token notification")
When a network token is created, you will receive notifications for any updates related to that token. These notifications are important for staying up-to-date with changes to your network tokens.
You will receive notifications under the following circumstances:
  * **Asynchronous Tokenization** : You will be notified when the tokenization process is completed, and the token has been successfully created.
  * **Synchronous Tokenization** : In the case of synchronous tokenization, the token information will be available both in the API response and within the notification.


The token's status and any associated metadata, such as card art, are reported within the `extraData` field of the notification payload:
  * `extraData.networkTokenStatus` (string enum): Current status of the token. Possible values are:
    * `active`: Token is active and can be used.
    * `inactive`: The token is not yet active.
    * `suspended`: The token has been suspended and cannot be used at the moment.
    * `deactivated`: The token is disabled and cannot be used anymore.
    * `pending`: Tokenization is in progress.
    * `error`: Error occurred during tokenization.
  * `extraData.networkTokenMetadata.assets` (object, optional): An object that contains metadata assets if available. Each **key** represents an asset type and each **value** is the asset's identifier.
    * **Keys** (string): Name or type of the asset (e.g., "cardArt", "otherArt"). These keys are dynamic and depend on the available assets.
    * **Values** (string): The unique identifier of the asset.
  * `extraData.lastNetworkTokenUpdateDate` (string, optional): Date of the most recent update notification.
  * `extraData.lastNetworkTokenUpdateResult` (string enum, optional): In the case of a token update, this field indicates the result. Possible values include:
    * `pan_changed`: PAN has changed.
    * `pan_expiry_changed`: PAN expiry has changed.
    * `token_expiry_changed`: Token expiry has changed.
    * `active`: Token is active and can be used.
    * `inactive`: The token is not yet active.
    * `suspended`: The token has been suspended and cannot be used at the moment.
    * `deactivated`: The token is disabled and cannot be used anymore.
    * `error`: Error occurred during tokenization.


Here are examples of network notifications:
  * Initial notification
  * Update without changing state
  * Update that changes state



```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  },  
  "extraData": {  
    "networkTokenStatus": "active",  
    "networkTokenMetadata": {  
      "assets": {  
        "cardSymbol": "aaaa1111bbbb2222cccc3333dddd4444",  
        "digitalCardArt": "eeee5555ffff6666gggg7777hhhh8888"  
      }  
    }  
  }  
}  

```


```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  },  
  "extraData": {  
    "networkTokenStatus": "active",  
    "lastNetworkTokenUpdateDate": "2026-04-10T08:52:36Z",  
    "lastNetworkTokenUpdateResult": "pan_expiry_changed"  
  }  
}  

```


```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  },  
  "extraData": {  
    "networkTokenStatus": "suspended",  
    "lastNetworkTokenUpdateDate": "2026-04-10T08:52:36Z",  
    "lastNetworkTokenUpdateResult": "suspended"  
  }  
}  

```

Last updated on **Apr 10, 2026**
[Previous Callback data](https://documentation.ixopay.com/docs/reference/integration/callbacks/callback-data)[Next Hosted fields — payment.js](https://documentation.ixopay.com/docs/reference/integration/payment.js)
  * [Success notification](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#success-notification)
  * [Error notification](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#error-notification)
  * [Chargeback notification](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#chargeback-notification)
  * [Chargeback-reversal notification](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#chargeback-reversal-notification)
  * [Account updater notification](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#account-updater-notification)
  * [Network token notification](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#network-token-notification)


Send Feedback
Send Feedback
  * [](https://documentation.ixopay.com/)
  * [Integration](https://documentation.ixopay.com/docs/reference/integration)
  * [Callbacks](https://documentation.ixopay.com/docs/reference/integration/callbacks)
  * Notification types


On this page
# Notification types
This guide provides an overview of the various notification types you can receive from the [IXOPAY platform](https://www.ixopay.com) payment processing platform. These notifications deliver updates about transaction outcomes and related information.
Understanding notification types is important for effectively managing payment processing in your integration with IXOPAY platform. This documentation explores each notification type, its structure, and the key information it contains.
To further enhance your understanding of callback handling in IXOPAY platform, explore the following articles:
  * [Response handling](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling): Best practices for handling callback responses.
  * [Callback data](https://documentation.ixopay.com/docs/reference/integration/callbacks/callback-data): Detailed information on the structure and format of callback data.


## Success notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#success-notification "Direct link to Success notification")
When a transaction reaches its final state and is successful, the `result` field in the notification will contain the value `OK`. You can rely on this indication to confirm that the transaction has been successfully processed.
Here's an example of a success notification:

```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "your-unique-identifier",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "DirectDebit",  
  "amount": "9.99",  
  "currency": "EUR",  
  "customer": {  
    "firstName": "Alex",  
    "lastName": "Smith",  
    "emailVerified": "false"  
  },  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  }  
}  

```

## Error notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#error-notification "Direct link to Error notification")
In the case of a failed transaction, the `result` field will contain the value `ERROR`. Depending on the specific error, you may find useful information in the `message` and `code` fields or in the `adapterMessage` and `adapterCode` fields, which provide errors returned by the corresponding adapter.
Here's an example of an error notification:

```
{  
  "result": "ERROR",  
  "message": "STOLEN_CARD",  
  "code": "2016",  
  "adapterMessage": "Transaction was rejected",  
  "adapterCode": "1234",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "your-unique-identifier",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "DirectDebit",  
  "amount": "9.99",  
  "currency": "EUR",  
  "customer": {  
    "firstName": "Alex",  
    "lastName": "Smith",  
    "emailVerified": "false"  
  },  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT"  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  }  
}  

```

## Chargeback notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#chargeback-notification "Direct link to Chargeback notification")
When a chargeback occurs, you will receive a notification containing relevant information in the `chargebackData` field. This information provides details about the chargeback transaction.
Here's an example of a chargeback notification:

```
{  
  "result": "OK",  
  "uuid": "313f381aef908f4558e3",  
  "merchantTransactionId": "auto-313f381aef908f4558e3",  
  "purchaseId": "20260409-313f381aef908f4558e3",  
  "transactionType": "CHARGEBACK",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "chargebackData": {  
    "originalUuid": "afb7d03c447abb5a2628",  
    "originalMerchantTransactionId": "original-merchant-identifier",  
    "amount": 9.99,  
    "currency": "EUR",  
    "reason": "Unauthorized payment",  
    "chargebackDateTime": "2026-04-11T08:52:36Z"  
  }  
}  

```

## Chargeback-reversal notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#chargeback-reversal-notification "Direct link to Chargeback-reversal notification")
When a chargeback reversal occurs, you will receive a notification containing relevant information in the `chargebackReversalData` field. This information provides details about the reversal of a previous chargeback transaction.
Here's an example of a chargeback reversal notification:

```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "CHARGEBACK-REVERSAL",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "chargebackReversalData": {  
    "originalUuid": "afb7d03c447abb5a2628",  
    "originalMerchantTransactionId": "original-merchant-identifier",  
    "chargebackUuid": "313f381aef908f4558e3",  
    "amount": "9.99",  
    "currency": "EUR",  
    "reason": "Chargeback reversed",  
    "reversalDateTime": "2026-04-10T08:52:36Z"  
  }  
}  

```

## Account updater notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#account-updater-notification "Direct link to Account updater notification")
If your merchant account has the Account Updater feature enabled, you will receive notifications when a stored card of a customer gets updated. These notifications provide information about changes made to the card.
The account updater notification can result in the following outcomes:
  * `updated`: The card number and expiry date were updated.
  * `closed`: The card is closed and no longer valid.
  * `new_expiry`: The card expiry date was updated.
  * `contact`: Contact the cardholder for updated information.


The results of the account updater process will be reported as `extraData` in the notification payload. This allows you to retrieve the specific result of the update.
Here's an example of an account updater notification:

```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "REGISTER",  
  "paymentMethod": "Creditcard",  
  "extraData": {  
    "lastCardUpdateDate": "2021-04-01",  
    "lastCardUpdateResult": "updated"  
  },  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  }  
}  

```

In the example, the notification indicates that the last card update occurred on `April 1st, 2021`, and the result of the update was `updated`. The `returnData` field of type `cardData` contains the updated card information, such as the card type, cardholder name, expiry date, BIN details, and more.
With account updater notifications, you can stay informed about changes to your customers' stored cards, enabling you to maintain up-to-date payment information and provide seamless transaction experiences.
## Network token notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#network-token-notification "Direct link to Network token notification")
When a network token is created, you will receive notifications for any updates related to that token. These notifications are important for staying up-to-date with changes to your network tokens.
You will receive notifications under the following circumstances:
  * **Asynchronous Tokenization** : You will be notified when the tokenization process is completed, and the token has been successfully created.
  * **Synchronous Tokenization** : In the case of synchronous tokenization, the token information will be available both in the API response and within the notification.


The token's status and any associated metadata, such as card art, are reported within the `extraData` field of the notification payload:
  * `extraData.networkTokenStatus` (string enum): Current status of the token. Possible values are:
    * `active`: Token is active and can be used.
    * `inactive`: The token is not yet active.
    * `suspended`: The token has been suspended and cannot be used at the moment.
    * `deactivated`: The token is disabled and cannot be used anymore.
    * `pending`: Tokenization is in progress.
    * `error`: Error occurred during tokenization.
  * `extraData.networkTokenMetadata.assets` (object, optional): An object that contains metadata assets if available. Each **key** represents an asset type and each **value** is the asset's identifier.
    * **Keys** (string): Name or type of the asset (e.g., "cardArt", "otherArt"). These keys are dynamic and depend on the available assets.
    * **Values** (string): The unique identifier of the asset.
  * `extraData.lastNetworkTokenUpdateDate` (string, optional): Date of the most recent update notification.
  * `extraData.lastNetworkTokenUpdateResult` (string enum, optional): In the case of a token update, this field indicates the result. Possible values include:
    * `pan_changed`: PAN has changed.
    * `pan_expiry_changed`: PAN expiry has changed.
    * `token_expiry_changed`: Token expiry has changed.
    * `active`: Token is active and can be used.
    * `inactive`: The token is not yet active.
    * `suspended`: The token has been suspended and cannot be used at the moment.
    * `deactivated`: The token is disabled and cannot be used anymore.
    * `error`: Error occurred during tokenization.


Here are examples of network notifications:
  * Initial notification
  * Update without changing state
  * Update that changes state



```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  },  
  "extraData": {  
    "networkTokenStatus": "active",  
    "networkTokenMetadata": {  
      "assets": {  
        "cardSymbol": "aaaa1111bbbb2222cccc3333dddd4444",  
        "digitalCardArt": "eeee5555ffff6666gggg7777hhhh8888"  
      }  
    }  
  }  
}  

```


```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  },  
  "extraData": {  
    "networkTokenStatus": "active",  
    "lastNetworkTokenUpdateDate": "2026-04-10T08:52:36Z",  
    "lastNetworkTokenUpdateResult": "pan_expiry_changed"  
  }  
}  

```


```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  },  
  "extraData": {  
    "networkTokenStatus": "suspended",  
    "lastNetworkTokenUpdateDate": "2026-04-10T08:52:36Z",  
    "lastNetworkTokenUpdateResult": "suspended"  
  }  
}  

```

Last updated on **Apr 10, 2026**
# Notification types
This guide provides an overview of the various notification types you can receive from the [IXOPAY platform](https://www.ixopay.com) payment processing platform. These notifications deliver updates about transaction outcomes and related information.
Understanding notification types is important for effectively managing payment processing in your integration with IXOPAY platform. This documentation explores each notification type, its structure, and the key information it contains.
To further enhance your understanding of callback handling in IXOPAY platform, explore the following articles:
  * [Response handling](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling): Best practices for handling callback responses.
  * [Callback data](https://documentation.ixopay.com/docs/reference/integration/callbacks/callback-data): Detailed information on the structure and format of callback data.


## Success notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#success-notification "Direct link to Success notification")
When a transaction reaches its final state and is successful, the `result` field in the notification will contain the value `OK`. You can rely on this indication to confirm that the transaction has been successfully processed.
Here's an example of a success notification:

```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "your-unique-identifier",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "DirectDebit",  
  "amount": "9.99",  
  "currency": "EUR",  
  "customer": {  
    "firstName": "Alex",  
    "lastName": "Smith",  
    "emailVerified": "false"  
  },  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  }  
}  

```

## Error notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#error-notification "Direct link to Error notification")
In the case of a failed transaction, the `result` field will contain the value `ERROR`. Depending on the specific error, you may find useful information in the `message` and `code` fields or in the `adapterMessage` and `adapterCode` fields, which provide errors returned by the corresponding adapter.
Here's an example of an error notification:

```
{  
  "result": "ERROR",  
  "message": "STOLEN_CARD",  
  "code": "2016",  
  "adapterMessage": "Transaction was rejected",  
  "adapterCode": "1234",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "your-unique-identifier",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "DirectDebit",  
  "amount": "9.99",  
  "currency": "EUR",  
  "customer": {  
    "firstName": "Alex",  
    "lastName": "Smith",  
    "emailVerified": "false"  
  },  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT"  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  }  
}  

```

## Chargeback notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#chargeback-notification "Direct link to Chargeback notification")
When a chargeback occurs, you will receive a notification containing relevant information in the `chargebackData` field. This information provides details about the chargeback transaction.
Here's an example of a chargeback notification:

```
{  
  "result": "OK",  
  "uuid": "313f381aef908f4558e3",  
  "merchantTransactionId": "auto-313f381aef908f4558e3",  
  "purchaseId": "20260409-313f381aef908f4558e3",  
  "transactionType": "CHARGEBACK",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "chargebackData": {  
    "originalUuid": "afb7d03c447abb5a2628",  
    "originalMerchantTransactionId": "original-merchant-identifier",  
    "amount": 9.99,  
    "currency": "EUR",  
    "reason": "Unauthorized payment",  
    "chargebackDateTime": "2026-04-11T08:52:36Z"  
  }  
}  

```

## Chargeback-reversal notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#chargeback-reversal-notification "Direct link to Chargeback-reversal notification")
When a chargeback reversal occurs, you will receive a notification containing relevant information in the `chargebackReversalData` field. This information provides details about the reversal of a previous chargeback transaction.
Here's an example of a chargeback reversal notification:

```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "CHARGEBACK-REVERSAL",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "chargebackReversalData": {  
    "originalUuid": "afb7d03c447abb5a2628",  
    "originalMerchantTransactionId": "original-merchant-identifier",  
    "chargebackUuid": "313f381aef908f4558e3",  
    "amount": "9.99",  
    "currency": "EUR",  
    "reason": "Chargeback reversed",  
    "reversalDateTime": "2026-04-10T08:52:36Z"  
  }  
}  

```

## Account updater notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#account-updater-notification "Direct link to Account updater notification")
If your merchant account has the Account Updater feature enabled, you will receive notifications when a stored card of a customer gets updated. These notifications provide information about changes made to the card.
The account updater notification can result in the following outcomes:
  * `updated`: The card number and expiry date were updated.
  * `closed`: The card is closed and no longer valid.
  * `new_expiry`: The card expiry date was updated.
  * `contact`: Contact the cardholder for updated information.


The results of the account updater process will be reported as `extraData` in the notification payload. This allows you to retrieve the specific result of the update.
Here's an example of an account updater notification:

```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "REGISTER",  
  "paymentMethod": "Creditcard",  
  "extraData": {  
    "lastCardUpdateDate": "2021-04-01",  
    "lastCardUpdateResult": "updated"  
  },  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  }  
}  

```

In the example, the notification indicates that the last card update occurred on `April 1st, 2021`, and the result of the update was `updated`. The `returnData` field of type `cardData` contains the updated card information, such as the card type, cardholder name, expiry date, BIN details, and more.
With account updater notifications, you can stay informed about changes to your customers' stored cards, enabling you to maintain up-to-date payment information and provide seamless transaction experiences.
## Network token notification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types#network-token-notification "Direct link to Network token notification")
When a network token is created, you will receive notifications for any updates related to that token. These notifications are important for staying up-to-date with changes to your network tokens.
You will receive notifications under the following circumstances:
  * **Asynchronous Tokenization** : You will be notified when the tokenization process is completed, and the token has been successfully created.
  * **Synchronous Tokenization** : In the case of synchronous tokenization, the token information will be available both in the API response and within the notification.


The token's status and any associated metadata, such as card art, are reported within the `extraData` field of the notification payload:
  * `extraData.networkTokenStatus` (string enum): Current status of the token. Possible values are:
    * `active`: Token is active and can be used.
    * `inactive`: The token is not yet active.
    * `suspended`: The token has been suspended and cannot be used at the moment.
    * `deactivated`: The token is disabled and cannot be used anymore.
    * `pending`: Tokenization is in progress.
    * `error`: Error occurred during tokenization.
  * `extraData.networkTokenMetadata.assets` (object, optional): An object that contains metadata assets if available. Each **key** represents an asset type and each **value** is the asset's identifier.
    * **Keys** (string): Name or type of the asset (e.g., "cardArt", "otherArt"). These keys are dynamic and depend on the available assets.
    * **Values** (string): The unique identifier of the asset.
  * `extraData.lastNetworkTokenUpdateDate` (string, optional): Date of the most recent update notification.
  * `extraData.lastNetworkTokenUpdateResult` (string enum, optional): In the case of a token update, this field indicates the result. Possible values include:
    * `pan_changed`: PAN has changed.
    * `pan_expiry_changed`: PAN expiry has changed.
    * `token_expiry_changed`: Token expiry has changed.
    * `active`: Token is active and can be used.
    * `inactive`: The token is not yet active.
    * `suspended`: The token has been suspended and cannot be used at the moment.
    * `deactivated`: The token is disabled and cannot be used anymore.
    * `error`: Error occurred during tokenization.


Here are examples of network notifications:
  * Initial notification
  * Update without changing state
  * Update that changes state



```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  },  
  "extraData": {  
    "networkTokenStatus": "active",  
    "networkTokenMetadata": {  
      "assets": {  
        "cardSymbol": "aaaa1111bbbb2222cccc3333dddd4444",  
        "digitalCardArt": "eeee5555ffff6666gggg7777hhhh8888"  
      }  
    }  
  }  
}  

```


```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  },  
  "extraData": {  
    "networkTokenStatus": "active",  
    "lastNetworkTokenUpdateDate": "2026-04-10T08:52:36Z",  
    "lastNetworkTokenUpdateResult": "pan_expiry_changed"  
  }  
}  

```


```
{  
  "result": "OK",  
  "uuid": "d94c0d72f3a36e21f16e",  
  "merchantTransactionId": "auto-d94c0d72f3a36e21f16e",  
  "purchaseId": "20260409-d94c0d72f3a36e21f16e",  
  "transactionType": "DEBIT",  
  "paymentMethod": "Creditcard",  
  "amount": "9.99",  
  "currency": "EUR",  
  "returnData": {  
    "_TYPE": "cardData",  
    "type": "visa",  
    "cardHolder": "Alex Smith",  
    "expiryMonth": "4",  
    "expiryYear": "2031",  
    "binDigits": "41111111",  
    "firstSixDigits": "411111",  
    "lastFourDigits": "1111",  
    "fingerprint": "46f7adfeb0a123fb8fcbfasdf6171asd6b3dfas44834c",  
    "threeDSecure": "OFF",  
    "binBrand": "US",  
    "binBank": "Global Trust Bank",  
    "binType": "CREDIT",  
    "binLevel": "STANDARD",  
    "binCountry": "US"  
  },  
  "extraData": {  
    "networkTokenStatus": "suspended",  
    "lastNetworkTokenUpdateDate": "2026-04-10T08:52:36Z",  
    "lastNetworkTokenUpdateResult": "suspended"  
  }  
}  

```

