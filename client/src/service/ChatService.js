// ChatService.js
export const sendDataToChatGPT = async (carbonData, formData) => {
    const carbonKg = carbonData[0]
    const carbonLb = carbonData[1]

    const generalData = formData.general
    const electricityData = formData.electricity
    const vehicleData = formData.vehicle
    const fuelData = formData.fuel
    const shippingData = formData.shipping

    const model = "gpt-3.5-turbo"
    const messages = [
        {
            "role": "system",
            "content": "You will receive an individual/household's carbon footprint below. Your task is to provide both general and personalized suggestions on how they can reduce their carbon footprint based on their lifestyle. Avoid generic advice and offer specific examples (by referencing their country, household size, and other entries in your reply) to make an impact. Your target are NOT corporations, but individuals/households who might forget to turn off lights before leaving their home, not knowing what and what aren't recyclable. etc. Keep your response concise (under 300 tokens)."
        },
        {
            "role": "user",
            "content": `Timeframe: ${generalData.timeframe}\nHousehold: ${generalData.household}\nCountry: ${generalData.country}\nCarbon Footprint (kg/lb): ${carbonKg}/${carbonLb}\nElectricty Usage: ${electricityData.electricity_value}\nVehicle Driven: ${vehicleData.distance_value} ${vehicleData.distance_unit}\nFuel Combustion: ${fuelData.fuel_source_value} ${fuelData.fuel_source_unit} of type ${fuelData.fuel_source_type}\nShipping: ${shippingData.weight_value} ${shippingData.weight_unit} shipped ${shippingData.distance_value} ${shippingData.distance_unit} via ${shippingData.transport_method}`
        }
    ];
    const temperature = 1.2
    const max_tokens = 300
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
        return data;
    } catch (error) {
        console.error('Error sending data to OpenAI:', error);
    }
};
