import React from 'react'
import styled from 'styled-components'

const EnergySystemText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const EnergySystem: React.FunctionComponent = () => {
    return (
        <EnergySystemText>EnergySystem</EnergySystemText>
    )
}

export default EnergySystem
