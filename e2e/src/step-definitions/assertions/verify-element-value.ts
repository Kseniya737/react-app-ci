import { Then } from '@cucumber/cucumber'
import { ElementKey } from '../../env/global';
import { ScenarioWorld } from '../setup/world';
import {getElementLocator} from "../../support/web-element-helper";
import { waitFor } from '../../support/wait-for-behavior';
import {expect} from "@playwright/test";

Then(
    /^the "([^"]*)" should contain the text "(.*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, expectedElementText: string) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`the ${elementKey} should contain the text ${expectedElementText}`)

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig)

        await waitFor(async () => {
            const elementText = await page.textContent(elementIdentifier)
            return elementText?.includes(expectedElementText);
        });

    }
)


Then(
    /^the "([^"]*)" should equal the text "(.*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, expectedElementText: string){
        const {
            screen: { page },
            globalConfig,
        } = this
        console.log(`the ${elementKey} should equal the text ${expectedElementText}`)
        const elementIdentifier = getElementLocator(page, elementKey, globalConfig)

        if(!elementIdentifier){
            throw Error(`element ${elementKey} not found`)
        }

        await waitFor(async()=> {
            const elementText = await page.textContent(elementIdentifier)
            return (elementText === expectedElementText)
        })
    }
)