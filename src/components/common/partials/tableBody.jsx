import React, { Component } from 'react';
import { __ } from '@wordpress/i18n';
import { Spinner, } from '@wordpress/components'
import { decodeEntities } from '@wordpress/html-entities';
import _ from 'lodash';
import "bootstrap/dist/css/bootstrap.css";

class TableBody extends Component {
    renderCell = (item, column) => {
        if (column.content) return column.content(item)

        return _.get(item, decodeEntities(column.name))
    }

    createKey = (item, column) => {
        return item.id + (column.name || column.key)
    }
    render() { 
        const { columns, items, itemsCount, itemsLoaded } = this.props;
        let countRow = 1;

        return (
            <tbody>
            {
                !itemsLoaded &&
                <>
                    <td></td>
                    <td></td>
                    <td><Spinner/></td>
                    <td></td>
                    <td></td>
                </>
            }
                { 
                    itemsLoaded &&
                    itemsCount === 0 &&
                    <p class="lead">
                    { __('There is no post here.', 'apt-block')}
                    </p>
            }
                {
                    itemsLoaded && items?.map(item => <tr key={item.id}>
                       <th scope="row">{countRow++}</th> 
                        {columns?.map(column => (
                            <td key={this.createKey(item, column)}>
                                {this.renderCell(item, column)}
                            </td>)
                        )}
                        
                    </tr>
                    )
                }
        </tbody>
        );
    }
}
 
export default TableBody;