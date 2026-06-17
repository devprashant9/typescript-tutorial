// unique ways to represnt a dynamic string in literal format
// used largely in framworks and libraries specially in css utility library
// we can verify strings 

type ApiResources = "auth" | " users" | "products" | "payments";
type ApiEndPoints = `/api/v1/${ApiResources}`;

let auth: ApiEndPoints = "/api/v1/auth"; // only shows available options
