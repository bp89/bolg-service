import { Moment } from 'moment';

export type Blog = {
    title: string;
    description?: string;
    tags: string;
    Author?: string;
    submissionDate?: Moment;
    expiryDate?: Moment;
};

export type RowData = {
    name: string;
    tradingStatus: string;
    stage?: string;
    summary?: string;
    received?: number;
    expected?: number;
};

export type Product = {
    name: string;
    productTradingStatus: string;
}

export type LegalEntity = {
    id: string;
    name: string;
    tradingStatus: string;
    products: Array<Product>;
    subLegalEntities?: Array<LegalEntity>;
    stage?: string;
    summary?: string;
    received?: number;
    expected?: number;
}
