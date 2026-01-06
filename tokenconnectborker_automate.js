const { chromium, devices } = require('@playwright/test');
const borker = [
  {email: '0177289', password: 'N4+g8Z5D'}
];
// =========================
// 3️⃣ User in UAT 
// =========================

// const users = [
  // { email: 'bedevi7165@discounp.com', password: 'Qc_test1234' },
  // { email: 'peviyoc374@discounp.com', password: 'Qc_test1234' },

    // { email: 'woxokow251@discounp.com', password: 'Qc_test1234' },
   

    // { email: 'febem77896@discounp.com', password: 'Qc_test1234' },
    // { email: 'nosop18524@discounp.com', password: 'Qc_test1234' },
   
    // { email: 'kites59327@crsay.com', password: 'Qc_test1234' },

    // { email: 'feyid80432@discounp.com', password: 'Qc_test1234' },

    

  // { email: 'mofil58552@crsay.com', password: 'Qc_test1234' },

     
    // { email: 'moxego1735@discounp.com', password: 'Qc_test1234' },
 
  
    // { email: 'civer17429@crsay.com', password: 'Qc_test1234' },
                                   

    // { email: 'vojoti9516@discounp.com', password: 'Qc_test1234' },
    // { email: 'raxami3071@crsay.com', password: 'Qc_test1234' },
  

    // { email: 'dikisaw550@discounp.com', password: 'Qc_test1234' },
// ];



// =========================
// 3️⃣ User in pd 
// =========================

const users = [
  { email: 'jenaba2177@cexch.com', password: 'Qc_test1234' },
  // { email: 'vikehok336@bialode.com', password: 'Qc_test1234' },
  // { email: 'norosa5869@cexch.com', password: 'Qc_test1234' },
  // { email: 'tifijob972@besenica.com', password: 'Test_1234' },
  // { email: 'nattawadeesakulchit@gmail.com', mobile: '0830616374', password: 'Test_1234' },
  // { email: 'dosalih111@cexch.com', password: 'Qc_test1234' },
  // { email: 'noyeso5233@cexch.com', password: 'Qc_test1234' },
  // { email: 'xegitec858@bialode.com', password: 'Qc_test1234' },
  // { email: 'kowep39956@cexch.com', password: 'Qc_test1234' },
  // { email: 'navewag835@cexch.com', password: 'Qc_test1234' },
  // { email: 'rixol96356@cexch.com', password: 'Qc_test1234' },
];

(async () => {

  // 1️⃣ เปิด browser (ครั้งเดียว)
  const browser = await chromium.launch({
    headless: false,
    args: ['--start-maximized'],
  });

  // 2️⃣ วนทีละ user
  for (const user of users) {

    console.log(`\n🚀 Start test for ${user.email}`);

    // =========================
    // 3️⃣ สร้าง context แยก device
    // =========================
    const desktopContext = await browser.newContext({
      viewport: null,
    });

    const mobileContext = await browser.newContext({
      ...devices['iPhone 14'],
    });

    
      const macDevice = devices['Desktop Safari'];
      const macContext = await browser.newContext({
    ...macDevice,
  });  

    // =========================
    // 4️⃣ สร้าง page
    // =========================
    const desktopPage = await desktopContext.newPage();
    const mobilePage  = await mobileContext.newPage();
    const macPage = await macContext.newPage();

    // =========================
    // 5️⃣ Desktop login
    // =========================
    console.log('🖥️ Desktop login');

    // await desktopPage.goto('https://dc2hw.efin.finance/th/login');
    await desktopPage.goto('https://efin.finance/th/login');
    await desktopPage.fill('#emailOrPhone', user.email);
    await desktopPage.click('button[type="submit"]');
    await desktopPage.fill('#password', user.password);

    await Promise.all([
      desktopPage.waitForSelector('h1:has-text("ลงชื่อเข้าใช้เรียบร้อย")'),
      desktopPage.click('#login_submit_btn'),
    ]);

    await desktopPage.click('xpath=/html/body/div/div/main/div/div/div/div[4]/button[1]');
    // await desktopPage.goto('https://dc2hw.efin.finance/th/account');
    // await desktopPage.goto('https://efin.finance/th/account');
    // await desktopPage.click('xpath=//*[@id="account_broker_Pi"]');


    // await desktopPage.click('xpath=//*[@id="account_connect_broker"]');
    // await desktopPage.click('xpath=//*[@id="account_broker_Pi"]');


    // await desktopPage.click('[data-field="industry"] button');
    // await desktopPage.waitForSelector('[role="option"]');
    // await desktopPage.getByRole('option', { name: 'BLS' }).click(); //*[@id="broker_login_username_input"] //*[@id="broker_login_username_input"]
    //  for (const borkers of borker) {
    //     await desktopPage.fill(
    //       '[role="dialog"] input[type="text"]',
    //       borkers.email
    //     );

    //     await desktopPage.fill(
    //       '[role="dialog"] input[type="password"]',
    //       borkers.password
    //     );
    //  }
    // await desktopPage.click(
    //   '[role="dialog"] button[type="submit"]'
    // );
    // await desktopPage.click('xpath=//*[@id="radix-«R1gvnemt5b»"]/div/div[3]/button');


     // =========================
    // 3️⃣ pathlink in uat
    // =========================
    // await desktopPage.goto('https://dc2hw.efin.finance/th/stock/news/markets');
    //  await desktopPage.goto('https://dc2hw.efin.finance/th/crypto/news/bitcoin');
    // await desktopPage.goto('https://dc2hw.efin.finance/th/asset/content/gold'); 

    // =========================
    // 3️⃣ pathlink in pd
    // =========================
    // await desktopPage.goto('https://www.efin.finance/th/asset/news/fund-news?page=5&period=7D);
    // await desktopPage.goto('https://efin.finance/th/stock/news/markets');
    // await desktopPage.goto('https://efin.finance/th/crypto/news/bitcoin');
    // await desktopPage.goto('https://efin.finance/th/asset/content/gold'); 
    

    // =========================
    // 3️⃣ environment in uat
    // =========================
    
    // await desktopPage.goto('https://dc2hw.efin.finance/th/search/latest?keyword=%E0%B8%97%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B3')
    // หุ้น
    // await desktopPage.click('xpath=//*[@id="news_content_grid_8000118"]'); //*[@id="news_content_grid_8000118"]/article/div
    //  // คริปโต
    // await desktopPage.click('xpath=//*[@id="news_content_grid_78300"]');
    //  // สินทรัพย์
    // await desktopPage.click('xpath=//*[@id="news_content_grid_78276"]'); //*[@id="news_content_grid_78276"]/article



    // =========================
    // 3️⃣ environment in pd 
    // =========================

    // await desktopPage.goto('https://www.efin.finance/th/search/latest?keyword=%E0%B8%97%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B3')
    
    // await desktopPage.click('xpath=//*[@id="news_content_grid_7515623"]'); 
    // คริปโต
    // await desktopPage.click('xpath=//*[@id="news_content_grid_9637"]');   
    // สินทรัพย์
    // await desktopPage.click('xpath=//*[@id="news_content_grid_7498026"]'); 

    await desktopPage.evaluate(email => {
      document.title = `DESKTOP | ${email}`;
    }, user.email);

    console.log('✅ Desktop login success');

    // =========================
    // 6️⃣ Mobile login
    // =========================
    console.log('📱 Mobile login');

    // await mobilePage.goto('https://dc2hw.efin.finance/th/login');
    await mobilePage.goto('https://efin.finance/th/login');
    // await mobilePage.goto('https://efin.finance/th/login');
    await mobilePage.fill('#emailOrPhone', user.email);
    await mobilePage.click('button[type="submit"]');
    await mobilePage.fill('#password', user.password);

    await Promise.all([
      mobilePage.waitForSelector('h1:has-text("ลงชื่อเข้าใช้เรียบร้อย")'),
      mobilePage.click('#login_submit_btn'),
    ]);

    await mobilePage.evaluate(email => {
      document.title = `MOBILE | ${email}`;
    }, user.email);

    console.log('✅ Mobile login success');
      
      // =========================
      // 6️⃣ macOS Safari login
      // =========================
      console.log('🖥️ macOS Safari login');

      // await macPage.goto('https://dc2hw.efin.finance/th/login');
      await macPage.goto('https://efin.finance/th/login');

      await macPage.fill('#emailOrPhone', user.email);
      await macPage.click('button[type="submit"]');
      await macPage.fill('#password', user.password);

      await Promise.all([
        macPage.waitForSelector('h1:has-text("ลงชื่อเข้าใช้เรียบร้อย")'),
        macPage.click('#login_submit_btn'),
      ]);

      await macPage.evaluate(email => {
        document.title = `MACOS | ${email}`;
      }, user.email);

      console.log('✅ macOS login success');



    // =========================
    // 7️⃣ 🔥 Takeover test
    // =========================
    console.log('🔁 Back to Desktop for takeover test');
    await desktopPage.bringToFront();

    await desktopPage.waitForTimeout(3000);

    // =========================
    // 8️⃣ รอแบบปลอดภัย (แทนการค้างตลอด)
    // =========================
    // ❌ เดิม: await new Promise(() => {});
    // ✅ ADD: รอสูงสุด 3 นาที
    console.log('⏳ Waiting for observation (max 3 minutes)');
    await desktopPage.waitForTimeout(3 * 60 * 1000);

    // (ยัง intentionally ไม่ปิด context ตามเจตนาคุณ)
  }

})();