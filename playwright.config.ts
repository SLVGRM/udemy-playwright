import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 10000,
    retries: 2,
    use: {
        headless: false, 
        viewport: {width: 1280, height: 720},
        actionTimeout: 15000,
        ignoreHTTPSErrors: true,
        video: 'off',
        screenshot: 'off'
    }
}

export default config