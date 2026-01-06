const { chromium, devices } = require('@playwright/test');

  // =========================
  // ใส่ email pass ที่อยากใช้ทดสอบในช่องนี้
  // =========================

  // =========================
  // pro
  // =========================
  // const users = [
  //   { email: 'jenaba2177@cexch.com', password: 'Qc_test1234' },
  //   { email: 'vikehok336@bialode.com', password: 'Qc_test1234' },
  //   { email: 'norosa5869@cexch.com', password: 'Qc_test1234' },
  //   { email: 'tifijob972@besenica.com', password: 'Test_1234' },
  //   { email: 'nattawadeesakulchit@gmail.com', password: 'Test_1234'},
  //   { email: 'dosalih111@cexch.com', password: 'Qc_test1234' },
  //   { email: 'noyeso5233@cexch.com', password: 'Qc_test1234' },
  //   { email: 'xegitec858@bialode.com', password: 'Qc_test1234' },
  //   { email: 'kowep39956@cexch.com', password: 'Qc_test1234' },
  //   { email: 'navewag835@cexch.com', password: 'Qc_test1234' },
  //   { email: 'rixol96356@cexch.com', password: 'Qc_test1234' },
  // ];

  // =========================
  // uat
  // =========================
  const users = [
    { email: 'bedevi7165@discounp.com', password: 'Qc_test1234' },
    { email: 'bedevi7165@discounp.com', password: 'Qc_test1234' },
    { email: 'bedevi7165@discounp.com', password: 'Qc_test1234' },
    { email: 'bedevi7165@discounp.com', password: 'Qc_test1234' },
    { email: 'bedevi7165@discounp.com', password: 'Qc_test1234' },
    { email: 'bedevi7165@discounp.com', password: 'Qc_test1234' },
    { email: 'bedevi7165@discounp.com', password: 'Qc_test1234' },
    { email: 'bedevi7165@discounp.com', password: 'Qc_test1234' },
    { email: 'bedevi7165@discounp.com', password: 'Qc_test1234' },
    { email: 'bedevi7165@discounp.com', password: 'Qc_test1234' },
    { email: 'bedevi7165@discounp.com', password: 'Qc_test1234' },
    { email: 'bedevi7165@discounp.com', password: 'Qc_test1234' },
    { email: 'bedevi7165@discounp.com', password: 'Qc_test1234' },
    { email: 'bedevi7165@discounp.com', password: 'Qc_test1234' },
    



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

  ];

(async () => {


  // =========================
  // เปิด browser เต็มจอ
  // =========================
  const browser = await chromium.launch({
    headless: false,
    args: ['--start-maximized'],
  });



  // =========================
  // Desktop context
  // =========================
  const desktopContext = await browser.newContext({
    viewport: null, // ใช้ขนาดจอจริง
  });



  // =========================
  // Mobile context (emulation)
  // =========================
  const mobileDevice = devices['iPhone 14'];
  const mobileContext = await browser.newContext({
    ...mobileDevice,
  });


  const macDevice = devices['Desktop Safari'];
  const macContext = await browser.newContext({
    ...macDevice,
  });  

  // =========================
  // เปิด Desktop tabs
  // =========================
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const page = await desktopContext.newPage();

    console.log(`🖥️ Desktop tab ${i + 1}: ${user.email}`);

    await page.goto('https://dc2hw.efin.finance/th/login');//ถ้าอยากเทสเว็บอื่นให้เปลี่ยน url ตรงนี้

     await page.fill('#emailOrPhone', user.email);
      await page.click('button[type="submit"]'); 
    await page.fill('#password', user.password);
   
    await page.evaluate((email) => {
      document.title = `DESKTOP | ${email}`; 
    }, user.email);

  }



  // =========================
  // เปิด Mobile tabs
  // =========================
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const page = await mobileContext.newPage();

    console.log(`📱 Mobile tab ${i + 1}: ${user.email}`);

    await page.goto('https://dc2hw.efin.finance/th/login');//ถ้าอยากเทสเว็บอื่นให้เปลี่ยน url ตรงนี้

    await page.fill('#emailOrPhone', user.email);
    await page.click('button[type="submit"]'); 
    await page.fill('#password', user.password);

    await page.evaluate((email) => {
      document.title = `MOBILE | ${email}`;
    }, user.email);

    
  }


  // =========================
// เปิด macOS (Safari) tabs
// =========================
// for (let i = 0; i < users.length; i++) {
//   const user = users[i];
//   const page = await macContext.newPage();

//   console.log(`🍎 macOS tab ${i + 1}: ${user.email}`);

//   await page.goto('https://dc2hw.efin.finance/th/login');

//   await page.fill('#emailOrPhone', user.email);
//   await page.click('button[type="submit"]');
//   await page.fill('#password', user.password);

//   await page.evaluate((email) => {
//     document.title = `MAC | ${email}`;
//   }, user.email);
// }


})();
