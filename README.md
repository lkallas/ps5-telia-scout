# Telia PS5 scout

## Setup
This script is looking for Playstation 5 consoles from Telia's [e-shop](https://pood.telia.ee/mangukonsoolid?manufacturers=Sony) via their API.

This script is using [Messente's SMS API](https://messente.com/documentation/sms-messaging/api-reference) 
for delivering SMS notifications.

To set this script up you need to provide API username and password and an array of phone numbers 
you want to send the notification to. Please do so in the [index.js](./index.js) file header.

It's up to you how you deploy this script. 

I for example set it up as a cronjob in my [Zone](https://www.zone.ee/) virtual server.

This script has already paid off.  
Got notification as soon as PS5 was back in stock in Telia's e-shop at `2021-02-08 16:45:01`. 
Was one of the first who made the purchase.  

Minutes later PS5 was sold out again. Got lucky!

**Feel free to use and modify this script in any way as you wish.**  

That said, I can't be hold responsible for your sadness, happiness or whatnot this script may or may not cause to you.
