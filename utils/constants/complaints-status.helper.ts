/*
 * Copyright (c) 2023 Groupado.
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are not permitted.
 */

export const CreatorComplaintStatusChangeValues = [
    { label: 'Acknowledged', value: 'ACKNOWLEDGED' },
    { label: 'Unacknowledged', value: 'UNACKNOWLEDGED' },
]

export const CREATOR_COMPLAINT_STATUS_COLORS: any = {
    ACKNOWLEDGED: 'green',
    UNACKNOWLEDGED: 'red',
}

export const getCreatorComplaintStatusDropdownValues = (status: string) =>
    CreatorComplaintStatusChangeValues.filter(v => v.value !== status).map(
        val => ({ ...val }),
    )
