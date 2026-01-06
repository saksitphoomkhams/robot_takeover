const { chromium, devices } = require('@playwright/test');

const users = [
  // { email: 'bedevi7165@discounp.com', password: 'Qc_test1234' },
  // { email: 'peviyoc374@discounp.com', password: 'Qc_test1234' },

    // { email: 'woxokow251@discounp.com', password: 'Qc_test1234' },
   

    // { email: 'febem77896@discounp.com', password: 'Qc_test1234' },
    // { email: 'nosop18524@discounp.com', password: 'Qc_test1234' },
   
    { email: 'kites59327@crsay.com', password: 'Qc_test1234' },

    // { email: 'feyid80432@discounp.com', password: 'Qc_test1234' },

    

  // { email: 'mofil58552@crsay.com', password: 'Qc_test1234' },

     
    // { email: 'moxego1735@discounp.com', password: 'Qc_test1234' },
 
  
    // { email: 'civer17429@crsay.com', password: 'Qc_test1234' },
                                   

    // { email: 'vojoti9516@discounp.com', password: 'Qc_test1234' },
    // { email: 'raxami3071@crsay.com', password: 'Qc_test1234' },
  

    // { email: 'dikisaw550@discounp.com', password: 'Qc_test1234' },
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
    const macPage     = await macContext.newPage();

    // =========================
    // 5️⃣ Desktop login
    // =========================
    console.log('🖥️ Desktop login');

    await desktopPage.goto('https://dc2hw.efin.finance/th/login');
    await desktopPage.fill('#emailOrPhone', user.email);
    await desktopPage.click('button[type="submit"]');
    await desktopPage.fill('#password', user.password);

    await Promise.all([
      desktopPage.waitForSelector('h1:has-text("ลงชื่อเข้าใช้เรียบร้อย")'),
      desktopPage.click('#login_submit_btn'),
    ]);

    await desktopPage.click('xpath=/html/body/div/div/main/div/div/div/div[4]/button[1]');
    // await desktopPage.goto('https://dc2hw.efin.finance/th/stock/news/markets');
    await desktopPage.goto('https://dc2hw.efin.finance/th/search/latest?keyword=%E0%B8%97%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B3')
    // await desktopPage.click('xpath=//*[@id="news_content_grid_8000090"]');
    // await desktopPage.click('xpath=//*[@id="news_content_grid_8000064"]');




    
    await desktopPage.evaluate(email => {
      document.title = `DESKTOP | ${email}`;
    }, user.email);

    console.log('✅ Desktop login success');

    // =========================
    // 6️⃣ Mobile login
    // =========================
    console.log('📱 Mobile login');

    await mobilePage.goto('https://dc2hw.efin.finance/th/login');
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

    await macPage.goto('https://dc2hw.efin.finance/th/login');

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