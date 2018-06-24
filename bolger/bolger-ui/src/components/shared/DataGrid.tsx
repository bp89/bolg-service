import React from 'react';
import { GridApi } from 'ag-grid';
import { AgGridReact, AgGridReactProps } from 'ag-grid-react';
import { debounce } from 'lodash';
import { LinearProgress } from 'material-ui/Progress';

import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-material.css';

interface Props extends AgGridReactProps {
    isRequesting: boolean;
    sizeColumnsToFit?: boolean;
    className?: string;
}

class DataGrid extends React.Component<Props> {
    private gridApi: GridApi;
    private autoSizeHandler: (() => void);

    componentDidMount() {
        this.autoSizeHandler = debounce(this.handleAutoColumnSizing, 200);
        window.addEventListener('resize', this.autoSizeHandler, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.autoSizeHandler, false);
    }

    onGridReady = params => {
        this.gridApi = params.api;
        this.handleAutoColumnSizing();

        if (this.props.onGridReady) {
            this.props.onGridReady(params);
        }
    }

    handleAutoColumnSizing = () => {
        const { sizeColumnsToFit } = this.props;

        if (sizeColumnsToFit && this.gridApi) {
            this.gridApi.sizeColumnsToFit();
        }
    }
    render() {
        const {isRequesting, ...otherProps } = this.props;

        const icons = {
            sortAscending: '<i class="material-icons">arrow_upward</i>',
            sortDescending: '<i class="material-icons">arrow_downward</i>'
        };

        return isRequesting
            ? <LinearProgress color="secondary"/>
            : (
                <div className="ag-theme-material">
                    <AgGridReact
                        onGridReady={this.onGridReady}
                        headerHeight={25}
                        rowHeight={40}
                        enableSorting={true}
                        icons={icons}
                        {...otherProps}
                    />
                </div>
            );
    }
}

export default DataGrid;