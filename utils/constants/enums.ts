/*
 * Copyright (c) 2023 Groupado.
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are not permitted.
 */

export const AddressEnum: any[] = ['deleted', 'active']

export const BusinessRequestEnum: any[] = [
    'deleted',
    'active',
    'waiting for approval',
    'refused',
    'pending approval',
    'updated request',
]

export const BusinessRequestTypeEnum: any[] = ['shop owner', 'other']

export const CartEnum: any[] = ['deleted', 'active']

export const ComplaintCreatorEnum: any[] = ['deleted', 'active']

export const ComplaintTypeEnum: any[] = ['deleted', 'active']

export const ComplaintEnum: any[] = ['deleted', 'active']

export const DeleteReasonEnum: any[] = ['deleted', 'active']

export const FollowReasonEnum: any[] = ['confirmed', 'waiting']

export const NotificationHistoryEnum: any[] = ['deleted', 'active']

export const NotificationEnum: any[] = ['deleted', 'active']

export const OrderStatusEnum: any[] = [
    'deleted',
    'waiting',
    'accepted',
    'ontheRoad',
    'delivered',
    'refused',
    'returned',
    'completed',
]

export const OrderPaymentStatusColor = ['red', 'green']

export const OrderStatusColor = [
    'gray',
    'red',
    'yellow',
    'orange',
    'green',
    'red',
    'red',
    'green',
]
export const OrderPaymentStatusEnum: any[] = ['pending', 'paid']

export const OrderStatusEnumLabels: any[] = [
    'Deleted',
    'Waiting',
    'Accepted',
    'On The Road',
    'Delivered',
    'Refused',
    'Returned',
]

export const OrderPaymentEnum: any[] = ['cash on delivery', 'paid']

export const OrderCollectEnum: any[] = ['Delivery', 'Pick up']

export const SessionEnum: any[] = [
    'inactive',
    'active',
    'waiting',
    'live',
    'expired',
]

export const ClientSessionBanEnumEnum: any[] = ['active']

export const SizeEnum: any[] = ['deleted', 'active']

export const TagEnum: any[] = ['deleted', 'active']

export const ProductEnum: any[] = [
    'deleted',
    'active',
    'user deleted',
    'inactive',
    'blocked',
    'expired',
]

export const EventEnum: any[] = ['deleted', 'active', 'user deleted', 'expired']
export const MerchantEnum: any[] = [
    'inactive',
    'active',
    'blocked',
    'active',
    'inactive',
    'expired',
    // 'waiting credentials',
]
export const UserEnum: any[] = [
    'deleted',
    'active',
    'blocked',
    'active',
    'inactive',
    'expired',
    // 'pending credentials',
]

export const DefaultStatusEnum: any[] = ['inactive', 'active']

export const AdminUserEnum: any[] = [
    'deleted',
    'active',
    'blocked',
    'pending credentials',
]

export const StatusColorEnum: any = {
    active: 'green',
    blocked: 'red',
    inactive: 'gray',
    deleted: 'red',
    refused: 'red',
    change: 'yellow',
    'pending approval': 'yellow',
    pending: 'yellow',
    'waiting for approval': 'orange',
    waiting: 'orange',
    live: 'green',
    accepted: 'teal',
    ontheRoad: 'orange',
    delivered: 'green',
    returned: 'gray',
    'merchant-inactive': 'gray',
}

export const SHOP_STATUS: any = [
    'inactive',
    'active',
    'blocked',
    'pending',
    'inactive',
]

export const ComplaintCreatorStatusEnum: any = {
    acknowledged: 'ACKNOWLEDGED',
    unacknowledged: 'UNACKNOWLEDGED',
}
