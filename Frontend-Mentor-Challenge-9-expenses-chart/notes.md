    # Explanation

    - Firstly, the function uses the Chart.js library to create a bar chart on a webpage. The chart's data is obtained from a local JSON file named "data.json".

    - The function starts by calling the fetch() function, which is a built-in JavaScript method for fetching resources (like data files or APIs) across a network. In this case, fetch("./data.json") fetches the local JSON file named "data.json".

    - The fetch() method returns a Promise, which is an object representing a value that may not be available yet but will be resolved in the future. The first .then() method is used to handle the resolved value of the Promise, which in this case is the response object representing the JSON data in the "data.json" file. The response object is then passed as an argument to the .json() method, which returns another Promise that resolves to the parsed JSON data.

    - The second .then() method takes the parsed JSON data as its argument and sets up the configuration object for the chart. Here's a breakdown of what's happening in this part of the code:

        - `data.map((chart) => chart.day)` creates an array of all the `day` values in the JSON data. This array will be used as the chart's x-axis labels.
        - `data.map((chart) => chart.amount)` creates an array of all the `amount` values in the JSON data. This array will be used as the data for the chart.
        - The `inf` object is created with two properties: `labels` and `datasets`. `labels` is set to the array of `day` values, and `datasets` is an array with one object that specifies the `amount` values as the data for the chart. The object also specifies some appearance and behavior options for the chart, such as the `backgroundColor`, `borderRadius`, and `hoverBackgroundColor` of the chart bars.
        - The `titleTooltip` and `labelTooltip` functions are used to customize the chart's tooltip behavior. `titleTooltip` is used to display the formatted value of the chart bar on the tooltip, while `labelTooltip` is used to display an empty string (i.e., no label) on the tooltip.
        - The `options` object is created with various appearance and behavior options for the chart, such as hiding the y-axis ticks and grid lines and customizing the tooltip.
        - Finally, the `config` object is created with the type of chart (`type: "bar"`) and its data and options. The `new Chart()` constructor creates the chart object on the webpage with the ID "chart".

    In summary, the `generatingChart()` function fetches data from a local JSON file, creates a configuration object for a Chart.js bar chart, and uses the configuration object to create the chart object on a webpage.