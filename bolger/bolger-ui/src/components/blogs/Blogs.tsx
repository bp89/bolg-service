import React from 'react';

import { State as BlogsState } from '../../reducers/blogs';
import { StyledProps } from 'appProps';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { RootState } from '../../reducers';
import styles from './Blogs.styles';
import ActionTypes from '../../actions/ActionTypes';
import DataGrid from '../shared/DataGrid';
import { ICellRendererParams } from 'ag-grid';

interface Props extends StyledProps {
    blogs: BlogsState;
}

export class Blogs extends React.Component<Props> {
    private columns = [
        {
            headerName: 'Title',
            field: 'title',
        },
        {
            headerName: 'Description',
            field: 'description',
            cellClass: ['ag-column-stripe', 'ag-cell-wrap']
        },
        {
            headerName: 'Tags',
            field: 'tags',
            cellRendererFramework: this.tagCellRenderer.bind(this),
        },
        {
            headerName: 'Category',
            field: 'entity',
            cellClass: ['ag-column-stripe', 'ag-cell-wrap']
        }
    ];

    componentDidMount() {
        this.props.dispatch({
            type: ActionTypes.BLOGS.REQUEST
        });
    }

    tagCellRenderer(params: ICellRendererParams) {
        const tags = params.value.map(tag => (
                <div className={this.props.classes.tooltip_content}>
                    {tag.title}
                </div>
            )
        );
        return tags;

    }

    render() {
        const { classes, blogs } = this.props;

        return (
            <div className={classes.blogs_grid}>
                <div className={classes.container}>
                    <div className={classes.header}>
                        <h3 className={classes.h3}>
                            Blogs
                        </h3>
                    </div>
                    <DataGrid
                        gridOptions={{ getRowHeight: () => 75 }}
                        isRequesting={false}
                        columnDefs={this.columns}
                        rowData={blogs.rowData}
                        rowSelection="multiple"
                        rowDeselection={true}
                        sizeColumnsToFit={true}
                    />
                </div>
            </div>
        );
    }
}

export default connect(createStructuredSelector({
    blogs: (state: RootState) => state.blogs
}))(withStyles(styles)(Blogs));
