/*
 * Copyright (c) 2023 Groupado.
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are not permitted.
 */

export const ProductStatusChangeValues = [
    { label: 'Active', value: 1 },
    { label: 'Inactive', value: 3 },
    { label: 'Blocked', value: 4 },
]
export const EventStatusChangeValues = [
    { label: 'Active', value: 1 },
    { label: 'Inactive', value: 0 },
]

export const PRODUCT_STATUS_COLORS = ['dark', 'green', 'orange', 'gray', 'red']

export const getProductStatusDropdownValues = (status: number) =>
    ProductStatusChangeValues.filter(v => v.value !== status)

export const getEventStatusDropdownValues = (status: number) =>
    EventStatusChangeValues.filter(v => v.value !== status)

export const checkIfProductHasLowStock = (pro: any) => {
    if (pro.qte - pro.reservedQte === 0) {
        return 'Out of stock'
    } else if (pro.qte - pro.reservedQte <= pro.sku) {
        return 'Low Stock'
    } else {
        return ''
    }
}
