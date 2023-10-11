const fetchDataFromStrapi = async () => {
  try {
    const response = await fetch("http://localhost:1338/api/i18n-v3s");
    const dataStrapi = await response.json();
    console.log("dataStrapi", dataStrapi);

    // Process the data as needed
    // Extract the keys from mergedData
    const mergedDataKeys = ["key", "en", "vi", "zh", "ja", "es"];
    // console.log("mergedDataKeys", mergedDataKeys);
    // mergedDataKeys.push("platform");

    // // Restructure dataStrapi to match the structure of mergedData and remove extra keys
    const restructuredDataStrapi = dataStrapi.data.map((item) => {
      const key = item.attributes.key;
      const languages = {};
      // Loop through the language keys from mergedData and extract matching language data
      mergedDataKeys.forEach((langKey) => {
        if (item.attributes[langKey]) {
          languages[langKey] = item.attributes[langKey];
        }
      });

      return {
        id: item.id,
        key,
        ...languages,
      };
    });
    // Update the 'data' state with the fetched data
    console.log("restructuredDataStrapi", restructuredDataStrapi);
    //   setData(restructuredDataStrapi);

    // Handle any errors that may occur during the fetch
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
  }
};

// console.log("Calling fetchDataFromStrapi function");
// fetchDataFromStrapi();
module.exports = {
  myCronTask: {
    task: fetchDataFromStrapi,
    options: {
      // Define your cron schedule here
      // For example, to run the task every day at 2:00 AM:
      cron: "*/1 * * * *",
    },
  },
};
