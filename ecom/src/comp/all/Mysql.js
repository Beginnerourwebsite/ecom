import React from 'react'

export default function Mysql(port, methods, data = {}, details) {
    // confirm("onk")

    let url = `http://localhost:5000/${port}`


    return new Promise((resolve, reject) => {

        if (methods == "get") {
            console.log(data)
            fetch(`${url}/${details}/${JSON.stringify(data)}`).then(datatojson => {
                datatojson.json().then(getdata => {

                    return resolve(getdata)
                }).catch(err => {
                    if (err)
                        reject(err)
                })
            }).catch(err => {
                if (err)
                    reject(err)
            })
        }
        else if (methods == "post") {

            fetch(url, {
                method: methods,
                body: JSON.stringify([data, details]),
                headers: {
                    "content-type": "application/json"
                }
            }).then(datatojson => {
                datatojson.json().then(getdata => {
                    return resolve(getdata)
                })
            })
        }
        else if (methods == "delete") {
            fetch(url, {
                method: methods,
                body: JSON.stringify([data, details]),
                headers: {
                    "content-type": "application/json"
                }
            }).then(datatojson => {
                datatojson.json().then(getdata => {
                    return resolve(getdata)
                })
            })
        }
        else if (methods == "put") {
            fetch(url, {
                method: methods,
                body: JSON.stringify([data, details]),
                headers: {
                    "content-type": "application/json"
                }
            }).then(datatojson => {
                datatojson.json().then(getdata => {
                    return resolve(getdata)
                })
            })
        }
    })
}
