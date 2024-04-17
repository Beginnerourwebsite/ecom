import React from 'react';
import Fire from '../../Fire';

export default function AllFirebaseCmd(keys, type, data) {
    return new Promise((resolve, reject) => {
        if (type == 'delete') {
            console.log(keys)
            Fire.child(keys).remove(err => {
                if (err) {
                    reject(err);
                } else {
                    
                    resolve('Deleted successfully');
                }
            });
        } else if (type == 'update') {
            Fire.child(keys).update(data, err => {
                if (err) {
                    reject(err);
                } else {
                    resolve('Updated successfully');
                }
            });
        } else if (type == 'insert') {
            Fire.child(keys).push(data, err => {
                if (err) {
                    reject(err);
                } else {
                    resolve('Saved successfully');
                }
            });
        } else if (type == 'show') {

            Fire.child(keys).on('value', snapshot => {
                resolve(snapshot.val());
            });
        } else {
            reject(new Error('Invalid operation type'));
        }
    });
}
