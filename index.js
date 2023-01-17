const express = require('express');
const pug = require('pug');
const puppeteer = require("puppeteer");
const app = express();

app.set('view engine', 'pug');

app.get('/', async (req, res)=>{
    
    console.log(req.url);
    let browser = await puppeteer.launch({ headless: true });
    let page = await browser.newPage();
    await page.goto("https://aa.co.za/fuel-pricing/");

    var price;

    setTimeout(async () => {
        let grabParagraph = await page.evaluate(() => {
            let pgTag = document.querySelector("div.s2.srcl p strong");            
            return pgTag.innerHTML;
        });

        console.log("grabParagraph: ",grabParagraph);
         price = grabParagraph;

        console.log("the price: ", price);

        await browser.close();

    }, 5000);

    let greeting = "Hello world";

    res.status(200).render('base', {greeting: greeting, price: price});

});



app.listen(3000, ()=>{

    console.log('started');
})