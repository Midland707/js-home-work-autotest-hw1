//MODUL1 AUTOTEST29

function getShippingCost(country) {
  let message;
  let price;
  // Change code below this line
  switch (country) {
    case "China":
    price = 100;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;

    case "Chile":
    price = 250;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;

    case "Australia":
    price = 170;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;

    case "Jamaica":
    price = 120;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;

    default:
    message = "Sorry, there is no delivery to your country";
  }
  console.log(country + " - " + message);
  // Change code above this line
  return message;
}

getShippingCost("Australia"); // "Shipping to Australia will cost 170 credits"
getShippingCost("Germany"); // "Sorry, there is no delivery to your country"
getShippingCost("China"); // "Shipping to China will cost 100 credits"
getShippingCost("Chile"); // "Shipping to Chile will cost 250 credits"
getShippingCost("Jamaica"); // "Shipping to Jamaica will cost 120 credits"
getShippingCost("Sweden"); // "Sorry, there is no delivery to your country"