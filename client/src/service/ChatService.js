// ChatService.js
export const sendDataToChatGPT = async (carbonData, formData) => {
    // const data = {
    //     carbonFootprint: carbonData,
    //     userInput: formData,
    // };

    const model = "gpt-3.5-turbo"
    const messages = [
        {
            "role": "system",
            "content": "Your task is to follow what user is saying."
        },
        {
            "role": "user",
            "content": `Say Hi~! Also, repeat this number if you see one. ${carbonData[0]}`
        }
    ];
    const temperature = 0.7
    const max_tokens = 128
    const top_p = 1

    const payload = {
        model: model,
        messages: messages,
        temperature: temperature,
        max_tokens: max_tokens,
        top_p: top_p
    };

    console.log('service:', payload);

    try {
        const response = await fetch('http://localhost:5000/generate-response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.text();
        console.log('openai response: ', data)
        return data; // Process this as needed
    } catch (error) {
        console.error('Error sending data to OpenAI:', error);
    }
};
