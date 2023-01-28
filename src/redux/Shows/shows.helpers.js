import { firestore } from '../../firebase/utils';

export const handleAddShow = show => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('shows')
            .doc()
            .set(show)
            .then(() => {
                resolve();
            })
            .catch(err => {
                reject(err)
            })
    })
};

export const handleFetchShows = pageSize => {
    return new Promise ((resolve, reject) => {
        let page = pageSize;
        let ref = firestore.collection('shows').orderBy('createdDate').limit(page);

        ref
            .get()
            .then(snapshot => {

                const totalCount = snapshot.size;

                const data = [
                    ...snapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                            documentID: doc.id
                        }
                    })
                ];

                resolve({
                    data,
                    queryDoc: snapshot.docs[totalCount - 1]

                })
            })
            .catch(err => {
                reject(err)
            })
    })
};

export const handleDeleteShow = documentID => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('shows')
            .doc(documentID)
            .delete()
            .then(() => {
                resolve();
            })
            .catch(err => {
                reject(err)
            })
    })
};
