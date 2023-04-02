import React, { useEffect } from 'react'

const OnSupAdmin = (props) => {
  useEffect(() => {
    props.navigation.navigate('dashboard');
    return () => {
      console.log();
    }
  }, [])
  return (
    <></>
  )
}

export default OnSupAdmin;