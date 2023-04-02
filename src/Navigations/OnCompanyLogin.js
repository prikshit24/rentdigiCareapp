import React, { useEffect } from 'react'

const OnCompanyLogin = (props) => {
    useEffect(() => {
        props.navigation.navigate('dashboard')
        return () => {
            console.log();
        }
    }, [])
  return (
    <></>
  )
}

export default OnCompanyLogin