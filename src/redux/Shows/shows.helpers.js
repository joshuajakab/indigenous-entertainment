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
                            showID: doc.id
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

export const handleDeleteShow = showID => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('shows')
            .doc(showID)
            .delete()
            .then(() => {
                resolve();
            })
            .catch(err => {
                reject(err)
            })
    })
};
