/*
 * Copyright (c) 2023 Groupado.
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are not permitted.
 */

export const OrderStatusEnumLabels: any[] = [
    'Deleted',
    'Waiting',
    'Accepted',
    'On The Road',
    'Delivered',
    'Refused',
    'Returned',
    'Delivered',
]
export const getOrderStatusDropdownValues = (status: number) => {
    let send = OrderStatusEnumLabels.map((v: string, key: number) => ({
        label: v,
        value: key,
    })).filter((v: any) => v.value === Number(status) + 1 && v.value < 5)
    // if (status < 3) {
    //     send.push(
    //         { label: 'Refused', value: 5 },
    //         // { label: "Returned", value: 6 }
    //     )
    // }

    return send
}
//

export const ORDER_STATUS_COLORS = [
    'red',
    'orange',
    'teal',
    'yellow',
    'green',
    'red',
    'gray',
    'green',
]
