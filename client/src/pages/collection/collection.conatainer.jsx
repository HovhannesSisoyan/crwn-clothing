import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner';
import Collection from './collection';

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionLoaded(state),
})

const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(Collection);

export default CollectionContainer;