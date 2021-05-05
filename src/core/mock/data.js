// mock testing vehicle
export const vehicle = {
  shape: [
    {
      longitude: 2.3522,
      latitude: 48.8566
    },
    {
      longitude: 7.2663,
      latitude: 43.7034
    },
    {
      longitude: 1.444,
      latitude: 43.6045
    }
  ],
  location: {
    longitude: 7.2663,
    latitude: 43.7034
  }
};

// mock testing pitch
export const pitch = {
  centerPoint: {
    longitude: 7.2663,
    latitude: 43.7034
  },
  corner: [
    {
      longitude: 2.3522,
      latitude: 48.8566
    },
    {
      longitude: 7.2663,
      latitude: 43.7034
    },
    {
      longitude: 1.444,
      latitude: 43.6045
    },
    {
      longitude: 7.2663,
      latitude: 43.7034
    }
  ]
};

// mock testing obstacles

export const obstacles = {
  moving: [
    {
      shape: [
        {
          longitude: 0,
          latitude: 0
        },
        {
          longitude: 0,
          latitude: 0
        },
        {
          longitude: 0,
          latitude: 0
        }
      ],
      velocity: 0,
      location: {
        longitude: 0,
        latitude: 0
      }
    }
  ],
  static: [
    {
      shape: [
        {
          longitude: 0,
          latitude: 0
        },
        {
          longitude: 0,
          latitude: 0
        },
        {
          longitude: 0,
          latitude: 0
        }
      ],
      location: {
        longitude: 0,
        latitude: 0
      }
    }
  ]
};
