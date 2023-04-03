import React from 'react'
import { Text } from 'react-native'
import { StyledComponent } from 'nativewind'

const Index = ({ children, ...rest }) => {
  return (
    <StyledComponent component={Text} {...rest}>
      <Text style={{ fontFamily: 'Quicksand', fontWeight: 'light' }}>
        {children}
      </Text>
    </StyledComponent>
  )
}

export default Index
