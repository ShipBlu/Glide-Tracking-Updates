// The function here takes the parameters that you
// have declared in the `glide.json` file, in the
// same order.
window.function = function(TrackingNo) {
  // For each parameter, its `.value` contains
  // either its value in the type you've declared,
  // or it's `undefined`.  This is a good place to
  // extract the `.value`s and assign default
  // values.
  //str = str.value ?? "";
  //start = start.value ?? 0;
  //end = end.value;

  // unit is the currency and subunit is the small unit of it 
  TrackingNo = TrackingNo.value;

  console.log("I'm alive");

  // Define the API endpoint and parameter
  const apiUrl = 'https://api.shipblu.com/api/v1/delivery-order/';
  const parameter = TrackingNo;

// Function to make the API request
  async function fetchData() {
  try {
    const response = await fetch(`${apiUrl}${parameter}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data); // Log the response data to the console
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the function to fetch data
fetchData();


  // Your function should return the exact type
  // you've declared for the `result` in
  // `glide.json`, or `undefined` if there's an
  // error or no result can be produced, because a
  // required input is `undefined`, for example.
  //return str.substring(start, end);
};
