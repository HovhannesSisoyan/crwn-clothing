import React from 'react';
import { connect } from 'react-redux';

import MenuItem from '../menu-item/menu-item';

import classes from './directory.module.scss'

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

const Directory = ({ sections }) => (
            <div className={classes.directoryMenu}>
                {sections.map(section => (
                    <MenuItem
                        title={section.title}
                        key={section.id}
                        imageUrl={section.imageUrl}
                        size={section.size}
                        linkUrl={section.linkUrl}
                    />
                    ))
                }
            </div>
        );
const mapStateToPrps = createStructuredSelector({
  sections: selectDirectorySections,  
})


export default connect(mapStateToPrps)(Directory);