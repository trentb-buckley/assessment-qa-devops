
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test("Draw button works", async () => {
    const drawBtn = await driver.findElement(By.id('draw')).click()
    await driver.sleep(3000)
})
test("Add to duo", async () => {
    const drawBtn = await driver.findElement(By.id('draw')).click()
    await driver.sleep(3000)
    const addToDuoBtn = await driver.findElement(By.id('add-to-duo')).click()
    await driver.sleep(3000)
})
// test("duel button", async () => {
//     test("Add to duo", async () => {
//     const drawBtn = await driver.findElement(By.id('draw')).click()
//     await driver.sleep(3000)
//     const addToDuoBtn = await driver.findElement(By.id('add-to-duo')).click()
//     const addToDuoBtn2 = await driver.findElement(By.id('add-to-duo')).click()
//     await driver.sleep(3000)
// })