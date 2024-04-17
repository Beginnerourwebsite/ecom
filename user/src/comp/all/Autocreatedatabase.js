import React from 'react'
import Mysql from './Mysql'

export default function Autocreatedatabase(create = {
    list: [],
    database: "",
    table: ""
}, port, methods, data) {
    console.log(port)

    return new Promise((resolve, reject) => {
        let url = "http://localhost:5000/auto"
        if (methods == "post") {

            if (create != undefined) {

                fetch(url, {
                    method: 'post',
                    body: JSON.stringify(create),
                    headers: {
                        "content-type": "application/json"
                    }
                }).then(datatojson => {
                    datatojson.json().then(status => {

                        if (status.tables == "Created") {
                           return resolve(Mysql(port, methods, data, `${create.database}.${create.table}`))
                        }

                    })
                })
            }
        }
        else {
            if (create.ifnot == "create") {
                if (create != undefined) {

                    fetch(url, {
                        method: 'post',
                        body: JSON.stringify(create),
                        headers: {
                            "content-type": "application/json"
                        }
                    }).then(datatojson => {
                        datatojson.json().then(status => {

                            if (status.tables == "Created") {
                              return  resolve(Mysql(port, methods, data, `${create.database}.${create.table}`))
                            }

                        })
                    })
                }

            }

            
          return  resolve(Mysql(port, methods, data, `${create.database}.${create.table}`))
        }
    })
}
