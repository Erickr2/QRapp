
import React from 'react'

export const QR = (qrvalue) => {
    return (
        <QrCode
            value={qrvalue ? qrvalue : 'NA'}
            size={250}
            color="black"
            backgroundColor="white"
            style={{ alignSelf: 'center' }}
        />
    )
}

