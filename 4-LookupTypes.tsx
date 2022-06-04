type Route = {
    origin: {
        city: string;
        departureFee: number;
    },
    destination: {
        city: string;
        arrivalFee: number;
    },
}

type Origin = Route["origin"];
type Destination = Route["destination"];

const tripOrigin: Origin = {
    city: "Yeruham",
    departureFee: 199,
}

const tripDestination: Destination = {
    city: "Beer-Sheva",
    arrivalFee: 350,
}