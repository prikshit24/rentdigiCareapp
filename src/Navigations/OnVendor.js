import React, { useEffect } from 'react'
const OnTechnicalStaff = (props) => {
    useEffect(() => {
        props.navigation.navigate('generalRequest')
        return () => {
            console.log();
        }
    }, [])
  return (
    <></>
  )
}

export default OnTechnicalStaff;