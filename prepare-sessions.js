const { chromium } = require('@playwright/test');

const users = [
  { email: 'bedevi7165@discounp.com', password: 'Qc_test1234' },
  { email: 'peviyoc374@discounp.com', password: 'Qc_test1234' },
  { email: 'woxokow251@discounp.com', password: 'Qc_test1234' },
  { email: 'febem77896@discounp.com', password: 'Qc_test1234' },
  { email: 'nosop18524@discounp.com', password: 'Qc_test1234' },
  { email: 'kites59327@crsay.com', password: 'Qc_test1234' },
  { email: 'feyid80432@discounp.com', password: 'Qc_test1234' },
  { email: 'mofil58552@crsay.com', password: 'Qc_test1234' },
  { email: 'moxego1735@discounp.com', password: 'Qc_test1234' },
  { email: 'civer17429@crsay.com', password: 'Qc_test1234' },
  { email: 'vojoti9516@discounp.com', password: 'Qc_test1234' },
  { email: 'raxami3071@crsay.com', password: 'Qc_test1234' },
  { email: 'dikisaw550@discounp.com', password: 'Qc_test1234' },
];

(async () => {
  // ✅ เปิด browser เต็มจอ
  const browser = await chromium.launch({
    headless: false,
    args: ['--start-maximized'],
  });

  // ✅ context เดียว = tab ด้านข้าง
  const context = await browser.newContext({
    viewport: null, // ⭐ ใช้ขนาดจอจริง
  });

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const page = await context.newPage();

    console.log(`📝 เตรียม tab ${i + 1}: ${user.email}`);

    await page.goto('https://dc2hw.efin.finance/th/login');

    await page.fill('#emailOrPhone', user.email);
    await page.click('button[type="submit"]'); // ถ้าหน้า password แยก
    await page.fill('#password', user.password);

    // ❌ ไม่กด login — คุณกดเอง
  }

  console.log('✅ เปิดครบ 13 tab และกรอกข้อมูลเรียบร้อย');
  console.log('👉 คุณกด Login เองทีละ tab ได้เลย');
})();
