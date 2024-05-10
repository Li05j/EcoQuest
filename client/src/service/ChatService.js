// ChatService.js
export const sendDataToChatGPT = async (carbonData, formData) => {
    const payload = {
        carbonFootprint: carbonData,
        userInput: formData,
    };

    console.log('service:', payload);

    // try {
    //     const response = await fetch('CHATGPT_API_ENDPOINT', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(payload),
    //     });

    //     if (!response.ok) {
    //         throw new Error(`HTTP error! status: ${response.status}`);
    //     }

    //     const data = await response.json();
    //     return data; // Process this as needed
    // } catch (error) {
    //     console.error('Error sending data to OpenAI:', error);
    // }
};
