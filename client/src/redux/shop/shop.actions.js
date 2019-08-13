import ShopActionTypes from './shop.types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util';

export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSucess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCESS,
    payload: collectionsMap,
});

export const fetchCollectionFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
});


export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart());
        collectionRef.get().then(snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                dispatch(fetchCollectionSucess(collectionsMap));
        }).catch(error => dispatch(fetchCollectionFailure(error.message)))
    };
};