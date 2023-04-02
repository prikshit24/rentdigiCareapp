import React, { useEffect } from 'react'
const OnTechnicalStaff = (props) => {
    useEffect(() => {
        props.navigation.navigate('maintenanceRequest')
        return () => {
            console.log();
        }
    }, [])
  return (
    <></>
  )
}

export default OnTechnicalStaff;