import { Observable } from 'rxjs/Observable';
import '../rxjs-imports';
import isEmpty from 'lodash/isEmpty';
import { IncomingHttpHeaders } from 'http';

interface RequestOptions {
    url?: string;
    method?: string;
    responseType?: string;
    headers?: IncomingHttpHeaders;
    ignoreExistingOktaToken?: boolean;
}

interface BlobResponse {
    blob: Blob;
    fileName: string;
}

const mapResponse = resp => resp.response || {};

const getFileName = resp => {
    const contentDisposition = resp.xhr.getResponseHeader('content-disposition');
    const matches = /filename=(.*)/g.exec(contentDisposition);

    return matches && matches.length > 1
        ? matches[1]
        : '';
};

export function restGet(url: string, requestOptions?: RequestOptions) {
    return restRequest(url, { ...requestOptions, method: 'GET' })
        .map(mapResponse);
}

export function restGetFileBlob(url: string): Observable<BlobResponse> {
    return restRequest(url, {
        method: 'GET',
        responseType: 'blob',
        headers: { Accept: 'application/octet-stream' }
    })
        .map(resp => ({
            blob: resp.response,
            fileName: getFileName(resp)
        }));
}

export function restPost(url: string, payload?: object, requestOptions?: RequestOptions) {
    return restRequest(url, { ...requestOptions, method: 'POST' }, payload)
        .map(mapResponse);
}

export function restPut(url: string, payload?: object, requestOptions?: RequestOptions) {
    return restRequest(url, { ...requestOptions, method: 'PUT' }, payload)
        .map(mapResponse);
}

export function restDelete(url: string, requestOptions: RequestOptions) {
    return restRequest(url, { ...requestOptions, method: 'DELETE' })
        .map(mapResponse);
}

export function restRequest(url: string,
                            requestOptions: RequestOptions,
                            payload?: object) {

    // TODO: fix the authorization
    // const accessTokenObject = authClient.tokenManager.get(okta.accessTokenKey);
    // const Authorization = requestOptions.ignoreExistingOktaToken ? undefined
    //     : `Bearer ${accessTokenObject.accessToken}`;

    const { headers, ...topLevelOptions } = requestOptions;

    let options: object = {
        url,
        ...topLevelOptions,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            // Authorization,
            ...headers
        }
    };

    if (!isEmpty(payload)) {
        options = {
            ...options,
            body: payload
        };
    }

    return Observable.ajax(options);
}
