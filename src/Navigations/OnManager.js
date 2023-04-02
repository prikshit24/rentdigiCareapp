import React, { useEffect } from 'react'

const OnManager = (props) => {
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

export default OnManager;