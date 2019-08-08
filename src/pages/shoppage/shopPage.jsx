import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../components/collections-overview/collections-overview'
import CollectionPage from '../collection/collection';
import WithSpinner from '../../components/with-spinner/with-spinner';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectIsCollectionLoaded  } from '../../redux/shop/shop.selectors';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {
       state = {
              loading: true,
       }
       unsubscribeFromSnapshot = null;
       componentDidMount() {
              const { fetchCollectionsStartAsync } = this.props;
              fetchCollectionsStartAsync();

       }
       render() {
              const { match, isCollecttionFetching, isCollectionLoaded  } = this.props;
              return (
                     <div className='shop-page'>
                            <Route
                                   exact
                                   path={`${match.path}`}
                                   render={(props) => <CollectionOverviewWithSpinner
                                          isLoading={isCollecttionFetching}
                                          {...props}
                                   />}
                            />
                            <Route
                                   path={`${match.path}/:collectionId`}
                                   render={props => <CollectionPageWithSpinner
                                          isLoading={!isCollectionLoaded}
                                          {...props}
                                   />}
                            />
                     </div>
              )
       }
}

const mapStateToProps = createStructuredSelector({
       isCollecttionFetching: selectIsCollectionFetching,
       isCollectionLoaded: selectIsCollectionLoaded,
})

const mapDispatchToProps = dispatch => ({
       fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);