type Trip = 
    | {
        id: number;
      }
    | {
        response: {
            status: "ok";
            id: number;
            data?: string;
        }
      }

type TripWithResponse = Extract<Trip, { response: { id: number } }>; //Matches pattern with Trip type
type TripWithIdRef = Extract<Trip, { id: number }>;

const tripWithResponse: unknown = {
    response: {
        status: "ok",
        id: 1,
    },
};

const tripWithId: unknown = {
    id: 1,
};

const hasIdRef = (trip: any): trip is TripWithIdRef => {
    return "id" in trip;
}

const result = [tripWithId, tripWithResponse].filter(hasIdRef);