const ERRORS = {
  400: true,
  401: true,
  404: true,
  500: true
};

export default (baseUrl) => store => next => async action => {
  if (!action.url) return next(action);
  next({
    ...action,
    type: `${action.type}_REQUEST`,
  });

  const response = await fetch(`${baseUrl}${action.url}`, {
    method: action.method || 'GET',
    headers: action.headers || { 'Content-Type': 'application/json' },
    body: !!action.body && JSON.stringify(action.body),
  })
    .catch (error => {
      return next({
        ...action,
        type: `${action.type}_FAILURE`,
        error: error,
      })
    });

  const parsed = response.status === 204 && await response.json();

  if (!parsed) return next({ ...action, type: `${action.type}_FAILURE` });

  if (ERRORS.hasOwnProperty(parsed.status)) {
    return next({
      type: `${action.type}_FAILURE`,
      parsed
    });
  } else {
    return next({
      ...action,
      type: `${action.type}_SUCCESS`,
      parsed
    });
  }
};


// export default (baseUrl) => store => next => action => {
//   if (!action.url) return next(action);
//   fetch(`${baseUrl}${action.url}`, {
//     method: action.method || 'GET',
//     headers: action.headers || { 'Content-Type': 'application/json' },
//     body: !!action.body && JSON.stringify(action.body),
//   })
//     .then(res => {
//       return res.status === 204 && res.json();
//     })
//     .then(parsed => {
//       if (!parsed) return next({ ...action, type: `${action.type}_FAILURE` });
//       switch (parsed.status) {
//         case 400:
//         case 401:
//         case 404:
//         case 500:
//           next({
//             type: `${action.type}_FAILURE`,
//             parsed
//           });
//           break;
//         default:
//           next({
//             ...action,
//             type: `${action.type}_SUCCESS`,
//             parsed
//           });
//           break;
//       }
//     })
//     .catch (error => {
//       return next({
//         ...action,
//         type: `${action.type}_FAILURE`,
//         error: error,
//       })
//     });
//   next({
//     ...action,
//     type: `${action.type}_REQUEST`,
//   });
// };
