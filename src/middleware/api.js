export default (baseUrl) => {
    return store => next => action => {
        if (!action.url) return next(action);
        fetch(baseUrl + action.url, {
            method: action.method,
            headers: action.headers,
            body: JSON.stringify(action.body),
        })
            .then(res => {
                this.status = res.status;
                return (this.status === 204) ? res : res.json();
            })
            .then(res => {
                switch (this.status) {
                    case 400:
                    case 401:
                    case 404:
                    case 500:
                        next({
                            type: action.type + '_FAILURE',
                            res
                        });
                        break;
                    default:
                        next({
                            ...action,
                            type: action.type + '_SUCCESS',
                            res
                        });
                        break;
                }
            })
            .catch (error => {
                return next({
                    ...action,
                    type: action.type + '_FAILURE',
                    error: error,
                })
            });
        next({
            ...action,
            type: action.type + '_REQUEST',
        });
    };
};
