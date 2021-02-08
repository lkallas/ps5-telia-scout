const fetch = require('node-fetch');

const MESSENTE_API_USERNAME = '<api-username-here>';
const MESSENTE_API_PASSWORD = '<api-password-here>';
const SMS_NOTIFICATION_RECIPIENTS = ['+372512345678', '+372598765432']; // <-- add your SMS recipients here

async function sendSMS(text, recipients) {
    const baseURL = 'https://api2.messente.com/send_sms/?';

    for (const recipient of recipients) {
        const params = {
            username: MESSENTE_API_USERNAME,
            password: MESSENTE_API_PASSWORD,
            to: recipient,
            text,
        };

        const queryString = Object.keys(params)
            .map((key) => {
                return `${key}=${encodeURIComponent(params[key])}`;
            })
            .join('&');

        const url = `${baseURL}${queryString}`;

        const response = await fetch(url);
        const responseText = await response.text();

        console.log(response.status, response.statusText, responseText);
    }
}

async function main() {
    const teliaURL = 'https://pood.telia.ee/api/products/mangukonsoolid/list/?clientType=private';
    const teliaResponse = await fetch(teliaURL, {
        method: 'POST',
        headers: {
            accept: 'application/json, text/plain, */*',
            'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({
            featureFilter: {},
            sliderFilter: {},
            commonFeatureFilter: [],
            tags: [],
            manufacturers: ['Sony'],
            price: { min: 300, max: 1000 },
            offset: 0,
            limit: 5,
            orderBy: 'priceMax', // Possible values: null, priceMax, priceMin, new
        }),
        timeout: 10_000,
    });

    if (teliaResponse.status === 200) {
        const responseBody = await teliaResponse.json();
        // NOTE: PS5 lineup has productCode starting with "CFI", like PS4 has "CUH"
        const products = responseBody.products || [];

        for (const product of products) {
            const { productCode, name, prices, displayName } = product;
            if (
                /CFI/gi.test(productCode) ||
                /PlayStation\s?5|PS\s?5/gi.test(name.et) ||
                /PlayStation\s?5|PS\s?5/gi.test(displayName.et)
            ) {
                const price = prices.currentPrice.amount;
                const url = `https://pood.telia.ee${product.url}`;
                const message = `${displayName.et}, hind: ${price} -> ${url}`;
                console.log(message);
                await sendSMS(message, SMS_NOTIFICATION_RECIPIENTS);
            }
        }
    } else {
        console.log(teliaResponse.status, teliaResponse.statusText);
    }
}

main()
    .catch((err) => console.log(err))
    .then(() => {})
    .catch((err) => console.log(err));
