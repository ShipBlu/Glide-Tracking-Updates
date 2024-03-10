// The function here takes the parameters that you
// have declared in the `glide.json` file, in the
// same order.
window.function = async function(trackingNo) {
  // For each parameter, its `.value` contains
  // either its value in the type you've declared,
  // or it's `undefined`.  This is a good place to
  // extract the `.value`s and assign default
  // values.
  //str = str.value ?? "";
  //start = start.value ?? 0;
  //end = end.value;

  // unit is the currency and subunit is the small unit of it 
  trackingNo = trackingNo.value;

  console.log("I'm alive");

  // Define the API endpoint and parameter
  const apiUrl = 'https://api.shipblu.com/api/v1/delivery-order/';
  const parameter = trackingNo;

  // Function to make the API request
  try {
    const response = await fetch(`${apiUrl}${parameter}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const packageData = await response.json();
    console.log(packageData); // Log the response data to the console
    return "Hello World";
  } catch (error) {
    console.error('Error fetching data:', error);
    return "Hello World"; // Return undefined in case of error
  }
};
