// api.js
const data_all = async (req, res) => {
    try {
        // Assuming the request contains the input data
        const { data: inputData } = req.body;

        if (!inputData || !Array.isArray(inputData)) {
            return res.json({ message: 'Invalid input data' });
        }

        // Filtering numbers and alphabets
        const numbers = inputData.filter(item => !isNaN(item));
        const alphabets = inputData.filter(item => isNaN(item));
        const highestAlphabet = alphabets.sort()[alphabets.length - 1];

        // Constructing the response
        const response = {
            is_success: true,
            user_id: "john_doe_17091999",
            email: "john@xyz.com",
            roll_number: "ABCD123",
            numbers,
            alphabets,
            highest_alphabet: [highestAlphabet]
        };

        console.log('Data Sent');
        res.json(response);
    } catch (error) {
        console.log('Fetch error :-', error);
        res.json({ message: error.message });
    }
};
const operation_code = (req, res) => {
    res.json({ operation_code: 1 });
};
module.exports = {
    data_all,
    operation_code
};
