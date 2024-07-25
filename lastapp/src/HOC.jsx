import React from 'react'

function HOC(CallbackComponent) {
    return (props) => {
        let additionalProps = {}
        if (props.name == "Vicky") {
            additionalProps.address = "Odisha"
        } else {
            additionalProps.address = "Bengaluru"
        }
        return (
            <>
                <CallbackComponent
                    {...props}
                    {...additionalProps} />
            </>
        )
    }
}

export default HOC