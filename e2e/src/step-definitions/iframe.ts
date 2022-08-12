import { Then } from '@cucumber/cucumber';
import { waitFor } from "../support/wait-for-behavior";
import { getElementLocator } from "../support/web-element-helper";
import { ScenarioWorld } from "./setup/world";
import { ElementKey } from "../env/global";
import { getIframeElement, inputValueOnIframe } from "../support/html-behavior";

Then(
    /^I fill in the "([^"]*)" input on the "([^"]*)" iframe with "([^"]*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, iframeName: string, inputValue: string){
        const {
            screen: { page },
            globalConfig,
        } = this

        console.log(`I fill in the ${elementKey} input on the ${iframeName} with ${inputValue}`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);
        const iFrameIdentifier = getElementLocator(page, iframeName, globalConfig);

        await waitFor(async() => {
            const elementIframe = await getIframeElement(page, iFrameIdentifier);

            const result = await page.waitForSelector(iFrameIdentifier, {
                state: 'visible'
            })
            if (result){
                if(elementIframe){
                    await inputValueOnIframe(elementIframe, elementIdentifier, inputValue)
                }
            }
            return result;
        })
    }
)