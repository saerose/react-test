const ERRORS = {
  400: true,
  401: true,
  404: true,
  500: true
};

export default (baseUrl) => store => next => action => {
  if (!action.url) return next(action);
  const options = {
    method: action.method || 'GET',
    headers: action.headers || { 'Content-Type': 'application/json' }
  };

  if (action.method === 'POST' && action.body) options.body = action.body;

  fetch(`${baseUrl}${action.url}`, options)
    .then(res => {
      return res.status === 200 && res.json();
    })
    .then(parsed => {
      if (!parsed) return next({ ...action, type: `${action.type}_FAILURE` });
      next({
        ...action,
        type: `${action.type}_SUCCESS`,
        cards: parsed
      });
    })
    .catch (error => {
      return next({
        ...action,
        type: `${action.type}_FAILURE`,
        error: error,
      })
    });
  next({
    ...action,
    type: `${action.type}_REQUEST`,
  });
};
