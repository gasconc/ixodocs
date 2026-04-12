---
title: "Debit"
summary: "Create debit transactions with card data via the PCI Transaction API"
tags: [debit, transaction, api, pci, card, payment]
source_url: "https://documentation.ixopay.com/api/pci/debit"
portal: "ixopay-dev"
updated: "2026-04-10"
related:
  - ixopay/api/pci/preauthorize.md
---

# Debit

The Debit transaction type initiates a payment where funds are immediately transferred from the customer's account.

## Request

POST /transaction/debit

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| merchantTransactionId | string | yes | Unique merchant reference |
| amount | number | yes | Transaction amount |
| currency | string | yes | ISO 4217 currency code |
