import React from 'react'
import { useSelector } from 'react-redux'

function ListApps() {
    const apps = useSelector((state) => state.softwares)
    const appList = apps.map(app => {
        return (
            <div key={app.name}>
                <h3>{app.title}</h3>
                <p>{app.isOpen }</p>
                <img src={app.icon} alt={app.name} />
            </div>
        )
    })
    return (
        <div>{appList}</div>
    )
}

export default ListApps