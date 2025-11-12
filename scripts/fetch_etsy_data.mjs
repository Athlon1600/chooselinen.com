import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
  headless: false,
});

const headers = {
  cookie:
    'uaid=0X6SWMKLQG5KOE8zNige7B_BwxFjZACCTJGHS2B0tVJpYmaKkpWSk1NBiHuwqXFVVlByimGWeURmuWdFmllKpqN_mlItAwA.; user_prefs=DJw0G5tOEK3GJM6OCUbaUfGGcC9jZACCTJGHS2B0tFJosIuSTl5pTo6OUmqebmiwko4SiACLGEEoXEQsAwA.; fve=1762976164.0; last_browse_page=https%3A%2F%2Fwww.etsy.com%2F; _fbp=fb.1.1762976164863.4744588814675423; exp_ebid=m=ZxU2GJfywzap%2BOvMVgBfltj4Pk8ZaVjtZi2JaSZ7hF4%3D,v=8xVWXnIXJCgtU8QPx5_-4zM6yd0bbGVz; ua=531227642bc86f3b5fd7103a0c0b4fd6; datadome=4SmLeCWG653N3pgyKUsMoPWxTU_dlFjLcu0TuWDdzutku7bOrHVT4WmJxs9BU5BCTK4yldb6rKkN6a16aKVWsOwjBVAyB5na9VDLwPVuZgoXuZ4~qSrKGSNzxoRiHKmC; _gcl_au=1.1.2133459791.1762976166; g_state={"i_l":0,"i_ll":1762976166291,"i_b":"wsWVpVr1n0AVBmr91AIWTacXF2MCi0Vw3Wv3Ks2Yy8w"}; _ga_KR3J610VYM=GS2.1.s1762976166$o1$g0$t1762976166$j60$l0$h0; _ga=GA1.1.436159217.1762976166; lantern=c76209a0-2ba5-4e05-bbcb-45558d9066d6; _tt_enable_cookie=1; _ttp=01K9WS2WTN5C2YF7F52ER87SDV_.tt.1; ttcsid_CD255AJC77U2F908QPL0=1762976166741::e41YEjZ76Y-OS39V4AX9.1.1762976166741.0; ttcsid=1762976166742::rNDosIZXxSZli8vMUYHc.1.1762976166742.0; _uetsid=d51623f0bffe11f0a30953e29879634d|1f40ey0|2|g0y|0|2142; _pin_unauth=dWlkPU1tTXhabU5sWkRZdFl6bGtOUzAwT0dFMkxUZ3dOVEF0WW1OaE9XVTFNVEJqTmpCaQ; _uetvid=d5162720bffe11f0855b35872f460840|tfuyi5|1762976167052|1|1|bat.bing.com/p/insights/c/i; QSI_HistorySession=https%3A%2F%2Fwww.etsy.com%2F~1762976168175',
};

const page = await browser.newPage();
await page.setExtraHTTPHeaders(headers);

await page.goto("https://www.etsy.com/shop/ChooseLinen");

const listings = await page.$$("div[data-listings-container] a.listing-link");
const links = await Promise.all(
  listings.map((listing) => {
    return page.evaluate((listingElement) => listingElement.href, listing);
  }),
);

const productData = [];

function textContent(selector) {
  return page
    .$(selector)
    .then((elementHandle) => page.evaluate((htmlElement) => htmlElement.textContent, elementHandle));
}

for (const link of links) {
  await page.goto(link);
  const price = (await textContent("div[data-selector=price-only] p")).trim().match(/([0-9.\\+])+/)[0];
  productData.push({
    etsyLink: link,
    price: `$${price}`,
  });
}

await browser.close();
