export function getColor(method){
    let color;

    switch (method) {
        case "GET":
          color = "blue";
          break;
        case "POST":
          color = "green";
          break;
        case "DELETE":
          color = "red";
          break;
        case "PUT":
          color = "orange";
          break;
        default:
          color = "transparent";
          break;
      }

    return color;
}