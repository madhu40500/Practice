import type { PlaywrightTestConfig } from '@playwright/test';


const config: PlaywrightTestConfig = {
  testMatch: ["tests/basic.test.ts"],
  use:{
    headless:false
  },
  reporter: [ [`html`, { outputFolder: 'html-report', open:'on-failure' }]],

  
};

export default config;
