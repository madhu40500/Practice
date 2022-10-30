import type { PlaywrightTestConfig } from '@playwright/test';


const config: PlaywrightTestConfig = {
  testMatch: ["tests/basic.test.ts"],
  use:{
    headless:false,
    screenshot: 'only-on-failure',
    video:'off'
  },

  reporter: [ [`html`, { outputFolder: 'html-report', open:'on-failure' }]],

  
};

export default config;
