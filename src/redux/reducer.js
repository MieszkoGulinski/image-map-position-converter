const readDestPosition = (key, defaultValue) => {
  const stored = window.localStorage.getItem(key);

  if (stored !== null && !Number.isNaN(parseFloat(stored))) {
    return parseFloat(stored);
  }
  return defaultValue;
};

const saveDestPosition = (key, value) => {
  window.localStorage.setItem(key, value.toString());
};

const initialState = {
  sourceMapURL: null, // http or dataURL, anything that can be displayed as img url
  sourceWidth: null,
  sourceHeight: null,
  orientationPoints: [],
  measuredPoints: [],

  // gui state of the destination map
  destination: {
    lat: readDestPosition('lat', 52),
    lon: readDestPosition('lon', 21),
    zoom: readDestPosition('zoom', 5),
  },
};

// orientationPoints format: {id: 2, name: '...', x: ..., y: ..., lon: ..., lat: ...}
// measuredPoints format: {id: 3, name: '...', x: ..., y: ...}

const reducer = (state = initialState, action) => {
  switch(action.type) {
  case 'ADD_SOURCE_MAP': {
    return {
      ...state,
      sourceMapURL: action.url,
      sourceWidth: action.width,
      sourceHeight: action.height,
      orientationPoints: [],
    };
  }

  case 'ADD_ORIENTATION_POINT': {
    return {
      ...state,
      orientationPoints: [...state.orientationPoints, action.data],
    };
  }

  case 'ADD_UPDATE_ORIENTATION_POINT': {
    // when added from dest map, lon and lat will be numbers, but x and y will be undefined
    // when added from src map, x and y will be numbers, but lon and lat will be undefined
    // when edited, it's possible to add missing x/y or lat/lon, or adjust position

    const entryIndex = state.orientationPoints.findIndex(entry => entry.id === action.data.id);
    if (entryIndex === -1) {
      return {
        ...state,
        orientationPoints: [...state.orientationPoints, action.data],
      };
    } else {
      const newPoints = [...state.orientationPoints];
      newPoints[entryIndex] = action.data;

      return {
        ...state,
        orientationPoints: [...state.orientationPoints, action.data],
      };
    }
  }

  case 'ADD_UPDATE_MEASURED_POINT': {
    const entryIndex = state.measuredPoints.findIndex(entry => entry.id === action.data.id);
    if (entryIndex === -1) {
      return {
        ...state,
        measuredPoints: [...state.measuredPoints, action.data],
      };
    } else {
      const newPoints = [...state.measuredPoints];
      newPoints[entryIndex] = action.data;

      return {
        ...state,
        measuredPoints: [...state.measuredPoints, action.data],
      };
    }
  }

  case 'UPDATE_DESTINATION_MAP_STATE': {
    // changes latitude, longitude and zoom of displayed destination map
    saveDestPosition(action.key, action.value);

    return {
      ...state,
      destination: {
        ...state.destination,
        [action.key]: [action.value],
      },
    };
  }

  default: {
    return state;
  }
  }
};

export default reducer;
