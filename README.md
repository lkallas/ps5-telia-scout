# Telia PS5 scout

**ATTENTION!**  

This script is obsolete due to the fact that Telia has taken action against this script, therefore it will not function correctly anymore. 

1. API will response with HTTP 200 and empty body if the `user-agent` header contains `node-fetch`.
2. HTTP 403 is returned when IP is blacklisted. 

These restrictions can easily be overcome. But I will **NOT** provide any public workarounds.  

Let's give *normal people* some fighting chance to get their PS5 next time it's back in Telia's stock. Peace!

## Setup
This script is looking for Playstation 5 consoles from Telia's [e-shop](https://pood.telia.ee/mangukonsoolid?manufacturers=Sony) via their API.

This script is using [Messente's SMS API](https://messente.com/documentation/sms-messaging/api-reference) 
for delivering SMS notifications.  

Also e-mail notifications can be set up just by providing proper Gmail credentials and e-mail recipients.

To set this script up you need to provide API username and password and an array of phone numbers 
you want to send the notification to. Please do so in the [index.js](./index.js) file header.

It's up to you how you deploy this script. 

I for example set it up as a cronjob in my [Zone](https://www.zone.ee/) virtual server.

1. Install NodeJS with NPM. https://nodejs.org/en/download/
2. Download this code (at least `index.js` & `package.json`).
3. Set up your Messente account and get your API credentials. You should get 1€ free credit as well. https://dashboard.messente.com/register
4. Update credentials and e-mail/SMS recipients in the code.
5. To install script dependencies run `npm install`.
6. To run this script run `npm start`.
7. Repeat step 6. You can schedule a repeating task in Windows task scheduler, set up a cronjob, modify this script to run in a loop. You pick what suits best for your needs or technical skills.


## Does this sh*t actually work?

This script has already paid off.  

![6 x Playstation 5](https://lennar.eu/ps5/6x_ps5_1.jpg)  

Got notifications as soon as PS5 was back in stock in Telia's e-shop at `2021-02-08 16:45:01` and `2021-03-08 18:05:00` (notice a pattern there?).  
Was one of the first who was able to make a purchase.  

Minutes later PS5 was sold out again. Got lucky!

**Feel free to use and modify this script in any way as you wish.**  

That said, I can't be hold responsible for your sadness, happiness or whatnot this script may or may not cause to you.
