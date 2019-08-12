import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverviewContainer from '../../components/collections-overview/collection-overview.container';
import CollectionContainer from '../collection/collection.conatainer';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';



const ShopPage = props => {
       const { fetchCollectionsStartAsync, match } = props;
       useEffect(() => {
              const { fetchCollectionsStartAsync } = props;
              fetchCollectionsStartAsync();
       },[fetchCollectionsStartAsync])
              return (
                     <div className='shop-page'>
                            <Route
                                   exact
                                   path={`${match.path}`}
                                   component={CollectionOverviewContainer}
                            />
                            <Route
                                   path={`${match.path}/:collectionId`}
                                   component={CollectionContainer}
                            />
                     </div>
              )
}

const mapDispatchToProps = dispatch => ({
       fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
})

export default connect(null, mapDispatchToProps)(ShopPage);