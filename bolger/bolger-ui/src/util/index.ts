
export const search = (content: string, searchString: string): boolean => (
    content.search(new RegExp(searchString, 'i')) > -1
);

export const filter = (unfilteredData: Array<object>, property: string, searchString: string) => (
    unfilteredData.filter(entry => {
        if (entry.hasOwnProperty(property)) {
            return search(entry[property], searchString);
        }
        return;
    })
);