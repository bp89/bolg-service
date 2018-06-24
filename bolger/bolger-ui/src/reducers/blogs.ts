import { Action } from 'appProps';
import ActionTypes from '../actions/ActionTypes';
import { Blog } from '../types/mappings';

export type State = {
    rowData: Array<Blog>;
    isRequesting: boolean;
};

export const defaultState: State = {
    rowData: [],
    isRequesting: true
};

export const blogs = (state: State = defaultState, { type, payload }: Action) => {

    switch (type) {
        case ActionTypes.BLOGS.SUCCESS:
            const rowData = payload.map(blog => ({
                title: blog.title,
                description: `${blog.content.slice(0, 100)}...`,
                tags: blog.tags
            }));

            return {
                ...state,
                rowData: rowData,
                isRequesting: false
            };

        default:
            return state;
    }
};